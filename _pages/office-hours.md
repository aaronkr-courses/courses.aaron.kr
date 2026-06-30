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

  <div id="summer-status" class="season-notice" style="display:none">
    <span class="season-icon">☀</span>
    <div class="season-body">
      <strong><span class="lang-en">Summer 2026 — Research &amp; Writing Mode</span><span class="lang-ko">2026년 여름 — 연구 및 집필 모드</span></strong>
      <p>
        <span class="lang-en">Spring semester has ended. I am on research leave through August, working on PAI Lab projects and writing. Campus visits are paused — no in-person office hours until September. For urgent matters, KakaoTalk is still monitored. Meetings can be booked via Cal.com below.</span>
        <span class="lang-ko">1학기가 종료되었습니다. 8월까지 PAI 연구소 프로젝트와 집필에 집중하는 연구 휴가 중입니다. 캠퍼스 방문이 중단되어 있으며, 9월까지 대면 상담은 없습니다. 긴급한 사항은 카카오톡으로 연락하세요. 아래 Cal.com을 통해 미팅 예약이 가능합니다.</span>
      </p>
    </div>
  </div>
  <script>
  (function(){
    var m = new Date().getMonth() + 1, d = new Date().getDate();
    if ((m === 6 && d >= 20) || m === 7 || m === 8) {
      var el = document.getElementById('summer-status');
      if (el) el.style.display = 'flex';
    }
  })();
  </script>

  <div class="oh-heading animate d3">
    <span class="oh-label"><span class="lang-en">Weekly Campus Schedule</span><span class="lang-ko">주간 캠퍼스 일정</span></span>
    <span class="oh-line"></span>
  </div>
  <div class="week-grid animate d4" id="week-grid">

    <div class="day-card" data-day="1">
      <div class="uni-badge"><img src="{{ site.data.universities[0].logo }}" class="ub-abbr" /></div>
      <div class="day-name"><span class="lang-en">Monday</span><span class="lang-ko">월요일</span></div>
      <div class="day-school"><span class="lang-en">Korea Transportation Univ.</span><span class="lang-ko">한국교통대학교</span></div>
      <div class="day-school-kr">교통대 (UT)</div>
      <div class="day-oh">
        <span class="day-oh-label"><span class="lang-en">Office Hours</span><span class="lang-ko">상담 시간</span></span>
        <div class="day-oh-time"><span class="lang-en">After class</span><span class="lang-ko">수업 후</span></div>
        <div class="day-oh-room">충주캠퍼스</div>
      </div>
    </div>

    <div class="day-card" data-day="2">
      <div class="uni-badge"><img src="{{ site.data.universities[1].logo }}" class="ub-abbr" /></div>
      <div class="day-name"><span class="lang-en">Tuesday</span><span class="lang-ko">화요일</span></div>
      <div class="day-school"><span class="lang-en">Wonkwang University</span><span class="lang-ko">원광대학교</span></div>
      <div class="day-school-kr">원광대 (WKU)</div>
      <div class="day-oh">
        <span class="day-oh-label"><span class="lang-en">Office Hours</span><span class="lang-ko">상담 시간</span></span>
        <div class="day-oh-time"><span class="lang-en">After class</span><span class="lang-ko">수업 후</span></div>
        <div class="day-oh-room">익산캠퍼스</div>
      </div>
    </div>

    <div class="day-card" data-day="3">
      <div class="uni-badge"><img src="{{ site.data.universities[3].logo }}" class="ub-abbr" /></div>
      <div class="day-name"><span class="lang-en">Wednesday</span><span class="lang-ko">수요일</span></div>
      <div class="day-school"><span class="lang-en">Hanbat University</span><span class="lang-ko">한밭대학교</span></div>
      <div class="day-school-kr">한밭대 (HB)</div>
      <div class="day-oh">
        <span class="day-oh-label"><span class="lang-en">Office Hours</span><span class="lang-ko">상담 시간</span></span>
        <div class="day-oh-time"><span class="lang-en">After class</span><span class="lang-ko">수업 후</span></div>
        <div class="day-oh-room">대전캠퍼스</div>
      </div>
    </div>

    <div class="day-card" data-day="4">
      <div class="uni-badge"><img src="{{ site.data.universities[2].logo }}" class="ub-abbr" /></div>
      <div class="day-name"><span class="lang-en">Thursday</span><span class="lang-ko">목요일</span></div>
      <div class="day-school"><span class="lang-en">Jeonbuk National Univ.</span><span class="lang-ko">전북대학교</span></div>
      <div class="day-school-kr">전북대 (JBNU)</div>
      <div class="day-oh">
        <span class="day-oh-label"><span class="lang-en">Office Hours</span><span class="lang-ko">상담 시간</span></span>
        <div class="day-oh-time"><span class="lang-en">After class</span><span class="lang-ko">수업 후</span></div>
        <div class="day-oh-room">전주캠퍼스</div>
      </div>
    </div>

    <div class="day-card" data-day="5">
      <div class="uni-badge"><img src="{{ site.data.universities[4].logo }}" class="ub-abbr" /></div>
      <div class="day-name"><span class="lang-en">Friday</span><span class="lang-ko">금요일</span></div>
      <div class="day-school"><span class="lang-en">Jeonju Natl. Univ. of Ed.</span><span class="lang-ko">전주교육대학교</span></div>
      <div class="day-school-kr">전주교육대 (JNUE)</div>
      <div class="day-oh">
        <span class="day-oh-label"><span class="lang-en">Office Hours</span><span class="lang-ko">상담 시간</span></span>
        <div class="day-oh-time"><span class="lang-en">After class</span><span class="lang-ko">수업 후</span></div>
        <div class="day-oh-room">전주캠퍼스</div>
      </div>
    </div>

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
  // Office-hours extra: highlight the matching day-card
  var s = TodayPill.status();
  if (s.type === 'class') {
    var card = document.querySelector('.day-card[data-day="' + s.day + '"]');
    if (card) {
      card.classList.add('today-card');
      card.insertAdjacentHTML('afterbegin', '<span class="today-chip-sm">Today</span>');
    }
  }
})();
</script>
