// Données mockées pour le projet DEXCHANGE

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeProjects: number;
  pendingTasks: number;
}

export interface TableItem {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  date: string;
  amount: number;
  category: string;
}

// Données mockées
export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@dexchange.com',
  role: 'Admin',
};

export const mockDashboardStats: DashboardStats = {
  totalUsers: 1234,
  totalRevenue: 45678,
  activeProjects: 23,
  pendingTasks: 12,
};

export const mockTableData: TableItem[] = [
  {
    id: '1',
    name: 'Projet Alpha',
    status: 'active',
    date: '2025-10-15',
    amount: 15000,
    category: 'Développement',
  },
  {
    id: '2',
    name: 'Projet Beta',
    status: 'pending',
    date: '2025-10-20',
    amount: 22000,
    category: 'Design',
  },
  {
    id: '3',
    name: 'Projet Gamma',
    status: 'completed',
    date: '2025-09-30',
    amount: 18500,
    category: 'Marketing',
  },
  {
    id: '4',
    name: 'Projet Delta',
    status: 'active',
    date: '2025-10-25',
    amount: 31000,
    category: 'Développement',
  },
  {
    id: '5',
    name: 'Projet Epsilon',
    status: 'cancelled',
    date: '2025-10-10',
    amount: 12000,
    category: 'Consulting',
  },
  {
    id: '6',
    name: 'Projet Zeta',
    status: 'completed',
    date: '2025-09-15',
    amount: 27500,
    category: 'Design',
  },
  {
    id: '7',
    name: 'Projet Eta',
    status: 'active',
    date: '2025-10-28',
    amount: 19800,
    category: 'Marketing',
  },
  {
    id: '8',
    name: 'Projet Theta',
    status: 'pending',
    date: '2025-11-01',
    amount: 24000,
    category: 'Développement',
  },
];
