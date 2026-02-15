export type Project = {
  id: string;
  name: string;
};

export type Task = {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: 'TODO' | 'DOING' | 'DONE';
  dueDate?: string; // YYYY-MM-DD
};
