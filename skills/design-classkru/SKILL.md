---
name: design-classkru
description: ใช้สกิลนี้ทุกครั้งที่ต้องออกแบบสื่อการสอนหรือ component ที่ต้องผูกกับตัวชี้วัดหลักสูตรแกนกลาง วิทยาศาสตร์ ม.3 — worksheet, quiz, ใบงาน, แบบฝึกหัด, rubric, PowerPoint outline, การ์ดตัวชี้วัด, layout เอกสาร. Triggers: "ออกแบบใบงาน", "ทำ worksheet", "สร้างข้อสอบ", "rubric", "ออกแบบสื่อ", "PowerPoint", "ตัวชี้วัด", "ว 1.x", "ม.3/x". สกิลนี้คุมว่าทุกสื่อต้อง map กับตัวชี้วัดเสมอ และมีโครงสร้าง/ดีไซน์เป็นแบบเดียวกัน.
---

# Design — สื่อตามตัวชี้วัด (ClassKru / Curriculum Copilot)

สกิลนี้ใช้ออกแบบ "สื่อการสอนที่อ้างอิงตัวชี้วัด" ของวิทยาศาสตร์ ม.3 (Phase 1 MVP — ห้ามขยายวิชาอื่นก่อนพิสูจน์ตลาด)

## กฎเหล็ก — ทุกสื่อต้อง map ตัวชี้วัด

ทุกชิ้นงานต้องระบุชัดเจนว่าตรงกับตัวชี้วัดใด เช่น `ว 1.3 ม.3/1` นี่คือจุดขายเดียวที่ต่างจากใบงานทั่วไปในตลาด อ่านรายการตัวชี้วัดจริงจาก `curriculum-copilot/indicators_m3.md` เสมอก่อนออกแบบ

โครงข้อมูลอ้างอิง:
```
Subject → Grade → Learning Standard (ว 1.3) → Indicator (ว 1.3 ม.3/1) → Resources
```

## ชุดผลลัพธ์มาตรฐานต่อ 1 ตัวชี้วัด

เมื่อออกแบบสื่อสำหรับตัวชี้วัดหนึ่ง ให้ครบชุดนี้ (ตามที่ไฟล์จริงใน `curriculum-copilot/` ทำไว้):

1. จุดประสงค์การเรียนรู้ (Learning Objectives)
2. ความคิดรวบยอด (Key Concepts)
3. คำศัพท์ (Vocabulary)
4. ใบงาน (Worksheet)
5. แบบทดสอบ (Quiz)
6. เฉลย (Answer Key)
7. กิจกรรมในชั้นเรียน (Classroom Activities)
8. เกณฑ์ประเมิน (Assessment Rubric)
9. การบ้าน (Homework)
10. โครง PowerPoint (PowerPoint Outline)

## ประเภท Worksheet ที่รองรับ

Multiple Choice · Matching · Fill in the Blank · True/False · Short Answer · Data Analysis · Graph Interpretation · Scientific Reasoning

## ประเภท Quiz

Easy · Medium · Hard · O-NET Style · PISA Style — ระบุระดับความยากชัดเจนทุกชุด

## ประเภทกิจกรรม

Individual · Pair Work · Group Work · STEM Activity · Inquiry-Based Learning

## หลักการออกแบบ (Design Principle)

เป้าหมายของครู: จาก **"พรุ่งนี้ต้องสอนตัวชี้วัดนี้"** → **"มีชุดสื่อพร้อมสอนครบ"** ภายใน 1 นาที

- ออกแบบให้พร้อมพิมพ์/พร้อมใช้ ไม่ใช่แค่ร่าง
- ภาษาไทยถูกต้อง ระดับชั้น ม.3 อ่านเข้าใจ ใช้ฟอนต์ **Sarabun**
- ทุกเอกสารมีหัวกระดาษระบุ: วิชา / ระดับชั้น / สาระ / ตัวชี้วัด
- ถ้าออกเป็นไฟล์เอกสาร ใช้สกิล `docx` / `pptx` / `pdf` ร่วมด้วย; ถ้าเป็น UI ในเว็บ ใช้ token จากสกิล `web-design-classkru`

## ตัวชี้วัดความสำเร็จ

อย่าวัดที่จำนวนใบงาน วัดที่ **"ประหยัดเวลาเตรียมสอนของครูไปกี่นาที"**

## Workflow

1. รับ: ระดับชั้น → วิชา → สาระ → ตัวชี้วัด
2. เปิด `indicators_m3.md` ตรวจว่าตัวชี้วัดมีจริงและเนื้อหาตรง
3. ดูไฟล์ตัวอย่างใน `curriculum-copilot/` (เช่น `02_worksheets_v111m31.docx`) เป็นแม่แบบโครงสร้าง
4. ออกแบบครบชุด 10 รายการ หรือตามที่ครูเลือก
5. ติดป้ายตัวชี้วัดบนทุกชิ้น
