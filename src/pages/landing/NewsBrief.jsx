import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  User, 
  Eye, 
  Clock, 
  Globe, 
  TrendingUp, 
  Film, 
  Music, 
  Camera,
  Video,
  Star,
  ArrowRight,
  Menu, 
  Users, 
  Newspaper,
  UserCheck,
  Activity,
  Home,
  Gamepad2,
  Mic,
  BookOpen,
  Info,
} from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsCount, setNewsCount] = useState("247");
  const { scrollY } = useScroll();
  const [navbarBackground, setNavbarBackground] = useState("rgba(0, 0, 0, 0.7)");
  const [navbarBorder, setNavbarBorder] = useState("1px solid rgba(114, 47, 55, 0.2)");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setNavbarBackground("rgba(0, 0, 0, 0.95)");
      setNavbarBorder("1px solid rgba(114, 47, 55, 0.4)");
    } else {
      setNavbarBackground("rgba(0, 0, 0, 0.7)");
      setNavbarBorder("1px solid rgba(114, 47, 55, 0.2)");
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsCount(prev => {
        const num = parseInt(prev.replace(',', ''));
        return (num + Math.floor(Math.random() * 3)).toString();
      });
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const navItems = [
    { name: "Home", icon: <Home size={16} />, href: "/" },
    { name: "News", icon: <Newspaper size={16} />, href: "/news" },
    { name: "Entertainment", icon: <Gamepad2 size={16} />, href: "/entertainment" },
    { name: "Orange mic", icon: <Mic size={16} />, href: "/orange-mic", special: true },
    { name: "Article/Education", icon: <BookOpen size={16} />, href: "/education" },
    { name: "About", icon: <Info size={16} />, href: "/about" },
    { name: "Core Team", icon: <Users size={16} />, href: "/core-team" }
  ];

  const handleNavigation = (href) => {
    console.log(`Navigating to: ${href}`);
    // In a real app, you'd use router.push(href) or similar
  };

  const drawer = (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: "280px",
        height: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #722F37 100%)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        borderLeft: "2px solid #722F37",
        zIndex: 1001,
        overflowY: 'auto'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div style={{
          marginBottom: "32px",
          textAlign: "center",
          color: "#FF8C42",
          fontSize: "20px",
          fontWeight: "bold",
          textShadow: "0 0 10px rgba(255, 140, 66, 0.5)",
        }}>
          SIGN-NEWS
        </div>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#888", fontSize: "14px" }}>News Articles</span>
          <span style={{ color: "#FF8C42", fontWeight: "600" }}>{newsCount}</span>
        </div>
      </div>

      <div>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            style={{ marginBottom: "8px" }}
          >
            <button
              style={{
                background: item.special ? "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)" : "rgba(114, 47, 55, 0.1)",
                border: item.special ? "1px solid #FF8C42" : "1px solid rgba(114, 47, 55, 0.2)",
                color: item.special ? "#FFFFFF" : "#FF8C42",
                fontSize: "16px",
                cursor: "pointer",
                padding: "12px 16px",
                borderRadius: "8px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "all 0.3s ease",
              }}
              onClick={() => {
                handleNavigation(item.href);
                handleDrawerToggle();
              }}
              onMouseEnter={(e) => {
                if (item.special) {
                  e.target.style.background = "linear-gradient(135deg, #FF6B1A 0%, #FF8C42 100%)";
                  e.target.style.boxShadow = "0 4px 16px rgba(255, 140, 66, 0.3)";
                } else {
                  e.target.style.background = "rgba(114, 47, 55, 0.2)";
                  e.target.style.border = "1px solid #722F37";
                  e.target.style.color = "#FFFFFF";
                }
              }}
              onMouseLeave={(e) => {
                if (item.special) {
                  e.target.style.background = "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)";
                  e.target.style.boxShadow = "none";
                } else {
                  e.target.style.background = "rgba(114, 47, 55, 0.1)";
                  e.target.style.border = "1px solid rgba(114, 47, 55, 0.2)";
                  e.target.style.color = "#FF8C42";
                }
              }}
            >
              {item.icon}
              {item.name}
            </button>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: "16px" }}
        >
          <button
            style={{
              background: "rgba(114, 47, 55, 0.1)",
              border: "1px solid rgba(114, 47, 55, 0.2)",
              color: "#FF8C42",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
            onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(114, 47, 55, 0.2)";
              e.target.style.border = "1px solid #722F37";
              e.target.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(114, 47, 55, 0.1)";
              e.target.style.border = "1px solid rgba(114, 47, 55, 0.2)";
              e.target.style.color = "#FF8C42";
            }}
          >
            <UserCheck size={18} />
            Join Us
          </button>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <>
      <motion.div
        animate={{ 
          background: navbarBackground, 
          borderBottom: navbarBorder,
          boxShadow: scrollY.get() > 50 ? "0 4px 24px rgba(114, 47, 55, 0.1)" : "none"
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: "blur(20px)",
          background: navbarBackground,
          borderBottom: navbarBorder,
        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          padding: "16px 24px",
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #722F37 0%, #4B1C22 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(114, 47, 55, 0.25)",
                border: "2px solid rgba(114, 47, 55, 0.3)",
              }}>
                <Newspaper size={24} color="#FF8C42" />
              </div>
              <div>
                <div style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "'Roboto Slab', Georgia, serif",
                }}>
                  <span style={{ color: "white" }}>SIGN</span>
                  <span style={{ color: "#FF8C42" }}>-NEWS</span>
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "#FF8C42",
                  fontWeight: "500",
                  margin: 0,
                }}>
                  News Platform
                </div>
              </div>
              <div style={{
                background: "rgba(255, 140, 66, 0.2)",
                color: "#FF8C42",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                fontSize: "11px",
                fontWeight: "600",
                padding: "4px 8px",
                borderRadius: "4px"
              }}>
                Live
              </div>
            </div>
          </motion.div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {window.innerWidth > 768 && (
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#888", fontSize: "12px" }}>Articles</div>
                    <div style={{ color: "#FF8C42", fontWeight: "600", fontSize: "14px" }}>
                      {newsCount}
                    </div>
                  </div>
                </motion.div>
                <div style={{ position: "relative" }}>
                  <Newspaper size={20} color="#FF8C42" />
                  <div style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    background: "#FF8C42",
                    borderRadius: "50%",
                    width: "12px",
                    height: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Activity size={8} color="#FFFFFF" />
                  </div>
                </div>
              </div>
            )}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                style={{
                  background: "linear-gradient(135deg, #722F37 0%, #4B1C22 50%, #2D0F12 100%)",
                  border: "1px solid #722F37",
                  color: "#FFFFFF",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(114, 47, 55, 0.25)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
                onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05) translateY(-2px)";
                  e.target.style.background = "linear-gradient(135deg, #722F37 0%, #8B3A42 100%)";
                  e.target.style.boxShadow = "0 0 20px rgba(114, 47, 55, 0.5), 0 0 40px rgba(114, 47, 55, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.background = "linear-gradient(135deg, #722F37 0%, #4B1C22 50%, #2D0F12 100%)";
                  e.target.style.boxShadow = "0 8px 32px rgba(114, 47, 55, 0.25)";
                }}
              >
                <UserCheck size={18} />
                Join Us
              </button>
            </motion.div>

            <button
              style={{
                color: "#FF8C42",
                background: "transparent",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={handleDrawerToggle}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 140, 66, 0.1)";
                e.target.style.boxShadow = "0 4px 16px rgba(255, 140, 66, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.boxShadow = "none";
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {mobileOpen && (
          <>
            <div 
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
                backdropFilter: 'blur(4px)'
              }}
              onClick={handleDrawerToggle}
            />
            {drawer}
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// NewsBrief Component
const NewsBrief = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsImageSections = [
    {
      id: 1,
      title: "Breaking News",
      description: "Latest updates and breaking stories from around the world",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
      category: "World News",
      readTime: "3 min read",
      views: "12.5K",
      author: "Sarah Johnson",
      date: "2 hours ago"
    },
    {
      id: 2,
      title: "Politics Today",
      description: "In-depth analysis of current political developments and policy changes",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop",
      category: "Politics",
      readTime: "5 min read",
      views: "8.3K",
      author: "Michael Chen",
      date: "4 hours ago"
    },
    {
      id: 3,
      title: "Business & Finance",
      description: "Market updates, economic trends, and business insights",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
      category: "Business",
      readTime: "4 min read",
      views: "15.2K",
      author: "Emma Davis",
      date: "6 hours ago"
    },
    {
      id: 4,
      title: "Technology",
      description: "Latest tech innovations, gadget reviews, and digital trends",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      category: "Tech",
      readTime: "6 min read",
      views: "22.1K",
      author: "Alex Thompson",
      date: "8 hours ago"
    }
  ];

  const newsVideoSections = [
    {
      id: 1,
      title: "Live Breaking News Coverage",
      description: "24/7 live coverage of the most important stories happening right now",
      thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      duration: "LIVE",
      category: "Live News",
      views: "45.2K watching",
      isLive: true
    },
    {
      id: 2,
      title: "Weekly News Roundup",
      description: "Comprehensive summary of the week's most significant events",
      thumbnail: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=250&fit=crop",
      duration: "15:32",
      category: "News Summary",
      views: "28.5K views"
    },
    {
      id: 3,
      title: "Investigative Report",
      description: "Deep dive into important issues affecting our community",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      duration: "22:45",
      category: "Investigation",
      views: "31.7K views"
    },
    {
      id: 4,
      title: "Expert Analysis",
      description: "Industry experts break down complex topics and current events",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      duration: "18:20",
      category: "Analysis",
      views: "19.8K views"
    }
  ];

  const entertainmentImageSections = [
    {
      id: 1,
      title: "Hollywood Updates",
      description: "Latest news from the entertainment capital of the world",
      image: "https://images.unsplash.com/photo-1489599096833-4d607503d2ce?w=400&h=250&fit=crop",
      category: "Movies",
      readTime: "3 min read",
      views: "35.6K",
      author: "Jessica Lee",
      date: "1 hour ago"
    },
    {
      id: 2,
      title: "Music Industry",
      description: "Chart-toppers, new releases, and exclusive artist interviews",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      category: "Music",
      readTime: "4 min read",
      views: "28.9K",
      author: "David Rodriguez",
      date: "3 hours ago"
    },
    {
      id: 3,
      title: "Celebrity Spotlight",
      description: "Exclusive interviews and behind-the-scenes content with your favorite stars",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop",
      category: "Celebrity",
      readTime: "5 min read",
      views: "42.3K",
      author: "Rachel Kim",
      date: "5 hours ago"
    },
    {
      id: 4,
      title: "TV & Streaming",
      description: "Reviews, recommendations, and updates from the world of television",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop",
      category: "Television",
      readTime: "6 min read",
      views: "18.7K",
      author: "Tom Wilson",
      date: "7 hours ago"
    }
  ];

  const entertainmentVideoSections = [
    {
      id: 1,
      title: "Movie Premiere Highlights",
      description: "Red carpet coverage and exclusive premiere footage",
      thumbnail: "https://images.unsplash.com/photo-1489599096833-4d607503d2ce?w=400&h=250&fit=crop",
      duration: "12:15",
      category: "Premiere",
      views: "156K views"
    },
    {
      id: 2,
      title: "Music Video Premieres",
      description: "Latest music videos from top artists and rising stars",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      duration: "4:32",
      category: "Music Video",
      views: "89.2K views"
    },
    {
      id: 3,
      title: "Celebrity Interviews",
      description: "Exclusive one-on-one conversations with entertainment's biggest names",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop",
      duration: "25:48",
      category: "Interview",
      views: "67.8K views"
    },
    {
      id: 4,
      title: "Behind the Scenes",
      description: "Go behind the camera on movie sets and recording studios",
      thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop",
      duration: "16:22",
      category: "BTS",
      views: "94.5K views"
    }
  ];

  const ImageCard = ({ item, type }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
          color: '#FFFFFF',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {item.category}
        </div>
      </div>
      
      <div style={{ padding: '16px' }}>
        <h3 style={{
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '6px',
          lineHeight: '1.3'
        }}>
          {item.title}
        </h3>
        
        <p style={{
          color: '#CCCCCC',
          fontSize: '13px',
          marginBottom: '12px',
          lineHeight: '1.4'
        }}>
          {item.description}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#AAAAAA'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <User size={12} />
            <span>{item.author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={12} />
              <span>{item.readTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Eye size={12} />
              <span>{item.views}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const VideoCard = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{
            width: '100%',
            height: '160px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Play Button Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.3)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '1'}
        onMouseLeave={(e) => e.target.style.opacity = '0'}
        >
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(255, 140, 66, 0.4)'
          }}>
            <Play size={24} style={{ color: '#FFFFFF', marginLeft: '2px' }} />
          </div>
        </div>
        
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: item.isLive ? '#FF0000' : 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
          color: '#FFFFFF',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {item.category}
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: '#FFFFFF',
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {item.duration}
        </div>
      </div>
      
      <div style={{ padding: '20px' }}>
        <h3 style={{
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '8px',
          lineHeight: '1.3'
        }}>
          {item.title}
        </h3>
        
        <p style={{
          color: '#CCCCCC',
          fontSize: '14px',
          marginBottom: '16px',
          lineHeight: '1.5'
        }}>
          {item.description}
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: '#AAAAAA'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Video size={12} />
            <span>Video</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Eye size={12} />
            <span>{item.views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div style={{
      paddingTop: '80px', // Add padding to account for fixed navbar
      background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: '#722F37',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: '#FF8C42',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: '#FF8C42',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }}></div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
        padding: '80px 24px'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h1 style={{
            fontSize: window.innerWidth > 768 ? '56px' : '36px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            NEWS & 
            <span style={{ color: '#FF8C42' }}> ENTERTAINMENT</span>
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#CCCCCC',
            marginBottom: '40px',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px auto'
          }}>
            Stay informed and entertained with our comprehensive coverage of breaking news, 
            celebrity updates, and exclusive content from around the world.
          </p>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '4px',
            maxWidth: '300px',
            margin: '0 auto'
          }}>
            {['news', 'entertainment'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '12px 24px',
                  background: activeTab === tab 
                    ? 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)'
                    : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image Sections */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px'
            }}>
              <Camera size={24} style={{ color: '#FF8C42' }} />
              <h2 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                margin: 0
              }}>
                Featured {activeTab === 'news' ? 'News' : 'Entertainment'} Stories
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {(activeTab === 'news' ? newsImageSections : entertainmentImageSections).map((item) => (
                <ImageCard key={item.id} item={item} type={activeTab} />
              ))}
            </div>
          </div>

          {/* Video Sections */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px'
            }}>
              <Video size={24} style={{ color: '#FF8C42' }} />
              <h2 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                margin: 0
              }}>
                {activeTab === 'news' ? 'News' : 'Entertainment'} Videos
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {(activeTab === 'news' ? newsVideoSections : entertainmentVideoSections).map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '60px 40px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            backdropFilter: 'blur(20px)'
          }}
        >
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Want More Exclusive Content?
          </h3>
          
          <p style={{
            color: '#CCCCCC',
            fontSize: '16px',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px auto'
          }}>
            Subscribe to our newsletter for breaking news alerts, exclusive interviews, 
            and behind-the-scenes content delivered straight to your inbox.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
              border: 'none',
              borderRadius: '12px',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 32px rgba(255, 140, 66, 0.25)'
            }}
          >
            Subscribe Now
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <NewsBrief />
    </div>
  );
};

export default App;