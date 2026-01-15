
export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface StudentProfile {
  name: string;
  id: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  cgpa: number;
  attendance: number;
  avatarUrl: string;
}

export interface Notice {
  id: string;
  title: string;
  excerpt: string;
  category: 'Exams' | 'Holidays' | 'Events' | 'Urgent';
  date: string;
}

export interface FeeItem {
  name: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending';
  paidDate?: string;
  receiptId?: string;
}
