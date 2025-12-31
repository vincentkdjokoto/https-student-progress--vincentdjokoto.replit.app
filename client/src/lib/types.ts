export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  grade: string;
  studentId: string; // School specific ID
  email: string;
  status: 'active' | 'inactive';
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description?: string;
}

export interface AssessmentIndicator {
  id: string;
  subjectId: string;
  name: string; // e.g. "Midterm Exam", "Homework 1", "Participation"
  weight: number; // Percentage weight (0-100)
  maxScore: number;
}

export interface AssessmentResult {
  id: string;
  studentId: string;
  indicatorId: string;
  score: number;
  comments?: string;
  date: string;
}

// Mock Data Interfaces for the Context/Store
export interface AppState {
  students: Student[];
  subjects: Subject[];
  indicators: AssessmentIndicator[];
  results: AssessmentResult[];
}
