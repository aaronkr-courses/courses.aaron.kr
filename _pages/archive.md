---
layout: default
title: Course Archive
description: Complete archive of all Computer Science and Engineering courses taught by Prof. Aaron Snowberger at Korean universities from 2021 to present, organized by semester.
permalink: /archive/
eyebrow: Teaching History
---

<div class="wrap">
  <header class="page-header" data-waves>
    <div class="eyebrow">
      <span class="lang-en">Teaching History</span>
      <span class="lang-ko">강의 이력</span>
    </div>
    <h1>Course <em>Archive</em></h1>
    <p class="hero-desc" style="margin-top:16px;">
      <span class="lang-en">All courses taught from 2021 to present, organized by semester.</span>
      <span class="lang-ko">2021년부터 현재까지 강의한 모든 강좌를 학기별로 정리했습니다.</span>
    </p>

    <!-- Filter + Thumbnail controls -->
    <div class="section-top" style="margin-top:28px;">
      <div class="section-heading-row">
        <span class="section-label">
          <span class="lang-en">By Semester</span>
          <span class="lang-ko">학기별</span>
        </span>
        <span class="section-line"></span>
      </div>
      <div class="section-actions">
        <button class="filter-toggle-btn" id="filter-toggle">
          ⚙ <span class="lang-en">Filters</span><span class="lang-ko">필터</span>
        </button>
        <button class="thumb-toggle" id="arch-thumb-toggle">
          <span class="t-icon">⊞</span>
          <span class="lang-en">Thumbnails</span><span class="lang-ko">썸네일</span>
        </button>
        <span id="arch-count" style="font-family:'IBM Plex Mono',monospace;font-size:.65rem;color:var(--muted);margin-left:6px;"></span>
      </div>
    </div>
    <div class="filter-panel" id="filter-panel">
      <div class="ctrl-row">
        <span class="ctrl-row-label"><span class="lang-en">Semester</span><span class="lang-ko">학기</span></span>
        <button class="pill pill-blue active" data-filter="sem" data-value="all">
          <span class="lang-en">All</span><span class="lang-ko">전체</span>
        </button>
        {%- for cat in site.course_categories -%}
        {%- assign cat_courses = site.courses | where: "category", cat.key -%}
        {%- if cat_courses.size > 0 -%}
        <button class="pill pill-blue" data-filter="sem" data-value="{{ cat.key }}">{{ cat.label }}</button>
        {%- endif -%}
        {%- endfor -%}
      </div>
      <div class="ctrl-row">
        <span class="ctrl-row-label"><span class="lang-en">University</span><span class="lang-ko">대학교</span></span>
        <button class="pill active" data-filter="uni" data-value="all">
          <span class="lang-en">All</span><span class="lang-ko">전체</span>
        </button>
        <button class="pill" data-filter="uni" data-value="UT"><span class="lang-en">UT</span><span class="lang-ko">교통대</span></button>
        <button class="pill" data-filter="uni" data-value="WKU"><span class="lang-en">WKU</span><span class="lang-ko">원광대</span></button>
        <button class="pill" data-filter="uni" data-value="JBNU"><span class="lang-en">JBNU</span><span class="lang-ko">전북대</span></button>
        <button class="pill" data-filter="uni" data-value="HB"><span class="lang-en">HB</span><span class="lang-ko">한밭대</span></button>
        <button class="pill" data-filter="uni" data-value="JNUE"><span class="lang-en">JNUE</span><span class="lang-ko">전주교대</span></button>
        <button class="pill" data-filter="uni" data-value="DJU"><span class="lang-en">DJU</span><span class="lang-ko">대전대</span></button>
        <button class="pill" data-filter="uni" data-value="HS"><span class="lang-en">HS</span><span class="lang-ko">고등학교</span></button>
      </div>
      <div class="ctrl-row">
        <span class="ctrl-row-label"><span class="lang-en">Topic</span><span class="lang-ko">주제</span></span>
        <button class="pill active" data-filter="topic" data-value="all">
          <span class="lang-en">All</span><span class="lang-ko">전체</span>
        </button>
        <button class="pill" data-filter="topic" data-value="ai-tag"><span class="lang-en">AI/ML</span><span class="lang-ko">AI/머신러닝</span></button>
        <button class="pill" data-filter="topic" data-value="theory"><span class="lang-en">Programming</span><span class="lang-ko">프로그래밍</span></button>
        <button class="pill" data-filter="topic" data-value="web"><span class="lang-en">Web</span><span class="lang-ko">웹</span></button>
        <button class="pill" data-filter="topic" data-value="data"><span class="lang-en">Data</span><span class="lang-ko">데이터</span></button>
        <button class="pill" data-filter="topic" data-value="systems"><span class="lang-en">Systems</span><span class="lang-ko">시스템</span></button>
        <button class="pill" data-filter="topic" data-value="ee"><span class="lang-en">EE</span><span class="lang-ko">전기전자</span></button>
      </div>
      <div class="ctrl-row">
        <span class="ctrl-row-label"><span class="lang-en">Sort</span><span class="lang-ko">정렬</span></span>
        <button class="pill active" data-sort="newest">
          <span class="lang-en">Newest</span><span class="lang-ko">최신순</span>
        </button>
        <button class="pill" data-sort="oldest">
          <span class="lang-en">Oldest</span><span class="lang-ko">오래된순</span>
        </button>
        <button class="pill" data-sort="az">
          <span class="lang-en">A–Z</span><span class="lang-ko">가나다순</span>
        </button>
        <button class="pill" data-sort="byuni">
          <span class="lang-en">By University</span><span class="lang-ko">대학교별</span>
        </button>
      </div>
    </div>
    <div class="hero-wave-ctrl">
      <button class="wave-btn ctrl-btn" aria-label="Toggle wave animation">🌊</button>
    </div>
  </header>

  <main id="archive-main" style="padding:32px 0 80px;">
    {%- for cat in site.course_categories -%}
      {%- assign cat_courses = site.courses | where: "category", cat.key | sort: "importance" -%}
      {%- if cat_courses.size > 0 -%}
      {%- assign is_current = cat_courses | where_exp: "c", "c.now" | size -%}
      <div class="semester-group{% if is_current > 0 %} is-current{% endif %}" data-sem="{{ cat.key }}">
        <div class="group-heading">
          <span class="group-label">{{ cat.label }}</span>
          {%- if is_current > 0 -%}<span class="current-chip">Current</span>{%- endif -%}
          <span class="group-line"></span>
        </div>
        <ul class="archive-list">
          {%- for course in cat_courses -%}
            {%- assign _uni = course.init | upcase -%}
            {%- assign _info = course.information | first -%}
            {%- assign _tl = course.title | downcase -%}
            {%- if _tl contains 'machine learning' or _tl contains 'deep learning' or _tl contains 'ai ' -%}
              {%- assign _tc = 'ai-tag' -%}{%- assign _tl2 = 'AI/ML' -%}
            {%- elsif _tl contains 'database' or _tl contains 'sql' or _tl contains 'data struct' -%}
              {%- assign _tc = 'data' -%}{%- assign _tl2 = 'Data' -%}
            {%- elsif _tl contains 'web' or _tl contains 'php' or _tl contains 'node' or _tl contains 'html' -%}
              {%- assign _tc = 'web' -%}{%- assign _tl2 = 'Web' -%}
            {%- elsif _tl contains 'python' or _tl contains 'java' or _tl contains 'c++' or _tl contains 'programming' -%}
              {%- assign _tc = 'theory' -%}{%- assign _tl2 = 'Programming' -%}
            {%- elsif _tl contains 'iot' or _tl contains 'circuit' or _tl contains 'device' or _tl contains 'semiconductor' or _tl contains 'medical' -%}
              {%- assign _tc = 'systems' -%}{%- assign _tl2 = 'Systems' -%}
            {%- elsif _tl contains 'electric' or _tl contains 'power' or _tl contains 'hydrogen' -%}
              {%- assign _tc = 'ee' -%}{%- assign _tl2 = 'EE' -%}
            {%- else -%}
              {%- assign _tc = 'theory' -%}{%- assign _tl2 = 'CS' -%}
            {%- endif -%}
            <li>
              <a class="archive-item"
                 href="{{ course.url | relative_url }}"
                 data-uni="{{ _uni }}"
                 data-sem="{{ course.category }}"
                 data-topic="{{ _tc }}"
                 data-title="{{ course.title | downcase }}">
                {%- if course.img -%}
                <div class="item-thumb" style="background-image:url('{{ course.img | relative_url }}')"></div>
                {%- else -%}
                <div class="item-thumb"></div>
                {%- endif -%}
                <div class="item-content">
                  <div class="item-code">
                    {{ course.description | split: ' • ' | first }}
                    <span class="uni-init-tag">{{ _uni }}</span>
                    {%- unless course.now %}<span class="archived-badge">Archived</span>{%- endunless -%}
                  </div>
                  <div class="item-main">
                    <div class="item-title">{{ course.title }}</div>
                    {%- if course.subtitle %}<div class="item-subtitle">{{ course.subtitle }}</div>{%- endif -%}
                    <div class="item-meta-row">
                      <span class="item-tag {{ _tc }}">{{ _tl2 }}</span>
                      {%- if _info.time -%}<span class="item-meta-val">{{ _info.time }}</span>{%- endif -%}
                      {%- if _info.location -%}<span class="item-meta-val">{{ _info.location }}</span>{%- endif -%}
                    </div>
                  </div>
                </div>
                {%- assign _c_logo = course.logo -%}
                {%- for _u in site.data.universities -%}
                  {%- if _u.abbr == course.uni -%}{%- assign _c_logo = _u.logo -%}{%- endif -%}
                {%- endfor -%}
                {%- if _c_logo -%}
                <div class="uni-badge">
                  <img src="{{ _c_logo }}" class="ub-abbr" />
                </div>
                {%- endif -%}
                <span class="item-arrow">→</span>
              </a>
            </li>
          {%- endfor -%}
        </ul>
      </div>
      {%- endif -%}
    {%- endfor -%}
  </main>
</div>

<script>
// ── Archive filter + sort + thumbnail logic ───────────────────────────────────
(function() {
  let activeSem   = 'all';
  let activeUni   = 'all';
  let activeTopic = 'all';
  let activeSort  = 'newest';

  const main = document.getElementById('archive-main');
  const allRows = document.querySelectorAll('.archive-item');

  // Store original group order for sort reset
  const origGroupOrder = [...document.querySelectorAll('.semester-group')];

  function countVisible() {
    let n = 0;
    allRows.forEach(r => { if (!r.closest('li').classList.contains('arch-hidden')) n++; });
    const el = document.getElementById('arch-count');
    if (el) el.textContent = n + ' course' + (n !== 1 ? 's' : '');
  }

  function applyFilters() {
    allRows.forEach(row => {
      const li    = row.closest('li');
      const semOk   = activeSem   === 'all' || row.dataset.sem   === activeSem;
      const uniOk   = activeUni   === 'all' || row.dataset.uni   === activeUni;
      const topicOk = activeTopic === 'all' || row.dataset.topic === activeTopic;
      li.classList.toggle('arch-hidden', !(semOk && uniOk && topicOk));
    });
    document.querySelectorAll('.semester-group').forEach(sec => {
      const anyVis = [...sec.querySelectorAll('li')].some(li => !li.classList.contains('arch-hidden'));
      sec.style.display = anyVis ? '' : 'none';
    });
    countVisible();
  }

  function applySort() {
    if (activeSort === 'newest') {
      origGroupOrder.forEach(g => main.appendChild(g));
    } else if (activeSort === 'oldest') {
      [...origGroupOrder].reverse().forEach(g => main.appendChild(g));
    } else if (activeSort === 'az' || activeSort === 'byuni') {
      // Restore original group order first, then sort items within each group
      origGroupOrder.forEach(g => main.appendChild(g));
      document.querySelectorAll('.semester-group').forEach(group => {
        const ul = group.querySelector('.archive-list');
        if (!ul) return;
        const items = [...ul.querySelectorAll('li')];
        if (activeSort === 'az') {
          items.sort((a, b) => {
            const ta = (a.querySelector('.archive-item')?.dataset.title || '');
            const tb = (b.querySelector('.archive-item')?.dataset.title || '');
            return ta.localeCompare(tb);
          });
        } else {
          items.sort((a, b) => {
            const ua = (a.querySelector('.archive-item')?.dataset.uni || '');
            const ub = (b.querySelector('.archive-item')?.dataset.uni || '');
            return ua.localeCompare(ub);
          });
        }
        items.forEach(li => ul.appendChild(li));
      });
    }
    applyFilters();
  }

  // Filter buttons
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.filter;
      const val   = btn.dataset.value;
      document.querySelectorAll(`[data-filter="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (group === 'sem')   activeSem   = val;
      if (group === 'uni')   activeUni   = val;
      if (group === 'topic') activeTopic = val;
      applyFilters();
    });
  });

  // Sort buttons
  document.querySelectorAll('[data-sort]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-sort]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSort = btn.dataset.sort;
      applySort();
    });
  });

  // Filter panel toggle
  const filterToggle = document.getElementById('filter-toggle');
  const filterPanel  = document.getElementById('filter-panel');
  if (filterToggle && filterPanel) {
    filterToggle.addEventListener('click', () => {
      const o = filterPanel.classList.toggle('open');
      filterToggle.classList.toggle('open', o);
    });
  }

  // Thumbnail toggle (persisted in localStorage)
  const archThumbToggle = document.getElementById('arch-thumb-toggle');
  if (archThumbToggle) {
    if (localStorage.getItem('thumbs') === '1') {
      main.classList.add('thumbs-active');
      archThumbToggle.classList.add('active');
      const _ic0 = archThumbToggle.querySelector('.t-icon');
      if (_ic0) _ic0.textContent = '⊟';
    }
    archThumbToggle.addEventListener('click', () => {
      const a = main.classList.toggle('thumbs-active');
      archThumbToggle.classList.toggle('active', a);
      const ic = archThumbToggle.querySelector('.t-icon');
      if (ic) ic.textContent = a ? '⊟' : '⊞';
      localStorage.setItem('thumbs', a ? '1' : '0');
    });
  }

  countVisible();
})();
</script>
