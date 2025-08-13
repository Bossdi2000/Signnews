import api from './api';

export const authService = {
  // Admin login
  async adminLogin(credentials) {
    const response = await api.post('/auth/admin/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('adminLoggedIn', 'true');
      localStorage.setItem('adminUser', JSON.stringify(response.data.admin));
    }
    return response.data;
  },

  // Super admin login
  async superAdminLogin(credentials) {
    const response = await api.post('/auth/super-admin/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('adminLoggedIn', 'true');
      localStorage.setItem('adminUser', JSON.stringify(response.data.admin));
    }
    return response.data;
  },

  // Create new admin (super admin only)
  async createAdmin(adminData) {
    const response = await api.post('/auth/admin/create', adminData);
    return response.data;
  },

  // Get current admin info
  async getCurrentAdmin() {
    const response = await api.get('/auth/admin/me');
    return response.data;
  },

  // Logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminUser');
  },

  // Check if admin is authenticated
  isAuthenticated() {
    return !!localStorage.getItem('token') && localStorage.getItem('adminLoggedIn') === 'true';
  },

  // Get stored admin user
  getStoredAdmin() {
    const adminUser = localStorage.getItem('adminUser');
    return adminUser ? JSON.parse(adminUser) : null;
  }
};
