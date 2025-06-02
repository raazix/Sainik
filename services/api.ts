import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const veteranApi = {
  getProfile: () => api.get('/veteran/profile'),
  updateProfile: (data: any) => api.put('/veteran/profile', data),
  getJobMatches: () => api.get('/veteran/job-matches'),
  applyForJob: (jobId: string) => api.post(`/veteran/jobs/${jobId}/apply`),
  getCourses: () => api.get('/veteran/courses'),
  enrollInCourse: (courseId: string) => api.post(`/veteran/courses/${courseId}/enroll`),
  getMentors: () => api.get('/veteran/mentors'),
  connectWithMentor: (mentorId: string) => api.post(`/veteran/mentors/${mentorId}/connect`)
};

export const employerApi = {
  getDashboard: () => api.get('/employer/dashboard'),
  postJob: (data: any) => api.post('/employer/jobs', data),
  getJobListings: () => api.get('/employer/jobs'),
  getApplications: () => api.get('/employer/applications'),
  updateApplicationStatus: (applicationId: string, status: string) =>
    api.put(`/employer/applications/${applicationId}`, { status }),
  getAnalytics: () => api.get('/employer/analytics')
};

export const authApi = {
  login: (credentials: { email: string; password: string; userType: string }) =>
    api.post('/auth/login', credentials),
  register: (userData: any) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) =>
    api.post('/auth/reset-password', { token, password })
};

export default api; 