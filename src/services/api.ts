import axios from 'axios';
import { UserData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('Request interceptor - Token:', token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('Request headers:', config.headers);
  }
  return config;
});

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });
    return response;
  },
  (error) => {
    console.error('Response error:', {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.response?.headers,
      message: error.message,
      stack: error.stack
    });
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

interface LoginData {
  email: string;
  password: string;
  userType: 'veteran' | 'employer';
}

interface RegisterData extends Omit<UserData, '_id'> {
  password: string;
  confirmPassword: string;
}

interface AuthResponse {
  token: string;
  userData: UserData;
  userType: 'veteran' | 'employer';
}

const validateAuthResponse = (data: any): data is AuthResponse => {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.token === 'string' &&
    typeof data.userType === 'string' &&
    (data.userType === 'veteran' || data.userType === 'employer') &&
    typeof data.userData === 'object' &&
    data.userData !== null &&
    typeof data.userData._id === 'string' &&
    typeof data.userData.email === 'string' &&
    typeof data.userData.name === 'string'
  );
};

export const authService = {
  // Register user
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      console.log('Sending registration request with data:', {
        ...data,
        password: '[REDACTED]',
        confirmPassword: '[REDACTED]'
      });
      
      const response = await api.post('/auth/register', data);
      console.log('Register response:', response.data);
      
      if (!validateAuthResponse(response.data)) {
        console.error('Invalid response format:', response.data);
        throw new Error('Invalid response format from server');
      }

      const { token, userType, userData } = response.data;
      
      // Store auth data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      localStorage.setItem('userData', JSON.stringify(userData));

      return response.data;
    } catch (error: any) {
      console.error('Registration error details:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
        stack: error.stack
      });
      
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },

  // Login user
  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await api.post('/auth/login', data);
      
      // Structure the response data to match the expected format
      const responseData = {
        token: response.data.token,
        userType: response.data.userType,
        userData: {
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          userType: response.data.userType,
          role: response.data.role,
          branch: response.data.branch,
          service: response.data.service,
          company: response.data.company,
          position: response.data.position,
          physicalStatus: response.data.physicalStatus,
          education: response.data.education,
          skills: response.data.skills,
          achievements: response.data.achievements,
          certifications: response.data.certifications,
          languages: response.data.languages,
          location: response.data.location,
        }
      };

      // Validate the structured response
      if (!validateAuthResponse(responseData)) {
        throw new Error('Server response validation failed');
      }

      // Store auth data in localStorage
      localStorage.setItem('token', responseData.token);
      localStorage.setItem('userType', responseData.userType);
      localStorage.setItem('userData', JSON.stringify(responseData.userData));

      return responseData;
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error('Invalid email, password, or user type');
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Login failed. Please try again.');
    }
  },

  // Get user profile
  async getProfile(): Promise<UserData> {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error: any) {
      console.error('Get profile error:', error);
      throw error;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('userType');
  },

  // Update user profile
  async updateProfile(data: Partial<UserData>): Promise<UserData> {
    try {
      console.log('Making profile update request with data:', data);
      const response = await api.put('/auth/profile', data);
      console.log('Profile update API response:', response.data);
      
      // Update stored user data
      localStorage.setItem('userData', JSON.stringify(response.data));
      
      return response.data;
    } catch (error: any) {
      console.error('Update profile error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message
      });
      
      if (error.response?.status === 401) {
        throw new Error('Authentication failed. Please log in again.');
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Failed to update profile. Please try again.');
    }
  },
};

export default api; 