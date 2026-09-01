# AttendanceAI — Full System Architecture
## Expanding from a Single-Professor Tool to a Multi-Tenant SaaS Platform

---

## 1. What We Have Now (Phase 0)

| Layer | Technology | Notes |
|---|---|---|
| Frontend | Vanilla HTML + Firebase JS SDK | Static files, no build step |
| Auth | Firebase Auth (Google) | Hard-coded single professor email |
| Database | Cloud Firestore | `sessions`, `session_history`, `logs` collections |
| Hosting | GitHub Pages (or any static host) | No server required |
| QR | qrcodejs library | Rotates every 2 min |
| Geo check | ipapi.co | Campus vs. off-campus detection |
| Export | Client-side CSV generation | Flat log dump or new gradebook format |

**Strengths:** Zero server cost, extremely simple deployment, no DevOps burden.  
**Limitations to fix for multi-user:** single professor email is hardcoded, no per-professor data isolation, no billing, no self-service onboarding.

---

## 2. Expansion Path (Phased Approach)

### Phase 1 — Multi-Professor (Same Firebase Project)

**Goal:** 5–20 professors, invitation-based, zero extra infrastructure cost.

**Changes required:**

1. **Remove the `PROFESSOR_EMAIL` constant.** Replace with a Firestore `professors` collection where each doc is `{ email, name, plan, createdAt }`.
2. **Data isolation:** Prefix all Firestore paths with the professor's UID.
   - `professors/{uid}/sessions/current`
   - `professors/{uid}/session_history/{sessionId}`
   - `professors/{uid}/logs/{logId}`
   - `professors/{uid}/classes` (move `classes.js` config to Firestore per professor)
3. **Firestore Security Rules:** Each professor can only read/write under their own UID subtree. Students write to `professors/{uid}/logs` only when a valid session token is present.
4. **Admin invitation flow:** A super-admin (you) adds a professor email to the `professors` collection; next time they visit and sign in with Google they see the dashboard.
5. **Student-facing URL:** Change `?classId=…` to include the professor UID so the student page knows which Firestore subtree to look up: `index.html?uid={profUid}&t={token}&s={sessId}`.

**Estimated effort:** 2–3 days. No new infrastructure needed. Firebase free tier handles ~50 professors easily.

---

### Phase 2 — Self-Service Signup + Class Management UI

**Goal:** A professor can sign up, create their own classes from the dashboard, and invite colleagues.

**New features:**

- **Signup flow:** Professor visits the site, signs in with Google → if email not in `professors`, show a "Request access" form or auto-provision (depending on plan).
- **Class CRUD UI:** Replace `classes.js` static config with a Firestore-backed class editor in the dashboard (add class name, schedule, student count, semester, school).
- **Class archive:** A "Move to archived" button per class instead of editing a JS file.
- **Invite link generation:** Professor can generate a shareable student URL or QR code for each class without opening a live session.

**Stack additions:** None — still pure Firebase. Possibly add Firebase App Hosting or Vercel for a cleaner domain.

---

### Phase 3 — Standalone SaaS Website

**Goal:** Public-facing marketing site + professor dashboard at a branded domain (e.g., `attendai.kr` or `qrattend.app`).

**Architecture:**

```
┌─────────────────────────────────────────────────────────┐
│  Next.js (or Astro) frontend  ←→  Firebase Auth         │
│                                                          │
│  Public pages: /, /pricing, /features, /login           │
│  Dashboard: /dashboard  (professor-only, protected)      │
│  Student page: /attend/:classToken  (public, token-gated)│
└──────────────┬──────────────────────────────────────────┘
               │
       Firebase Firestore (multi-tenant, UID-namespaced)
               │
       Firebase Functions (for billing webhooks, email)
               │
       Stripe (subscriptions)
```

**Hosting options:**

| Option | Cost | Pros | Cons |
|---|---|---|---|
| Firebase App Hosting | ~$0–20/mo | Same ecosystem, easy deploy | Newer product, limited regions |
| Vercel | ~$0–20/mo | Excellent Next.js support | Separate from Firebase |
| Cloudflare Pages | ~$0/mo | Global CDN, cheap | Less mature |
| AWS Amplify | ~$10–30/mo | Full-featured | Complexity |

**Recommendation:** Vercel + Firebase is the fastest path. Vercel handles the Next.js frontend; Firebase handles auth, database, and serverless functions.

---

## 3. Billing & Pricing Model

**Options:**

| Model | Description | Recommendation |
|---|---|---|
| Per-semester flat fee | ₩30,000–50,000 ($25–40) per professor per semester | Best for Korean academic market |
| Monthly subscription | ₩10,000–15,000/month | Standard SaaS, easy to cancel |
| Freemium | Free up to 1 class / 30 students; paid for more | Reduces signup friction |
| Annual | 2 months free if paying yearly | Reduces churn |

**Suggested pricing for Korean university professors:**
- Free tier: 1 class, 1 semester, CSV export, up to 50 students
- Pro tier: ₩39,000/semester (~$30) — unlimited classes, all universities, gradebook export, feedback analytics
- Team tier: ₩99,000/semester — department-level, shared classes, admin view

**Payment:** Stripe supports KRW. Kakao Pay and Toss Pay are also popular in Korea — consider adding them via a payment gateway like PortOne (formerly I'mport), which supports Kakao/Toss/Stripe under one API.

---

## 4. Data Model (Multi-Tenant Firestore)

```
professors/{uid}
  ├── profile: { email, name, institution, plan, planExpires, createdAt }
  ├── classes/{classId}
  │     { name, nameKo, school, semester, students, schedule[], archived }
  ├── sessions/current
  │     { active, sessionId, token, classId, … }
  ├── session_history/{sessionId}
  │     { classId, startedAt, endedAt, scans, submissions, … }
  └── logs/{logId}
        { sessionId, classId, studentId, studentName, submitted, timestamp, … }

subscriptions/{uid}
  { plan, status, stripeCustomerId, currentPeriodEnd }
```

---

## 5. Feature Roadmap

### Core (already built)
- [x] QR-based attendance with rotating token
- [x] Session start/stop
- [x] Off-campus IP detection
- [x] Access log with filters
- [x] Session history
- [x] Student feedback
- [x] Gradebook CSV export (per class, weekly columns, . / x / /)

### Near-term (Phase 1–2)
- [ ] Multi-professor support
- [ ] Class CRUD from dashboard (no more editing JS files)
- [ ] Per-class student roster (pre-registered IDs for stricter validation)
- [ ] Email report at end of semester (auto-send gradebook CSV)
- [ ] Bulk export all classes for a semester
- [ ] Session notes / class memo field

### Medium-term (Phase 3)
- [ ] Public marketing site + signup
- [ ] Stripe billing integration
- [ ] Mobile-optimized professor dashboard (PWA)
- [ ] Analytics: attendance trends, at-risk students (< 70% attendance)
- [ ] Automated national holiday detection (Korean public holidays API)
- [ ] LMS integration export (Canvas, Blackboard, LMS Korea)

### Long-term / Differentiators
- [ ] **AI-powered fraud detection:** Use submission timing patterns and IP clustering to flag coordinated cheating (students submitting for absent classmates).
- [ ] **Attendance prediction:** ML model predicting which students are likely to drop below the attendance threshold before it happens.
- [ ] **Multi-modal check-in:** Add face recognition or BLE beacon as alternative to QR (for larger lecture halls).
- [ ] **Department dashboards:** Aggregate attendance across a department with anonymized benchmarking.
- [ ] **API for integration:** Allow universities to pull attendance data into their own systems.

---

## 6. Legal & Compliance (Korea)

- **개인정보보호법 (PIPA):** Student IDs and names are personal data under Korean law. You must:
  - Disclose what data is collected and why (privacy policy)
  - Get consent (the attendance submission form counts as consent if disclosure is present)
  - Limit retention — define a data deletion schedule (e.g., delete logs 2 years after semester ends)
  - If breach occurs, notify within 24 hours
- **FERPA equivalent:** Korean universities are governed by 고등교육법. Attendance records are academic records — professors may collect them, but sharing beyond the institution requires student consent.
- **Hosting:** If data is stored in Firebase's `asia-northeast3` (Seoul) region, data residency is satisfied. Avoid US-only regions for Korean student data.

---

## 7. Competitive Landscape

| Tool | Pros | Cons vs. This System |
|---|---|---|
| Google Forms | Free, familiar | Manual processing, no live view |
| Classum / CLASSUM | Korean-made, full LMS | Expensive, complex, no QR rotation |
| Zoom attendance | Built-in for online | Online only, no physical classroom |
| Smart attendance apps (Korean) | NFC/beacon | Requires hardware investment |
| **This system** | QR + real-time + gradebook export | Currently single-professor |

**Differentiation:** The rotating-token QR (anti-sharing), 15-minute presence window, Korean university school colors/names built-in, and the `.`/`x`/`/` gradebook format matching existing Korean professor workflows are genuine differentiators that most generic tools lack.

---

## 8. Go-to-Market (Korean University Context)

1. **Word of mouth** — Korean university professors share tools via KakaoTalk group chats (학과 단톡방). One happy professor in a department can spread it to 5–10 colleagues.
2. **Academic network** — Present at 한국컴퓨터교육학회 (KCSE) or similar conferences.
3. **Pilot program** — Offer a free semester to 3–5 professors at different universities in exchange for testimonials and feedback.
4. **Landing page** — Korean-language first, English secondary. Show the 30-second workflow: open session → QR on screen → students scan → download CSV.
5. **Pricing anchor** — One semester of manual grade processing is worth at least 2–3 hours of a professor's time. At ₩30,000/semester, the ROI argument is trivial.

---

## 9. Technical Risks & Mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| ipapi.co rate limits or downtime | Medium | Cache IP results per session; fail open (assume on-campus) |
| Firebase free tier limits (50K reads/day) | Low for current scale | Monitor usage; upgrade to Blaze plan (~$25/mo for typical use) |
| Student VPN bypasses campus detection | Medium | Flag but don't block; log VPN indicators separately |
| QR screenshot sharing | Low (token rotates every 2 min) | Current rotation already handles this |
| Firestore cold-start on first query | Low | Warm up with a dummy read on page load |
| GDPR/PIPA compliance gap | Medium | Add privacy policy + retention schedule before public launch |

---

## 10. Estimated MVP Launch Timeline

| Milestone | Effort |
|---|---|
| Phase 1: Multi-professor (same Firebase) | 2–3 days |
| Phase 2: Self-service class CRUD + signup | 1 week |
| Phase 3: Marketing site + Stripe billing | 2–3 weeks |
| Phase 3: Korean payment (PortOne) | 3–5 days extra |
| Beta with 5 real professors | 1 semester |
| Public launch | After beta |

The biggest non-code work is the **privacy policy**, **terms of service**, and **bank account setup for business registration (사업자등록)** — required before you can legally charge Korean users.
