import { authApi } from './api';

interface User {
  id: string;
  name: string;
  email: string;
  userType: 'veteran' | 'employer';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

class AuthService {
  private static instance: AuthService;
  private state: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false
  };

  private constructor() {
    // Initialize state from localStorage
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.state = {
        token,
        user: JSON.parse(user),
        isAuthenticated: true
      };
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(email: string, password: string, userType: string): Promise<User> {
    try {
      const response = await authApi.login({ email, password, userType });
      const { token, user } = response.data;

      // Update state
      this.state = {
        token,
        user,
        isAuthenticated: true
      };

      // Save to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async register(userData: any): Promise<User> {
    try {
      const response = await authApi.register(userData);
      const { token, user } = response.data;

      // Update state
      this.state = {
        token,
        user,
        isAuthenticated: true
      };

      // Save to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async logout(): Promise<void> {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear state and localStorage
      this.state = {
        user: null,
        token: null,
        isAuthenticated: false
      };
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  public async forgotPassword(email: string): Promise<void> {
    try {
      await authApi.forgotPassword(email);
    } catch (error) {
      throw error;
    }
  }

  public async resetPassword(token: string, password: string): Promise<void> {
    try {
      await authApi.resetPassword(token, password);
    } catch (error) {
      throw error;
    }
  }

  public getCurrentUser(): User | null {
    return this.state.user;
  }

  public isAuthenticated(): boolean {
    return this.state.isAuthenticated;
  }

  public getUserType(): 'veteran' | 'employer' | null {
    return this.state.user?.userType || null;
  }

  public getToken(): string | null {
    return this.state.token;
  }
}

export default AuthService.getInstance(); 