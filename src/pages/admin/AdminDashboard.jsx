import { useState, useEffect } from "react";
import { 
  Newspaper, 
  Film, 
  FileText, 
  ArrowRight,
  ChevronRight,
  Activity,
  TrendingUp
} from "lucide-react";

const AdminDashboard = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const [currentView, setCurrentView] = useState("dashboard"); // dashboard, news, entertainment, article

  // Responsive breakpoints
  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
    large: 1400,
  };

  const isMobile = windowSize.width <= BREAKPOINTS.mobile;
  const isTablet = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.tablet;

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

  // Utility functions
  const getFontSize = (large, desktop, tablet, mobile) => {
    if (isMobile) return mobile || tablet;
    if (isTablet) return tablet || desktop;
    return large || desktop;
  };

  const getPadding = (desktop, mobile) => {
    return isMobile ? mobile : desktop;
  };

  // Navigation handler
  const navigateTo = (view) => {
    setCurrentView(view);
  };

  // Mock stats data
  const stats = [
    {
      title: "Total News",
      count: "127",
      change: "+12%",
      trend: "up",
      icon: <Newspaper size={24} />,
      color: "#22C55E"
    },
    {
      title: "Entertainment",
      count: "84",
      change: "+8%",
      trend: "up",
      icon: <Film size={24} />,
      color: "#8B5CF6"
    },
    {
      title: "Articles",
      count: "156",
      change: "+15%",
      trend: "up",
      icon: <FileText size={24} />,
      color: "#F59E0B"
    },
    {
      title: "Total Views",
      count: "42.3K",
      change: "+23%",
      trend: "up",
      icon: <Activity size={24} />,
      color: "#EF4444"
    }
  ];

  // Admin sections data
  const adminSections = [
    {
      id: "news",
      title: "News Management",
      description: "Manage news articles, stories, and updates",
      icon: <Newspaper size={32} />,
      color: "#22C55E",
      bgColor: "rgba(34, 197, 94, 0.1)",
      borderColor: "rgba(34, 197, 94, 0.2)",
      count: "127 items"
    },
    {
      id: "entertainment",
      title: "Entertainment Management",
      description: "Manage entertainment content and media",
      icon: <Film size={32} />,
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.1)",
      borderColor: "rgba(139, 92, 246, 0.2)",
      count: "84 items"
    },
    {
      id: "article",
      title: "Article Management",
      description: "Manage articles, blogs, and written content",
      icon: <FileText size={32} />,
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.1)",
      borderColor: "rgba(245, 158, 11, 0.2)",
      count: "156 items"
    }
  ];

  // Recent activity mock data
  const recentActivity = [
    {
      action: "Created new news article",
      title: "Episode 6: Back to the Cyber Café",
      time: "2 hours ago",
      type: "news"
    },
    {
      action: "Updated entertainment content",
      title: "Sign CEO Unveils Bold Vision",
      time: "4 hours ago",
      type: "entertainment"
    },
    {
      action: "Published article",
      title: "Open Conspiracy: How to Send $SIGN to $1",
      time: "6 hours ago",
      type: "article"
    },
    {
      action: "Created entertainment post",
      title: "TokenTable Distributes Major Airdrops",
      time: "1 day ago",
      type: "entertainment"
    }
  ];

  // Dashboard view
  const DashboardView = () => (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Stats Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile 
          ? "1fr" 
          : isTablet 
          ? "1fr 1fr" 
          : "repeat(4, 1fr)",
        gap: isMobile ? "16px" : "20px",
        marginBottom: isMobile ? "32px" : "40px"
      }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: isMobile ? "20px" : "24px",
              backdropFilter: "blur(20px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 10px 25px ${stat.color}20`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px"
            }}>
              <div style={{
                width: isMobile ? "40px" : "48px",
                height: isMobile ? "40px" : "48px",
                borderRadius: "12px",
                background: `${stat.color}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: stat.color
              }}>
                {stat.icon}
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: stat.color,
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: "600"
              }}>
                <TrendingUp size={isMobile ? 10 : 12} />
                {stat.change}
              </div>
            </div>
            
            <h3 style={{
              fontSize: getFontSize("28px", "24px", "20px", "18px"),
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: "4px"
            }}>
              {stat.count}
            </h3>
            
            <p style={{
              color: "#CCCCCC",
              fontSize: getFontSize("14px", "13px", "12px", "11px"),
              margin: 0
            }}>
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      {/* Admin Sections */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile 
          ? "1fr" 
          : isTablet 
          ? "1fr" 
          : "repeat(3, 1fr)",
        gap: isMobile ? "20px" : "24px",
        marginBottom: isMobile ? "32px" : "40px"
      }}>
        {adminSections.map((section) => (
          <div
            key={section.id}
            onClick={() => navigateTo(section.id)}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: `1px solid ${section.borderColor}`,
              borderRadius: "20px",
              padding: isMobile ? "24px 20px" : "32px 24px",
              backdropFilter: "blur(20px)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 15px 35px ${section.color}20`;
                e.currentTarget.style.background = section.bgColor;
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              }
            }}
          >
            {/* Background decoration */}
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: isMobile ? "60px" : "100px",
              height: isMobile ? "60px" : "100px",
              borderRadius: "50%",
              background: `${section.color}10`,
              filter: "blur(20px)"
            }}></div>

            <div style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "20px"
            }}>
              <div style={{
                width: isMobile ? "56px" : "64px",
                height: isMobile ? "56px" : "64px",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: section.color,
                position: "relative",
                zIndex: 2
              }}>
                {section.icon}
              </div>
              
              <ChevronRight 
                size={isMobile ? 16 : 20} 
                style={{ 
                  color: "#CCCCCC", 
                  transition: "transform 0.3s ease",
                  position: "relative",
                  zIndex: 2
                }} 
              />
            </div>

            <h3 style={{
              fontSize: getFontSize("20px", "18px", "16px", "15px"),
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: "8px",
              position: "relative",
              zIndex: 2
            }}>
              {section.title}
            </h3>

            <p style={{
              color: "#CCCCCC",
              fontSize: getFontSize("14px", "13px", "12px", "11px"),
              lineHeight: "1.5",
              marginBottom: "16px",
              position: "relative",
              zIndex: 2
            }}>
              {section.description}
            </p>

            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 2
            }}>
              <span style={{
                color: "#AAAAAA",
                fontSize: isMobile ? "11px" : "12px"
              }}>
                {section.count}
              </span>
              
              <button style={{
                padding: isMobile ? "6px 12px" : "8px 16px",
                background: `linear-gradient(135deg, ${section.color}, ${section.color}CC)`,
                border: "none",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.3s ease"
              }}>
                Manage
                <ArrowRight size={isMobile ? 10 : 12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "20px",
        padding: isMobile ? "20px" : "24px",
        backdropFilter: "blur(20px)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px"
        }}>
          <Activity size={isMobile ? 18 : 20} style={{ color: "#FF8C42" }} />
          <h3 style={{
            fontSize: getFontSize("20px", "18px", "16px", "15px"),
            fontWeight: "bold",
            color: "#FFFFFF",
            margin: 0
          }}>
            Recent Activity
          </h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "10px" : "12px" }}>
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              style={{
                padding: isMobile ? "14px" : "16px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                }
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{
                  color: "#FFFFFF",
                  fontSize: getFontSize("14px", "13px", "12px", "11px"),
                  fontWeight: "500",
                  marginBottom: "4px"
                }}>
                  {activity.action}
                </p>
                <p style={{
                  color: "#CCCCCC",
                  fontSize: getFontSize("12px", "11px", "10px", "10px"),
                  margin: 0
                }}>
                  {activity.title}
                </p>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "8px" : "12px"
              }}>
                <span style={{
                  color: "#AAAAAA",
                  fontSize: isMobile ? "10px" : "11px"
                }}>
                  {activity.time}
                </span>
                
                <div style={{
                  width: isMobile ? "6px" : "8px",
                  height: isMobile ? "6px" : "8px",
                  borderRadius: "50%",
                  background: activity.type === "news" ? "#22C55E" : 
                            activity.type === "entertainment" ? "#8B5CF6" : "#F59E0B"
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Content renderer based on current view
  const renderContent = () => {
    switch (currentView) {
      case "news":
        return (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: isMobile ? "32px 20px" : "40px",
            backdropFilter: "blur(20px)",
            textAlign: "center"
          }}>
            <Newspaper size={isMobile ? 40 : 48} style={{ color: "#22C55E", marginBottom: "16px" }} />
            <h2 style={{ 
              color: "#FFFFFF", 
              marginBottom: "8px",
              fontSize: getFontSize("24px", "22px", "20px", "18px")
            }}>News Management</h2>
            <p style={{ 
              color: "#CCCCCC", 
              marginBottom: "20px",
              fontSize: getFontSize("16px", "14px", "13px", "12px")
            }}>
              Import your NewsAdmin component here
            </p>
            <button
              onClick={() => setCurrentView("dashboard")}
              style={{
                padding: isMobile ? "10px 16px" : "12px 20px",
                background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                border: "none",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Back to Dashboard
            </button>
          </div>
        );
      
      case "entertainment":
        return (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: isMobile ? "32px 20px" : "40px",
            backdropFilter: "blur(20px)",
            textAlign: "center"
          }}>
            <Film size={isMobile ? 40 : 48} style={{ color: "#8B5CF6", marginBottom: "16px" }} />
            <h2 style={{ 
              color: "#FFFFFF", 
              marginBottom: "8px",
              fontSize: getFontSize("24px", "22px", "20px", "18px")
            }}>Entertainment Management</h2>
            <p style={{ 
              color: "#CCCCCC", 
              marginBottom: "20px",
              fontSize: getFontSize("16px", "14px", "13px", "12px")
            }}>
              Import your EntertainmentAdmin component here
            </p>
            <button
              onClick={() => setCurrentView("dashboard")}
              style={{
                padding: isMobile ? "10px 16px" : "12px 20px",
                background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                border: "none",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Back to Dashboard
            </button>
          </div>
        );
      
      case "article":
        return (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: isMobile ? "32px 20px" : "40px",
            backdropFilter: "blur(20px)",
            textAlign: "center"
          }}>
            <FileText size={isMobile ? 40 : 48} style={{ color: "#F59E0B", marginBottom: "16px" }} />
            <h2 style={{ 
              color: "#FFFFFF", 
              marginBottom: "8px",
              fontSize: getFontSize("24px", "22px", "20px", "18px")
            }}>Article Management</h2>
            <p style={{ 
              color: "#CCCCCC", 
              marginBottom: "20px",
              fontSize: getFontSize("16px", "14px", "13px", "12px")
            }}>
              Import your ArticleAdmin component here
            </p>
            <button
              onClick={() => setCurrentView("dashboard")}
              style={{
                padding: isMobile ? "10px 16px" : "12px 20px",
                background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                border: "none",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Back to Dashboard
            </button>
          </div>
        );
      
      default:
        return <DashboardView />;
    }
  };

  return (
    <div style={{
      position: "relative",
      minHeight: "100%",
      width: "100%",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    }}>
      {/* Background Effects */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        opacity: isMobile ? 0.03 : 0.08,
        pointerEvents: "none",
        zIndex: 0
      }}>
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: isMobile ? "100px" : "200px",
          height: isMobile ? "100px" : "200px",
          background: "#722F37",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: isMobile ? "80px" : "150px",
          height: isMobile ? "80px" : "150px",
          background: "#FF8C42",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}></div>
        <div style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          width: isMobile ? "60px" : "100px",
          height: isMobile ? "60px" : "100px",
          background: "#FF8C42",
          borderRadius: "50%",
          filter: "blur(70px)",
        }}></div>
      </div>

      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        margin: "0 auto",
        padding: 0,
        boxSizing: "border-box",
      }}>
        {/* Header with breadcrumb */}
        <div style={{
          marginBottom: getPadding("32px", "24px"),
          animation: "fadeInDown 0.8s ease-out"
        }}>
          {currentView !== "dashboard" && (
            <button
              onClick={() => setCurrentView("dashboard")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 12px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                color: "#CCCCCC",
                fontSize: isMobile ? "11px" : "12px",
                cursor: "pointer",
                marginBottom: "20px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.color = "#FFFFFF";
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.color = "#CCCCCC";
                }
              }}
            >
              ← Back to Dashboard
            </button>
          )}
          
          <h1 style={{
            fontSize: getFontSize("40px", "36px", "32px", "24px"),
            fontWeight: "bold",
            color: "#FFFFFF",
            marginBottom: "12px",
            lineHeight: "1.2",
          }}>
            SIGN <span style={{ color: "#FF8C42" }}>ADMIN</span>
          </h1>
          
          <p style={{
            fontSize: getFontSize("16px", "14px", "12px", "11px"),
            color: "#CCCCCC",
            margin: 0,
            lineHeight: "1.6"
          }}>
            {currentView === "dashboard" 
              ? "Manage your content and monitor your platform performance"
              : `Managing ${currentView} content`
            }
          </p>
        </div>

        {/* Dynamic Content */}
        <div style={{ animation: "fadeInUp 0.6s ease-out" }}>
          {renderContent()}
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default AdminDashboard;