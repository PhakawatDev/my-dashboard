'use client';

import MainLayout from '@/components/MainLayout';
import TaskCard from '@/components/TaskCard';
import TaskDrawer from '@/components/TaskDrawer';
import { mockProjects, mockTasks } from '@/data/mockData';
import { Card, Col, Empty, Row, Typography } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

export default function BoardPage({ params }: { params: { id: string } }) {
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const project = mockProjects.find(p => p.id === params.id);
  const projectTasks = mockTasks.filter(t => t.projectId === params.id);

  const todoTasks = projectTasks.filter(t => t.status === 'TODO');
  const doingTasks = projectTasks.filter(t => t.status === 'DOING');
  const doneTasks = projectTasks.filter(t => t.status === 'DONE');

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedTask(null);
  };

  if (!project) {
    return (
      <MainLayout>
        <Title level={2}>Project Not Found</Title>
        <p>Project with ID {params.id} not found.</p>
      </MainLayout>
    );
  }

  const TaskColumn = ({ title, tasks, color }: { title: string; tasks: any[]; color: string }) => (
    <Col xs={24} md={8}>
      <Card
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div 
              style={{ 
                width: 4, 
                height: 20, 
                backgroundColor: color,
                borderRadius: 2 
              }} 
            />
            {title} ({tasks.length})
          </div>
        }
        style={{ 
          minHeight: 600,
          backgroundColor: '#fafafa'
        }}
      >
        {tasks.length === 0 ? (
          <Empty 
            description="No tasks" 
            style={{ margin: '40px 0' }}
          />
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onClick={() => handleTaskClick(task)}
            />
          ))
        )}
      </Card>
    </Col>
  );

  return (
    <MainLayout>
      <Title level={2}>{project.name} - Board</Title>
      
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Card size="small">
            <Row gutter={16}>
              <Col><strong>Project ID:</strong> {project.id}</Col>
              <Col><strong>Total Tasks:</strong> {projectTasks.length}</Col>
              <Col><strong>TODO:</strong> {todoTasks.length}</Col>
              <Col><strong>DOING:</strong> {doingTasks.length}</Col>
              <Col><strong>DONE:</strong> {doneTasks.length}</Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <TaskColumn 
          title="TODO" 
          tasks={todoTasks} 
          color="#1890ff" 
        />
        <TaskColumn 
          title="DOING" 
          tasks={doingTasks} 
          color="#52c41a" 
        />
        <TaskColumn 
          title="DONE" 
          tasks={doneTasks} 
          color="#722ed1" 
        />
      </Row>

      <TaskDrawer
        task={selectedTask}
        open={drawerOpen}
        onClose={handleDrawerClose}
      />
    </MainLayout>
  );
}
