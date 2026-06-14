---
name: web-design-classkru
description: ใช้สกิลนี้ทุกครั้งที่ต้องสร้าง แก้ไข หรือออกแบบหน้าเว็บ/หน้าจอของ ClassKru (เว็บแอปครูไทย) ทั้ง HTML, CSS, layout, component, หน้า dashboard, หน้า mobile, sidebar, navbar, modal, card, form, table. Triggers: "ออกแบบหน้า", "แก้หน้าเว็บ", "ทำ UI", "สร้างหน้า", "design system", "เพิ่มปุ่ม", "ปรับ layout", "หน้า mobile/desktop", หรือชื่อไฟล์ .html ใน classroom-app. ใช้สกิลนี้เพื่อให้ทุกหน้าใช้ design token + หลักการ Hybrid Device เดียวกัน ไม่หลุดธีม.
---

# Web Design — ClassKru

สกิลนี้คุมให้ทุกหน้าเว็บของ ClassKru หน้าตาเป็นชุดเดียวกัน ใช้ token เดียวกัน และทำตามหลัก **Hybrid Device Design** เสมอ

## หลักการสำคัญที่สุด — Hybrid Device Design

ออกแบบทุกหน้าโดยถามก่อนว่า "หน้านี้ครูใช้ตอนไหน":

- **Mobile = Action (ลงมือทำ)** — เช็คชื่อ, ให้คะแนนเร็ว, ดูคาบถัดไป. เน้นปุ่มใหญ่ แตะง่าย ทำงานเสร็จใน 1-2 แตะ. มี bottom nav (`.m-bn`).
- **Desktop = Insight (ดูภาพรวม)** — สถิติ, รายงาน, กราฟ, ตารางทั้งห้อง, จัดการข้อมูล. มี sidebar กว้าง 260px (`--sidebar-w`).

อย่ายัดฟีเจอร์ insight หนักๆ ลง mobile และอย่าทำ action ทีละขั้นบนจอ desktop ที่ควรเห็นทุกอย่างพร้อมกัน

## Design Tokens — ใช้ตัวแปรเสมอ ห้าม hardcode สี

วาง `:root` ชุดนี้ทุกหน้า (คัดลอกจาก index.html ของจริง):

```css
:root{
  --primary:#1d9e75;--pk:#0f6e56;--pbg:#f0fdf4;--pbd:#86efac;
  --bg:#f5f7fa;--card:#fff;--text:#0f172a;--muted:#64748b;--border:#e8edf2;
  --sh:0 1px 4px rgba(0,0,0,.06);--sh-md:0 4px 16px rgba(0,0,0,.10);
  --tr:all .18s cubic-bezier(.4,0,.2,1);
  --sidebar-w:260px;
}
html,body{font-family:'Sarabun',sans-serif;background:var(--bg);color:var(--text);}
```

กฎ:
- สีหลัก = `var(--primary)` (เขียว #1d9e75) เท่านั้น state active/hover ใช้ `--pbg` (พื้นอ่อน) + `--primary`
- ฟอนต์ = **Sarabun** ทุกที่ (โหลดจาก Google Fonts) — ภาษาไทยต้องอ่านง่าย
- มุมโค้ง: ปุ่ม/การ์ด 12-16px, pill 20px
- เงา: ใช้ `--sh` / `--sh-md` ไม่ตั้งค่าเงาเอง

## Component patterns (ลอกจากของจริง)

ปุ่มหลัก:
```html
<button class="btn btn-primary">บันทึก</button>
```

CTA เต็มความกว้าง (ใช้บน mobile):
```html
<button class="next-cta">เช็คชื่อคาบนี้</button>
```

Bottom nav item (mobile):
```html
<button class="m-bn active">
  <svg .../><span>หน้าหลัก</span>
</button>
```

Sidebar link (desktop):
```html
<a class="d-sb-link active">...</a>
```

ไอคอน: ใช้ inline SVG stroke style (`stroke="var(--primary)"`, `stroke-width:1.8`, `stroke-linecap:round`) ให้เข้าชุดกับที่มีอยู่ ไม่ผสมไอคอน fill

## Workflow เมื่อแก้/สร้างหน้า

1. อ่านไฟล์หน้าที่ใกล้เคียงที่สุดใน `classroom-app/` ก่อน (เช่น `index.html`, `dashboard.html`, `attendance.html`) เพื่อลอก pattern จริง
2. ตัดสินใจ Mobile-action หรือ Desktop-insight
3. ใช้ token + class ที่มีอยู่ ไม่ประดิษฐ์ใหม่ถ้าซ้ำได้
4. ข้อมูลทุกอย่างอ่าน/เขียนผ่าน `window.CK` (ดู `ck-data.js`) — ห้ามแตะ localStorage ตรงๆ
5. ทดสอบ responsive ทั้งสองขนาดก่อนส่ง

## อย่าทำ

- อย่า hardcode สี hex นอก `:root`
- อย่าใช้ฟอนต์อื่นนอกจาก Sarabun
- อย่าเขียน CSS ซ้ำกับ class ที่มีอยู่แล้ว
- อย่าทำ mobile กับ desktop ให้เหมือนกันเป๊ะ — คนละเป้าหมาย
