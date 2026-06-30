---
layout: default
title: Teaching & Courses
description: Computer Science and Engineering courses taught by Prof. Aaron Snowberger at five Korean universities. Find schedules, textbooks, assignments, and policies for all active courses.
permalink: /
---

<div class="wrap">

  <header class="home-hero" data-waves>
    {% include today_pill.html %}

    <div class="eyebrow">Prof. Aaron Snowberger</div>
    <h1 class="animate d2">Teaching &amp;<br><em>Courses</em></h1>
    <p class="hero-desc animate d3">
      <span class="lang-en">Computer Science &amp; Engineering courses taught at five Korean universities.
      Find schedules, textbooks, assignments, and policies for all active courses.</span>
      <span class="lang-ko">한국 5개 대학에서 가르치는 컴퓨터 공학 강좌입니다.
      현재 강좌의 강의 일정, 교재, 과제, 규정을 확인하세요.</span>
    </p>

    <div class="stats-bar animate d4">
      {%- assign active_courses = site.courses | where_exp: "c", "c.now" -%}
      {%- assign total_courses  = site.courses | size -%}
      {%- comment -%} Count unique universities (by uni abbr — excludes high school / online) {%- endcomment -%}
      {%- assign _seen_unis = "" -%}
      {%- assign _all_uni_count = 0 -%}
      {%- for c in site.courses -%}
        {%- if c.uni -%}
          {%- unless _seen_unis contains c.uni -%}
            {%- assign _all_uni_count = _all_uni_count | plus: 1 -%}
            {%- assign _seen_unis = _seen_unis | append: "," | append: c.uni -%}
          {%- endunless -%}
        {%- endif -%}
      {%- endfor -%}
      <div class="stat">
        <div class="stat-num">{{ _all_uni_count }}</div>
        <div class="stat-label"><span class="lang-en">Universities</span><span class="lang-ko">대학교</span></div>
      </div>
      <div class="stat">
        <div class="stat-num">{{ total_courses }}</div>
        <div class="stat-label"><span class="lang-en">Total Courses</span><span class="lang-ko">총 강좌</span></div>
      </div>
      <div class="stat">
        <div class="stat-num">{{ site.data.github.total_repos_formatted }}</div>
        <div class="stat-label">
          <span class="lang-en">Student Repositories</span>
          <span class="lang-ko">학생 레포지토리</span>
        </div>
      </div>
      <div class="stat">
        <div class="stat-num">2006</div>
        <div class="stat-label"><span class="lang-en">Teaching Since</span><span class="lang-ko">첫 강의</span></div>
      </div>
    </div>

    <!-- Profile links -->
    <div class="profile-links animate d4">
      <a href="https://aaron.kr" class="profile-link" target="_blank"><span class="pl-icon">🌐</span> aaron.kr</a>
      <a href="https://pailab.io" class="profile-link" target="_blank"><span class="pl-icon">🔬</span> PAI Lab</a>
      {%- if site.github_username -%}
      <a href="https://github.com/{{ site.github_username }}" class="profile-link" target="_blank"><span class="pl-icon">⌨</span> GitHub</a>
      {%- endif -%}
      {%- if site.linkedin_username -%}
      <a href="https://linkedin.com/in/{{ site.linkedin_username }}" class="profile-link" target="_blank"><span class="pl-icon">💼</span> LinkedIn</a>
      {%- endif -%} 
      {%- if site.orcid_id -%}
      <a href="https://orcid.org/{{ site.orcid_id }}" class="profile-link" target="_blank"><span class="pl-icon">🆔</span> ORCID</a>
      {%- endif -%}
      {%- if site.scholar_userid -%}
      <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" class="profile-link" target="_blank"><span class="pl-icon">🎓</span> Google Scholar</a>
      {%- endif -%}     
    </div>
  <div class="hero-wave-ctrl">
    <button class="wave-btn ctrl-btn" aria-label="Toggle wave animation" aria-pressed="true">🌊</button>
  </div>
  </header>

  <!-- ── Spring 2026 — Current Courses by University ───────────────────── -->
  <div class="semester-section animate d4">
    <div class="section-top">
      <div class="section-heading-row">
        <span class="section-label">
          <span class="lang-en">Spring 2026 — Courses</span>
          <span class="lang-ko">2026년 1학기 — 강좌</span>
        </span>
        <span class="section-line"></span>
      </div>
      <div class="section-actions">
        <button class="thumb-toggle" id="thumb-toggle" aria-label="Toggle course thumbnail images" aria-pressed="false">
          <span class="t-icon">⊞</span>
          <span class="lang-en">Thumbnails</span><span class="lang-ko">썸네일</span>
        </button>
      </div>
    </div>

    <div class="study-tips-bar">
      <a href="{{ '/resources/how-to-get-an-a' | relative_url }}" class="stb-link stb-primary">
        <span class="stb-icon">🎯</span>
        <span class="lang-en">How to Get an A in My Courses</span>
        <span class="lang-ko">내 강좌에서 A를 받는 방법</span>
      </a>
      <span id="grade-policy-cta" class="stb-link stb-secondary" style="display:none">
        <span class="stb-sep">·</span>
        <a href="{{ '/policies/grades' | relative_url }}">
          <span class="lang-en">Grade Change Policy</span>
          <span class="lang-ko">성적 변경 정책</span>
        </a>
      </span>
    </div>
    <script>
    // Show grade-policy CTA only during complaint seasons:
    // June 12 – July 15 (post spring grades) and Dec 12 – Jan 15 (post fall grades)
    (function(){
      var m = new Date().getMonth() + 1, d = new Date().getDate();
      var show = (m === 6 && d >= 12) || (m === 7 && d <= 15)
              || (m === 12 && d >= 12) || (m === 1 && d <= 15);
      if (show) {
        var el = document.getElementById('grade-policy-cta');
        if (el) el.style.display = 'inline-flex';
      }
    })();
    </script>

    <div id="thumb-section">
      {%- assign current_courses = site.courses | where_exp: "c", "c.now" -%}

      {%- comment -%} University groups in teaching-day order {%- endcomment -%}
      {%- assign uni_names = "한국교통대학교,원광대학교,한밭대학교,전북대학교,전주교육대학교" | split: "," -%}
      {%- assign uni_abbrs = "UT,WKU,HB,JBNU,JNUE" | split: "," -%}
      {%- assign uni_days_en = "Monday,Tuesday,Wednesday,Wednesday &amp; Thursday,Friday" | split: "," -%}
      {%- assign uni_days_ko = "월요일,화요일,수요일,수요일 · 목요일,금요일" | split: "," -%}
      {%- assign uni_full_en = "Korea Transportation University,Wonkwang University,Hanbat National University,Jeonbuk National University,Jeonju National University of Education" | split: "," -%}

      {%- for i in (0..4) -%}
        {%- assign uni = uni_names[i] -%}
        {%- assign uni_courses = current_courses | where_exp: "c", "c.description contains uni" | sort: "importance" -%}
        {%- if uni_courses.size > 0 -%}
        <div class="uni-group">
          <div class="uni-group-header">
            {%- assign _g_uni_abbr = uni_courses[0].uni -%}
            {%- assign _g_logo = uni_courses[0].logo -%}
            {%- for _u in site.data.universities -%}
              {%- if _u.abbr == _g_uni_abbr -%}{%- assign _g_logo = _u.logo -%}{%- endif -%}
            {%- endfor -%}
            {%- if _g_logo -%}
            <img src="{{ _g_logo }}" class="uni-group-logo" alt="{{ uni_abbrs[i] }}" />
            {%- else -%}
            <span class="uni-abbr">{{ uni_abbrs[i] }}</span>
            {%- endif -%}
            <span class="uni-group-name">
              <span class="lang-en">{{ uni_full_en[i] }}</span>
              <span class="lang-ko">{{ uni }}</span>
            </span>
            <span class="uni-group-day">
              <span class="lang-en">{{ uni_days_en[i] }}</span>
              <span class="lang-ko">{{ uni_days_ko[i] }}</span>
            </span>
          </div>
          <div class="course-grid">
            {%- for course in uni_courses -%}
              {% include course_card.html course=course %}
            {%- endfor -%}
          </div>
        </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
  </div>

<div id="announce-outer">
{%- if site.data.announcements.size > 0 -%}
<div class="announce-section" style="padding:52px 0 0">
  <div class="section-top">
    <div class="section-heading-row">
      <span class="section-label">
        <span class="lang-en">Announcements</span>
        <span class="lang-ko">공지사항</span>
      </span>
      <span class="section-line"></span>
    </div>
  </div>
  <ul class="announce-list">
    {%- for ann in site.data.announcements -%}
    <a class="announce-item" href="{{ ann.url | default: '#' }}">
      <span class="ann-dot {{ ann.type | default: 'info' }}"></span>
      <div class="ann-body">
        <div class="ann-title">{%- if ann.title_ko -%}<span class="lang-en">{{ ann.title }}</span><span class="lang-ko">{{ ann.title_ko }}</span>{%- else -%}{{ ann.title }}{%- endif -%}</div>
        {%- if ann.body or ann.body_ko -%}<div class="ann-desc">{%- if ann.body_ko -%}<span class="lang-en">{{ ann.body }}</span><span class="lang-ko">{{ ann.body_ko }}</span>{%- else -%}{{ ann.body }}{%- endif -%}</div>{%- endif -%}
      </div>
      <div class="ann-meta">
        <span class="ann-date">{{ ann.date | date: '%-d %b' }}</span>
        {%- if ann.badge -%}<span class="ann-badge {{ ann.badge_type | default: 'admin' }}">{{ ann.badge }}</span>{%- endif -%}
        <span class="ann-arrow">→</span>
      </div>
    </a>
    {%- endfor -%}
  </ul>
</div>
{%- endif -%}
</div>

  <!-- ── Research CTA ────────────────────────────────────────────────────── -->
  <div class="cta-card animate d5" style="margin:52px 0;">
    <div class="cta-content">
      <div class="rc-eyebrow">
        <span class="lang-en">Research / PAI Lab</span>
        <span class="lang-ko">연구 / PAI 연구소</span>
      </div>
      <h3 class="rc-title">
        <span class="lang-en">Looking for <em>Research?</em></span>
        <span class="lang-ko"><em>연구 보조원</em>을 찾습니다</span>
      </h3>
      <p class="rc-desc">
        <span class="lang-en">Interested in computer vision, NLP, or applied machine learning?
        The PAI Lab is accepting undergraduate and graduate research assistants for 2026.</span>
        <span class="lang-ko">컴퓨터 비전, 자연어 처리 또는 응용 머신러닝에 관심 있으신가요?
        PAI 연구소에서 2026년도 학부 및 대학원 연구 보조원을 모집합니다.</span>
      </p>
      <div class="rc-tags">
        <span class="rc-tag">Computer Vision</span>
        <span class="rc-tag">NLP</span>
        <span class="rc-tag">Signal Processing</span>
        <span class="rc-tag">Image Processing</span>
        <span class="rc-tag">Machine Learning</span>
      </div>
      <a href="https://pailab.io" class="cta-btn" target="_blank">
        <span class="lang-en">Visit PAI Lab →</span>
        <span class="lang-ko">PAI 연구소 →</span>
      </a>
    </div>
    <div class="cta-image" style="background: url('https://media.easy-peasy.ai/b7440f19-21c7-4f2e-9eed-2289644e4210/6e6e1942-ecfa-4fe4-b884-bb4555579ea8_medium.webp') center / cover no-repeat;">
      <div class="sched-extra">Img: <a href="https://easy-peasy.ai/ai-image-generator/images/arduino-electronic-monitoring-system-blueprint">Easy-Peasy.ai</a></div>
    </div>
  </div>

  <!-- ── Recent Lab Notes ─────────────────────────────────────────────── -->
  <div class="lab-notes-section animate d5">
    <div class="section-top" style="margin-bottom:14px;">
      <div class="section-heading-row">
        <span class="section-label">
          <span class="lang-en">Recent Lab Notes</span>
          <span class="lang-ko">최근 연구 노트</span>
        </span>
        <span class="section-line"></span>
      </div>
      <div class="section-actions">
        <a href="https://pailab.io" class="back-btn" target="_blank">
          <span class="lang-en">All Notes →</span>
          <span class="lang-ko">전체 보기 →</span>
        </a>
      </div>
    </div>
    <div class="lab-note-list" id="lab-note-list">
      <a class="lab-note-row" href="https://pailab.io/notes/what-is-physical-ai/" target="_blank">
        <span class="lnr-date">Mar 2025</span>
        <span class="lnr-tag">Physical AI</span>
        <span class="lnr-title">What is Physical AI? A working definition for educators</span>
        <span class="lnr-arrow">→</span>
      </a>
      <a class="lab-note-row" href="https://pailab.io/notes/arduino-to-ros2/" target="_blank">
        <span class="lnr-date">2025</span>
        <span class="lnr-tag">Robotics</span>
        <span class="lnr-title">From Arduino to ROS2: a practical path for undergraduates</span>
        <span class="lnr-arrow">→</span>
      </a>
      <a class="lab-note-row" href="https://pailab.io/notes/tinyml-apple-silicon/" target="_blank">
        <span class="lnr-date">2025</span>
        <span class="lnr-tag">TinyML</span>
        <span class="lnr-title">TinyML on Apple Silicon: edge model deployment for research</span>
        <span class="lnr-arrow">→</span>
      </a>
      <a class="lab-note-row" href="https://pailab.io/notes/" target="_blank">
        <span class="lnr-date"></span>
        <span class="lnr-tag">All</span>
        <span class="lnr-title">View all lab notes on pailab.io →</span>
        <span class="lnr-arrow"></span>
      </a>
    </div>
  </div>
  <script>
  (function() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    function fmtDate(iso) {
      var p = iso.split('-');
      return months[parseInt(p[1], 10) - 1] + ' ' + p[0];
    }
    fetch('https://pailab.io/notes.json')
      .then(function(r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function(d) {
        if (!d.notes || !d.notes.length) return;
        var list = document.getElementById('lab-note-list');
        if (!list) return;
        list.innerHTML = d.notes.slice(0, 4).map(function(n) {
          return '<a class="lab-note-row" href="https://pailab.io' + n.url + '" target="_blank">' +
            '<span class="lnr-date">' + fmtDate(n.date) + '</span>' +
            '<span class="lnr-tag">' + (n.tag || '') + '</span>' +
            '<span class="lnr-title">' + n.title + '</span>' +
            '<span class="lnr-arrow">→</span>' +
          '</a>';
        }).join('');
      })
      .catch(function() {});
  })();
  </script>

  <!-- ── Archive link ──────────────────────────────────────────────────── -->
  <div style="padding-bottom:80px;text-align:center;">
    <a href="{{ '/archive' | relative_url }}" class="back-btn" style="display:inline-flex;">
      <span class="lang-en">View All Courses (Archive) →</span>
      <span class="lang-ko">전체 강좌 보기 (아카이브) →</span>
    </a>
  </div>

</div><!-- /.wrap -->

{% include today_pill_js.html %}
<script>
// ── Today pill ────────────────────────────────────────────────────────────────
TodayPill.updatePill();

// ── Thumbnail toggle ──────────────────────────────────────────────────────────
const _tt = document.getElementById('thumb-toggle');
if (_tt) {
  const _sec = document.getElementById('thumb-section');
  if (localStorage.getItem('thumbs') === '1') {
    _sec.classList.add('thumbs-active');
    _tt.classList.add('active');
    _tt.setAttribute('aria-pressed', 'true');
    const _ic0 = _tt.querySelector('.t-icon');
    if (_ic0) _ic0.textContent = '⊟';
  }
  _tt.addEventListener('click', () => {
    const a = _sec.classList.toggle('thumbs-active');
    _tt.classList.toggle('active', a);
    _tt.setAttribute('aria-pressed', a ? 'true' : 'false');
    const ic = _tt.querySelector('.t-icon');
    if (ic) ic.textContent = a ? '⊟' : '⊞';
    localStorage.setItem('thumbs', a ? '1' : '0');
  });
}
</script>
