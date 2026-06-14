# 🚀 คู่มือ Deploy ClassKru ขึ้น Vercel

> เปิดไฟล์นี้ทุกครั้งที่แก้โค้ดเสร็จแล้วอยากให้เว็บจริงอัปเดต
> เว็บจริง: **https://classkru-app.vercel.app**

---

## 💬 ประโยคสั่งเปิดแชทใหม่ (copy ไปวางได้เลย)

> เคล็ดลับ: ใส่คำว่า **"ClassKru"** + **"Vercel"** เสมอ เพื่อให้ผมดึงความจำ deploy ที่ถูกต้องขึ้นมาทันที

**แก้โค้ด + deploy:**
```
เปิดโปรเจกต์ ClassKru แก้ [บอกว่าจะแก้อะไร] แล้ว deploy ขึ้น Vercel
```

**แก้เองเสร็จแล้ว อยากให้แค่ deploy:**
```
เปิด ClassKru แล้ว deploy ขึ้น Vercel ตาม DEPLOY.md
```

**เช็คว่าเว็บอัปเดตหรือยัง:**
```
เช็คว่า classkru-app.vercel.app อัปเดตล่าสุดหรือยัง
```

---

## ⚡ ขั้นตอนเร็ว (ทำตามนี้ทุกครั้ง)

### 1. Push โค้ดขึ้น GitHub

เปิด Terminal แล้ว copy คำสั่งนี้ทีละบรรทัด:

```bash
cd "/Users/supakit/Claude/Projects/Thai Curriculum Copilot"
git add -A
git commit -m "อธิบายว่าแก้อะไร"
git push origin main:master
```

> ⚠️ **สำคัญ:** ต้องใช้ `main:master` (ไม่ใช่ `master` เฉย ๆ)
> เพราะในเครื่องเรามี branch `main` แต่ Vercel ใช้ branch `master`
> ถ้าพิมพ์ `git push origin master` จะ error → ใช้ `main:master` เสมอ

ถ้าสำเร็จจะเห็น: `xxxxxxx..yyyyyyy  main -> master`

### 2. รอ Vercel build (~1 นาที)

ปกติ Vercel จะ build + deploy เองอัตโนมัติหลัง push

### 3. เช็คว่าขึ้น Production หรือยัง

ไปที่ **vercel.com → classroom-app → Deployments**
ดูแถวบนสุด — ต้องมีป้าย **🔵 Production** (สีน้ำเงิน)

- ✅ ถ้าป้าย **Production** อยู่ที่ commit ใหม่ = เสร็จแล้ว!
- ⚠️ ถ้าป้าย **Preview** (ไม่ใช่ Production) = ต้อง Promote เอง (ดูข้างล่าง)

### 4. เปิดเว็บเช็ค

เปิด https://classkru-app.vercel.app แล้วกด **Cmd + Shift + R** (hard refresh)

---

## 🔧 ถ้า deploy ใหม่ติดป้าย "Preview" (ต้อง Promote เอง)

1. vercel.com → **classroom-app** → **Deployments**
2. แถวบนสุด (commit ใหม่) → คลิก **⋯** (จุด 3 จุด ขวาสุด)
3. เลือก **Promote to Production**
4. ในหน้าต่างยืนยัน เช็คว่า:
   - commit ถูกตัว
   - alias ไป **classkru-app.vercel.app** (ติ๊กถูก)
5. กด **Promote to Production**

---

## 📌 ข้อมูลสำคัญ (กันสับสน)

| รายการ | ค่าที่ถูกต้อง |
|--------|--------------|
| Vercel project | **classroom-app** |
| เว็บจริง | **classkru-app.vercel.app** |
| GitHub repo | **classkru-admin/classkru-app** (มี `-app`) |
| Branch ที่ Vercel ใช้ | **master** |
| Branch ในเครื่องเรา | **main** |
| คำสั่ง push | `git push origin main:master` |

### ⚠️ จุดที่เคยทำให้งง

1. **มี GitHub repo 2 ตัว** — `classkru` (ผิด) กับ `classkru-app` (ถูก)
   Vercel ต้องผูกกับ **classkru-app** เท่านั้น
   เช็คที่: Settings → Git → Connected Git Repository

2. **branch ไม่ตรงกัน** — เครื่องเรา = `main`, Vercel = `master`
   → ต้อง push แบบ `main:master`

3. **ถ้าต้อง Connect repo ใหม่** — เลือก **GitHub** เท่านั้น
   (อย่าเผลอเลือก GitLab — จะพาไปหน้าสมัครผิด)

---

## ❌ อย่าทำ

- อย่า push `git push origin master` เฉย ๆ (จะ error)
- อย่าผูก Vercel กับ repo `classkru` (ตัวไม่มี `-app`)
- อย่าแก้ Root Directory ใน Vercel (ไม่ใช่ต้นเหตุ ปมจริงคือ repo/branch/promote)

---

_อัปเดตล่าสุด: 14 มิ.ย. 2569 — หลังแก้ปัญหา "ตารางสอน" ไม่ขึ้นบน desktop sidebar_
