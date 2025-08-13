import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Alert,
  Snackbar,
  LinearProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  CloudUpload as CloudUploadIcon,
  Close as CloseIcon,
  Article as ArticleIcon,
  Image as ImageIcon,
} from '@mui/icons-material';
import { articleService } from '../../services/articleService';

const ArticleAdmin = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    author: '',
    content: '',
    tags: '',
    status: 'Draft'
  });

  const thumbnailInputRef = useRef(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState('');

  const categories = ['Technology', 'Business', 'Health', 'Science', 'Politics', 'Sports', 'Entertainment'];
  const statuses = ['Draft', 'Published', 'Archived'];

  // Fetch articles on component mount
  useEffect(() => {
    fetchArticles();
  }, []);

  // Fetch articles from API
  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await articleService.getArticles();
      setArticles(response.data || []);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load articles data');
    } finally {
      setLoading(false);
    }
  };

  const getPadding = (desktop, mobile) => {
    return window.innerWidth >= 768 ? desktop : mobile;
  };

  const isMobile = window.innerWidth < 768;

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        description: item.description,
        category: item.category,
        author: item.author?.fullName || item.author,
        content: item.content,
        tags: item.tags ? (Array.isArray(item.tags) ? item.tags.join(', ') : item.tags) : '',
        status: item.status
      });
      setThumbnailPreview(item.thumbnail);
    } else {
      setEditingItem(null);
      setFormData({
        title: '',
        description: '',
        category: '',
        author: '',
        content: '',
        tags: '',
        status: 'Draft'
      });
      setThumbnailPreview('');
      setThumbnailFile(null);
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingItem(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      author: '',
      content: '',
      tags: '',
      status: 'Draft'
    });
    setThumbnailPreview('');
    setThumbnailFile(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setThumbnailFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setThumbnailPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const simulateFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category || !formData.content) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }

    if (!thumbnailFile && !thumbnailPreview) {
      setSnackbar({
        open: true,
        message: 'Please upload a thumbnail image',
        severity: 'error'
      });
      return;
    }

    try {
      const articleData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        content: formData.content,
        status: formData.status.toLowerCase(),
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [],
        thumbnail: thumbnailFile
      };

      if (editingItem) {
        await articleService.updateArticle(editingItem.id, articleData);
      } else {
        await articleService.createArticle(articleData);
      }

      await fetchArticles(); // Refresh the list
      handleCloseModal();
      setSnackbar({
        open: true,
        message: `Article ${editingItem ? 'updated' : 'created'} successfully`,
        severity: 'success'
      });
    } catch (error) {
      console.error('Error saving article:', error);
      setSnackbar({
        open: true,
        message: 'Failed to save article. Please try again.',
        severity: 'error'
      });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await articleService.deleteArticle(id);
        await fetchArticles(); // Refresh the list
        setSnackbar({
          open: true,
          message: 'Article deleted successfully!',
          severity: 'success'
        });
      } catch (error) {
        console.error('Error deleting article:', error);
        setSnackbar({
          open: true,
          message: 'Failed to delete article. Please try again.',
          severity: 'error'
        });
      }
    }
  };

  const filteredArticles = articles.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <>
      <div 
        className="article-admin-container"
        style={{
          padding: getPadding("20px 16px 40px 16px", "16px 12px 20px 12px"),
          background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              Article Management
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(204, 204, 204, 0.8)",
                fontSize: { xs: "14px", sm: "16px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              Manage your articles, content, and publications
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "rgba(204, 204, 204, 0.6)" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                      "&.Mui-focused": {
                        border: "1px solid rgba(245, 158, 11, 0.5)",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(204, 204, 204, 0.6)",
                      opacity: 1,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: "rgba(204, 204, 204, 0.8)" }}>Category</InputLabel>
                  <Select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    sx={{
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                    }}
                  >
                    <MenuItem value="All">All Categories</MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: "rgba(204, 204, 204, 0.8)" }}>Status</InputLabel>
                  <Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    sx={{
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                    }}
                  >
                    <MenuItem value="All">All Status</MenuItem>
                    {statuses.map(status => (
                      <MenuItem key={status} value={status}>{status}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => handleOpenModal()}
                  sx={{
                    background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                    color: "#FFFFFF",
                    borderRadius: "12px",
                    px: 3,
                    py: 1.5,
                    fontWeight: "600",
                    textTransform: "none",
                    fontSize: { xs: "14px", sm: "16px" },
                    boxShadow: "0 4px 12px rgba(245, 158, 11, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(245, 158, 11, 0.4)",
                    },
                    width: { xs: "100%", md: "auto" }
                  }}
                >
                  Add Article
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Loading State */}
          {loading && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <LinearProgress sx={{ mb: 2 }} />
              <Typography sx={{ color: '#FFFFFF' }}>
                Loading articles...
              </Typography>
            </Box>
          )}

          {/* Error State */}
          {error && !loading && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography sx={{ color: '#EF4444', mb: 2 }}>
                {error}
              </Typography>
              <Button 
                onClick={fetchArticles}
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  color: "#FFFFFF",
                  borderRadius: "12px",
                  px: 3,
                  py: 1.5,
                  fontWeight: "600",
                  textTransform: "none",
                  fontSize: { xs: "14px", sm: "16px" },
                  "&:hover": {
                    background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                  }
                }}
              >
                Try Again
              </Button>
            </Box>
          )}

          {/* Empty State */}
          {!loading && !error && filteredArticles.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography sx={{ color: '#FFFFFF', mb: 2 }}>
                No articles found. Create your first article!
              </Typography>
            </Box>
          )}

          {/* Articles Grid */}
          {!loading && !error && filteredArticles.length > 0 && (
          <Grid container spacing={3}>
            {filteredArticles.map((item) => (
              <Grid item xs={12} sm={6} lg={4} key={item.id}>
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(245, 158, 11, 0.2)",
                      border: "1px solid rgba(245, 158, 11, 0.3)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                      background: "linear-gradient(45deg, #1A1A1A 0%, #2D2D2D 100%)",
                    }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: item.status === 'Published' 
                          ? "rgba(34, 197, 94, 0.2)" 
                          : item.status === 'Draft'
                          ? "rgba(245, 158, 11, 0.2)"
                          : "rgba(107, 114, 128, 0.2)",
                        color: item.status === 'Published' 
                          ? "#22C55E" 
                          : item.status === 'Draft'
                          ? "#F59E0B"
                          : "#6B7280",
                        border: `1px solid ${item.status === 'Published' 
                          ? "rgba(34, 197, 94, 0.3)" 
                          : item.status === 'Draft'
                          ? "rgba(245, 158, 11, 0.3)"
                          : "rgba(107, 114, 128, 0.3)"}`,
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 2.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: "600",
                        mb: 1,
                        fontSize: "16px",
                        lineHeight: 1.3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(204, 204, 204, 0.8)",
                        mb: 2,
                        fontSize: "13px",
                        lineHeight: 1.4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          background: "rgba(245, 158, 11, 0.2)",
                          color: "#F59E0B",
                          border: "1px solid rgba(245, 158, 11, 0.3)",
                          fontSize: "11px",
                          fontWeight: "500",
                        }}
                      />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Box sx={{ display: "flex", gap: 2, fontSize: "12px", color: "rgba(204, 204, 204, 0.7)" }}>
                        <span>👁 {item.views}</span>
                        <span>❤️ {item.likes}</span>
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(204, 204, 204, 0.6)",
                          fontSize: "11px",
                        }}
                      >
                        {item.createdAt}
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(204, 204, 204, 0.7)",
                        fontSize: "11px",
                        display: "block",
                        mb: 2,
                      }}
                    >
                      By {item.author}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleOpenModal(item)}
                        sx={{
                          background: "rgba(245, 158, 11, 0.1)",
                          color: "#F59E0B",
                          "&:hover": {
                            background: "rgba(245, 158, 11, 0.2)",
                          },
                        }}
                      >
                        <EditIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(item.id)}
                        sx={{
                          background: "rgba(239, 68, 68, 0.1)",
                          color: "#EF4444",
                          "&:hover": {
                            background: "rgba(239, 68, 68, 0.2)",
                          },
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#FFFFFF",
          }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              {editingItem ? "Edit Article" : "Add New Article"}
            </Typography>
            <IconButton onClick={handleCloseModal} sx={{ color: "rgba(204, 204, 204, 0.6)" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                      "&.Mui-focused": {
                        border: "1px solid rgba(245, 158, 11, 0.5)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(204, 204, 204, 0.8)",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={3}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                      "&.Mui-focused": {
                        border: "1px solid rgba(245, 158, 11, 0.5)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(204, 204, 204, 0.8)",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                      "&.Mui-focused": {
                        border: "1px solid rgba(245, 158, 11, 0.5)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(204, 204, 204, 0.8)",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: "rgba(204, 204, 204, 0.8)" }}>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    sx={{
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                    }}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  multiline
                  rows={6}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                      "&.Mui-focused": {
                        border: "1px solid rgba(245, 158, 11, 0.5)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(204, 204, 204, 0.8)",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Tags (comma separated)"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Technology, Future, Innovation"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                      "&.Mui-focused": {
                        border: "1px solid rgba(245, 158, 11, 0.5)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "rgba(204, 204, 204, 0.8)",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: "rgba(204, 204, 204, 0.8)" }}>Status</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    sx={{
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "&:hover": {
                        border: "1px solid rgba(245, 158, 11, 0.3)",
                      },
                    }}
                  >
                    {statuses.map(status => (
                      <MenuItem key={status} value={status}>{status}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "2px dashed rgba(255, 255, 255, 0.2)",
                    borderRadius: "12px",
                    p: 3,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "2px dashed rgba(245, 158, 11, 0.5)",
                      background: "rgba(245, 158, 11, 0.05)",
                    },
                  }}
                  onClick={() => thumbnailInputRef.current?.click()}
                >
                  <input
                    ref={thumbnailInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />
                  <ImageIcon sx={{ fontSize: "48px", color: "rgba(204, 204, 204, 0.6)", mb: 2 }} />
                  <Typography variant="body2" sx={{ color: "rgba(204, 204, 204, 0.8)", mb: 1 }}>
                    Upload Thumbnail
                  </Typography>
                  <Typography variant="caption" sx={{ color: "rgba(204, 204, 204, 0.6)" }}>
                    Click to select image file
                  </Typography>
                  {thumbnailPreview && (
                    <Box sx={{ mt: 2 }}>
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        style={{
                          width: "100px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              color: "rgba(204, 204, 204, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "10px",
              px: 3,
              "&:hover": {
                background: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isUploading}
            sx={{
              background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
              color: "#FFFFFF",
              borderRadius: "10px",
              px: 3,
              fontWeight: "600",
              "&:hover": {
                background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
              },
              "&:disabled": {
                background: "rgba(255, 255, 255, 0.1)",
                color: "rgba(204, 204, 204, 0.5)",
              },
            }}
          >
            {isUploading ? "Uploading..." : (editingItem ? "Update" : "Create")}
          </Button>
        </DialogActions>

        {isUploading && (
          <Box sx={{ p: 3, pt: 0 }}>
            <LinearProgress
              variant="determinate"
              value={uploadProgress}
              sx={{
                height: 6,
                borderRadius: 3,
                background: "rgba(255, 255, 255, 0.1)",
                "& .MuiLinearProgress-bar": {
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  borderRadius: 3,
                },
              }}
            />
            <Typography variant="caption" sx={{ color: "rgba(204, 204, 204, 0.6)", mt: 1, display: "block" }}>
              Uploading... {uploadProgress}%
            </Typography>
          </Box>
        )}
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            background: snackbar.severity === 'success' 
              ? "rgba(34, 197, 94, 0.1)" 
              : "rgba(239, 68, 68, 0.1)",
            color: snackbar.severity === 'success' ? "#22C55E" : "#EF4444",
            border: `1px solid ${snackbar.severity === 'success' 
              ? "rgba(34, 197, 94, 0.3)" 
              : "rgba(239, 68, 68, 0.3)"}`,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <style jsx>{`
        .article-admin-container {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
      `}</style>
    </>
  );
};

export default ArticleAdmin;
