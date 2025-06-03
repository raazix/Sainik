export interface UserData {
  _id: string;
  name: string;
  email: string;
  userType: 'veteran' | 'employer';
  role: string;
  branch?: string;
  service?: string;
  company?: string;
  position?: string;
  physicalStatus?: string;
  education?: string | string[];
  skills?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
  location?: string;
} 