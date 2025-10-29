export interface PerformanceReview {
  id: string;
  employeeId: string;
  employeeName: string;
  reviewerId: string;
  reviewerName: string;
  period: ReviewPeriod;
  reviewDate: string;
  overallScore: number;
  categories: PerformanceCategory[];
  strengths: string[];
  areasForImprovement: string[];
  goals: Goal[];
  comments?: string;
  status: ReviewStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewPeriod {
  startDate: string;
  endDate: string;
  quarter?: number;
  year: number;
}

export interface PerformanceCategory {
  name: string;
  description?: string;
  score: number;
  maxScore: number;
  weight: number;
  comments?: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  target: string;
  progress: number;
  dueDate: string;
  status: GoalStatus;
  priority: 'Low' | 'Medium' | 'High';
}

export enum GoalStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  AT_RISK = 'At Risk',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

export enum ReviewStatus {
  DRAFT = 'Draft',
  PENDING_EMPLOYEE = 'Pending Employee',
  PENDING_MANAGER = 'Pending Manager',
  COMPLETED = 'Completed',
  ARCHIVED = 'Archived',
}

export interface PerformanceMetrics {
  employeeId: string;
  period: ReviewPeriod;
  productivity: MetricData;
  quality: MetricData;
  collaboration: MetricData;
  innovation: MetricData;
  attendance: MetricData;
  taskCompletion: MetricData;
}

export interface MetricData {
  score: number;
  trend: 'up' | 'down' | 'stable';
  percentageChange?: number;
  dataPoints?: DataPoint[];
}

export interface DataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface KPI {
  id: string;
  name: string;
  description: string;
  target: number;
  actual: number;
  unit: string;
  category: string;
  period: string;
  trend: 'up' | 'down' | 'stable';
  status: 'on-track' | 'at-risk' | 'off-track';
}

