'use client';

import { Task } from '@/types';
import { Card, Tag } from 'antd';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

export default function TaskCard({ task, onClick }: TaskCardProps) {
  const getDueDateColor = (dueDate?: string) => {
    if (!dueDate) return 'default';
    
    const today = dayjs().tz('Asia/Bangkok').startOf('day');
    const due = dayjs(dueDate).startOf('day');
    const diffDays = due.diff(today, 'day');
    
    if (diffDays < 0) return 'red'; // overdue
    if (diffDays === 0) return 'orange'; // due today
    if (diffDays <= 3) return 'gold'; // due soon
    return 'green'; // future
  };

  const getDueDateText = (dueDate?: string) => {
    if (!dueDate) return '';
    
    const today = dayjs().tz('Asia/Bangkok').startOf('day');
    const due = dayjs(dueDate).startOf('day');
    const diffDays = due.diff(today, 'day');
    
    if (diffDays < 0) return `Overdue (${Math.abs(diffDays)} days)`;
    if (diffDays === 0) return 'Due Today';
    if (diffDays === 1) return 'Due Tomorrow';
    return `Due in ${diffDays} days`;
  };

  return (
    <Card
      size="small"
      hoverable
      onClick={onClick}
      style={{ 
        marginBottom: 8, 
        cursor: 'pointer',
        borderLeft: `4px solid ${
          task.status === 'TODO' ? '#1890ff' :
          task.status === 'DOING' ? '#52c41a' : '#722ed1'
        }`
      }}
    >
      <div style={{ fontWeight: 500, marginBottom: 4 }}>
        {task.title}
      </div>
      {task.dueDate && (
        <div style={{ marginTop: 8 }}>
          <Tag color={getDueDateColor(task.dueDate)}>
            {getDueDateText(task.dueDate)}
          </Tag>
        </div>
      )}
    </Card>
  );
}
