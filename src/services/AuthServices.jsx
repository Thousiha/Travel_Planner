import { jwtDecode } from 'jwt-decode';

const API_URL = 'http://localhost:8080/api';

export const loginUser = async (credentials) => {
  try {
    // Simulated API call - in real app, this would hit your backend
    const mockUsers = {
      'admin@example.com': { password: 'admin123', role: 'admin' },
      'user@example.com': { password: 'user123', role: 'user' }
    };

    const user = mockUsers[credentials.email];
    
    if (user && user.password === credentials.password) {
      // Create a JWT token with user role
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify({
        email: credentials.email,
        role: user.role,
        exp: Date.now() + 3600000 // 1 hour expiration
      }))}`;

      return { token };
    }
    throw new Error('Invalid credentials');
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const registerUser = async (userData) => {
  try {
    // Simulated registration - in real app, this would hit your backend
    return { success: true };
  } catch (error) {
    throw new Error(error.message || 'Registration failed');
  }
};

export const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp > Date.now();
  } catch {
    return false;
  }
};

export const getUserRole = (token) => {
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch {
    return null;
  }
};