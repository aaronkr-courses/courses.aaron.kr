# CLAUDE.md — Instructions for Continuing This Project

This file tells Claude (and future collaborators) exactly what this project is, where things stand, and how to continue editing it.

## What This Project Is

A **Jekyll-based courses website** for Prof. Aaron Snowberger, who teaches computer science at five Korean universities (one per weekday). For example:

| Day | University | Korean | Abbr |
|---|---|---|---|
| Monday | Korea Transportation University | 교통대학교 | UT |
| Tuesday | Wonkwang University | 원광대학교 | WKU |
| Wednesday AM | Jeonbuk University | 전북대학교 | JBNU |
| Wednesday PM | Hanbat University | 한밭대학교 | HB |
| Thursday | Jeonbuk University | 전북대학교 | JBNU |
| Friday | Jeonju National University of Education | 전주교육대학교 | JNUE |

## Architecture Overview

This is a **Jekyll site** targeting **GitHub Pages** (simple push-to-deploy, no Docker, no custom build). It was converted from a static HTML prototype (`index.html`, `course.html`, etc.) in April 2026.

### Directory Structure

```
claude-courses/
├── _config.yml              # Minimal Jekyll config (GitHub Pages compatible)
├── Gemfile                  # github-pages gem
├── .gitignore
│
├── _layouts/
│   ├── default.html         # Base layout: nav + footer + shared JS
│   ├── course.html          # Course detail page (extends default)
│   └── page.html            # Generic content page (extends default)
│
├── _includes/
│   ├── head.html            # <head> meta/fonts/CSS
│   ├── nav.html             # Sticky nav with dropdowns (auto-built from site.courses)
│   ├── footer.html          # Footer
│   ├── schedule.html        # Flex-row schedule renderer (uses site.data[data_file])
│   ├── textbooks.html       # Textbook list from page front matter
│   ├── about_aaron.html     # Instructor bio box (uses _data/staff.yml)
│   ├── course_card.html     # Card component for course listings
│   ├── course_scripts.html  # Sidebar intersection-observer JS (course pages only)
│   ├── topic_tag.html       # Topic pill class/label — single source, see decision #35
│   ├── archive_filters.html # Archive page Filters toolbar + panel — see decision #38
│   └── policies.md          # *** SHARED POLICIES CONTENT *** (single source of truth)
│
├── _sass/
│   ├── main.scss            # Import manifest
│   ├── _variables.scss      # Color & layout variables
│   ├── _base.scss           # Body, typography, footer, mesh background
│   ├── _nav.scss            # Navigation
│   ├── _components.scss     # Pills, buttons, cards, tags, filters, today-pill
│   ├── _home.scss           # Homepage hero, stats-bar, announcements, uni-groups
│   ├── _course.scss         # Course hero, grading bar, textbooks, instructor
│   └── _schedule.scss       # Schedule flex rows
│
├── assets/
│   └── css/
│       └── main.scss        # Jekyll SCSS entry point (front matter + @import "main")
│
├── _pages/
│   ├── archive.md           # /archive/ — all courses by semester
│   ├── policies.md          # /policies/ — full policies page
│   └── office-hours.md      # /office-hours/ — campus schedule + contact
│
├── index.md                 # / — homepage (current courses + today pill)
│
├── _courses/
│   ├── 2026/
│   │   ├── ut-iot.md        # IoT — Korea Transportation Univ
│   │   ├── ut-db.md         # Database Design — Korea Transportation Univ
│   │   ├── wku-php.md       # PHP — Wonkwang University
│   │   ├── hb-cpp.md        # C++ — Hanbat University
│   │   ├── jbnu-pe.md       # Power Electronics — Jeonbuk Univ
│   │   ├── jbnu-dc.md       # Circuit Theory (DC) — Jeonbuk Univ
│   │   ├── jbnu-devs.md     # Device Analysis — Jeonbuk Univ
│   │   └── jnue-iss.md      # Info Society & Software — JNUE (3 sections)
│   ├── 2025/                # (to be migrated from aaronkr-courses.github.io)
│   ├── 2024/
│   └── 2023/
│
└── _data/
    ├── universities.yml     # *** University logo/abbr/URL data (single source of truth) ***
    ├── nav.yml              # Navigation items (simple links + dropdowns) — edit to change nav
    ├── footer.yml           # Footer column data (Teaching links + Connect heading)
    ├── staff.yml            # Instructor info
    ├── announcements.yml    # Homepage announcements
    ├── YYYY/                # Lecture YAML subdirs (2021, 2023, 2024, 2025, 2026)
    │   └── school_subject_lectures.yml
    └── ...
```

## Current State (as of Session 19 — August 2026)

| Component | Status | Notes |
|---|---|---|
| Jekyll scaffolding | ✅ Complete | Gemfile, _config.yml, .gitignore |
| SCSS design system | ✅ Complete | 8 partials: added `_pages.scss` in Session 10 |
| Layouts | ✅ Complete | default, course, page |
| Includes | ✅ Complete | All 9 includes including shared policies |
| Home page | ✅ Complete | Today pill, stats bar, course grid by semester, announcements |
| Archive page | ✅ Complete | All semesters, auto-built from collections |
| Policies page | ✅ Complete | Uses shared `_includes/policies.md` |
| Office Hours page | ✅ Complete | Campus schedule + contact |
| Announcements | ✅ Complete | `_data/announcements.yml` → homepage; hidden if empty; bilingual; fields: `date`, `type`, `title`/`title_ko`, `body`/`body_ko`, `url`, `badge`, `badge_type` |
| 2026 courses | ✅ Complete | All 8 courses in `_courses/2026/` |
| 2026 data files | ✅ Complete | All 8 `_data/2026_*_lectures.yml` files |
| 2025 courses | ✅ Complete | 14 courses in `_courses/2025/` (7 spring + 7 fall) |
| 2025 data files | ✅ Complete | 14 `_data/2025_*_lectures.yml` files |
| 2024 courses | ✅ Complete | 13 courses in `_courses/2024/` (6 spring + 7 fall) |
| 2024 data files | ✅ Complete | 13 `_data/2024_*_lectures.yml` files |
| 2023 courses | ✅ Complete | 7 courses in `_courses/2023/` — 6 fully migrated with data files + textbooks + sections; ut-cad external_url only |
| Special/Online courses | ✅ Complete | 5 courses in `_courses/special/` (iksan 2021, hs-python/web 2023, eduonix) |
| Special data files | ✅ Complete | `_data/2021/iksan_gg_lectures.yml` (nested year subdirectory) |
| AI Policy page | ✅ Complete | `_pages/policy-ai.md` at `/policies/ai/`; featured card on policies page |
| All policy pages | ✅ Complete | Individual pages: attendance, assignments, tests, collaboration, late, AI |
| Homepage redesign | ✅ Complete | University groups, Research CTA, Lab Notes, profile links, only current courses |
| Archive redesign | ✅ Complete | List-row layout, filter by semester + university, Show Thumbnails toggle |
| Course layout | ✅ Complete | Removed policies section; added prereqs, dropcap, grading-type (상대평가) |
| Schedule include | ✅ Complete | Table-based layout (4 `<td>` columns); test/no-class use `colspan=3`; `slides2`/`slides2_title` supported; `logistics` + HW links in col 4 |
| i18n toggle | ✅ Complete | `html.ko` class; `lang-en`/`lang-ko` CSS; persists in localStorage |
| Email obfuscation | ✅ Complete | `@` → `&#064;` in about_aaron, footer |
| Card thumbnails | ✅ Complete | 82px wide thumb inside `.card-inner`; `background-position:center top`; shown via `.thumbs-active` |
| Font size | ✅ Complete | `html { font-size: clamp(15px, 1.05vw, 17px) }` + larger h1/h2/h3 |
| Office hours | ✅ Complete | How to Reach Me boxes, Today pill, cal.com booking stub; week-grid + Today Pill + homepage uni-groups now all driven by `_data/office_hours.yml` (Session 17) |
| Nav brand | ✅ Complete | `courses.aaron.kr` |
| Assets (images) | ⏳ Pending | Must be copied from `../aaronkr-courses.github.io/assets/` |
| i18n — nav/footer/layouts | ✅ Complete | All nav, footer, course.html, schedule.html, textbooks.html now use `lang-en`/`lang-ko` spans |
| Policy page redesign | ✅ Complete | All 6 policy pages now use `pol-page-layout` sidebar + `pol-meta-bar` + `pol-rule-list` matching REAL design |
| Office hours redesign | ✅ Complete | `.week-grid`, `.contact-card.c1/c2/c3`, `.booking-box` matching REAL design |
| Archive redesign | ✅ Complete | `.archive-item`/`.semester-group` matching REAL design; filter JS updated |
| Current courses display | ✅ Fixed | YAML `now: Yes` is boolean `true`; all Liquid filters use `where_exp: "c", "c.now"` |
| Page headers (80px) | ✅ Fixed | `.page-header` class in `_pages.scss`; applied to archive, policies, OH, and all policy pages |
| Inline style deduplication | ✅ Fixed | Pol-page CSS + OH CSS moved to `_sass/_pages.scss`; all inline `<style>` blocks removed |
| Announcements (new style) | ✅ Fixed | `ann-*` CSS in `_home.scss`; old YAML section removed from `index.md` |
| Research CTA | ✅ Fixed | Uses `.cta-card` + `.cta-content` + `.cta-image` (two-column); CSS already in `_home.scss` |
| Archive cleanup | ✅ Fixed | Removed 130-line prototype HTML; single filter panel; bilingual pills; `.uni-badge` in rows |
| Archive item layout | ✅ Fixed | `.item-code` now left column; `.item-content` is `display:flex`; thumb fills row height |
| Instructor bio | ✅ Fixed | Bio paragraph now inside `.instructor-box` in `about_aaron.html` |
| pol-rule-list borders | ✅ Fixed | No top/bottom outer borders; only dividers between items |
| Related policy cards | ✅ Fixed | `min-height: 110px; padding: 18px 18px 22px` in `_pages.scss` |
| Thumbnail localStorage | ✅ Complete | `localStorage.getItem/setItem('thumbs','1'/'0')` in both `index.md` and `archive.md` |
| JBNU/HB display order | ✅ Fixed | JBNU (Wed+Thu) shows under Thursday; HB (Wed only) shows under Wednesday on index + office-hours |
| Canvas waves (full-width) | ✅ Fixed | Replaced SVG wave approach with canvas + `requestAnimationFrame`; `width:100vw; left:50%; transform:translateX(-50%)` escapes `.wrap` max-width |
| Profile-link hover | ✅ Fixed | `.profile-link` now uses same slide-in gradient as `.back-btn` |
| Footer one-language fix | ✅ Fixed | `.f-col span:not(.lang-en):not(.lang-ko)` prevents `display:block` override on lang spans; early `<head>` script applies `html.ko` before first paint |
| Nav YAML | ✅ Complete | `_data/nav.yml` + rewritten `nav.html`; mobile sub-menus use `data-sub` attr (no hardcoded IDs) |
| Footer YAML | ✅ Complete | `_data/footer.yml` for Teaching column links; Connect column stays in `footer.html` |
| Office hours uni logos | ✅ Fixed | All 5 day-cards use `site.data.universities[N].logo` (index access; 0=UT, 1=WKU, 2=JBNU, 3=HB, 4=JNUE) |
| Uni logos — single source of truth | ✅ Fixed | `_data/universities.yml` is the canonical source. Course files use `uni: <abbr>` (e.g. `uni: ut`). Templates loop `site.data.universities` with a `for` loop to find the matching logo. Fallback to `c.logo` for non-university courses (eduonix, iksan-hs). |
| Canvas waves (opt-in, default OFF) | ✅ Complete | `data-waves` attribute opt-in; `waves.js` targets `[data-waves]`; toggle button (🌊/〰) on index + office-hours only; default OFF (localStorage key `waves`, value `'on'` to enable) |
| Remote instructor bio | ✅ Added | `about_aaron.html` fetches `https://aaronsnowberger.com/bio.json` at runtime and replaces `#bio-en`/`#bio-ko`/`#instructor-role`; static text is the fallback |
| Office hours day order | ✅ Fixed | Week-grid: day 3 = HB (Wed), day 4 = JBNU (Thu); today-pill updated to match |
| Cal.com theme | ✅ Fixed | `Cal("ui", { ..., theme: document.documentElement.getAttribute('data-theme') || 'dark' })` |
| Calendly comparison embed | ✅ Added | Second booking widget at `https://calendly.com/aaronkr-trainer` below Cal.com in office-hours.md |
| Remote bio rendered as HTML | ✅ Fixed | `about_aaron.html` fetch sets `innerHTML` not `textContent` — bio.json markup (`<strong>` etc.) now formats instead of showing as literal escaped tags; see decision #36 |
| Topic tag single source | ✅ Complete | `_includes/topic_tag.html` — one auto-detect + `topic:` override implementation used by `index.md`, `archive.md`, and course pages; see decision #35 |
| Multi-topic courses | ✅ Complete | `topic:` front matter accepts a comma-separated list (e.g. `Systems, BioMed`); each course renders one pill per topic and matches every corresponding archive filter |
| BioMed topic + color | ✅ Added | New mint-green accent (`#5ee6a3`/`#066e3d` light); 5 biomedical courses tagged `topic: Systems, BioMed`; see decision #37 |
| Topic pill colors unified | ✅ Fixed | `.tag`/`.item-tag`/`.c-badge` (index/archive/course-page) now share one color mapping — `.item-tag` was flat gray and `.c-badge` had no topic colors before |
| Course-page Topic badge | ✅ Added | `.course-badges` hero row on `_layouts/course.html` now shows the course's Topic pill(s) — didn't exist before Session 19 |
| Archive filters extracted | ✅ Complete | Whole Filters toolbar moved from `archive.md` into `_includes/archive_filters.html`; see decision #38 |
| Archive Univ. filter data-driven | ✅ Fixed | Loops `site.data.universities`, self-prunes to universities with ≥1 course — new universities get a filter pill automatically once they have a course, no template edit needed |
| How to Get an A sidebar | ✅ Fixed | "On this page" nav converted from horizontal pills to a sticky vertical sidebar (`.hta-page-layout`) matching the policy-page pattern, with Cal Newport's Part 1/2/3 nested as sub-links and `IntersectionObserver` active-link tracking |

## Active TODOs / Next Steps

### Required to go live
- [ ] **Copy assets** from `../aaronkr-courses.github.io/assets/img/` to `./assets/img/`
- [ ] **Test Jekyll build** locally: `bundle install && bundle exec jekyll serve`
- [ ] **Set GitHub Pages source** to root `/` (not `/docs`)
- [ ] **Set custom domain** to `courses.aaron.kr` in GitHub Pages settings (adds CNAME file)
- [ ] **Delete `2023-course-sites/`** folder after confirming build (see `2023-migration-notes.md`)

### Next sessions
- [ ] Add `favicon` from Cloudinary
- [ ] Configure Cal.com account (`cal.com/aaronkr`) — currently no account; Calendly comparison embed is live at `/office-hours/`
- [ ] Cal.com calendar-first flow: create "variable duration" event type in Cal.com account, then update `calLink: "aaronkr/SLUG"` in office-hours.md
- [ ] Add `tags:` front matter to course files for richer archive filtering
- [ ] Apply `lang-en`/`lang-ko` spans to course body content (Markdown files in `_courses/`)
- [ ] Add `title_ko`/`subtitle_ko` front matter to individual course `.md` files
- [ ] Add `title_ko` to lecture data YAML files for schedule bilingual titles

### Later / Nice to have
- [ ] Add `sitemap.xml` (auto via jekyll-sitemap plugin)
- [ ] Add SEO meta tags (auto via jekyll-seo-tag plugin)
- [ ] Consider merging `_courses` MD + `_data` YAML into single per-course file for simpler maintenance

## Architecture Decisions (do not change without reason)

1. **Jekyll + GitHub Pages** — Simple push-to-deploy. No Docker, no custom GitHub Actions build. Uses only GitHub Pages-compatible plugins.
2. **SCSS via Jekyll** — All CSS in `_sass/` partials, compiled by Jekyll. No separate CSS build step.
3. **Collections** — `_courses/` is a Jekyll collection. `permalink: /courses/:path/` gives year-based URLs automatically (e.g. `/courses/2026/hb-cpp/`).
4. **Nested `_data/`** — Lecture data files live in `_data/YYYY/school_subject_lectures.yml` (e.g. `_data/2026/hb_cpp_lectures.yml`). Course front matter uses `data_file: 2026/hb_cpp_lectures`. The `schedule.html` include splits on `/` to access `site.data["2026"]["hb_cpp_lectures"]`. Non-year data (staff, announcements) stays in `_data/` root.
5. **Shared policies** — `_includes/policies.md` is the single source of truth for all shared policy text. Course pages use `{% include policies.md %}`. Never duplicate this content in course files.
6. **Grading bar** — Grading percentages are in a structured `grading:` block in each course's front matter. The `course.html` layout generates the thermometer bar from this data.
7. **Dark mode default** — `data-theme="dark"` on `<html>`, toggled via localStorage. Same as HTML prototype.
8. **Click dropdowns** — NOT hover. Hover was explicitly rejected in earlier sessions.
9. **Hamburger is an overlay** — `position: fixed`, NOT push-down. Uses `#mobile-backdrop`.
10. **i18n** — `html.ko` class set by JS on toggle; persisted in `localStorage`. CSS `.lang-ko { display:none }` / `html.ko .lang-en { display:none }`. Use `<span class="lang-en">` / `<span class="lang-ko">` for inline, `lang-en-block`/`lang-ko-block` for block elements. Legacy `data-en`/`data-ko` also supported.
11. **YAML boolean `now`** — Course front matter `now: Yes` is YAML boolean `true`. Always use `where_exp: "c", "c.now"` in Liquid filters — NEVER `where: "now", "Yes"` which silently matches nothing.
12. **`_pages.scss`** — Page-level CSS (pol-page layout, oh-page, `.page-header`) lives in `_sass/_pages.scss`. Do NOT put it in inline `<style>` blocks in `.md` files; import is already in `_sass/main.scss`.
13. **Card thumbnails** — `a.card` is `flex-direction:column`. `.card-inner` is `flex-direction:row`. `.card-thumb` (82px wide) lives inside `.card-inner`. Hidden by default; revealed via `.thumbs-active` class on parent container. `background-position:center top`.
12. **Archive rows** — `.archive-item` link rows inside `.semester-group` divs. `.semester-group.is-current` uses `::before`/`::after` pseudo-elements for gradient borders. Filter JS sets `.arch-hidden` on `<li>` elements. Legacy `.arch-row` kept for compat.
13. **Policy pages** — Each policy is its own page in `_pages/policy-*.md`. The main `/policies/` page shows a featured card (AI) + list rows. No anchor-only links.
14. **Email obfuscation** — Always render email as `{{ email | replace: '@', ' &#064; ' }}` in HTML. The `mailto:` href still uses the raw address.
15. **Nav/footer from YAML** — `_data/nav.yml` drives both desktop and mobile nav via `nav.html`. `_data/footer.yml` drives the Teaching column in `footer.html`. Social links stay hardcoded in `footer.html` because they need `site.*` config conditionals. Edit YAML files to add/remove nav or footer links without touching HTML.
16. **Mobile sub-menus** — Use `data-sub="m-ID-sub"` attribute on `.m-toggle` buttons; JS in `default.html` selects all `.m-toggle[data-sub]` and attaches click handlers. Do NOT hardcode IDs in the JS.
17. **Canvas waves (index + office-hours only, opt-in via `data-waves`)** — Only elements with `data-waves` attribute get a canvas injected. Currently: `<header class="home-hero" data-waves>` in `index.md` and `<header class="page-header" data-waves>` in `office-hours.md`. All other `.page-header` instances (archive, policies, etc.) are unaffected. `waves.js` queries `[data-waves]`. `_base.scss` rules also scoped to `[data-waves]`. **Default is OFF** — waves are hidden unless user has explicitly turned them on (`localStorage.getItem('waves') === 'on'`). Early `<head>` script adds `html.waves-off` when key is not `'on'`. `.wave-btn` button toggles `applyWaves()`; emoji: `🌊` (on) / `〰` (off). **Critical: `ctx.translate(wH, hH)` required** — without it lines only draw on left half of canvas.
18. **University data — `_data/universities.yml`** — The canonical source for all university logos, names, and URLs. Entries have `abbr:` (ut, wku, jbnu, hb, jnue, dju, jj), `name:`, `name_ko:`, `url:`, `logo:`. Accessed as `site.data.universities`. To look up a logo by abbr, use a `for` loop — `where`/`where_exp` filters do **not** see locally-assigned Liquid variables (see Bug #16):
    ```liquid
    {%- assign _c_logo = c.logo -%}
    {%- for _u in site.data.universities -%}
      {%- if _u.abbr == c.uni -%}{%- assign _c_logo = _u.logo -%}{%- endif -%}
    {%- endfor -%}
    ```
    Office-hours day-cards use index access (`site.data.universities[N].logo`; positions stable: 0=UT, 1=WKU, 2=JBNU, 3=HB, 4=JNUE). Course files store `uni: <abbr>` (not `logo:`). Special/non-university courses (eduonix, iksan-hs) keep `logo: <url>` directly. Note: `_config.yml` still has a `universities:` block — it's unused by templates but harmless.
19. **University display order** — Index page shows universities in weekday order: UT(Mon), WKU(Tue), HB(Wed), JBNU(Thu), JNUE(Fri). JBNU teaches Wed+Thu but is shown under Thursday (its second/later day). HB teaches Wed only and is shown under Wednesday.
20. **Thumbnail toggle localStorage** — Key `'thumbs'` in localStorage; value `'1'` (active) or `'0'` (inactive). Both `index.md` and `archive.md` restore state on load. Shared key means both pages stay in sync.
20b. **Waves toggle localStorage** — Key `'waves'`; value `'on'` or `'off'` (default is OFF — waves show only when value is explicitly `'on'`). Early `<head>` script adds `html.waves-off` when value is not `'on'`. `applyWaves(bool)` in `default.html` toggles class + updates `.wave-btn` emoji + writes localStorage. Button present on `index.md` and `office-hours.md` only.
21. **Early theme/lang init** — Inline `<script>` in `<head>` (before first paint) reads `localStorage` and applies `data-theme` + `html.ko` class immediately. Prevents flash of wrong theme or both languages rendering simultaneously.
23. **Dynamic favicon** — `head.html` sets `<link rel="icon" href="{{ page.logo }}">` when `page.logo` is set (course pages). All other pages fall back to `site.icon`. This lets each course page show its university logo as the browser tab icon.
24. **Schedule table layout** — `schedule.html` renders a `<table class="sched-table">` with 4 `<td>` columns: date, thumbnail + slides2, info (week/title/readings), logistics + HW links. Test/no-class rows use `<td colspan="3">` for columns 2–4. Links in `logistics:` YAML no longer break layout since they live in their own `<td>`. The `<a class="sched-thumb">` pattern makes the thumbnail itself a link (slides), and `slides2`/`slides2_title` render a second link below.
26. **Schedule past/this-week highlighting** — Only applied to courses whose `data_file` year matches the current calendar year (e.g. `2026/hb_cpp_lectures` → year `2026`). Past-year courses (2024, 2025…) render all rows without fading. Year is extracted as `_df_year = include.data_file | split: "/" | first`. Dates are parsed as `_df_year + "/" + item.date` (e.g. `"2026/3/4"`) so Ruby uses the correct year. Week boundary: `_off = days_from_monday | times: 86400; week_start_ts = today_ts | minus: _off; week_end_ts = week_start_ts | plus: 604800`. **Critical: never chain `| minus: N | times: 86400`** — that computes `(ts-N)*86400`, not `ts-(N*86400)`. This-week = Mon–Sun window containing today. Current-week rows get class `this-week` (teal left border); past rows get class `past` (reduced opacity). Test rows follow the same logic with amber border for this-week.
27. **GitHub Actions workflow** — Single file `.github/workflows/deploy.yml` with 4 jobs: `update-stats` (push + monthly cron, `contents: write`), `lint` (yamllint on `_data/`; warnings only; skipped on schedule), `build` (Firebase config injection + Jekyll build; skipped on schedule), `deploy` (GitHub Pages; skipped on schedule). `jekyll.yml` and `github-stats.yml` were deleted — they are fully replaced by `deploy.yml`.
28. **QR modal refresh** — `admin.html` uses `refreshModalQR()` helper that redraws the 380×380 modal QR. `updateQR()` calls `refreshModalQR()` whenever the modal overlay has class `open`. The modal countdown interval (`_modalCdInterval`) only drives the countdown text — it does NOT independently check/refresh the QR. This avoids the race condition where `lastQrToken` is updated before the modal interval runs.
25. **Remote instructor bio** — `about_aaron.html` renders static bio from `_data/staff.yml` by default, then a small `<script>` fetches `https://aaronsnowberger.com/bio.json` and swaps `#bio-en`, `#bio-ko`, `#instructor-role` on success. aaronsnowberger.com must expose a `bio.json` page (see comment in `about_aaron.html` for the expected JSON format). GitHub Pages sets `Access-Control-Allow-Origin: *` so no CORS issues.
22. **`.f-col span` / `.lang-*` conflict** — `_base.scss` `.f-col p, .f-col a, .f-col span` rule uses `:not(.lang-en):not(.lang-ko)` to exclude lang-toggle spans from getting `display: block`. Without this, `.lang-ko { display: none }` was overridden and both languages showed in the footer.

29. **Office hours / Today Pill / homepage teaching-schedule data — `_data/office_hours.yml`** — Single source of truth for the weekday → university teaching assignment and vacation/break windows, consumed by three places: `_pages/office-hours.md` (week-grid, server-rendered Liquid loop), `_includes/today_pill_js.html` (embeds the data as JSON via `{{ site.data.office_hours | jsonify }}` and does the weekday/vacation lookup client-side against the visitor's real "today"), and `index.md` (homepage university-group headers + day labels). University display fields (`name`, `name_ko`, `short_ko`, `campus`, `campus_en`, `logo`) live in `_data/universities.yml`, joined by `abbr`. **Never hardcode a weekday→university mapping, campus/room name, or vacation date range anywhere else** — edit `_data/office_hours.yml` (schedule/vacation changes) or `_data/universities.yml` (campus/name changes) instead.
    - `schedule:` entries have `uni` (abbr), `display_day` (1=Mon..5=Fri — the ONE day that university's OH card/pill appears on), and `days` (array of ALL weekdays that university meets, used only for the homepage's combined day label). Example: JBNU has `display_day: 4` but `days: [3, 4]`, so its OH card sits under Thursday (HB already claims Wednesday, per decision #19) while the homepage shows "Wednesday & Thursday" for it.
    - `vacation:` entries have `start`/`end` (MM-DD, inclusive; `start > end` is fine for windows spanning New Year's), plus `icon`, `label_en`/`label_ko`, `body_en`/`body_ko`.
    - Update this file once per semester when the weekday/campus assignment changes. This is separate from adding/removing individual course files — course `information.time` fields describe class meeting times (which vary section-to-section and aren't reliably parseable), not which campus you're physically at for office hours.
30. **Vacation window checking stays client-side, not build-time** — The `vacation:` list from `_data/office_hours.yml` is embedded into `today_pill_js.html` via `jsonify` and compared against the visitor's real local date in JS, not evaluated once at Jekyll build time. This matters because the site only rebuilds on push (see decision #27) — a build-time check would go stale between deploys during a multi-week break (e.g. the banner would fail to appear/disappear on the exact date if nobody pushes that day).
31. **`_data/YYYY/` folder year = calendar year of the lecture dates, not the course's academic-year folder** — `schedule.html` prepends the `_data_file`'s leading path segment to each `date:` to parse the correct calendar year (decision #26), so that segment must match when the lectures actually happen. Regular semesters don't notice this because a course's `_courses/2026/` folder and its `2026-1`/`2026-2` category both fall inside calendar 2026. A winter-intensive (계절학기) course breaks that coincidence: `_courses/2026/gnue-ai-edu.md` (academic year 2026, category `2026-winter`) meets on real January-**2027** dates, so its `data_file` points at `_data/2027/gnue_ai_edu_lectures.yml` — a different year than the course file's own directory. This is intentional, not a misfile; do the same for any future winter/summer session whose dates cross into the next calendar year.
32. **Grad-course + winter-intensive (계절학기) front matter** — `grad: true` and `intensive: true` are independent boolean flags (a course can be either, both, or neither — see `_courses/2026/gnue-ai-edu.md` for both). `grad` only affects the home/archive card/row (🎓 chip + `var(--warn)` left-accent bar via `::after`/`::before` overlay, never a layout-shifting border, so non-grad rows are pixel-identical to before) and a dedicated archive "Level" filter — it has **no effect on the course page itself** (explicit design intent: don't change the per-course layout). `intensive` affects the course page (❄ hero badge, `session_start`/`session_end`/`daily_hours`-driven date line, `schedule.html`'s `include.intensive` param swapping "Week N"→"Day N"), the homepage (its own "Winter Intensive Sessions" group, since it has no weekday `office_hours.yml` slot to sit under), and Office Hours/Today Pill (via the new `sessions:` list in `_data/office_hours.yml` — see decision #29 addendum below). Per-lecture-row `zoom:`/`lms:` fields in the data file are independent of both flags (either can appear on any row of any course) and just render a small link via `schedule.html`.
33. **`visible: false` course front matter** — Excludes a course from every internal listing (`index.md` current-course groups + stats counts, `archive.md` semester groups, `nav.html` desktop/mobile dropdowns) while still building the page at its normal URL — for drafting/testing a course before announcing it, without deleting it. Implemented as `| where_exp: "c", "c.visible != false"` chained onto every `site.courses` query in those three files (safe under the `where_exp` scope gotcha in decision #18/Bug #16 below, since the expression only ever references the loop's own iteratee, never an outer local var like `cat.key`). Default (field omitted) is visible — existing courses need no changes. Does **not** exclude the page from `sitemap.xml` (jekyll-sitemap reads its own `sitemap: false` front-matter key at build time, which can't be conditioned on another field via Liquid) — pair `visible: false` with `sitemap: false` by hand if that matters for a given draft.
34. **`sessions:` in `_data/office_hours.yml`** — Sibling list to `vacation:`, for one-off intensive/winter-session teaching windows. Unlike `vacation:` (recurring `MM-DD`, checked every year), `sessions:` entries use full ISO `start`/`end` dates (`YYYY-MM-DD`) since they don't repeat. `today_pill_js.html`'s `currentSession()` mirrors `currentVacation()`'s lookup but also returns 1-indexed `dayNum`/`total` (date-diff in days) for the "Day N/Total" Today Pill text. In `status()`, an active session takes priority over vacation (teaching is still happening even during a semester break) and over the regular weekday `schedule:` lookup. `office-hours.md` renders it in its own `#session-status` banner (`.season-notice.is-session` — accent2/blue, vs. the vacation banner's accent3/teal, so the two are visually distinct) alongside, not replacing, the existing `#vacation-status` banner markup.
35. **`topic:` course front-matter override (supports multiple), single-sourced via `_includes/topic_tag.html`** — Every place that shows a course's Topic pill(s) (`_pages/archive.md` rows, `_includes/course_card.html` cards on `index.md`, and the `.course-badges` hero badge in `_layouts/course.html`) calls `{% include topic_tag.html course=<obj> %}`, which assigns `_tc_list`/`_tl_list` (parallel arrays, one entry per topic — loop them together to render one pill per topic, see the include's own header comment for the exact pattern), plus `_tc`/`_tl2` (first topic only, for any single-pill context) and `_topics_str` (all topic classes space-separated, e.g. `"systems biomed"`) into the caller's scope — Jekyll's `include` (unlike `render`) shares scope both ways, so this is safe. **Do not re-inline the keyword-match `{%- if/elsif -%}` chain in a new template** — three separate copies is exactly what caused the original bug (archive.md had the override, `course_card.html` didn't, so index.md kept showing the stale auto-detected topic). Auto-detection keyword-matches the downcased title (e.g. `contains 'database'` → Data) and always yields exactly one topic, falling back to `theory`/"CS" when nothing matches. Setting `topic:` in a course's front matter overrides this, and accepts a **comma-separated list** to tag a course with more than one topic (e.g. `topic: Systems, BioMed` — see `_courses/2026/kongju-bio-net.md`). Each item in the list is normalized independently and is forgiving about form: `AI/ML`, `ai-tag`, `ai`, `ML` etc. all normalize (downcase + strip `/ - _` and spaces) to the same `ai-tag` result, since a human is more likely to type the label they see in the UI than the internal key. An unrecognized item passes through verbatim as both class and label (renders, just uncategorized/uncolored) rather than erroring. Archive filtering matches if the active filter is ANY of a course's topics (`data-topic="{{ _topics_str }}"` + JS `.split(' ').includes(activeTopic)`), so a multi-topic course shows up under every one of its filter pills.
36. **Remote bio rendered as trusted HTML, not escaped** — `about_aaron.html`'s fetch of `https://aaronsnowberger.com/bio.json` sets `#bio-en`/`#bio-ko`/`#instructor-role` via `innerHTML`, not `textContent`. This intentionally reverses the `textContent` XSS hardening from Session 16 (Known Bug/decision area, see the innerHTML→textContent entry): `bio.json` is authored solely by Aaron on a site only he controls, so any HTML markup in the bio (e.g. `<strong>`, `<em>`) is meant to render, not display as literal escaped tags. Do not revert to `textContent` without checking whether the bio fields are expected to carry HTML at that point — if bio.json ever accepts third-party input, revisit this.
37. **Topic pill colors — one palette, three markup shapes** — `.tag` (index cards via `course_card.html`), `.item-tag` (archive rows), and `.c-badge` (course-page hero badge) each style a Topic pill differently at the structural level (`.tag`/`.item-tag` are transparent-background color+border on top of `--tag-bg`; `.c-badge` sets its own tinted `background` per modifier, matching how `.grad`/`.intensive` already look). All three, however, use the identical hue-to-topic mapping so the same course subject reads as the same color everywhere: `theory`/`web` → accent2 (blue), `systems` → accent3 (teal), `ai-tag` → `#fb6f84` (pink/red, with a `[data-theme="light"]`-corrected `#c0182e` for contrast), `data`/`ml` → accent (purple), `ee` → warn (amber, deliberately shared with `.grad-tag`'s amber — an EE + grad course shows two amber badges, an accepted pre-existing overlap), `biomed` → a new mint-green `#5ee6a3` (`#066e3d` light-corrected, ~5.4:1 on tag-bg-light) — the one hue in the topic palette not reused from an existing `--accent*`/`--warn` CSS variable, chosen specifically so BioMed reads as visually distinct from Systems' teal even though the two nearly always appear together (see decision #35's multi-topic example). When adding a new Topic value, add its color rule to all three selectors (`.tag`, `.item-tag`, `.c-badge`) in `_sass/_components.scss` / `_sass/_course.scss`, plus the `[data-theme="light"]` block if the color needs a contrast correction.
38. **Archive filter toolbar lives in `_includes/archive_filters.html`, not `_pages/archive.md`** — The whole "Filters" toggle + panel (Semester/Univ./Level/Topic/Sort rows) was pulled out of `archive.md` into its own include so it can be edited without touching the page's data loop or the sort/filter `<script>` below it (which stays in `archive.md` since it's wired to element IDs, not to which file rendered them). The **Semester** and **University** rows are data-driven and self-pruning: Semester loops `site.course_categories` and University loops `site.data.universities`, each only emitting a pill when `site.courses | where: "category"/"uni", <key>` has at least one match — so a semester or university with zero courses doesn't get a dead-end filter pill, and (per the original ask) adding a new university to `_data/universities.yml` and giving it a course is enough for its filter pill to appear with no edit to this file. A University pill's `data-value` is `u.abbr | upcase`, which must keep matching the `data-uni="{{ course.init | upcase }}"` attribute set on each archive row in `archive.md` (`init:` is a separate, manually-typed front-matter field per course — by convention it's always the uppercased `uni:` abbr, e.g. `uni: kjnu` + `init: KJNU`; a typo'd `init:` silently breaks that course's filtering, nothing currently validates the two stay in sync). The Korean label uses `u.short_ko | default: u.name_ko` — `short_ko` is optional in `universities.yml` but every university that has a course currently sets it (added for `dju`/`jj` specifically so pulling the University row out of its old hardcoded list wouldn't regress their short "대전대"/"전주대" labels back to the full institution name). The **Level** and **Topic** rows are NOT data-driven (no small backing config file for those — Topic keys/labels live in `_includes/topic_tag.html`, see decision #35) — add/remove those pills by hand in `archive_filters.html`. `HS` (non-university outreach courses) is hardcoded after the University loop since those courses have no `_data/universities.yml` entry (decision #18).

## Known Bugs & Fixes (historical record)

These are non-obvious issues that have been encountered and fixed. If you encounter similar symptoms again, check here first.

### 1. `now: Yes` in course front matter is YAML boolean `true`
**Symptom:** Courses don't appear on the homepage or aren't marked "current" in the archive.  
**Root cause:** `now: Yes` in YAML is parsed as boolean `true`, not the string `"Yes"`. `where: "now", "Yes"` matches nothing.  
**Fix:** Always use `where_exp: "c", "c.now"` — this checks truthiness, not string equality.  
**Files:** `index.md`, `archive.md`

### 2. `.f-col span` overrides `.lang-ko { display: none }`
**Symptom:** Both English and Korean text show simultaneously in the footer.  
**Root cause:** `_base.scss` has `.f-col p, .f-col a, .f-col span { display: block }` which has higher specificity (0,1,1) than `.lang-ko { display: none }` (0,1,0) and overrides it.  
**Fix:** Changed `.f-col span` to `.f-col span:not(.lang-en):not(.lang-ko)` in `_base.scss`.  
**File:** `_sass/_base.scss`

### 3. Both theme/language flash on page load
**Symptom:** Page briefly shows wrong theme (light vs dark) or both languages before JS corrects it.  
**Root cause:** Theme/lang JS was at the bottom of `<body>`; styles applied after first paint.  
**Fix:** Added inline `<script>` in `<head>` (before any content renders) that immediately applies `data-theme` and `html.ko` from `localStorage`.  
**File:** `_layouts/default.html`

### 4. SVG wave animation constrained to `.wrap` max-width
**Symptom:** Hero waves stop at the page max-width boundary instead of going edge-to-edge.  
**Root cause:** Wave `<div>` was inside `.wrap` (max-width constrained) and hero had `overflow: hidden` clipping 100vw attempts.  
**Fix:** Removed `overflow: hidden` from `.home-hero, .page-header, .course-hero`; replaced SVG divs with a `<canvas>` element styled `position: absolute; left: 50%; transform: translateX(-50%); width: 100vw`. Body's `overflow-x: hidden` prevents horizontal scrollbar.  
**Files:** `_sass/_base.scss`, `_layouts/default.html`

### 5. SVG waves not animating
**Symptom:** Waves appear at bottom of hero but don't move.  
**Root cause:** The CSS `animation:` on `.wl-*` classes was correct but the SVGs had `width: 200%; translateX` animation that was being clipped by `overflow: hidden`, making movement invisible.  
**Fix:** Replaced SVG approach entirely with `<canvas>` + `requestAnimationFrame` + multi-sine curves. Canvas animation is unconditionally animated (unless `prefers-reduced-motion`).  
**Files:** `_sass/_base.scss`, `_layouts/default.html`

### 6. Mobile sub-menu JS hardcoded to `['courses', 'policies']`
**Symptom:** Adding a new dropdown to nav.yml wouldn't get a working mobile sub-menu toggle.  
**Root cause:** `default.html` had `['courses', 'policies'].forEach(id => ...)` hardcoded.  
**Fix:** Changed to `document.querySelectorAll('.m-toggle[data-sub]')` — finds all mobile toggles by `data-sub` attribute. Nav items in `nav.html` now set `data-sub="m-ID-sub"` on each `.m-toggle` button.  
**File:** `_layouts/default.html`

### 7. `office-hours.md` broken university logo access
**Symptom:** `{{ u.logo }}` rendered nothing; debug `{{ u }}` printed the entire array.  
**Root cause:** `{%- assign u = site.universities -%}` assigned the whole array. `.logo` on an array is undefined.  
**Fix:** Use `site.data.universities[N].logo` directly in each day-card — index 0=UT, 1=WKU, 2=JBNU, 3=HB, 4=JNUE.  
**File:** `_pages/office-hours.md`

### 8. Cal.com embed uses OS color scheme instead of site theme
**Symptom:** Cal.com calendar shows dark when site is in light mode (OS is dark).  
**Root cause:** `Cal("ui", ...)` with no `theme` parameter defaults to OS `prefers-color-scheme`.  
**Fix:** Pass `theme: document.documentElement.getAttribute('data-theme') || 'dark'` to `Cal("ui", ...)`.  
**File:** `_pages/office-hours.md`

### 9. YAML front matter: unquoted `title:` with `: ` inside breaks the build
**Symptom:** `YAML Exception: mapping values are not allowed in this context at line N column M` during `jekyll build`.  
**Root cause:** YAML treats any unquoted `: ` (colon-space) as a key-value separator. A `title:` value like `<strong>실용 SQL: PostgreSQL로...</strong>` causes YAML to try to parse `PostgreSQL로...` as a new key.  
**Fix:** Wrap any `title:` value (or any YAML value) that contains `: ` in double quotes: `title: "<strong>실용 SQL: PostgreSQL로...</strong>"`. Double quotes are safe as long as the value doesn't itself contain double quotes.  
**Affected files (fixed):** `_courses/2023/dju-sec.md`, `_courses/2023/dju-sql.md` (×2), `_courses/2023/hb-c.md`  
**Prevention:** Always quote YAML values that contain colons. This applies to `title:`, `publisher:`, `description:`, and any other string field.

### 10. Liquid tags in Markdown files processed before Markdown rendering
**Symptom:** `Liquid syntax error: 'if' tag was never closed` or `Tag was not properly terminated` in a `.md` file.  
**Root cause:** Jekyll processes Liquid BEFORE Markdown — even inside backtick code spans or fenced code blocks. Any bare `{%` or `{{` in a file is parsed as Liquid.  
**Fix (developer docs):** Add the file to `exclude:` in `_config.yml`. Current exclusions: `2023-migration-notes.md`, `CLAUDE.md`. Any future developer-only Markdown file that references Liquid syntax must also be excluded.  
**Fix (website pages that need to show Liquid as code):** Wrap the block in raw/endraw tags or add `render_with_liquid: false` to front matter.

### 11b. WEBrick `ERROR '/.well-known/appspecific/com.chrome.devtools.json' not found`
**Symptom:** This error appears in the `jekyll serve` terminal output on every page load.  
**Root cause:** Chrome DevTools automatically probes this path to discover debug endpoints. It is a browser-initiated request, not a site error.  
**Fix:** None needed. Ignore it. It does not affect the build or the deployed site.  
**Applies to:** Jekyll 3.10 with `github-pages` gem processes ALL `.md` files through Liquid, including those without front matter.

### 11. Write tool "File has not been read yet" error
**Symptom:** Attempting to Write multiple files in one batch; some writes rejected.  
**Root cause:** The Write tool requires the file to have been Read in the current session before it can be overwritten.  
**Prevention:** Always Read a file before Writing it. For batch rewrites, Read all target files first, then Write.

### 12. Canvas waves invisible — `isolation: isolate` hides `z-index: -1` canvas
**Symptom:** Canvas `.hero-waves` element is created and draws, but nothing appears in the hero background.  
**Root cause:** `isolation: isolate` on the hero container creates a new compositing stacking context. Within it, `z-index: -1` paints the canvas BELOW the element's own compositing layer — which acts like painting behind an opaque surface even when the element has no `background`. The canvas rendering is composited away before the hero itself is painted.  
**Fix:** Remove `isolation: isolate` from `.home-hero, .page-header, .course-hero`. Change canvas `z-index` from `-1` to `0`. In JS, set `position: relative; z-index: 1` on all non-absolute hero children (and `z-index: 2` on absolute ones) before appending the canvas as the last child.  
**Files:** `_sass/_base.scss`, `_layouts/default.html`

### 13. Canvas waves blocked by `prefers-reduced-motion`
**Symptom:** Canvas element is NOT injected into the DOM at all — `initWaves()` returns immediately.  
**Root cause:** `waves.js` had an early `return` if `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. Many developer machines (especially macOS) have this OS-level accessibility preference enabled, causing the entire script to bail out silently. The CSS also had `@media (prefers-reduced-motion: reduce) { canvas.hero-waves { display: none; } }` as a second block.  
**Fix:** Removed the JS early-return entirely. Replaced the CSS rule with a comment explaining the intentional omission. Waves are a core design element and are not suppressed for reduced-motion users on this site.  
**Files:** `assets/js/waves.js`, `_sass/_base.scss`

### 15. Course hero layout broken — `.course-uni-logo` displaced from upper-right
**Symptom:** University watermark logo no longer appears in upper-right of course hero; hero content shifted down.  
**Root cause:** `_base.scss` had `.course-hero > *:not(canvas) { position: relative; z-index: 1; }` which overrode `.course-uni-logo { position: absolute; top: 80px; right: 0; }` — setting `position: relative` on an element with `position: absolute` moves it back into the document flow.  
**Fix:** Removed `.course-hero` from both the `position: relative` rule and the `> *:not(canvas)` rule in `_base.scss`. Course hero already has `position: relative` in `_course.scss`. Waves are also no longer applied to course pages (`waves.js` selector changed to `.home-hero, .page-header` only).  
**Files:** `_sass/_base.scss`, `assets/js/waves.js`

### 19. Claude used ” instead of " in the <div id="announce-outer">
**Symptom:** After writing the Announcements section to accept the `announcements.yml` file instead of being hard-coded, everything in this block was printed as escaped HTML rather than HTML tags, such as:
```html
&lt;div id=”announce-outer”&gt;...
```
**Root Cause:**  Claude had written the code as:
```html
<div id=”announce-outer”>
<div class=”announce-section” style=”padding:52px 0 0”>
```
**Fix:** Don't use ”, rather use " in HTML elements.

### 17. Liquid `{%- -%}` whitespace-stripping breaks Kramdown HTML block detection
**Symptom:** HTML after a Liquid control tag renders as escaped text (`&lt;div...`) instead of actual HTML elements. The section appears as a code block or escaped inline content in the page.  
**Root cause:** Kramdown only treats a `<div>` as a raw HTML block if it starts on its own line at column 0 with nothing before it (not even whitespace). After `{% if %}` / `{%- if -%}`, Kramdown may re-enter Markdown mode and treat the next `<div>` as inline content, escaping it. Even without stripping, if a blank line follows a `</div>`, Kramdown exits HTML-block mode; the next `<div>` preceded only by a Liquid tag line is not seen as block-level.  
**Fix:** Wrap the entire conditional section in a persistent outer `<div>` that starts at column 0 with NO preceding blank line. Kramdown enters HTML-block mode on that element and stays in it — `{%- -%}` stripping is then safe for all inner tags. Pattern used in `index.md`:
```html
<div id="announce-outer">
{%- if site.data.announcements.size > 0 -%}
<div class="announce-section" ...>
  ...inner HTML with {%- -%} stripping...
</div>
{%- endif -%}
</div>
```
This is the same reason `<div id="thumb-section">` works — the outer div keeps Kramdown in HTML-block mode regardless of the Liquid control flow inside.  
**File:** `index.md` (announcements section, thumb-section)

### 18. Liquid `date` filter rejects double-quoted format strings in some Jekyll versions
**Symptom:** `Liquid Warning: Liquid syntax error (line N): Unexpected character " in "{{ var | date: "%b %-d" }}"`. Build completes but date renders incorrectly or literally.  
**Root cause:** Jekyll's bundled Liquid version (via `github-pages` gem) does not consistently accept double-quoted strings as filter arguments in output tags inside `.md` files. Single-quoted strings work universally.  
**Fix:** Use single quotes: `{{ ann.date | date: '%-d %b' }}`. Note: `%-d` (no leading zero) is a GNU/Linux strftime extension — works on GitHub Pages (Linux), may show literally on Windows locally. Acceptable tradeoff.  
**File:** `index.md` (announcements date display)

### 16. University logos not rendering — `where`/`where_exp` can't see `assign` variables
**Symptom:** University logo badges completely absent from rendered HTML. `{%- if _c_logo -%}` block never outputs. "uni-badge" doesn't appear anywhere in page source.  
**Root cause (layer 1):** `where: "abbr", c.uni` treats `c.uni` as a literal string `"c.uni"`, not the value of the variable. Returns empty.  
**Root cause (layer 2):** `where_exp: "u", "u.abbr == c.uni"` also fails — Jekyll's `where`/`where_exp` filters only see `site.*` and `page.*` drops in the expression; they cannot access locally-`assign`ed variables like `c`, `course`, or `uni_courses[0]`. Returns empty array regardless of correct syntax.  
**Root cause (layer 3):** Even a `for` loop over `site.universities` (from `_config.yml`) may not iterate correctly in all template contexts. Custom arrays in `_config.yml` are site metadata, not the same as `_data/` files.  
**Fix:** Move university data to `_data/universities.yml`. Access via `site.data.universities`. Use a `for` loop (not `where`/`where_exp`) to find the matching entry.  
**Files:** `_data/universities.yml` (new), all templates changed from `site.universities` → `site.data.universities`.

### 14. Canvas waves lines only span left half of hero
**Symptom:** Wave lines draw from the left edge to the horizontal center only — the right half of the hero shows no lines.  
**Root cause:** The original Alca CodePen framework auto-applied `ctx.translate(width/2, height/2)` to center the canvas coordinate system. Our standalone port did NOT do this. The x calculation `ti * (w+20) - wH - 10` produces values from `−wH−10` to `+wH+10` — correct in centered coords, but in absolute canvas coords (0,0 = top-left) those values only reach from ~0 to ~wH (left to center).  
**Fix:** Added `ctx.save(); ctx.translate(wH, hH);` before drawing and `ctx.restore()` after. Fill rect changed to `fillRect(-wH, -hH, w, h)` to cover the full canvas in centered coords. Y coordinate changed from `hH + n*hH` (which added a double-hH shift) to `n * hH` (clean centered value).  
**Files:** `assets/js/waves.js`

### 25. Lab Notes section looked hardcoded but was already live-fetching (view-source vs. runtime confusion)
**Symptom:** `index.md`'s "Recent Lab Notes" section (~line 250) appeared to be hardcoded HTML that never reflected newly published pailab.io notes.
**Investigation:** Confirmed this is NOT hardcoded — a `<script>` at the bottom of the section fetches `https://www.pailab.io/notes.json` (generated dynamically from pailab's `notes` content collection by `src/pages/notes.json.ts` in the pailab repo) and replaces `#lab-note-list`'s contents at runtime. Verified end-to-end: the endpoint is live, CORS-enabled (`Access-Control-Allow-Origin: *`), and returns the current 7 published notes including 2026 ones; the deployed courses.aaron.kr page already ships this exact fetch script. The static rows in the `.md` source are a pre-JS fallback only, shown briefly before fetch completes (or if JS is blocked) — but "View Source" (as opposed to the browser's live DOM/Elements panel) always shows this original fallback markup, which is the likely source of the "it's hardcoded" impression.
**Real bugs found and fixed anyway:** (1) `fetch('https://pailab.io/notes.json')` hit the bare apex domain, which 307-redirects to `www.pailab.io` — harmless (fetch follows it and the final response still has CORS headers) but a needless extra round trip; changed to fetch `https://www.pailab.io/notes.json` directly. (2) The static fallback rows' `href`s used pailab's OLD flat URL scheme (`/notes/slug/`) — pailab now uses year-folders (`/notes/2025/slug/`), so a visitor who saw the fallback (JS blocked/failed) would hit a 404. Fixed to match current routing.
**Do NOT hand-edit the static fallback rows when a new note is published** — publishing a note in the pailab repo's correct year folder (`src/content/notes/YYYY/`) is the only step needed; the live fetch picks it up automatically on next page load.
**Files:** `index.md` (courses.aaron.kr), `src/pages/notes.json.ts` (pailab repo, unchanged — already correct)

### 23. schedule.html: 'exam' substring matches inside unrelated words (e.g. "Example")
**Symptom:** A lecture titled "20. A Example Inference Task: Clustering" (11/2, in both `_data/2025/jbnu_info_lectures.yml` and `_data/2026/jbnu_info_lectures.yml`) rendered with the yellow exam/test row styling even though 11/2 is not a test date.
**Root cause:** The row-type check was `title_lower contains 'exam'` — a plain substring match. "Example" contains "exam" as a substring, so any title mentioning "Example" (or "examine", "examination", etc.) false-triggers the test-row styling.
**Fix:** Strip HTML, downcase, blank out punctuation (`:`, `,`, `;`, `.`, `(`, `)`), split the title into whole words, and check for exact word matches (`_title_words contains 'exam'`) instead of a substring check. Korean keywords (시험, 고사) are still matched as plain substrings since Korean compound words don't use spaces between components. Also added `고사` to the keyword list — previously only `시험` was checked, even though the site's own convention (see Data File Format below) treats "Test"/"Exam"/시험/고사 as equivalent signals.
**File:** `_includes/schedule.html`

### 24. New files must be `git add`ed or GitHub Pages never sees them
**Symptom:** Four new course `.md` files + their lecture `.yml` files + 2 new book-cover images were created for a new semester, and `_config.yml`'s `course_categories` was updated — but the new courses never appeared on the live site's Archive page.
**Root cause:** A local `jekyll build`/`jekyll serve` reads every file in the working directory regardless of git status, so the site looks correct locally. GitHub Pages, however, only builds from what's actually pushed to the repo. Brand-new files stay in git's "Untracked files" list until explicitly `git add`ed — editing/saving a file, or `git commit -a`, does NOT pick up files git has never seen before.
**Fix:** After adding a new semester's files, run `git status` and confirm nothing you just created is listed under "Untracked files" before committing. `git add` each new path explicitly (or the new `_courses/YYYY/`, `_data/YYYY/`, and `assets/img/books/` paths).
**Prevention:** Added as a checklist item in README.md's New Semester Checklist.

### 20. schedule.html: all rows show as `.past` due to broken week_start_ts calculation
**Symptom:** Every row in every course schedule gets the `past` CSS class (faded opacity). Even rows for dates that are in the future appear faded.  
**Root cause:** Liquid filter chains evaluate strictly left-to-right. The expression:
```liquid
week_start_ts = today_ts | minus: days_from_monday | times: 86400
```
evaluates as `(today_ts − days_from_monday) × 86400`, which is an astronomically large number (≈ 150 trillion). Every `item_ts` is less than this, so every row falls into the `elsif item_ts < week_start_ts` branch → `row_class = 'past'`.  
**Fix:** Compute the seconds offset first, then subtract:
```liquid
{%- assign _off = _dfm | times: 86400 -%}
{%- assign week_start_ts = today_ts | minus: _off -%}
{%- assign week_end_ts   = week_start_ts | plus: 604800 -%}
```
**File:** `_includes/schedule.html`

### 21. schedule.html: wrong year used for date parsing on multi-year sites
**Symptom:** Lecture dates from 2024 or 2025 course pages are treated as if they're in the current year (2026), making them either all past or all future unexpectedly.  
**Root cause:** Data file dates use M/D format (e.g. `3/4`). Without a year prefix, Ruby's `Time.parse("3/4")` assumes the current year (2026). For old courses this is wrong.  
**Fix 1:** Prepend the year extracted from the `data_file` path before parsing:
```liquid
{%- assign _dated  = _df_year | append: "/" | append: item.date -%}
{%- assign item_ts = _dated | date: '%s' | plus: 0 -%}
```
**Fix 2:** Only apply `past`/`this-week` logic when the data_file year equals the current year (`_df_year == _curr_year`). Past courses (2024, 2025…) render all rows without fading.  
**File:** `_includes/schedule.html`

### 22. QR modal does not refresh when token rotates
**Symptom:** The full-screen QR modal displays the correct initial QR code, but after the 2-minute token rotation the QR code in the modal does not update. You must close and reopen the modal to get the new QR.  
**Root cause:** `updateQR()` (called by `rotateToken()`) sets `lastQrToken = currentToken` immediately. The modal's interval then checks `if (lastQrToken !== currentToken)` — but since `lastQrToken` was just updated, this condition is never true.  
**Fix:** Added `refreshModalQR()` helper. `updateQR()` calls it after redrawing the main QR whenever the modal overlay has class `open`. The modal interval now only drives the countdown display — QR refresh is piggybacked on the existing `rotateToken()` → `updateQR()` chain.  
**File:** `attend/admin.html`

## Design System

### Color palette (CSS custom properties)
```scss
--accent:  #9b65ff  /* Purple — primary CTAs, headings */
--accent2: #7eb8f7  /* Blue   — secondary buttons, metadata */
--accent3: #6dccdd  /* Teal   — card borders, status */
--warn:    #fbbf24  /* Amber  — HW due dates, warnings */
--error:   #fb6f84  /* Pink   — holidays, errors */
```

### Typography
- `IBM Plex Mono` — nav brand, code labels, badges, metadata
- `Playfair Display` / `DM Serif Display` — h1, stat numbers
- `DM Sans` — body text (weight 300)

### Color usage ratio (maintain)
- ~50% purple (`--accent`) — primary headings, main CTAs
- ~35% blue (`--accent2`) — secondary buttons, links
- ~15% teal (`--accent3`) — card borders, status indicators

## Data File Format (`_data/YYYY/school_subject_lectures.yml`)

```yaml
- date: 3/4           # Date string (M/D format)
  week: 1             # Week number
  title: >            # HTML-safe title
    <strong>수업 소개</strong>
  readings: "Book, Chapter 1"  # String (not array)
  hw: "https://classroom.github.com/..."
  hw2: "https://classroom.github.com/..."  # Optional second HW link
  slides: "https://docs.google.com/..."
  slides2: "https://..."                   # Optional second slides link (shows below thumbnail)
  slides2_title: "Part 2 Slides"           # Optional label for slides2 link (default: "Slides 2")
  img: 2024/hb-cpp/1-cpp-intro.jpg   # Relative to /assets/img/
  img2: 2024/hb-cpp/1-alt.jpg        # Optional second image (fallback if img not set)
  logistics: >        # Optional logistics HTML — goes in column 4; can contain <a> links
    <a href="...">Link</a>
  zoom: "https://zoom.us/j/..."   # Optional — renders a "🎥 Zoom" link (live lecture day)
  lms: "https://..."              # Optional — renders a "📺 LMS Video" link (pre-recorded day)
                                   # Either, both, or neither may be set per row — typically
                                   # used on intensive: true courses (see below), but not
                                   # restricted to them.

# No-class row (holiday/test):
- date: 4/22
  week: 8
  title: >
    <strong>Midterm Test</strong>
```

## Course Front Matter Format (`_courses/YEAR/school-subject.md`)

```yaml
---
layout: course
title: Course Title
subtitle: 한국어 부제목        # optional
description: SECTION_CODE • YYYY년 N학기 • 대학교이름
uni: ut                       # abbr from _data/universities.yml (drives logo + favicon)
img: assets/img/books/book.jpg
importance: 1                 # sort order (lower = higher priority)
category: 2026-1              # YYYY-N (semester key); see course_categories in _config.yml
now: Yes                      # omit or "No" for past courses
visible: false                # optional — omit (or true) to show normally. false hides this
                               # course from index/archive/nav listings + homepage stats while
                               # still building the page at its URL (see decision #33). For
                               # drafting a course before it's ready to announce.
grad: true                    # optional — marks a graduate-level course. Home/archive card +
                               # archive-row get a 🎓 chip + gold accent bar, and it's filterable
                               # via the archive "Level" pill. No effect on the course page.
intensive: true                    # optional — marks a 계절학기/winter-intensive course.
session_start: 2027-01-04          # required if intensive: true — ISO date
session_end: 2027-01-22            # required if intensive: true — ISO date
daily_hours: 3                     # optional — shown as "Daily · Nhr" next to the date range
topic: Systems, BioMed        # optional — overrides the auto-detected Topic pill(s) shown on
                               # index.md cards, archive.md rows, AND the course page hero
                               # badge (see decision #35, #37). Comma-separated = multiple
                               # pills on that course (each independently normalized). Accepts
                               # either the display label (AI/ML, Data, Web, Programming,
                               # Systems, EE, BioMed) or the internal key (ai-tag, data, web,
                               # theory, systems, ee, biomed) — matched case/punctuation-
                               # insensitively, so either form works.
data_file: 2026/ut_iot_lectures  # path inside _data/ (no .yml); split on / in schedule.html
                               # NOTE: this must be the CALENDAR year the lecture dates fall in,
                               # not necessarily this course file's own year folder — see
                               # decision #31 (a winter session starting a course's "2026-2"
                               # fall semester can run into January of the next calendar year).

grading:
  attendance: 10
  midterm: 25
  final: 25
  homework: 25
  project: 15

information:
  - section: 442213
    time: 월 123 | Mon 9am-12pm
    location: W18동 214호
    kakaotalk: https://open.kakao.com/...

Main-Text:
  - text: "주교재"
    author: "Author Name"
    title: <strong>Book Title</strong>
    publisher: "Publisher | Date"
    link: "https://..."
    image: books/book.jpg

Supplementary:
  - text: "부교재"
    # ... same fields
---

[Markdown body = Overview/description content only]
```

## How to Add a New Semester

1. Create `_courses/YYYY/` directory
2. Add course files following the format above
3. Add data files to `_data/` as `YYYY_school_subject_lectures.yml`
4. Add the new category to `course_categories` in `_config.yml`
5. Set `now: Yes` on the new semester's courses; remove/omit it from the completed semester's courses
6. **If your weekday/campus assignment changed** (e.g. you now teach a different university on a given weekday), update `_data/office_hours.yml`'s `schedule:` list — this is what drives the Office Hours week-grid, the Today Pill, and the homepage university-group day labels. Do NOT edit those three files directly (see decision #29).
7. **Run `git status` and confirm every new file is `git add`ed before committing** — new files (unlike edits to existing ones) sit in "Untracked files" until explicitly staged, and GitHub Pages only builds what's actually pushed (see Bug #24). This is the single most common reason "new courses don't show up" despite everything looking right locally.
8. The nav, homepage, and archive will automatically include the new courses once the above is done

## How to Run Locally

```bash
cd claude-courses
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

## Assets Note

Book/logo images are NOT currently in this repo. Copy them from the existing Jekyll site:

```bash
cp -r ../aaronkr-courses.github.io/assets/img/ ./assets/img/
```

## Old Static HTML Files

The original prototype HTML files (`index.html`, `course.html`, `archive.html`, `policies.html`, `policy.html`, `office-hours.html`, `courses.html`) remain in the repo root for reference. They are excluded from Jekyll processing because they have no front matter (except they may conflict with compiled output). **Safe to delete** once the Jekyll site is confirmed working. They are preserved in git history.

## Session History

1. Session 1: Initial `courses.html` with dark theme, dot-grid background
2. Session 2: Multi-page static site with nav, dropdowns, policies, archive
3. Session 3: Complete redesign — new color palette, animated mesh bg, all 6 pages
4. Session 4: Bug fixes — course layout, colors, box shadows, hamburger overlay, announcements, README
5. Session 5: **Complete Jekyll conversion** — new architecture, all 2026 courses migrated, shared policies, SCSS system
6. Sessions 6-10: 2024/2025 migrations, homepage redesign, archive redesign, policy pages, office hours, i18n system
7. Session 11: Cascading wave hero animation, archive Topic/Sort filters, course `title_ko`/`subtitle_ko`, footer i18n, cal.com embed
8. Session 12: **2023 migration** — 6 data files + 6 course files fully populated from `2023-course-sites/` (see `2023-migration-notes.md`)
9. Session 13: **UX improvements** — Canvas waves (full-width, animated), thumbnail localStorage, JBNU/HB display order swap, profile-link slide-in hover, footer one-language fix, nav/footer YAML data files, office-hours uni logos from `site.universities`, Cal.com theme fix, Calendly comparison embed
10. Session 14: **Logo propagation + schedule fix + remote bio + SimplexNoise waves** — Uni logos in index uni-group headers; faded 120px watermark logo in course-hero upper-right; course-page favicon = `page.logo`; schedule converted from flex rows to `<table>` (4 `<td>` cols, `colspan=3` for test/no-class); `slides2`/`slides2_title` support; `logistics` HTML links no longer break layout; `about_aaron.html` JS fetch from `aaronsnowberger.com/bio.json` with static fallback; canvas waves replaced with SimplexNoise cascading lines (purple ↔ teal, lighter/slower, glow + blur + lighter blend mode)
11. Session 15: **Waves debugging + single-source-of-truth logos** — Diagnosed `prefers-reduced-motion` killing canvas; fixed full-width lines via `ctx.translate(wH,hH)`; `data-waves` opt-in attribute (index + office-hours only); waves default OFF with localStorage toggle; 44 course files migrated from `logo: <url>` to `uni: <abbr>`; `_data/universities.yml` created as canonical logo source; all templates updated to `site.data.universities` + for-loop lookup; stats bar university count deduplicated to exclude non-universities
12. Session 16: **Security + quality audit + bug fixes** — Full repo security audit (AUDIT.md); moved policies inline `<style>` to `_sass/_pages.scss`; grading bar colors extracted to CSS custom properties (`--grade-attend` etc.); fixed malformed YAML in `_data/nav.yml`; `innerHTML → textContent` in `about_aaron.html` (XSS); fixed `schedule.html`: year detection from data_file path, correct week boundary calculation (`_off = N | times: 86400; ts | minus: _off` — NOT chained), past rows only for current year, `this-week` highlighting (Mon–Sun window, teal border); QR modal auto-refresh on token rotation via `refreshModalQR()`; consolidated 3 GitHub Actions workflows into single `deploy.yml` with yamllint lint step
13. Session 17: **Fall-semester prep bug fixes** — Fixed `schedule.html` exam/test detection false-positiving on "Example" (substring match → word-boundary tokenized match; also added missing `고사` keyword); diagnosed new fall courses "missing" from Archive as untracked git files (not a template bug — see Bug #24) rather than fixing template code; replaced the hardcoded 5-day office-hours grid, the hardcoded weekday→university map in `today_pill_js.html`, and the hardcoded weekday→university arrays in `index.md`'s homepage university-groups (three separate copies of the same fact) with a single `_data/office_hours.yml` + `_data/universities.yml` (`short_ko`/`campus`/`campus_en` fields added) data-driven system (see decisions #29–30); vacation banner text/dates moved out of hardcoded HTML+JS into the same data file
14. Session 18 (2026-08-07): **Grad-course + winter-intensive (계절학기) system** — New course front-matter fields `grad`, `intensive`, `session_start`/`session_end`, `daily_hours`, `visible` (see format sections + decision #31 below); new per-lecture-row data-file fields `zoom`/`lms`. `grad: true` adds a subtle 🎓 chip + `var(--warn)` left-accent bar to the card/archive-row (home, archive, and a new archive "Level" filter only — no effect on the course page itself, per design intent). `intensive: true` swaps `schedule.html`'s "Week N" labels for "Day N", renders per-row Zoom/LMS links, adds a ❄ hero badge + date-range line on the course page, gives intensive courses their own homepage group (they have no weekday `office_hours.yml` slot to group under), and — via a new `sessions:` list in `_data/office_hours.yml` (one-off ISO-date windows, unlike the recurring MM-DD `vacation:` list) — drives a dedicated Office Hours banner and a "Day N/Total" Today Pill message that takes priority over the vacation banner. `visible: false` excludes a course from `index.md`/`archive.md`/`nav.html` listings and homepage stats (page still builds at its URL) via `| where_exp: "c", "c.visible != false"` chained onto every `site.courses` listing query. Added GNUE (Gwangju National University of Education, `abbr: gnue`) to `_data/universities.yml` and a `2026-winter` course category; built `_courses/2026/gnue-ai-edu.md` + `_data/2027/gnue_ai_edu_lectures.yml` (real Jan 2027 calendar dates, hence the `2027` data folder despite the course living under `_courses/2026/` — see decision #31) as the scaffold course exercising all of the above.
15. Session 19 (2026-08-21): **Remote bio HTML, Topic-tag system, archive filters extracted** — `about_aaron.html`'s live bio fetch now sets `innerHTML` instead of `textContent` (decision #36) since `bio.json` is single-author-trusted content, not third-party input; the Session 16 XSS hardening was specific to a different risk model and this reverses it deliberately, not accidentally. Built `_includes/topic_tag.html` (decision #35) as the single source for a course's Topic pill(s) — replaces three copies of a keyword-match `{%- if/elsif -%}` chain that had drifted out of sync (root cause of the session's first bug report: `archive.md` had a `topic:` override, `course_card.html` didn't, so `index.md` kept showing the stale auto-detected topic). The include supports a **comma-separated `topic:` override** for multi-topic courses (e.g. `topic: Systems, BioMed`), normalizes either the internal key or the human-readable label case/punctuation-insensitively, and is now also called from `_layouts/course.html` to put a Topic badge on the course-page hero for the first time. Added a `biomed` topic (new mint-green `#5ee6a3`/`#066e3d` accent, decision #37) and tagged the 5 existing biomedical courses with `topic: Systems, BioMed`. Colors were also unified across the three surfaces that render a Topic pill (`.tag` on `index.md`, `.item-tag` on `archive.md`, `.c-badge` on course pages) — only `.tag` had topic colors before; `.item-tag` was flat gray and `.c-badge` had no topic styling at all. Pulled the Archive page's whole Filters toolbar out of `archive.md` into `_includes/archive_filters.html` (decision #38); its Semester and University rows are now data-driven off `site.course_categories`/`site.data.universities` and self-prune to only the values at least one course actually uses, so a new university in `_data/universities.yml` gets an Archive filter pill automatically once a course references it — no template edit needed (this also fixed a pre-existing gap where `jj` had a `universities.yml` entry but no filter pill). Separately, redesigned `_pages/how-to-get-an-a.md`'s "On this page" nav from a horizontal pill list into a sticky vertical sidebar (`.hta-page-layout`, matching the policy-page sidebar pattern) with Cal Newport's Part 1/2/3 nested as sub-links, using the same `IntersectionObserver` active-link pattern as `policy.html`.
