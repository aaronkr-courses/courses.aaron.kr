---
layout: default
title: Office Hours
description: Office hours, campus schedule, and contact information for Prof. Aaron Snowberger. KakaoTalk for quick questions; office hours held after class at each campus Monday through Friday.
permalink: /office-hours/
---

<div class="wrap">
<header class="page-header" data-waves>
  {% include today_pill.html %}
  <p class="eyebrow animate d1">
    <span class="lang-en">Availability &amp; Contact</span>
    <span class="lang-ko">가용성 및 연락처</span>
  </p>
  <h1 class="animate d2">Office<br><em>Hours</em></h1>
  <p class="hero-desc animate d3">
    <span class="lang-en">I teach at a different campus each weekday. Office hours are held after class at that day&rsquo;s campus. For quick questions, <strong style="color:var(--text)">KakaoTalk is always the fastest route</strong>.</span>
    <span class="lang-ko">매일 다른 캠퍼스에서 강의합니다. 상담 시간은 그 날 강의 후 해당 캠퍼스에서 진행됩니다. 빠른 질문은 <strong style="color:var(--text)">카카오톡이 가장 빠릅니다</strong>.</span>
  </p>
  <div class="hero-wave-ctrl">
    <button class="wave-btn ctrl-btn" aria-label="Toggle wave animation">🌊</button>
  </div>
</header>
<div class="oh-page">

  {%- comment -%}
    Vacation banner: populated at runtime from _data/office_hours.yml's
    `vacation` list via TodayPill.status() (see script at bottom of page).
    Do not hardcode dates/copy here — edit _data/office_hours.yml instead.
  {%- endcomment -%}
  <div id="vacation-status" class="season-notice" style="display:none">
    <span class="season-icon">☀</span>
    <div class="season-body">
      <strong><span class="lang-en" id="vac-title-en"></span><span class="lang-ko" id="vac-title-ko"></span></strong>
      <p>
        <span class="lang-en" id="vac-body-en"></span>
        <span class="lang-ko" id="vac-body-ko"></span>
      </p>
    </div>
  </div>

  <div class="oh-heading animate d3">
    <span class="oh-label"><span class="lang-en">Weekly Campus Schedule</span><span class="lang-ko">주간 캠퍼스 일정</span></span>
    <span class="oh-line"></span>
  </div>
  <div class="week-grid animate d4" id="week-grid">

  {%- comment -%}
    Data-driven week-grid: reads _data/office_hours.yml `schedule` (day/uni
    assignment) joined with _data/universities.yml (name/logo/campus). Edit
    those two data files to add/remove a day or change which university a
    weekday belongs to — do NOT hardcode day-cards here.
  {%- endcomment -%}
  {%- assign _dn = "_,Monday,Tuesday,Wednesday,Thursday,Friday" | split: "," -%}
  {%- assign _dn_ko = "_,월요일,화요일,수요일,목요일,금요일" | split: "," -%}
  {%- for entry in site.data.office_hours.schedule -%}
    {%- assign _u = nil -%}
    {%- for cand in site.data.universities -%}
      {%- if cand.abbr == entry.uni -%}{%- assign _u = cand -%}{%- endif -%}
    {%- endfor -%}
    {%- if _u -%}
    <div class="day-card" data-day="{{ entry.display_day }}">
      <div class="uni-badge"><img src="{{ _u.logo }}" class="ub-abbr" /></div>
      <div class="day-name"><span class="lang-en">{{ _dn[entry.display_day] }}</span><span class="lang-ko">{{ _dn_ko[entry.display_day] }}</span></div>
      <div class="day-school"><span class="lang-en">{{ _u.name }}</span><span class="lang-ko">{{ _u.name_ko }}</span></div>
      <div class="day-school-kr">{{ _u.short_ko | default: _u.name_ko }} ({{ _u.abbr | upcase }})</div>
      <div class="day-oh">
        <span class="day-oh-label"><span class="lang-en">Office Hours</span><span class="lang-ko">상담 시간</span></span>
        <div class="day-oh-time"><span class="lang-en">After class</span><span class="lang-ko">수업 후</span></div>
        <div class="day-oh-room">{{ _u.campus | default: _u.name_ko }}</div>
      </div>
    </div>
    {%- endif -%}
  {%- endfor -%}

  </div><!-- .week-grid -->

  <div class="oh-heading">
    <span class="oh-label"><span class="lang-en">How to Reach Me</span><span class="lang-ko">연락 방법</span></span>
    <span class="oh-line"></span>
  </div>
  <div class="contact-grid">
    <div class="contact-card c1">
      <span class="contact-rank">① <span class="lang-en">Quickest</span><span class="lang-ko">가장 빠름</span></span>
      <div class="contact-name">KakaoTalk Open Chat</div>
      <p class="contact-desc">
        <span class="lang-en">Best for quick questions, logistics, and anything time-sensitive. I check this throughout the day at all campuses.</span>
        <span class="lang-ko">빠른 질문, 일정 조율, 긴급 사항에 가장 좋습니다. 모든 캠퍼스에서 하루 종일 확인합니다.</span>
      </p>
      <a href="https://open.kakao.com/me/aaronkr" class="contact-link cl-kakao" target="_blank">💬 <span class="lang-en">Open KakaoTalk</span><span class="lang-ko">카카오톡 열기</span></a>
    </div>
    <div class="contact-card c2">
      <span class="contact-rank">② <span class="lang-en">Formal</span><span class="lang-ko">공식 문의</span></span>
      <div class="contact-name">Email</div>
      <p class="contact-desc">
        <span class="lang-en">For formal requests or anything needing a written record. Include your student ID and course. Response within 48 hrs on weekdays.</span>
        <span class="lang-ko">공식 요청이나 기록이 필요한 사항에 적합합니다. 학번과 강좌명을 포함해 주세요. 평일 48시간 이내 답변.</span>
      </p>
      <a href="mailto:{{ site.email }}" class="contact-link cl-email">✉ {{ site.email | replace: '@', ' &#064; ' }}</a>
    </div>
    <div class="contact-card c3">
      <span class="contact-rank">③ <span class="lang-en">In Person</span><span class="lang-ko">직접 방문</span></span>
      <div class="contact-name"><span class="lang-en">On Campus</span><span class="lang-ko">캠퍼스 방문</span></div>
      <p class="contact-desc">
        <span class="lang-en">Find me after class at the campus where I teach that day. No appointment needed during posted OH. For other times, email or book below.</span>
        <span class="lang-ko">해당 요일 강의 후 캠퍼스에서 만날 수 있습니다. 공지된 상담 시간에는 예약 불필요. 그 외 시간은 이메일 또는 아래에서 예약하세요.</span>
      </p>
      <a href="#week-grid" class="contact-link cl-campus">📍 <span class="lang-en">See Weekly Schedule ↑</span><span class="lang-ko">주간 일정 보기 ↑</span></a>
    </div>
  </div>

  <div class="oh-heading">
    <span class="oh-label"><span class="lang-en">Book a Meeting</span><span class="lang-ko">미팅 예약</span></span>
    <span class="oh-line"></span>
  </div>
  <div class="booking-box">
    <div class="booking-header">
      <div>
        <div class="booking-title">Aaron Snowberger <span>cal.com/aaronkr</span></div>
        <div class="booking-meta">
          <span class="lang-en">30 min or 1 hr &middot; Video call or on-campus &middot; Asia/Seoul</span>
          <span class="lang-ko">30분 또는 1시간 &middot; 화상통화 또는 캠퍼스 &middot; 아시아/서울</span>
        </div>
      </div>
    </div>
    <div id="cal-booking" style="width:100%;min-height:630px;overflow:auto;border-bottom:1px solid var(--border);"></div>
    <div class="booking-footer">
      <span class="booking-note">
        <span class="lang-en">ⓘ Powered by Cal.com — open-source scheduling</span>
        <span class="lang-ko">ⓘ Cal.com 제공 — 오픈소스 일정 예약</span>
      </span>
      <a href="https://calendly.com/aaronkr-trainer" target="_blank" class="booking-link">
        <span class="lang-en">Open in Cal.com →</span>
        <span class="lang-ko">Cal.com에서 열기 →</span>
      </a>
    </div>
  </div>

<script type="text/javascript">
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
    if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", { origin: "https://cal.com" });
Cal("inline", {
  elementOrSelector: "#cal-booking",
  calLink: "aaronkr",
  layout: "month_view"
});
Cal("ui", { hideEventTypeDetails: false, layout: "month_view", theme: document.documentElement.getAttribute('data-theme') || 'dark' });
</script>

</div><!-- .oh-page -->
</div><!-- .wrap -->

{% include today_pill_js.html %}
<script>
(function(){
  TodayPill.updatePill();
  var s = TodayPill.status();

  // Office-hours extra: highlight the matching day-card
  if (s.type === 'class') {
    var card = document.querySelector('.day-card[data-day="' + s.day + '"]');
    if (card) {
      card.classList.add('today-card');
      card.insertAdjacentHTML('afterbegin', '<span class="today-chip-sm">Today</span>');
    }
  }

  // Office-hours extra: show the vacation banner (data from _data/office_hours.yml)
  if (s.type === 'vacation' && s.vacation) {
    var el = document.getElementById('vacation-status');
    if (el) {
      el.style.display = 'flex';
      var icon = el.querySelector('.season-icon');
      if (icon) icon.textContent = s.vacation.icon || '☀';
      var setText = function(id, val) { var n = document.getElementById(id); if (n) n.textContent = val || ''; };
      setText('vac-title-en', s.vacation.label_en);
      setText('vac-title-ko', s.vacation.label_ko);
      setText('vac-body-en', s.vacation.body_en);
      setText('vac-body-ko', s.vacation.body_ko);
    }
  }
})();
</script>
