# 🎨 วิธีแก้สี/ขนาด ทั้งระบบ (Design System)

> มีไฟล์เดียวคุมสี/ขนาด/ฟอนต์ทั้งแอป: **`ck-theme.css`**
> แก้ที่ไฟล์นี้ที่เดียว → ทุกหน้าที่ link ไว้เปลี่ยนตามทันที

---

## 🟢 อยากเปลี่ยนสีหลัก (เขียว → สีอื่น)

เปิด `ck-theme.css` แก้ 4 บรรทัดนี้:
```css
--primary:    #1d9e75;   /* สีหลัก */
--primary-dk: #0f6e56;   /* เข้มกว่า (ตอน hover) */
--primary-bg: #f0fdf4;   /* อ่อนมาก (พื้นหลัง) */
--primary-bd: #86efac;   /* ขอบ */
```
เปลี่ยนปุ๊บ ทุกหน้าที่ใช้ theme เปลี่ยนหมด

## 📏 อยากเปลี่ยนขนาดมุมโค้ง / เงา / ขนาดตัวอักษร
```css
--radius:   16px;     /* มุมโค้งการ์ด */
--fz-title: 14px;     /* ขนาดหัวข้อ */
--fz-body:  14px;     /* ขนาดข้อความ */
--sh-md: 0 4px 16px rgba(0,0,0,.10);  /* เงา */
```

---

## ✅ หน้าที่ใช้ theme แล้ว — ครบทั้ง 10 หน้า
index, attendance, report, settings, schedule, subjects, setup, onboard, login, room-detail

> เปลี่ยนสี/ขนาดที่ `ck-theme.css` = เปลี่ยนทั้ง 10 หน้าพร้อมกัน
> บางหน้ามี override เฉพาะตัว (เงา/สี tab) เก็บไว้ใน :root ของหน้านั้น

> วิธีทำหน้าใหม่ให้ใช้ theme: เพิ่ม `<link href="ck-theme.css" rel="stylesheet">`
> ใน <head> แล้วลบ :root เดิมในไฟล์ออก (เหลือเฉพาะค่าที่ต่างจาก theme)

---

## 🧪 ทดสอบก่อนเชื่อ
เปิด 2 หน้านี้ในคอมเทียบกับเวอร์ชันเดิม — **ต้องเหมือนเดิมเป๊ะ** (เพราะแค่ย้ายค่า ไม่เปลี่ยนค่า):
- `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/index.html`
- `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/attendance.html`

แล้วลองแก้ `--primary` ใน ck-theme.css เป็นสีอื่น (เช่น `#2563eb` น้ำเงิน) refresh ดู → ถ้าทั้ง 2 หน้าเปลี่ยนสีพร้อมกัน = ระบบทำงาน! (อย่าลืมเปลี่ยนกลับ)

---

_สร้าง: 14 มิ.ย. 2569 — นำร่อง index + attendance_
