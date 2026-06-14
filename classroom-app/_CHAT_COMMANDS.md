# 💬 ชุดข้อความสำหรับแชทใหม่ (copy ไปวางได้เลย)

---

## 1️⃣ เปิดพรีวิวหน้าในคอม (ตอนแก้ดีไซน์)

```
เปิดโปรเจกต์ ClassKru ฉันกำลังแก้ดีไซน์ในคอม (สี/ขนาด/ตำแหน่ง การ์ด ข้อความ)
ยังไม่ลงเว็บ ช่วยเปิดลิงก์พรีวิวหน้าในคอมให้ฉันเช็คด้วย
คุณเป็นทีมหลังบ้าน ไม่ต้องแก้ดีไซน์ แค่เปิดพรีวิว + เตรียมพร้อม push ตอนฉันสั่ง
```

---

## 2️⃣ ลิงก์พรีวิวทุกหน้า (เปิดในเบราว์เซอร์เองได้เลย)

> วาง URL พวกนี้ในเบราว์เซอร์เพื่อดูหน้าในคอม (ไม่ต้องผ่านเว็บ)

| หน้า | ลิงก์พรีวิว |
|------|------------|
| หน้าหลัก | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/index.html` |
| ตารางสอน | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/schedule.html` |
| เช็คชื่อ | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/attendance.html` |
| สถิติ/รายงาน | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/report.html` |
| ตั้งค่า | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/settings.html` |
| วิชา | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/subjects.html` |
| ตั้งค่าเริ่มต้น | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/setup.html` |
| onboard | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/onboard.html` |
| login | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/login.html` |
| รายละเอียดห้อง | `file:///Users/supakit/Claude/Projects/Thai Curriculum Copilot/classroom-app/room-detail.html` |

> 💡 ถ้าใช้ Live Server (localhost) แทน file:// ก็ใช้ `http://localhost:5500/index.html` ได้ตามที่เปิดไว้

---

## 3️⃣ ตอนแก้ดีไซน์เสร็จ พร้อมลงเว็บ

```
ClassKru แก้ดีไซน์เสร็จแล้ว ช่วย push ลงเว็บให้ที
ตรวจให้เรียบร้อยก่อนว่าไม่มี link เสีย แล้ว push + promote ขึ้น Vercel ให้ครบ
```

> ผมจะจัดการ: ตรวจ link → push `main:master` → ตั้ง/เช็ค auto-deploy → promote production → ยืนยันเว็บอัปเดต

---

## 4️⃣ ตอนพร้อมทำ Nav Component (หลังดีไซน์นิ่ง)

```
ClassKru ดีไซน์นิ่งแล้ว ช่วยทำ nav component กลางตาม _BACKEND_TODO.md ให้ที
```

---

## ⚠️ กฎทองตอน push (กันปัญหาเหมือนรอบก่อน)

- repo = **classkru-app** (ไม่ใช่ classkru)
- push ด้วย **`git push origin main:master`** เสมอ
- ถ้า deploy ติด **Preview** → ต้อง **Promote to Production**
- รายละเอียดเต็มดู `DEPLOY.md`

---

_อัปเดต: 14 มิ.ย. 2569_
