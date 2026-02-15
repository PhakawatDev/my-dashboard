'use client';

import MainLayout from '@/components/MainLayout';
import { Typography } from 'antd';

const { Title } = Typography;

export default function DashboardPage() {
  return (
    <MainLayout>
      <Title level={2}>Dashboard</Title>
      <p>Dashboard content will be implemented in Step 6</p>
    </MainLayout>
  );
}
