'use client';

import { Drawer, Typography, Tag } from 'antd';
import { Task } from '@/types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const { Title, Text } = Typography;

interface TaskDrawerProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
}

export default function TaskDrawer({ task, open, onClose }: TaskDrawerProps) {
  const getDueDateColor = (dueDate?: string) => {
    if (!dueDate) return 'default';
    
    const today = dayjs().tz('Asia/Bangkok').startOf('day');
    const due = dayjs(dueDate).startOf('day');
    const diffDays = due.diff(today, 'day');
    
    if (diffDays < 0) return 'red';
    if (diffDays === 0) return 'orange';
    if (diffDays <= 3) return 'gold';
    return 'green';
  };

  const getDueDateText = (dueDate?: string) => {
    if (!dueDate) return 'No due date';
    
    const today = dayjs().tz('Asia/Bangkok').startOf('day');
    const due = dayjs(dueDate).startOf('day');
    const diffDays = due.diff(today, 'day');
    
    if (diffDays < 0) return `Overdue (${Math.abs(diffDays)} days) - ${dayjs(dueDate).format('MMM DD, YYYY')}`;
    if (diffDays === 0) return `Due Today - ${dayjs(dueDate).format('MMM DD, YYYY')}`;
    if (diffDays === 1) return `Due Tomorrow - ${dayjs(dueDate).format('MMM DD, YYYY')}`;
    return `Due in ${diffDays} days - ${dayjs(dueDate).format('MMM DD, YYYY')}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'TODO': return 'blue';
      case 'DOING': return 'green';
      case 'DONE': return 'purple';
      default: return 'default';
    }
  };

  if (!task) return null;

  return (
    <Drawer
      title={task.title}
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
    >
      <div style={{ marginBottom: 16 }}>
        <Text strong>Status:</Text>
        <div style={{ marginTop: 4 }}>
          <Tag color={getStatusColor(task.status)}>
            {task.status}
          </Tag>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Text strong>Due Date:</Text>
        <div style={{ marginTop: 4 }}>
          <Tag color={getDueDateColor(task.dueDate)}>
            {getDueDateText(task.dueDate)}
          </Tag>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Text strong>Description:</Text>
        <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
          {task.description || 'No description provided'}
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Text strong>Project ID:</Text>
        <div style={{ marginTop: 4 }}>
          <Text code>{task.projectId}</Text>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Text strong>Task ID:</Text>
        <div style={{ marginTop: 4 }}>
          <Text code>{task.id}</Text>
        </div>
      </div>
    </Drawer>
  );
}
