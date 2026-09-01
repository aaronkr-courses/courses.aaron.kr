# Research Paper Feasibility Notes
## QR-Based Smart Attendance System for University Classrooms

---

## 1. Is This "Physical AI"? (Short answer: No — but it's publishable elsewhere)

**Physical AI (물리 AI)** is a research area concerned with AI systems that perceive and act in the physical world — robotics, autonomous vehicles, embodied agents, human-robot interaction (HRI), and sensor fusion. Your system is a **web-based attendance management tool** — it is software-only, uses no physical sensors beyond a smartphone camera reading a QR code, and involves no embodied AI agent.

**Bottom line:** This work does not fit Physical AI journals or conferences (e.g., ICRA, IROS, IEEE RA-L).

---

## 2. Where It DOES Fit

### Category: Educational Technology (EdTech) / Smart Classroom Systems

This is the correct home for this research. The system addresses a real, measurable pedagogical problem — manual attendance takes 5–10 minutes per class, is error-prone, and gives no real-time analytics. Your system solves this with:

- Rotating QR token (fraud prevention)
- Geo-location presence detection (campus vs. off-campus)
- Automated late/absent classification (15-min window rule)
- Structured export for grading (`.` / `x` / `/` gradebook format)
- Multi-class, multi-university deployment

### Publishable Research Questions

Pick one or two to build the paper around:

1. **"Does automated attendance tracking improve student attendance rates compared to manual systems?"** — This requires a controlled study (one class with system, one without; or pre/post comparison).

2. **"What is the optimal time window for distinguishing 'present' from 'late' in a QR check-in system?"** — Analyze your real data. Is 15 minutes the right threshold? What does the submission timestamp distribution look like?

3. **"How effective is rotating-token QR at preventing proxy attendance fraud in Korean university settings?"** — Survey students + analyze off-campus IP rates and duplicate-submission patterns.

4. **"Design and evaluation of a zero-infrastructure attendance system for multi-campus instructors"** — A systems/design paper focusing on the architecture, scalability, and deployment experience.

---

## 3. Target Journals (SCIE or SCOPUS-indexed)

| Journal | Index | Fit | Impact Factor |
|---|---|---|---|
| **Computers & Education** (Elsevier) | SCIE | ★★★★★ | ~8.9 |
| **IEEE Transactions on Learning Technologies (TLT)** | SCIE | ★★★★☆ | ~3.7 |
| **Education and Information Technologies** (Springer) | SCIE | ★★★★☆ | ~5.0 |
| **Journal of Educational Technology & Society** | SCOPUS | ★★★★☆ | ~3.5 |
| **Interactive Learning Environments** (Taylor & Francis) | SCOPUS | ★★★☆☆ | ~4.3 |
| **Smart Learning Environments** (Springer, open access) | SCOPUS | ★★★☆☆ | ~4.1 |
| **Applied Sciences** (MDPI, open access) | SCIE | ★★★☆☆ | ~2.7 |

**Fastest path to SCIE:** *Applied Sciences* has a relatively short review cycle (~30–60 days) and accepts systems/engineering papers with a practical focus. *Computers & Education* has the highest prestige but is selective and slow (6–12 months).

---

## 4. What You Need to Prepare

### Minimum for Submission

- [ ] **System description** (architecture, implementation details) — you already have this
- [ ] **A real dataset** from your classes — at minimum one full semester of attendance records (already being collected)
- [ ] **A user study or survey** — even a short post-semester survey of students (5–10 questions) and your own experience as the professor
- [ ] **Comparative baseline** — describe what the previous process was (manual roll call? Google Forms?) and what changed
- [ ] **Statistical analysis** — attendance rates, submission timing distributions, off-campus rates, feedback sentiment

### Strengthening the Paper

- [ ] **Multiple classes / universities** — you have 8 classes across 5 universities; that's a good deployment scale for a systems paper
- [ ] **A/B comparison** — if you have historical attendance data from a previous semester (pre-system), compare rates
- [ ] **Student survey** — perceived fairness, ease of use, anxiety about the 15-min window
- [ ] **Fraud analysis** — what percentage of submissions came from off-campus IPs? Any duplicate student IDs?
- [ ] **Ethics approval** — Korean universities require IRB (생명윤리위원회) approval for human subjects research; the survey needs this

### Timeline Suggestion

| Task | When |
|---|---|
| Collect full semester data | End of 2026-2 semester (Dec 2026) |
| Design + run student survey | Last week of semester |
| Write system description section | Now (while building) |
| Data analysis | January 2027 |
| Write + submit paper | February–March 2027 |

---

## 5. What to Invite a Co-Author to Help With

Since your co-author will be paying the APC (Article Processing Charge), they should have genuine intellectual contribution. Good roles to offer:

### Option A: Educational Research Expert (교육학 전공)

**What they contribute:**
- Study design for the student survey (validated instruments, IRB protocol)
- Statistical analysis (SPSS/R): attendance rate comparison, regression, reliability
- Literature review in educational measurement and attendance research
- Discussion of pedagogical implications

**Why this works:** They provide the social-science rigor your engineering paper needs to land in *Computers & Education* or *IEEE TLT*. You provide the system; they provide the evaluation methodology.

---

### Option B: HCI / UX Researcher

**What they contribute:**
- Usability study of the student check-in interface (SUS score, think-aloud sessions)
- Designing and validating a technology acceptance questionnaire (TAM framework)
- Analysis of student interaction patterns with the QR interface

**Why this works:** Reframes the paper as a usability + deployment study, which fits HCI venues too.

---

### Option C: Data Science / ML Researcher

**What they contribute:**
- Predictive model: can early-semester attendance patterns predict final course outcomes?
- Anomaly detection: flagging likely proxy submissions using ML on timing/IP patterns
- Visualization and analysis of the attendance dataset

**Why this works:** Adds a computational intelligence angle that could push the paper toward AI-in-education venues or even a Physical AI adjacent conference (AI for smart campus systems).

---

### Option D: Another Professor at a Different Institution

**What they contribute:**
- Deploy the system in their own classes (multi-institutional validation)
- Provide a second dataset from different student population
- Independent perspective on usability and deployment

**Why this works:** Multi-site deployment studies are much stronger than single-institution ones.

---

## 6. APC Costs to Budget For

| Journal | APC |
|---|---|
| Computers & Education (Elsevier open access) | ~$3,500 USD |
| IEEE TLT (IEEE open access) | ~$2,195 USD |
| Applied Sciences (MDPI) | ~$2,500 USD |
| Smart Learning Environments (Springer) | ~$2,190 USD |
| Education and Information Technologies (Springer) | ~$3,190 USD |

If the co-author's institution has a Springer/Elsevier/IEEE Read & Publish agreement (common at Korean national universities), the APC may be fully covered at no cost. Worth checking before choosing a journal.

---

## 7. Physical AI Connection (If You Really Want One)

If your co-author works in Physical AI and needs the paper to have that framing, here is a legitimate angle:

**"Smart Classroom as a Cyber-Physical System"**

Frame the classroom as a CPS (Cyber-Physical System) where:
- The **physical layer** = students in the room, the instructor, the display showing the QR
- The **cyber layer** = Firebase, the rotating token, the geo-IP detection, the gradebook export
- The **sensing** = smartphone cameras reading QR codes as the physical-to-digital bridge
- The **AI/analytics layer** = fraud detection, attendance prediction, pattern analysis

This framing is a stretch but is used in the smart-campus and smart-building literature. A journal like *IEEE Internet of Things Journal* or *Future Generation Computer Systems* might accept it under "IoT-enabled smart education" framing.

**Honest assessment:** This is a weaker fit than straightforward EdTech framing. Use it only if the co-author specifically needs Physical AI for their grant or publication requirements.

---

## 8. Quick Decision Matrix

| Scenario | Recommended journal | Co-author role |
|---|---|---|
| Strongest paper, most citations | Computers & Education | Educational researcher (survey design + stats) |
| Fastest publication | Applied Sciences (MDPI) | Anyone willing to help write and pay APC |
| Physical AI connection needed | IEEE IoT Journal / FGCS | ML/data-science researcher |
| Korean national conference first | 한국컴퓨터교육학회 (KCSE) | Optional; good for Korean academic credit |
| Open access, no APC cost | Check your institution's Read & Publish agreements | Any option above |
