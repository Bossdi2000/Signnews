import api from './api';

export const entertainmentService = {
  // Get all entertainment content
  getEntertainment: async (params = {}) => {
    const response = await api.get('/entertainment', { params });
    return response.data;
  },

  // Get entertainment by ID
  getEntertainmentById: async (id) => {
    const response = await api.get(`/entertainment/${id}`);
    return response.data;
  },

  // Create new entertainment content
  createEntertainment: async (entertainmentData) => {
    const formData = new FormData();
    
    // Add text fields
    Object.keys(entertainmentData).forEach(key => {
      if (key !== 'thumbnail' && key !== 'mediaFile' && key !== 'tags') {
        formData.append(key, entertainmentData[key]);
      }
    });

    // Add tags as JSON string
    if (entertainmentData.tags) {
      formData.append('tags', JSON.stringify(entertainmentData.tags));
    }

    // Add thumbnail file
    if (entertainmentData.thumbnail) {
      formData.append('thumbnail', entertainmentData.thumbnail);
    }

    // Add media file
    if (entertainmentData.mediaFile) {
      formData.append('mediaFile', entertainmentData.mediaFile);
    }

    const response = await api.post('/entertainment', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Update entertainment content
  updateEntertainment: async (id, entertainmentData) => {
    const formData = new FormData();
    
    // Add text fields
    Object.keys(entertainmentData).forEach(key => {
      if (key !== 'thumbnail' && key !== 'mediaFile' && key !== 'tags') {
        formData.append(key, entertainmentData[key]);
      }
    });

    // Add tags as JSON string
    if (entertainmentData.tags) {
      formData.append('tags', JSON.stringify(entertainmentData.tags));
    }

    // Add thumbnail file
    if (entertainmentData.thumbnail) {
      formData.append('thumbnail', entertainmentData.thumbnail);
    }

    // Add media file
    if (entertainmentData.mediaFile) {
      formData.append('mediaFile', entertainmentData.mediaFile);
    }

    const response = await api.put(`/entertainment/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete entertainment content
  deleteEntertainment: async (id) => {
    const response = await api.delete(`/entertainment/${id}`);
    return response.data;
  },

  // Toggle publish status
  togglePublishStatus: async (id) => {
    const response = await api.patch(`/entertainment/${id}/toggle-status`);
    return response.data;
  },

  // Search entertainment content
  searchEntertainment: async (query, params = {}) => {
    const response = await api.get('/entertainment/search', {
      params: { q: query, ...params }
    });
    return response.data;
  },

  // Get featured entertainment
  getFeaturedEntertainment: async (params = {}) => {
    const response = await api.get('/entertainment', {
      params: { featured: true, ...params }
    });
    return response.data;
  },

  // Increment views
  incrementViews: async (id) => {
    const response = await api.patch(`/entertainment/${id}/views`);
    return response.data;
  },

  // Toggle like
  toggleLike: async (id) => {
    const response = await api.patch(`/entertainment/${id}/like`);
    return response.data;
  }
};
