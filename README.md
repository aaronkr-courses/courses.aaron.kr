# Aaron Snowberger — Courses Site

A **Jekyll site** for Prof. Aaron Snowberger's teaching portfolio across five Korean universities. Hosted on GitHub Pages at [courses.aaron.kr](https://courses.aaron.kr).

## Quick Start

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

**First run:** Copy images from the existing Jekyll site:
```bash
cp -r ../aaronkr-courses.github.io/assets/img/ ./assets/img/
```

## Deploy to GitHub Pages

1. Push to the `main` branch of `aaronkr-courses/aaronkr-courses.github.io`
2. In repo Settings → Pages → Source: **Deploy from branch**, branch `main`, folder `/`
3. Set custom domain: `courses.aaron.kr` (GitHub adds a `CNAME` file automatically)
4. DNS: add a `CNAME` record pointing `courses` → `aaronkr-courses.github.io`

**Auto-generated on every build** (no action needed):
- `sitemap.xml` — via `jekyll-sitemap` plugin
- `robots.txt` — from `robots.txt` source file (Liquid template, uses `site.url`)
- `feed.xml` — via `jekyll-feed` plugin

---

## New Semester Checklist

Everything to update when a new semester starts (e.g. 2027-1):

### 1 · `_config.yml`
- [ ] Add the new semester to `course_categories` (e.g. `2027-1`)

### 1b · `_data/universities.yml` (only if a logo URL changed)
- [ ] Update the `logo:` URL for any university that changed its branding

### 2 · Course files — `_courses/YYYY/`
- [ ] Create `_courses/2027/` directory
- [ ] Create one `.md` per course (copy from previous semester, update front matter)
- [ ] Set `now: Yes` on every **active** course; remove/omit from completed ones
- [ ] Set correct `category: 2027-1`
- [ ] Set `uni: <abbr>` (e.g. `uni: ut`) — drives the logo, favicon, and watermark automatically via `_data/universities.yml`
- [ ] Update `data_file:` to match the new data file name (e.g. `2027/ut_iot_lectures`)
- [ ] Update `information:` (section codes, times, locations, KakaoTalk links)
- [ ] Update `grading:` if percentages change
- [ ] Update textbooks (`Main-Text:` / `Supplementary:`)

### 3 · Lecture data files — `_data/YYYY/`
- [ ] Create `_data/2027/` directory
- [ ] Create one `_lectures.yml` per course (copy last semester's, update dates/weeks)
- [ ] Update all `date:` values (M/D format)
- [ ] Update `week:` numbers
- [ ] Add `hw:` / `hw2:` GitHub Classroom assignment links once created
- [ ] Add `slides:` Google Slides URLs as you create them
- [ ] Mark holidays with `skip: true` and/or a title containing "No Class"/"휴강"
- [ ] Test/exam rows are detected from the **title text itself** — no boolean field. A row is styled as an exam row if its title contains the *whole word* `Test`, `Exam`, `Midterm`, or `Final` (English — checked as whole words, so "Example" won't false-trigger), or the substring `시험`/`고사` (Korean). See "Schedule Data Format" below.

### 4 · Announcements — `_data/announcements.yml`
- [ ] Add a "New semester begins" announcement
- [ ] Remove or comment out outdated announcements from last semester

Each entry supports these fields:
```yaml
- date: 2027-03-03        # YYYY-MM-DD (displayed as "Mar 3")
  type: new               # dot color: new | teal | info | warn | error
  title: "English title"
  title_ko: "한국어 제목"  # optional
  body: "English body"    # optional
  body_ko: "한국어 본문"   # optional
  url: "/archive/"        # optional link, defaults to #
  badge: "Spring 2027"    # optional badge label
  badge_type: admin       # optional: course | lab | admin (default: admin)
```
The section is hidden automatically when the file is empty.

### 5 · Office Hours / Today Pill — `_data/office_hours.yml`
- [ ] **Only if your weekday↔university assignment changed** (which university you teach on which day), update the `schedule:` list in `_data/office_hours.yml`. This one file drives the Office Hours week-grid, the Today Pill (homepage + office-hours page), and the homepage's university-group day labels — do not edit those pages directly.
- [ ] If a campus/room name changed, update `campus`/`campus_en` on that university's entry in `_data/universities.yml` (not `office_hours.yml`)
- [ ] Update KakaoTalk / contact links in `_pages/office-hours.md` if changed
- [ ] Add a new `vacation:` window entry (start/end MM-DD + label/body copy) at the start of any break — see "Office Hours & Today Pill Data" below

### 6 · Index page — `index.md`
- [ ] Nothing to check here — the Today Pill and homepage university-group day labels read directly from `_data/office_hours.yml` (see step 5)

### 7 · After the semester ends
- [ ] Set `now: Yes` → remove or set false on all finished courses
- [ ] The archive page auto-updates — no manual changes needed

### 8 · Before committing
- [ ] Run `git status` and confirm every new file (new `.md` course files, new `.yml` data files, new book-cover images) shows up as staged/tracked, **not** under "Untracked files". Unlike edits to existing files, brand-new files are invisible to GitHub Pages until you explicitly `git add` them — this is the #1 cause of "I added courses but they don't show up on the live site" (see CLAUDE.md Bug #24).

---

## Site Map

| URL | File | Description |
|---|---|---|
| `/` | `index.md` | Homepage — today pill, current courses |
| `/archive/` | `_pages/archive.md` | All courses by semester |
| `/policies/` | `_pages/policies.md` | Shared academic policies |
| `/office-hours/` | `_pages/office-hours.md` | Campus schedule + contact |
| `/courses/2026/ut-iot/` | `_courses/2026/ut-iot.md` | IoT course (UT) |
| `/courses/2026/...` | `_courses/2026/*.md` | (2026 courses) |

---

## Design System

### Colors
```css
--accent:  #9b65ff   /* Purple — primary CTAs, headings */
--accent2: #7eb8f7   /* Blue   — secondary buttons */
--accent3: #6dccdd   /* Teal   — card borders, status */
--warn:    #fbbf24   /* Amber  — HW, warnings */
--error:   #fb6f84   /* Pink   — holidays */
```

### Fonts
- `IBM Plex Mono` — nav brand, code labels, badges
- `Playfair Display` — headings, stat numbers
- `DM Sans` — body text (weight 300)

---

## Adding a New Course

1. Create `_courses/YYYY/school-subject.md` with proper front matter
2. Create `_data/YYYY/school_subject_lectures.yml` with week-by-week schedule
3. Done — the nav, homepage, and archive will automatically include it

### Minimal course front matter:
```yaml
---
layout: course
title: Course Title
subtitle: 한국어 부제목
description: SECTION_CODE • YYYY년 N학기 • 대학교이름
uni: ut                         # abbr from _data/universities.yml → drives favicon + watermark
img: assets/img/books/book.jpg  # card thumbnail
importance: 1
category: 2026-1
now: Yes
data_file: 2026/school_subject_lectures   # path inside _data/ (no .yml extension)

grading:
  attendance: 10
  midterm: 25
  final: 25
  homework: 25
  project: 15

information:
  - section: 123456
    time: Mon 9am-12pm
    location: Building 101
    kakaotalk: https://open.kakao.com/...

Main-Text:
  - text: "주교재"
    author: "Author"
    title: <strong>Book Title</strong>
    publisher: "Publisher | Year"
    link: "https://..."
    image: books/book.jpg
---
[Overview markdown here]
```

> **Notes:**
> - `now: Yes` in YAML is a boolean `true`. The site uses `where_exp: "c", "c.now"` — never `where: "now", "Yes"` (which matches nothing).
> - `uni:` must match an `abbr:` in `_data/universities.yml`. For non-university courses (online, high school), use `logo: https://...` directly instead.

---

## Schedule Data Format

Each row in `_data/YYYY/school_subject_lectures.yml`:

```yaml
- date: 3/4               # M/D format
  week: 1                 # week number (shown as "Week N" heading)
  title: >                # HTML allowed; use > for multi-line
    <strong>Intro</strong>
  title_ko: >             # optional Korean title
    <strong>소개</strong>
  readings: "Book Ch. 1"  # optional reading hint
  slides: "https://docs.google.com/..."          # thumbnail links here
  slides2: "https://..."                         # optional 2nd slides link
  slides2_title: "Lab Slides"                    # label for slides2 (default: "Slides 2")
  img: 2026/ut-iot/01-intro.jpg                  # thumbnail image (relative to /assets/img/)
  hw: "https://classroom.github.com/..."         # homework link (shown as 과제 → button)
  hw2: "https://classroom.github.com/..."        # optional second HW link
  logistics: >            # optional HTML for logistics column; links are fine here
    <a href="...">Submit here</a>

# No-class / holiday row:
- date: 4/22
  week: 8
  no_class: true
  title: <strong>휴강</strong> (Holiday)

# Test row:
- date: 5/13
  week: 11
  title: <strong>중간고사</strong> Midterm Test
```

**Column layout (table):**
1. **Date** — `date:` + holiday/test styling
2. **Slides thumbnail** — `img:` links to `slides:`; `slides2:` shows below thumbnail
3. **Info** — `week:` heading + `title:` + `readings:`
4. **Logistics** — `logistics:` HTML + `hw:`/`hw2:` buttons

**Exam/test detection:** there is no `test:` boolean field — `_includes/schedule.html` looks at the `title:` text itself. A row gets the yellow exam styling if its title contains the whole word `Test`, `Exam`, `Midterm`, or `Final` (English titles are stripped of HTML/punctuation and split into words, so only exact-word matches count — a title like "20. A **Example** Inference Task" will NOT false-trigger), or the substring `시험`/`고사` (Korean words don't need whole-word matching since compounds don't use spaces). If a lecture title happens to need the word "test"/"exam" without being an actual exam (unlikely), rephrase the title.

---

## Office Hours & Today Pill Data

The Office Hours week-grid, the Today Pill (shown on the homepage and the office-hours page), and the homepage's university-group day labels are **all driven by one file**: `_data/office_hours.yml`. Never hardcode a weekday→university mapping, room/campus name, or vacation date range directly in `_pages/office-hours.md`, `_includes/today_pill_js.html`, or `index.md` — edit the data files instead.

```yaml
schedule:
  - uni: ut            # abbr from _data/universities.yml
    display_day: 1     # 1=Mon..5=Fri — the ONE day this uni's OH card/pill shows on
    days: [1]           # ALL days this uni meets; used only for the homepage's day label
  - uni: jbnu
    display_day: 4      # JBNU's card sits under Thursday (HB already claims Wednesday)
    days: [3, 4]         # but the homepage shows "Wednesday & Thursday" for it

vacation:
  - start: "06-20"      # MM-DD, inclusive (start > end is fine for windows spanning New Year's)
    end: "08-31"
    icon: "☀"
    label_en: "Summer 2026 — Research & Writing Mode"
    label_ko: "2026년 여름 — 연구 및 집필 모드"
    body_en: "Longer paragraph shown in the vacation banner..."
    body_ko: "..."
```

- **When your weekday/campus assignment changes** (roughly once a year, not per-course): edit `schedule:` in `_data/office_hours.yml`.
- **When a break starts/ends**: add/update a `vacation:` entry. The date check runs client-side in the visitor's browser (not baked in at build time), so it stays accurate even if the site isn't rebuilt for weeks — see CLAUDE.md decision #30.
- **When a university's display name/campus text changes**: edit that university's entry in `_data/universities.yml` (`name`, `name_ko`, `short_ko`, `campus`, `campus_en`, `logo`) — never the OH page directly.
- Adding a new course does **not** require touching this file at all, unless the course also changes which day you're physically on a given campus.

---

## Updating Your Bio

The instructor box on every course page pulls bio text **live** from `aaronsnowberger.com/bio.json` at page load. To update it:

1. Edit `_data/bio.yml` in the `../aaronsnowberger.com` repo (the "medium" bio, `bios[1]`)
2. Push to GitHub — the courses site will pick up the change automatically on next page load

The static fallback text in `_includes/about_aaron.html` is shown briefly before the fetch completes (or if the fetch fails).

---

## Recent Lab Notes (homepage)

The "Recent Lab Notes" section on the homepage (`index.md`, near the bottom) pulls **live** from pailab.io — publishing a new note there is the only step needed; nothing to edit on this site.

1. Add the note as a `.md` file in the correct year folder in the pailab repo: `src/content/notes/YYYY/your-note.md` (see `github.com/aaron-kr/pailab/tree/main/src/content/notes`)
2. Push to `main` — Vercel redeploys pailab.io, which regenerates `https://www.pailab.io/notes.json` (built by `src/pages/notes.json.ts` from the `notes` content collection, newest 8, CORS-enabled)
3. The next time anyone loads courses.aaron.kr's homepage, the JS at the bottom of the Lab Notes section fetches that JSON and replaces the list automatically

The static `<a class="lab-note-row">` rows in `index.md`'s source are a **pre-JS fallback only** (shown briefly before the fetch resolves, or if JS is blocked) — do not hand-edit them when publishing a new note. If you're checking whether this is working via "View Source," you'll always see the stale fallback rows there since View Source never reflects JS-mutated DOM — check the browser's Elements/Inspector panel (or just look at the rendered page) instead.

---

## Key Files

| File | Purpose |
|---|---|
| `_includes/policies.md` | **Single source of truth** for all shared academic policies |
| `_includes/schedule.html` | Renders `<table>` schedule from `_data/YYYY/…_lectures.yml` |
| `_includes/about_aaron.html` | Instructor bio box — fetches from aaronsnowberger.com/bio.json |
| `_includes/course_card.html` | Card component used on home/archive pages |
| `_sass/_variables.scss` | All color & layout variables |
| `_data/universities.yml` | **Single source of truth** for university logos, names, abbrs, campus names, and URLs |
| `_data/office_hours.yml` | **Single source of truth** for the weekday→university teaching schedule + vacation windows (drives Office Hours page, Today Pill, homepage uni-groups) |
| `_config.yml` | Site settings, course categories, GitHub/social handles |
| `_data/nav.yml` | Nav links — edit here to add/remove nav items |
| `_data/announcements.yml` | Homepage announcements strip |

---

## Multi-Site Architecture

| Site | Stack | URL |
|---|---|---|
| **Courses** (this site) | Jekyll on GitHub Pages | [courses.aaron.kr](https://courses.aaron.kr) |
| **Press / CV** | Jekyll on GitHub Pages | [aaronsnowberger.com](https://aaronsnowberger.com) |
| **Research / Lab** | Astro on Vercel | [pailab.io](https://pailab.io) |
| **Personal blog** | Next.js + WordPress | [aaron.kr](https://aaron.kr) |

**Profile image + university logos:** Host at Cloudinary. Same URLs used across all sites.

**Bio endpoint:** `aaronsnowberger.com/bio.json` — served by `bio.json` Jekyll page in the press site repo.
