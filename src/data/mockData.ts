import { Project, Task } from '@/types';

export const mockProjects: Project[] = [
  { id: '1', name: 'Website Redesign' },
  { id: '2', name: 'Mobile App Development' },
  { id: '3', name: 'Marketing Campaign' },
  { id: '4', name: 'Database Migration' },
  { id: '5', name: 'API Documentation' },
];

export const mockTasks: Task[] = [
  // Project 1 - Website Redesign
  { id: '1', projectId: '1', title: 'Create wireframes', description: 'Design low-fidelity wireframes for homepage', status: 'DONE', dueDate: '2024-01-15' },
  { id: '2', projectId: '1', title: 'Design mockups', description: 'Create high-fidelity mockups', status: 'DONE', dueDate: '2024-01-20' },
  { id: '3', projectId: '1', title: 'Implement homepage', description: 'Code the homepage layout', status: 'DOING', dueDate: '2024-02-01' },
  { id: '4', projectId: '1', title: 'Responsive design', description: 'Make design mobile-responsive', status: 'TODO', dueDate: '2024-02-10' },
  { id: '5', projectId: '1', title: 'Cross-browser testing', description: 'Test on different browsers', status: 'TODO', dueDate: '2024-02-15' },
  
  // Project 2 - Mobile App Development
  { id: '6', projectId: '2', title: 'Setup React Native', description: 'Initialize React Native project', status: 'DONE', dueDate: '2024-01-10' },
  { id: '7', projectId: '2', title: 'Design UI components', description: 'Create reusable UI components', status: 'DOING', dueDate: '2024-01-25' },
  { id: '8', projectId: '2', title: 'Implement authentication', description: 'Add login and signup functionality', status: 'DOING', dueDate: '2024-02-05' },
  { id: '9', projectId: '2', title: 'API integration', description: 'Connect to backend APIs', status: 'TODO', dueDate: '2024-02-20' },
  { id: '10', projectId: '2', title: 'Push notifications', description: 'Implement push notification system', status: 'TODO', dueDate: '2024-03-01' },
  { id: '11', projectId: '2', title: 'App store submission', description: 'Prepare for app store release', status: 'TODO', dueDate: '2024-03-15' },
  
  // Project 3 - Marketing Campaign
  { id: '12', projectId: '3', title: 'Market research', description: 'Analyze target audience and competitors', status: 'DONE', dueDate: '2024-01-05' },
  { id: '13', projectId: '3', title: 'Create content strategy', description: 'Develop content calendar and strategy', status: 'DONE', dueDate: '2024-01-12' },
  { id: '14', projectId: '3', title: 'Design marketing materials', description: 'Create banners and social media graphics', status: 'DOING', dueDate: '2024-01-30' },
  { id: '15', projectId: '3', title: 'Email campaign', description: 'Setup and execute email marketing', status: 'TODO', dueDate: '2024-02-08' },
  { id: '16', projectId: '3', title: 'Social media launch', description: 'Launch campaign on social platforms', status: 'TODO', dueDate: '2024-02-12' },
  
  // Project 4 - Database Migration
  { id: '17', projectId: '4', title: 'Backup current database', description: 'Create full backup before migration', status: 'DONE', dueDate: '2024-01-08' },
  { id: '18', projectId: '4', title: 'Design new schema', description: 'Create new database schema design', status: 'DOING', dueDate: '2024-01-28' },
  { id: '19', projectId: '4', title: 'Migration scripts', description: 'Write data migration scripts', status: 'TODO', dueDate: '2024-02-18' },
  { id: '20', projectId: '4', title: 'Testing and validation', description: 'Test migrated data integrity', status: 'TODO', dueDate: '2024-02-25' },
  { id: '21', projectId: '4', title: 'Performance optimization', description: 'Optimize database queries and indexes', status: 'TODO', dueDate: '2024-03-05' },
  
  // Project 5 - API Documentation
  { id: '22', projectId: '5', title: 'Document existing APIs', description: 'Document all current API endpoints', status: 'DOING', dueDate: '2024-01-22' },
  { id: '23', projectId: '5', title: 'Create API examples', description: 'Add code examples for each endpoint', status: 'TODO', dueDate: '2024-02-03' },
  { id: '24', projectId: '5', title: 'Setup Swagger/OpenAPI', description: 'Implement interactive API documentation', status: 'TODO', dueDate: '2024-02-14' },
  { id: '25', projectId: '5', title: 'Review and publish', description: 'Final review and publish documentation', status: 'TODO', dueDate: '2024-02-28' },
];
