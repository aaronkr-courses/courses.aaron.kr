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

    {%- include archive_filters.html -%}
    <div class="hero-wave-ctrl">
      <button class="wave-btn ctrl-btn" aria-label="Toggle wave animation">🌊</button>
    </div>
  </header>

  <main id="archive-main" style="padding:32px 0 80px;">
    {%- for cat in site.course_categories -%}
      {%- assign cat_courses = site.courses | where: "category", cat.key | where_exp: "c", "c.visible != false" | sort: "importance" -%}
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
            {%- include topic_tag.html course=course -%}
            <li>
              <a class="archive-item{% if course.grad %} grad-item{% endif %}"
                 href="{{ course.url | relative_url }}"
                 data-uni="{{ _uni }}"
                 data-sem="{{ course.category }}"
                 data-topic="{{ _topics_str }}"
                 data-level="{% if course.grad %}grad{% else %}undergrad{% endif %}"
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
                      {%- for _cls in _tc_list -%}
                        {%- assign _lbl = _tl_list[forloop.index0] -%}
                        <span class="item-tag {{ _cls }}">{{ _lbl }}</span>
                      {%- endfor -%}
                      {%- if course.grad -%}<span class="item-tag grad-tag">🎓 <span class="lang-en">Grad</span><span class="lang-ko">대학원</span></span>{%- endif -%}
                      {%- if course.intensive -%}<span class="item-tag intensive-tag">❄ <span class="lang-en">Intensive</span><span class="lang-ko">계절학기</span></span>{%- endif -%}
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
  let activeLevel = 'all';
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
      const topicOk = activeTopic === 'all' || row.dataset.topic.split(' ').includes(activeTopic);
      const levelOk = activeLevel === 'all' || row.dataset.level === activeLevel;
      li.classList.toggle('arch-hidden', !(semOk && uniOk && topicOk && levelOk));
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
      if (group === 'level') activeLevel = val;
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
