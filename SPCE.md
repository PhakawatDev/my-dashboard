# Todo Kanban Web App  
## เอกสาร Requirement — Phase 1 (Frontend เท่านั้น)

---

## 1. ภาพรวมระบบ

### เป้าหมาย
พัฒนา Web Application สำหรับจัดการงานแบบ Kanban เพื่อใช้งานส่วนตัว

Phase 1 จะเน้นเฉพาะ Frontend โดยใช้ข้อมูล Mock เท่านั้น  
ยังไม่มี CRUD และยังไม่เชื่อมต่อ Backend

---

## 2. ขอบเขตงาน (Phase 1)

### สิ่งที่อยู่ในขอบเขต
- รองรับหลายโปรเจกต์
- มี Kanban board แยกตามโปรเจกต์
- กำหนดสถานะตายตัว 3 สถานะ:
  - TODO (สิ่งที่ต้องทำ)
  - DOING (กำลังทำ)
  - DONE (ทำเสร็จแล้ว)
- ลากการ์ดข้ามคอลัมน์ได้ (Drag & Drop)
- มีหน้า Dashboard สรุปภาพรวมทุกโปรเจกต์
- หน้ารายละเอียด Task แบบอ่านอย่างเดียว (Read-only)
- ใช้ Mock data เท่านั้น (ไม่บันทึกถาวร)

### สิ่งที่ยังไม่ทำใน Phase 1
- ไม่มี Create / Update / Delete (CRUD)
- ไม่มีการเชื่อมต่อ Backend
- ไม่มีการเก็บข้อมูลถาวร (เช่น localStorage หรือ Database)
- ไม่สามารถเพิ่มสถานะใหม่ได้ (Fix 3 สถานะเท่านั้น)
- ไม่มีระบบผู้ใช้งาน (Authentication)

---

## 3. เทคโนโลยีที่ใช้

- Next.js (App Router)
- TypeScript
- Ant Design (UI Components)
- @dnd-kit (สำหรับ Drag & Drop)
- dayjs (จัดการวันที่ โดยใช้ timezone Asia/Bangkok)

---

## 4. เส้นทางหน้า (Routes) และหน้าจอ

### 4.1 หน้า `/projects`
- แสดงรายการโปรเจกต์จาก Mock data
- เมื่อกดเลือกโปรเจกต์ → ไปที่  
  `/projects/[id]/board`

---

### 4.2 หน้า `/projects/[id]/board`

Kanban board มี 3 คอลัมน์ตายตัว:

- TODO
- DOING
- DONE

#### ความสามารถ
- แสดง Task เป็นการ์ด
- ลาก Task ข้ามคอลัมน์ได้
- เมื่อปล่อยการ์ดแล้ว status เปลี่ยนใน state ของหน้า
- คลิกการ์ด → เปิด Drawer หรือ Modal แสดงรายละเอียด (อ่านอย่างเดียว)

#### การแสดงผลบนการ์ด
- Title
- Due Date (ถ้ามี)

---

### 4.3 หน้า `/dashboard`

แสดงสรุปภาพรวมของทุกโปรเจกต์

#### Summary Cards
- จำนวนงานสถานะ TODO
- จำนวนงานสถานะ DOING
- จำนวนงานสถานะ DONE
- จำนวนงาน Overdue
- จำนวนงาน Due Today

#### รายการสั้น ๆ
- งานที่ Overdue (Top N)
- งานที่อยู่ในสถานะ DOING (Top N)

---

## 5. โครงสร้างข้อมูล (Frontend Types)

### Project

```ts
type Project = {
  id: string;
  name: string;
};
```

### Task

```ts
type Task = {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: 'TODO' | 'DOING' | 'DONE';
  dueDate?: string; // รูปแบบ ISO เช่น YYYY-MM-DD
};
```

---

## 6. กติกาการทำงานของระบบ

### สถานะ (Status)
Board ใช้สถานะตายตัว 3 ค่า:
- TODO
- DOING
- DONE

(อนาคตอาจขยายเพิ่มเองได้)

---

### นิยาม Overdue
Task ถือว่าเป็น Overdue เมื่อ:

```
dueDate < วันที่ปัจจุบัน (Asia/Bangkok)
และ status != DONE
```

---

### นิยาม Due Today
Task ถือว่า Due Today เมื่อ:

```
dueDate === วันที่ปัจจุบัน (Asia/Bangkok)
และ status != DONE
```

---

## 7. เงื่อนไข Mock Data

- อย่างน้อย 3 โปรเจกต์
- อย่างน้อย 20 Task
- Task กระจายหลายโปรเจกต์
- ต้องมี:
  - งานที่ Overdue บางส่วน
  - งานที่ Due Today
  - งานที่ครบกำหนดในอนาคต
  - งานที่สถานะ DONE

---

## 8. Acceptance Criteria (เงื่อนไขว่าสำเร็จ)

งานถือว่าสำเร็จเมื่อ:

- หน้า `/projects` แสดงโปรเจกต์ได้ถูกต้อง
- เข้า Board ของโปรเจกต์ได้
- ลาก Task ข้ามคอลัมน์แล้ว status เปลี่ยนทันที
- กด Task แล้วเปิด Drawer/Modal แสดง:
  - Title
  - Description
  - Due Date
- หน้า `/dashboard` คำนวณจำนวนงานและ Overdue ได้ถูกต้อง
- Responsive ใช้งานได้บนหน้าจอมือถือ (คอลัมน์สามารถเลื่อนแนวนอนได้)

---

## 9. สิ่งที่ AI Agent ต้องสร้างให้

- โปรเจกต์ Next.js แบบ App Router
- โครงสร้างโฟลเดอร์:
  - `/app`
  - `/components`
  - `/types`
  - `/data` (Mock data)
  - `/services` (เตรียมไว้สำหรับ Phase 2)
- Kanban board ด้วย dnd-kit
- Dashboard summary logic
- UI ด้วย Ant Design
- TypeScript types ชัดเจน
- รองรับ Responsive

---

## 10. แผน Phase 2 (อนาคต)

- เพิ่ม CRUD
- เพิ่ม Validation (Zod)
- เพิ่มการเก็บข้อมูลถาวร
- เชื่อมต่อ Backend API
- เพิ่ม Priority / Tags / Archive
