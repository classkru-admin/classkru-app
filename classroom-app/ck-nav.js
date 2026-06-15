/* ============================================================
   ck-nav.js — เมนูกลาง ClassKru (desktop sidebar + mobile bottom nav)
   ------------------------------------------------------------
   แก้เมนูที่เดียวจบทั้งระบบ. ทุกหน้าใส่ 2 mount point:
     <div id="ck-sidebar"></div>      ← ตำแหน่ง desktop sidebar
     <div id="ck-bottomnav"></div>    ← ตำแหน่ง mobile bottom nav
   แล้วโหลดสคริปต์นี้ท้าย <body>:
     <script src="ck-nav.js"></script>

   active state: auto-detect จากชื่อไฟล์ปัจจุบัน
   หรือบังคับด้วย <body data-page="report"> (key = ค่าในเมนูด้านล่าง)

   *หมายเหตุ: ไม่แตะ CSS เดิม — ใช้ class เดิมทุกตัว
     .d-sidebar .d-sb-logo .d-sb-sec .d-sb-link .active .d-sb-spacer .d-sb-date
     .m-bottom-nav .m-bn .active
   หน้าตาจึงเหมือนเดิมเป๊ะ
   ============================================================ */
(function () {
  'use strict';

  // ── โครงเมนู: แก้ที่นี่ที่เดียว ──────────────────────────
  // key       = ใช้เทียบ active (ตรงกับชื่อไฟล์ตัดนามสกุล / data-page)
  // file      = ปลายทางเมื่อคลิก
  // label     = ข้อความเมนู
  // icon      = inner SVG (ไม่รวม <svg> tag, ระบบใส่ wrapper ให้)
  var MENU = [
    {
      key: 'index', file: 'index.html', label: 'หน้าหลัก',
      icon: '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>'
    },
    {
      key: 'schedule', file: 'schedule.html', label: 'ตารางสอน',
      icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>'
    },
    {
      key: 'attendance', file: 'attendance.html', label: 'เช็คชื่อ',
      icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/>'
    },
    {
      key: 'report', file: 'report.html', label: 'ห้องเรียน',
      icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'
    },
    {
      key: 'settings', file: 'settings.html', label: 'ตั้งค่า',
      icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>'
    }
  ];

  // หน้าที่ active โยงเมนูอื่น (เช่น room-detail นับเป็น "สถิติ")
  var PAGE_ALIAS = {
    'room-detail': 'report',
    'subjects': 'index',
    'setup': 'settings',
    'onboard': 'index'
  };

  // ── go(): นำทาง — ถ้าหน้ามี go() ของตัวเองอยู่แล้วจะไม่ทับ ──
  if (typeof window.go !== 'function') {
    window.go = function (url) { location.href = url; };
  }

  // ── หาว่า active หน้าไหน ───────────────────────────────────
  function currentKey() {
    var forced = document.body && document.body.getAttribute('data-page');
    if (forced) return forced;
    var path = (location.pathname.split('/').pop() || 'index.html');
    var base = path.replace(/\.html?$/i, '') || 'index';
    return PAGE_ALIAS[base] || base;
  }

  // ── render desktop sidebar ────────────────────────────────
  function renderSidebar(active) {
    var links = MENU.map(function (m) {
      var isActive = (m.key === active);
      // หน้า active ไม่ต้องมี onclick (เหมือน markup เดิม)
      var onclick = isActive ? '' : ' onclick="go(\'' + m.file + '\')"';
      return '<a class="d-sb-link' + (isActive ? ' active' : '') + '"' + onclick + '>' +
        '<svg viewBox="0 0 24 24">' + m.icon + '</svg>' + m.label +
        '</a>';
    }).join('\n    ');

    return '' +
      '<div class="d-sb-logo">' +
        '<img src="classkru-logo.png" alt="ClassKru" style="height:68px;width:auto;">' +
      '</div>\n    ' +
      '<div class="d-sb-sec">เมนู</div>\n    ' +
      links + '\n    ' +
      '<div class="d-sb-spacer"></div>\n    ' +
      '<div class="d-sb-date" id="d-sb-date"></div>';
  }

  // ── render mobile bottom nav ──────────────────────────────
  function renderBottomNav(active) {
    return MENU.map(function (m) {
      var isActive = (m.key === active);
      var onclick = isActive ? '' : ' onclick="go(\'' + m.file + '\')"';
      return '<button class="m-bn' + (isActive ? ' active' : '') + '"' + onclick + '>' +
        '<svg viewBox="0 0 24 24">' + m.icon + '</svg>' +
        '<span>' + m.label + '</span>' +
        '</button>';
    }).join('\n    ');
  }

  // ── mount ─────────────────────────────────────────────────
  function mount() {
    var active = currentKey();

    var sb = document.getElementById('ck-sidebar');
    if (sb) {
      // ใส่ class d-sidebar ให้ mount point เอง เพื่อใช้ CSS เดิม
      sb.className = 'd-sidebar';
      if (sb.tagName.toLowerCase() !== 'aside') {
        // ถ้า mount เป็น div ก็ยังใช้งานได้ (CSS อิง class ไม่ใช่ tag)
      }
      sb.innerHTML = renderSidebar(active);
    }

    var bn = document.getElementById('ck-bottomnav');
    if (bn) {
      bn.className = 'm-bottom-nav';
      bn.innerHTML = renderBottomNav(active);
    }

    // เติมวันที่ใน sidebar (เดิมบางหน้าทำเอง — ทำให้ที่เดียว ถ้า element ว่าง)
    var dateEl = document.getElementById('d-sb-date');
    if (dateEl && !dateEl.textContent.trim()) {
      try {
        var th = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'];
        var mo = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
        var d = new Date();
        dateEl.textContent = 'วัน' + th[d.getDay()] + ' ' + d.getDate() + ' ' + mo[d.getMonth()] + ' ' + (d.getFullYear() + 543);
      } catch (e) {}
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

  // เผื่อหน้าต้องการเรียกซ้ำ
  window.CKNav = { mount: mount, menu: MENU };
})();
