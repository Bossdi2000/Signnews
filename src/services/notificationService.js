import api from './api';

export const notificationService = {
  // Get all notifications for current user
  async getNotifications(filters = {}) {
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) params.append(key, filters[key]);
    });
    const response = await api.get(`/notifications?${params.toString()}`);
    return response.data;
  },

  // Get single notification by ID
  async getNotificationById(id) {
    const response = await api.get(`/notifications/${id}`);
    return response.data;
  },

  // Mark notification as read
  async markAsRead(id) {
    const response = await api.patch(`/notifications/${id}/read`);
    return response.data;
  },

  // Mark all notifications as read
  async markAllAsRead() {
    const response = await api.patch('/notifications/mark-all-read');
    return response.data;
  },

  // Delete notification
  async deleteNotification(id) {
    const response = await api.delete(`/notifications/${id}`);
    return response.data;
  },

  // Delete all notifications
  async deleteAllNotifications() {
    const response = await api.delete('/notifications');
    return response.data;
  },

  // Get unread count
  async getUnreadCount() {
    const response = await api.get('/notifications/unread-count');
    return response.data;
  },

  // Create notification (admin only)
  async createNotification(notificationData) {
    const response = await api.post('/notifications', notificationData);
    return response.data;
  },

  // Send bulk notifications (admin only)
  async sendBulkNotifications(notificationData) {
    const response = await api.post('/notifications/bulk', notificationData);
    return response.data;
  }
};
