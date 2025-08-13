import api from './api';

export const articleService = {
  // Get all articles
  getArticles: async (params = {}) => {
    const response = await api.get('/articles', { params });
    return response.data;
  },

  // Get article by ID
  getArticle: async (id) => {
    const response = await api.get(`/articles/${id}`);
    return response.data;
  },

  // Create new article
  createArticle: async (articleData) => {
    const formData = new FormData();
    
    // Add text fields
    Object.keys(articleData).forEach(key => {
      if (key !== 'thumbnail' && key !== 'tags') {
        formData.append(key, articleData[key]);
      }
    });

    // Add tags as JSON string
    if (articleData.tags) {
      formData.append('tags', JSON.stringify(articleData.tags));
    }

    // Add thumbnail file
    if (articleData.thumbnail) {
      formData.append('thumbnail', articleData.thumbnail);
    }

    const response = await api.post('/articles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update article
  updateArticle: async (id, articleData) => {
    const formData = new FormData();
    
    // Add text fields
    Object.keys(articleData).forEach(key => {
      if (key !== 'thumbnail' && key !== 'tags') {
        formData.append(key, articleData[key]);
      }
    });

    // Add tags as JSON string
    if (articleData.tags) {
      formData.append('tags', JSON.stringify(articleData.tags));
    }

    // Add thumbnail file
    if (articleData.thumbnail) {
      formData.append('thumbnail', articleData.thumbnail);
    }

    const response = await api.put(`/articles/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete article
  deleteArticle: async (id) => {
    const response = await api.delete(`/articles/${id}`);
    return response.data;
  },

  // Toggle publish status
  togglePublishStatus: async (id) => {
    const response = await api.patch(`/articles/${id}/toggle-status`);
    return response.data;
  },

  // Search articles
  searchArticles: async (query, params = {}) => {
    const response = await api.get('/articles/search', {
      params: { q: query, ...params }
    });
    return response.data;
  },

  // Get featured articles
  getFeaturedArticles: async (params = {}) => {
    const response = await api.get('/articles', {
      params: { featured: true, ...params }
    });
    return response.data;
  },

  // Increment views
  incrementViews: async (id) => {
    const response = await api.patch(`/articles/${id}/views`);
    return response.data;
  },

  // Toggle like
  toggleLike: async (id) => {
    const response = await api.patch(`/articles/${id}/like`);
    return response.data;
  }
};
