import api from './api';

export const newsService = {
  // Get all news with filters
  async getNews(filters = {}) {
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) params.append(key, filters[key]);
    });
    const response = await api.get(`/news?${params.toString()}`);
    return response.data;
  },

  // Get single news by ID
  async getNewsById(id) {
    const response = await api.get(`/news/${id}`);
    return response.data;
  },

  // Create new news
  async createNews(newsData) {
    const formData = new FormData();
    
    // Add text fields
    Object.keys(newsData).forEach(key => {
      if (key !== 'image' && key !== 'video' && newsData[key] !== undefined) {
        formData.append(key, newsData[key]);
      }
    });

    // Add files if present
    if (newsData.image) {
      formData.append('image', newsData.image);
    }
    if (newsData.video) {
      formData.append('video', newsData.video);
    }

    const response = await api.post('/news', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update news
  async updateNews(id, newsData) {
    const formData = new FormData();
    
    // Add text fields
    Object.keys(newsData).forEach(key => {
      if (key !== 'image' && key !== 'video' && newsData[key] !== undefined) {
        formData.append(key, newsData[key]);
      }
    });

    // Add files if present
    if (newsData.image) {
      formData.append('image', newsData.image);
    }
    if (newsData.video) {
      formData.append('video', newsData.video);
    }

    const response = await api.put(`/news/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete news
  async deleteNews(id) {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  },

  // Toggle publish status
  async togglePublishStatus(id) {
    const response = await api.patch(`/news/${id}/toggle-publish`);
    return response.data;
  },

  // Get featured news
  async getFeaturedNews() {
    const response = await api.get('/news/featured');
    return response.data;
  },

  // Get breaking news
  async getBreakingNews() {
    const response = await api.get('/news/breaking');
    return response.data;
  },

  // Search news
  async searchNews(query) {
    const response = await api.get(`/news/search?q=${encodeURIComponent(query)}`);
    return response.data;
  },

  // Increment views
  async incrementViews(id) {
    const response = await api.post(`/news/${id}/views`);
    return response.data;
  },

  // Toggle like
  async toggleLike(id) {
    const response = await api.post(`/news/${id}/like`);
    return response.data;
  }
};
