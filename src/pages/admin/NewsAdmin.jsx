import { useState, useEffect, useRef } from "react";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye, 
  EyeOff, 
  Search, 
  Filter, 
  Calendar,
  User,
  FileText,
  Image as ImageIcon,
  Video,
  Volume2,
  VolumeX
} from "lucide-react";
import { newsService } from "../../services/newsService";

// Remove the custom Navbar since we're using the sidebar layout

const NewsAdmin = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredNews, setFilteredNews] = useState(newsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // "create", "edit", "view"
  const [selectedNews, setSelectedNews] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    writer: "",
    image: "",
    videoUrl: "",
    type: "image",
    category: "Story",
    date: new Date().toISOString().split('T')[0],
    isPublished: true,
    fullContent: ""
  });

  const [mutedVideos, setMutedVideos] = useState({});
  const videoRefs = useRef({});

  // File upload states
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [videoPreview, setVideoPreview] = useState('');

  // Responsive breakpoints
  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
    large: 1400,
  };

  const isMobile = windowSize.width <= BREAKPOINTS.mobile;
  const isTablet = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.tablet;

  // Fetch news data from API
  useEffect(() => {
    fetchNews();
  }, []);

  // Fetch news data
  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await newsService.getNews();
      setNewsData(response.data || []);
      setFilteredNews(response.data || []);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load news data');
    } finally {
      setLoading(false);
    }
  };

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter and search news
  useEffect(() => {
    let filtered = [...newsData];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.writer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (filterCategory !== "all") {
      filtered = filtered.filter(item => item.category === filterCategory);
    }

    // Type filter
    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type === filterType);
    }

    // Status filter
    if (filterStatus !== "all") {
      const isPublished = filterStatus === "published";
      filtered = filtered.filter(item => item.isPublished === isPublished);
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === "date") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredNews(filtered);
  }, [newsData, searchTerm, filterCategory, filterType, filterStatus, sortBy, sortOrder]);

  // Utility functions
  const getFontSize = (large, desktop, tablet, mobile) => {
    if (isMobile) return mobile || tablet;
    if (isTablet) return tablet || desktop;
    return large || desktop;
  };

  const getPadding = (desktop, mobile) => {
    return isMobile ? mobile : desktop;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Video size={14} />;
      case "image":
        return <ImageIcon size={14} />;
      default:
        return <FileText size={14} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "video":
        return "#FF4444";
      case "image":
        return "#44AA44";
      default:
        return "#722F37";
    }
  };

  // CRUD Operations
  const handleCreate = () => {
    setModalMode("create");
    setFormData({
      title: "",
      summary: "",
      writer: "",
      image: "",
      videoUrl: "",
      type: "image",
      category: "Story",
      date: new Date().toISOString().split('T')[0],
      isPublished: true,
      fullContent: ""
    });
    // Reset file upload states
    setImageFile(null);
    setVideoFile(null);
    setImagePreview('');
    setVideoPreview('');
    setShowModal(true);
  };

  const handleEdit = (news) => {
    setModalMode("edit");
    setSelectedNews(news);
    setFormData({
      title: news.title,
      summary: news.description || news.summary,
      writer: news.author?.fullName || news.writer,
      image: news.image || "",
      videoUrl: news.videoUrl || "",
      type: news.type,
      category: news.category,
      date: news.publishedAt ? new Date(news.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      isPublished: news.status === 'published',
      fullContent: news.content || news.fullContent || "",
      tags: news.tags ? news.tags.join(', ') : "",
      featured: news.featured || false,
      breaking: news.breaking || false,
      location: news.location || ""
    });
    // Set preview images/videos for existing content
    setImagePreview(news.image || '');
    setVideoPreview(news.videoUrl || '');
    setImageFile(null);
    setVideoFile(null);
    setShowModal(true);
  };

  const handleView = (news) => {
    setModalMode("view");
    setSelectedNews(news);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news item?")) {
      try {
        await newsService.deleteNews(id);
        await fetchNews(); // Refresh the list
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Failed to delete news. Please try again.');
      }
    }
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.summary.trim()) {
      alert("Title and summary are required!");
      return;
    }

    try {
      const newsDataToSend = {
        title: formData.title,
        description: formData.summary,
        content: formData.fullContent,
        type: formData.type,
        category: formData.category,
        status: formData.isPublished ? 'published' : 'draft',
        image: imageFile,
        videoUrl: formData.videoUrl,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
        featured: formData.featured || false,
        breaking: formData.breaking || false,
        language: 'en',
        location: formData.location || null
      };

      if (modalMode === "create") {
        await newsService.createNews(newsDataToSend);
      } else if (modalMode === "edit") {
        await newsService.updateNews(selectedNews.id, newsDataToSend);
      }

      // Refresh the news list
      await fetchNews();
      setShowModal(false);
      setSelectedNews(null);
      setFormData({
        title: "",
        summary: "",
        writer: "",
        image: "",
        videoUrl: "",
        type: "image",
        category: "Story",
        date: new Date().toISOString().split('T')[0],
        isPublished: true,
        fullContent: ""
      });
      setImageFile(null);
      setVideoFile(null);
      setImagePreview('');
      setVideoPreview('');
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Failed to save news. Please try again.');
    }
  };

  const togglePublishStatus = async (id) => {
    try {
      await newsService.togglePublishStatus(id);
      await fetchNews(); // Refresh the list
    } catch (error) {
      console.error('Error toggling publish status:', error);
      alert('Failed to update publish status. Please try again.');
    }
  };

  const toggleVideoMute = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      const newMutedState = !mutedVideos[videoId];
      video.muted = newMutedState;
      setMutedVideos(prev => ({
        ...prev,
        [videoId]: newMutedState,
      }));
    }
  };

  // File upload handlers
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
      setFormData(prev => ({ ...prev, image: e.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setVideoFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setVideoPreview(e.target.result);
      setFormData(prev => ({ ...prev, videoUrl: e.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const categories = ["Story", "Blockchain", "Community", "Business", "Product Updates", "Infrastructure"];
  const types = ["image", "video"];

  return (
    <>
      <div 
        className="news-admin-container"
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
        {/* Background Effects */}
        <div style={{ position: "absolute", inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
          <div style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: isMobile ? "150px" : "250px",
            height: isMobile ? "150px" : "250px",
            background: "#722F37",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}></div>
          <div style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: isMobile ? "120px" : "200px",
            height: isMobile ? "120px" : "200px",
            background: "#FF8C42",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}></div>
        </div>

        <div style={{
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          padding: getPadding("0 20px", "0 8px"),
          boxSizing: "border-box",
        }}>
          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            marginBottom: getPadding("40px", "30px"),
            gap: "20px"
          }}>
            <div>
              <h1 style={{
                fontSize: getFontSize("42px", "36px", "30px", "24px"),
                fontWeight: "bold",
                color: "#FFFFFF",
                marginBottom: "8px",
                lineHeight: "1.2",
              }}>
                News <span style={{ color: "#FF8C42" }}>Management</span>
              </h1>
              <p style={{
                color: "#CCCCCC",
                fontSize: getFontSize("16px", "14px", "12px"),
                margin: 0
              }}>
                Manage your news articles, stories, and updates
              </p>
            </div>
            
            <button
              onClick={handleCreate}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: getPadding("12px 20px", "10px 16px"),
                background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                border: "none",
                borderRadius: "10px",
                color: "#FFFFFF",
                fontSize: getFontSize("14px", "13px", "12px"),
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 6px 24px rgba(255, 140, 66, 0.25)",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 8px 30px rgba(255, 140, 66, 0.35)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 6px 24px rgba(255, 140, 66, 0.25)";
                }
              }}
            >
              <Plus size={16} />
              Create News
            </button>
          </div>

          {/* Filters and Search */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: getPadding("24px", "16px"),
            marginBottom: getPadding("30px", "20px"),
            backdropFilter: "blur(20px)"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile 
                ? "1fr" 
                : isTablet 
                ? "1fr 1fr" 
                : "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "16px",
              alignItems: "end"
            }}>
              {/* Search */}
              <div>
                <label style={{
                  display: "block",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "6px"
                }}>
                  Search
                </label>
                <div style={{ position: "relative" }}>
                  <Search size={16} style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#888"
                  }} />
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 10px 10px 36px",
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      color: "#FFFFFF",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box"
                    }}
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label style={{
                  display: "block",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "6px"
                }}>
                  Category
                </label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat} style={{ background: "#1A1A1A" }}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label style={{
                  display: "block",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "6px"
                }}>
                  Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <option value="all">All Types</option>
                  <option value="image" style={{ background: "#1A1A1A" }}>Image</option>
                  <option value="video" style={{ background: "#1A1A1A" }}>Video</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label style={{
                  display: "block",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "6px"
                }}>
                  Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <option value="all">All Status</option>
                  <option value="published" style={{ background: "#1A1A1A" }}>Published</option>
                  <option value="draft" style={{ background: "#1A1A1A" }}>Draft</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label style={{
                  display: "block",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "6px"
                }}>
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <option value="date" style={{ background: "#1A1A1A" }}>Date</option>
                  <option value="title" style={{ background: "#1A1A1A" }}>Title</option>
                  <option value="category" style={{ background: "#1A1A1A" }}>Category</option>
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <label style={{
                  display: "block",
                  color: "#CCCCCC",
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "6px"
                }}>
                  Order
                </label>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <option value="desc" style={{ background: "#1A1A1A" }}>Latest First</option>
                  <option value="asc" style={{ background: "#1A1A1A" }}>Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div style={{
              textAlign: "center",
              padding: "40px",
              color: "#FFFFFF",
              fontSize: getFontSize(18, 16, 14, 12)
            }}>
              Loading news...
            </div>
          )}

          {error && (
            <div style={{
              textAlign: "center",
              padding: "40px",
              color: "#FF6B6B",
              fontSize: getFontSize(18, 16, 14, 12)
            }}>
              {error}
            </div>
          )}

          {/* News List */}
          {!loading && !error && filteredNews.length > 0 && (
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "20px",
              marginBottom: "40px"
            }}>
              {filteredNews.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.3s ease",
                  height: "auto",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Media Section */}
                <div style={{
                  position: "relative",
                  height: "180px",
                  overflow: "hidden"
                }}>
                  {item.videoUrl && item.type === "video" ? (
                    <div style={{ position: "relative" }}>
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[item.id] = el;
                            el.muted = mutedVideos[item.id] !== false;
                          }
                        }}
                        autoPlay
                        loop
                        muted={mutedVideos[item.id] !== false}
                        playsInline
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover"
                        }}
                        poster={item.image || "/placeholder.svg?height=200&width=400"}
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                      
                      {/* Volume Control */}
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          width: "32px",
                          height: "32px",
                          background: "rgba(0, 0, 0, 0.7)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVideoMute(item.id);
                        }}
                      >
                        {mutedVideos[item.id] !== false ? (
                          <VolumeX size={16} style={{ color: "#FFFFFF" }} />
                        ) : (
                          <Volume2 size={16} style={{ color: "#FFFFFF" }} />
                        )}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.image || "/placeholder.svg?height=200&width=400"}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  )}

                  {/* Type Badge */}
                  <div style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    background: getTypeColor(item.type),
                    color: "#FFFFFF",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "10px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}>
                    {getTypeIcon(item.type)}
                    {item.type.toUpperCase()}
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                    color: "#FFFFFF",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "10px",
                    fontWeight: "600"
                  }}>
                    {item.category}
                  </div>

                  {/* Status Badge */}
                  <div style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: item.isPublished ? "#22C55E" : "#EF4444",
                    color: "#FFFFFF",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "10px",
                    fontWeight: "600"
                  }}>
                    {item.isPublished ? "PUBLISHED" : "DRAFT"}
                  </div>
                </div>

                {/* Content Section */}
                <div style={{
                  padding: "16px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                }}>
                  {/* Meta Info */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px"
                  }}>
                    <span style={{
                      color: "#AAAAAA",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}>
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span style={{
                      color: "#AAAAAA",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}>
                      <User size={12} />
                      {item.writer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    lineHeight: "1.3",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p style={{
                    color: "#CCCCCC",
                    fontSize: "12px",
                    lineHeight: "1.4",
                    marginBottom: "16px",
                    flex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.summary}
                  </p>

                  {/* Action Buttons */}
                  <div style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between"
                  }}>
                    <div style={{ display: "flex", gap: "8px", flex: 1 }}>
                      <button
                        onClick={() => handleView(item)}
                        style={{
                          flex: 1,
                          padding: "8px",
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          borderRadius: "6px",
                          color: "#FFFFFF",
                          fontSize: "11px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.1)";
                        }}
                      >
                        <Eye size={12} />
                        View
                      </button>

                      <button
                        onClick={() => handleEdit(item)}
                        style={{
                          flex: 1,
                          padding: "8px",
                          background: "rgba(255, 140, 66, 0.2)",
                          border: "1px solid rgba(255, 140, 66, 0.3)",
                          borderRadius: "6px",
                          color: "#FF8C42",
                          fontSize: "11px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255, 140, 66, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(255, 140, 66, 0.2)";
                        }}
                      >
                        <Edit size={12} />
                        Edit
                      </button>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={() => togglePublishStatus(item.id)}
                        style={{
                          padding: "8px",
                          background: item.isPublished ? "rgba(239, 68, 68, 0.2)" : "rgba(34, 197, 94, 0.2)",
                          border: `1px solid ${item.isPublished ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
                          borderRadius: "6px",
                          color: item.isPublished ? "#EF4444" : "#22C55E",
                          fontSize: "11px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          transition: "all 0.3s ease",
                          minWidth: "32px"
                        }}
                        title={item.isPublished ? "Unpublish" : "Publish"}
                      >
                        {item.isPublished ? <EyeOff size={12} /> : <Eye size={12} />}
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        style={{
                          padding: "8px",
                          background: "rgba(239, 68, 68, 0.2)",
                          border: "1px solid rgba(239, 68, 68, 0.3)",
                          borderRadius: "6px",
                          color: "#EF4444",
                          fontSize: "11px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          transition: "all 0.3s ease",
                          minWidth: "32px"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(239, 68, 68, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "rgba(239, 68, 68, 0.2)";
                        }}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredNews.length === 0 && (
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(20px)"
            }}>
              <FileText size={48} style={{ color: "#666", marginBottom: "16px" }} />
              <h3 style={{
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "8px"
              }}>
                No news found
              </h3>
              <p style={{
                color: "#CCCCCC",
                fontSize: "14px",
                marginBottom: "20px"
              }}>
                Try adjusting your filters or create a new news article.
              </p>
              <button
                onClick={handleCreate}
                style={{
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <Plus size={16} />
                Create First News
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px"
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: getPadding("40px", "20px"),
              maxWidth: "800px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              width: "100%"
            }}>
              {/* Modal Header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
                paddingBottom: "16px",
                borderBottom: "1px solid #E5E5E5"
              }}>
                <h2 style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#722F37",
                  margin: 0
                }}>
                  {modalMode === "create" ? "Create News Article" : 
                   modalMode === "edit" ? "Edit News Article" : "View News Article"}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#722F37",
                    padding: "8px"
                  }}
                >
                  <X size={24} />
                </button>
              </div>

              {modalMode === "view" ? (
                // View Mode
                <div>
                  {selectedNews && (
                    <div>
                      {/* Media Preview */}
                      {selectedNews.type === "video" && selectedNews.videoUrl ? (
                        <div style={{ marginBottom: "20px" }}>
                          <video
                            controls
                            style={{
                              width: "100%",
                              maxHeight: "300px",
                              borderRadius: "10px"
                            }}
                          >
                            <source src={selectedNews.videoUrl} type="video/mp4" />
                          </video>
                        </div>
                      ) : selectedNews.image && (
                        <div style={{ marginBottom: "20px" }}>
                          <img
                            src={selectedNews.image}
                            alt={selectedNews.title}
                            style={{
                              width: "100%",
                              maxHeight: "300px",
                              objectFit: "cover",
                              borderRadius: "10px"
                            }}
                          />
                        </div>
                      )}

                      {/* Meta Info */}
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                        gap: "16px",
                        marginBottom: "20px",
                        padding: "16px",
                        background: "#F8F9FA",
                        borderRadius: "10px"
                      }}>
                        <div>
                          <strong style={{ color: "#722F37" }}>Category:</strong> {selectedNews.category}
                        </div>
                        <div>
                          <strong style={{ color: "#722F37" }}>Type:</strong> {selectedNews.type}
                        </div>
                        <div>
                          <strong style={{ color: "#722F37" }}>Date:</strong> {selectedNews.date}
                        </div>
                        <div>
                          <strong style={{ color: "#722F37" }}>Status:</strong> 
                          <span style={{
                            marginLeft: "8px",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            background: selectedNews.isPublished ? "#22C55E" : "#EF4444",
                            color: "#FFFFFF"
                          }}>
                            {selectedNews.isPublished ? "Published" : "Draft"}
                          </span>
                        </div>
                      </div>

                      <h3 style={{ color: "#722F37", marginBottom: "12px" }}>
                        {selectedNews.title}
                      </h3>
                      
                      <div style={{ marginBottom: "16px" }}>
                        <strong style={{ color: "#722F37" }}>By:</strong> {selectedNews.writer}
                      </div>

                      <div style={{ marginBottom: "20px" }}>
                        <strong style={{ color: "#722F37", display: "block", marginBottom: "8px" }}>Summary:</strong>
                        <p style={{ lineHeight: "1.6", color: "#333" }}>
                          {selectedNews.summary}
                        </p>
                      </div>

                      {selectedNews.fullContent && (
                        <div>
                          <strong style={{ color: "#722F37", display: "block", marginBottom: "8px" }}>Full Content:</strong>
                          <div style={{ 
                            lineHeight: "1.6", 
                            color: "#333",
                            background: "#F8F9FA",
                            padding: "16px",
                            borderRadius: "8px"
                          }}>
                            {selectedNews.fullContent}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                // Create/Edit Form
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "20px",
                    marginBottom: "20px"
                  }}>
                    {/* Title */}
                    <div style={{ gridColumn: isMobile ? "1" : "1 / -1" }}>
                      <label style={{
                        display: "block",
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px"
                      }}>
                        Title *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box"
                        }}
                        placeholder="Enter news title..."
                        required
                      />
                    </div>

                    {/* Writer */}
                    <div>
                      <label style={{
                        display: "block",
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px"
                      }}>
                        Writer
                      </label>
                      <input
                        type="text"
                        value={formData.writer}
                        onChange={(e) => setFormData({ ...formData, writer: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box"
                        }}
                        placeholder="Enter writer name..."
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label style={{
                        display: "block",
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px"
                      }}>
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box"
                        }}
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label style={{
                        display: "block",
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px"
                      }}>
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box"
                        }}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    {/* Type */}
                    <div>
                      <label style={{
                        display: "block",
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px"
                      }}>
                        Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box"
                        }}
                      >
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                      </select>
                    </div>

                    {/* Image Upload */}
                    <div>
                      <label style={{
                        display: "block",
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "6px"
                      }}>
                        Image Upload
                      </label>
                      <input
                        ref={imageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                      <button
                        type="button"
                        onClick={() => imageInputRef.current?.click()}
                        style={{
                          width: "100%",
                          padding: "12px",
                          border: "2px dashed #D1D5DB",
                          borderRadius: "8px",
                          fontSize: "14px",
                          background: "transparent",
                          cursor: "pointer",
                          color: "#722F37",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px"
                        }}
                      >
                        📁 Choose Image File
                      </button>
                      {imagePreview && (
                        <div style={{ marginTop: "10px" }}>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{
                              width: "100%",
                              maxHeight: "200px",
                              objectFit: "cover",
                              borderRadius: "8px"
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Video Upload (if type is video) */}
                    {formData.type === "video" && (
                      <div>
                        <label style={{
                          display: "block",
                          color: "#722F37",
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "6px"
                        }}>
                          Video Upload
                        </label>
                        <input
                          ref={videoInputRef}
                          type="file"
                          accept="video/*"
                          onChange={handleVideoUpload}
                          style={{ display: "none" }}
                        />
                        <button
                          type="button"
                          onClick={() => videoInputRef.current?.click()}
                          style={{
                            width: "100%",
                            padding: "12px",
                            border: "2px dashed #D1D5DB",
                            borderRadius: "8px",
                            fontSize: "14px",
                            background: "transparent",
                            cursor: "pointer",
                            color: "#722F37",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px"
                          }}
                        >
                          🎥 Choose Video File
                        </button>
                        {videoPreview && (
                          <div style={{ marginTop: "10px" }}>
                            <video
                              src={videoPreview}
                              controls
                              style={{
                                width: "100%",
                                maxHeight: "200px",
                                borderRadius: "8px"
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Published Status */}
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px",
                      marginTop: "6px"
                    }}>
                      <input
                        type="checkbox"
                        id="isPublished"
                        checked={formData.isPublished}
                        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                        style={{ transform: "scale(1.2)" }}
                      />
                      <label htmlFor="isPublished" style={{
                        color: "#722F37",
                        fontSize: "14px",
                        fontWeight: "600"
                      }}>
                        Published
                      </label>
                    </div>
                  </div>

                  {/* Summary */}
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{
                      display: "block",
                      color: "#722F37",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "6px"
                    }}>
                      Summary *
                    </label>
                    <textarea
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "8px",
                        fontSize: "14px",
                        outline: "none",
                        resize: "vertical",
                        minHeight: "100px",
                        boxSizing: "border-box"
                      }}
                      placeholder="Enter news summary..."
                      required
                    />
                  </div>

                  {/* Full Content */}
                  <div style={{ marginBottom: "30px" }}>
                    <label style={{
                      display: "block",
                      color: "#722F37",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "6px"
                    }}>
                      Full Content
                    </label>
                    <textarea
                      value={formData.fullContent}
                      onChange={(e) => setFormData({ ...formData, fullContent: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "8px",
                        fontSize: "14px",
                        outline: "none",
                        resize: "vertical",
                        minHeight: "200px",
                        boxSizing: "border-box"
                      }}
                      placeholder="Enter full article content..."
                    />
                  </div>

                  {/* Form Actions */}
                  <div style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "flex-end",
                    paddingTop: "20px",
                    borderTop: "1px solid #E5E5E5"
                  }}>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      style={{
                        padding: "12px 20px",
                        background: "#F3F4F6",
                        border: "1px solid #D1D5DB",
                        borderRadius: "8px",
                        color: "#374151",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer"
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{
                        padding: "12px 20px",
                        background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                        border: "none",
                        borderRadius: "8px",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <Save size={16} />
                      {modalMode === "create" ? "Create News" : "Update News"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 768px) {
            button:active {
              transform: scale(0.95) !important;
            }
          }
          
          /* Custom scrollbar for modal */
          div::-webkit-scrollbar {
            width: 6px;
          }
          
          div::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }
          
          div::-webkit-scrollbar-thumb {
            background: #FF8C42;
            border-radius: 3px;
          }
          
          div::-webkit-scrollbar-thumb:hover {
            background: #722F37;
          }
          
          /* Ensure proper layout within sidebar */
          .news-admin-container {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
        `}</style>
      </div>
    </>
  );
};

export default NewsAdmin;