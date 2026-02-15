'use client';

import MainLayout from '@/components/MainLayout';
import { mockProjects } from '@/data/mockData';
import { ProjectOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Typography } from 'antd';
import Link from 'next/link';

const { Title } = Typography;

export default function ProjectsPage() {
  return (
    <MainLayout>
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        {mockProjects.map(project => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.id}>
            <Card
              hoverable
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ProjectOutlined />
                  {project.name}
                </div>
              }
              extra={
                <Link href={`/projects/${project.id}/board`}>
                  <Button type="primary" size="small">
                    Open Board
                  </Button>
                </Link>
              }
              style={{ height: 140 }}
            >
              <div style={{ color: '#666', fontSize: '14px' }}>
                Project ID: {project.id}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </MainLayout>
  );
}
