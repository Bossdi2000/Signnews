"use client"
import { useState, useEffect } from "react"
import { User, Eye, Clock, Target, CheckCircle, Search, Users, Newspaper, UserCheck, Globe, Activity, Home, Gamepad2, Mic, BookOpen, Info, Menu, Award, Shield, Heart, Zap, TrendingUp, Star } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

// Navbar Component (same as Entertainment page)
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [newsCount, setNewsCount] = useState("247")

  const { scrollY } = useScroll()
  const [navbarBackground, setNavbarBackground] = useState("rgba(0, 0, 0, 0.7)")
  const [navbarBorder, setNavbarBorder] = useState("1px solid rgba(114, 47, 55, 0.2)")

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setNavbarBackground("rgba(0, 0, 0, 0.95)")
      setNavbarBorder("1px solid rgba(114, 47, 55, 0.4)")
    } else {
      setNavbarBackground("rgba(0, 0, 0, 0.7)")
      setNavbarBorder("1px solid rgba(114, 47, 55, 0.2)")
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsCount(prev => {
        const num = parseInt(prev.replace(',', ''))
        return (num + Math.floor(Math.random() * 3)).toString()
      })
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const navItems = [
    { name: "Home", icon: <Home size={16} />, href: "/" },
    { name: "News", icon: <Newspaper size={16} />, href: "/news" },
    { name: "Entertainment", icon: <Gamepad2 size={16} />, href: "/entertainment" },
    { name: "Orange mic", icon: <Mic size={16} />, href: "/orange-mic", special: true },
    { name: "Article/Education", icon: <BookOpen size={16} />, href: "/education" },
    { name: "About", icon: <Info size={16} />, href: "/about" },
    { name: "Core Team", icon: <Users size={16} />, href: "/core-team" }
  ]

  const handleNavigation = (href) => {
    window.location.href = href
  }

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
          width: "100%",
          padding: "16px 24px",
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img
                src="/NLogo.jpeg"
                alt="SIGN-NEWS Logo"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  objectFit: "cover",
                  boxShadow: "0 8px 32px rgba(114, 47, 55, 0.25)",
                  border: "2px solid rgba(114, 47, 55, 0.3)",
                }}
              />
              <div>
                <h1 style={{
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "'Roboto Slab', Georgia, serif",
                }}>
                  <span style={{ color: "white" }}>SIGN</span>
                  <span style={{ color: "#FF8C42" }}>-NEWS</span>
                </h1>
                <p style={{
                  fontSize: "12px",
                  color: "#FF8C42",
                  fontWeight: "500",
                  margin: 0,
                }}>
                  News Platform
                </p>
              </div>
              <div style={{
                background: "rgba(255, 140, 66, 0.2)",
                color: "#FF8C42",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                fontSize: "11px",
                fontWeight: "600",
                padding: "4px 8px",
                borderRadius: "12px",
              }}>
                Live
              </div>
            </div>
          </motion.div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div style={{ 
              display: window.innerWidth > 768 ? "flex" : "none", 
              gap: "24px", 
              alignItems: "center" 
            }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ color: "#888", fontSize: "12px", margin: 0 }}>Articles</p>
                  <p style={{ color: "#FF8C42", fontWeight: "600", fontSize: "14px", margin: 0 }}>
                    {newsCount}
                  </p>
                </div>
              </motion.div>
              <div style={{ position: "relative" }}>
                <Newspaper size={20} color="#FF8C42" />
                <div style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#FF8C42",
                  borderRadius: "50%",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Activity size={8} color="#FFFFFF" />
                </div>
              </div>
            </div>

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
                  gap: "8px",
                }}
                onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05) translateY(-2px)"
                  e.target.style.background = "linear-gradient(135deg, #722F37 0%, #8B3A42 100%)"
                  e.target.style.boxShadow = "0 0 20px rgba(114, 47, 55, 0.5), 0 0 40px rgba(114, 47, 55, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1) translateY(0px)"
                  e.target.style.background = "linear-gradient(135deg, #722F37 0%, #4B1C22 50%, #2D0F12 100%)"
                  e.target.style.boxShadow = "0 8px 32px rgba(114, 47, 55, 0.25)"
                }}
              >
                <UserCheck size={18} />
                Join Us
              </button>
            </motion.div>

            <button
              onClick={handleDrawerToggle}
              style={{
                color: "#FF8C42",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                borderRadius: "8px",
                background: "transparent",
                padding: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 140, 66, 0.1)"
                e.target.style.boxShadow = "0 4px 16px rgba(255, 140, 66, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent"
                e.target.style.boxShadow = "none"
              }}
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleDrawerToggle}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 1100,
              }}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed",
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
                zIndex: 1200,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 style={{
                  color: "#FF8C42",
                  marginBottom: "32px",
                  textAlign: "center",
                  fontWeight: "bold",
                  textShadow: "0 0 10px rgba(255, 140, 66, 0.5)",
                }}>
                  SIGN-NEWS
                </h2>
              </motion.div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>News Articles</p>
                  <p style={{ color: "#FF8C42", fontWeight: "600", margin: 0 }}>{newsCount}</p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <button
                      style={{
                        background: item.special 
                          ? "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)" 
                          : "rgba(114, 47, 55, 0.1)",
                        border: item.special 
                          ? "1px solid #FF8C42" 
                          : "1px solid rgba(114, 47, 55, 0.2)",
                        color: item.special ? "#FFFFFF" : "#FF8C42",
                        fontSize: "16px",
                        cursor: "pointer",
                        padding: "12px 16px",
                        textAlign: "left",
                        borderRadius: "8px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.3s ease",
                        marginBottom: "4px",
                      }}
                      onClick={() => {
                        handleNavigation(item.href)
                        handleDrawerToggle()
                      }}
                      onMouseEnter={(e) => {
                        if (item.special) {
                          e.target.style.background = "linear-gradient(135deg, #FF6B1A 0%, #FF8C42 100%)"
                          e.target.style.boxShadow = "0 4px 16px rgba(255, 140, 66, 0.3)"
                        } else {
                          e.target.style.background = "rgba(114, 47, 55, 0.2)"
                          e.target.style.color = "#FFFFFF"
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (item.special) {
                          e.target.style.background = "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)"
                          e.target.style.boxShadow = "none"
                        } else {
                          e.target.style.background = "rgba(114, 47, 55, 0.1)"
                          e.target.style.color = "#FF8C42"
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
                      marginTop: "16px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                    onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(114, 47, 55, 0.2)"
                      e.target.style.color = "#FFFFFF"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(114, 47, 55, 0.1)"
                      e.target.style.color = "#FF8C42"
                    }}
                  >
                    <UserCheck size={18} />
                    Join Us
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const AboutUsPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowSize.width <= 768
  const isTablet = windowSize.width > 768 && windowSize.width <= 1024

  const getFontSize = (desktop, tablet, mobile) => {
    if (isMobile) return mobile
    if (isTablet) return tablet
    return desktop
  }

  const getPadding = (desktop, mobile) => {
    return isMobile ? mobile : desktop
  }

  const getGridColumns = () => {
    if (isMobile) return "1fr"
    if (isTablet) return "repeat(2, 1fr)"
    return "repeat(3, 1fr)"
  }

  const teamValues = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of journalistic integrity and ethical reporting, ensuring every story meets our rigorous standards.",
      icon: <Shield size={isMobile ? 32 : 40} />,
      color: "#FF8C42",
      gradient: "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)",
      stats: "100% Verified"
    },
    {
      title: "Accuracy",
      description: "Every story is fact-checked and verified by our expert editorial team before publication, maintaining credibility.",
      icon: <CheckCircle size={isMobile ? 32 : 40} />,
      color: "#22C55E",
      gradient: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
      stats: "24/7 Coverage"
    },
    {
      title: "Transparency",
      description: "We believe in open, honest communication with our readers, providing clear sources and unbiased reporting.",
      icon: <Search size={isMobile ? 32 : 40} />,
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
      stats: "Open Source"
    },
  ]

  const stats = [
    {
      number: "100+",
      label: "Monthly Readers",
      icon: <Users size={24} />,
      color: "#FF8C42"
    },
    {
      number: "50+",
      label: "Stories Published",
      icon: <Newspaper size={24} />,
      color: "#22C55E"
    },
    {
      number: "10+",
      label: "Countries Covered",
      icon: <Globe size={24} />,
      color: "#3B82F6"
    },
    {
      number: "99.9%",
      label: "Accuracy Rate",
      icon: <TrendingUp size={24} />,
      color: "#8B5CF6"
    }
  ]

  const ValueCard = ({ value, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "24px",
        overflow: "hidden",
        backdropFilter: "blur(25px)",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-12px) scale(1.02)"
          e.currentTarget.style.boxShadow = `0 25px 50px ${value.color}33`
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(0px) scale(1)"
          e.currentTarget.style.boxShadow = "none"
        }
      }}
    >
      {/* Gradient background effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: value.gradient,
        }}
      />
      
      <div style={{ padding: getPadding("32px", "24px") }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "64px" : "80px",
            height: isMobile ? "64px" : "80px",
            background: `${value.color}20`,
            borderRadius: "20px",
            margin: "0 auto 24px",
            color: value.color,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Icon glow effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle, ${value.color}30 0%, transparent 70%)`,
              borderRadius: "20px",
            }}
          />
          {value.icon}
        </div>
        
        <h3
          style={{
            color: "#FFFFFF",
            fontSize: getFontSize("24px", "22px", "20px"),
            fontWeight: "800",
            marginBottom: "12px",
            textAlign: "center",
            letterSpacing: "-0.5px",
          }}
        >
          {value.title}
        </h3>
        
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: `${value.color}20`,
            padding: "6px 16px",
            borderRadius: "20px",
            marginBottom: "20px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Star size={14} style={{ color: value.color }} />
          <span style={{ 
            color: value.color, 
            fontSize: "12px", 
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            {value.stats}
          </span>
        </div>
        
        <p
          style={{
            color: "#CCCCCC",
            fontSize: getFontSize("16px", "15px", "14px"),
            lineHeight: "1.6",
            textAlign: "center",
            margin: 0,
          }}
        >
          {value.description}
        </p>
      </div>
    </motion.div>
  )

  const StatCard = ({ stat, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: "20px",
        padding: getPadding("32px 24px", "24px 20px"),
        textAlign: "center",
        backdropFilter: "blur(25px)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-8px)"
          e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}25`
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(0px)"
          e.currentTarget.style.boxShadow = "none"
        }
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: `radial-gradient(circle, ${stat.color}10 0%, transparent 70%)`,
          animation: "rotate 20s linear infinite",
        }}
      />
      
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            color: stat.color,
          }}
        >
          {stat.icon}
        </div>
        
        <div
          style={{
            fontSize: getFontSize("36px", "32px", "28px"),
            fontWeight: "900",
            color: "#FFFFFF",
            marginBottom: "8px",
            background: `linear-gradient(135deg, ${stat.color} 0%, #FFFFFF 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {stat.number}
        </div>
        
        <p
          style={{
            color: "#CCCCCC",
            fontSize: getFontSize("14px", "13px", "12px"),
            fontWeight: "600",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  )

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      <Navbar />
      
      <div
        style={{
          padding: getPadding("140px 24px 80px", "120px 16px 60px"),
          background: "linear-gradient(135deg, #000000 0%, #1A0D1A 25%, #2D1B2E 50%, #1A0D1A 75%, #000000 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* Background Effects */}
        <div style={{ position: "absolute", inset: 0, opacity: isMobile ? 0.08 : 0.15 }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: isMobile ? "250px" : "400px",
              height: isMobile ? "250px" : "400px",
              background: "radial-gradient(circle, #722F37 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(100px)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: isMobile ? "200px" : "350px",
              height: isMobile ? "200px" : "350px",
              background: "radial-gradient(circle, #FF8C42 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(80px)",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              width: isMobile ? "150px" : "300px",
              height: isMobile ? "150px" : "300px",
              background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(120px)",
              animation: "float 10s ease-in-out infinite",
            }}
          />
        </div>

        <div style={{ width: "100%", position: "relative", zIndex: 10 }}>
          {/* Hero Section */}
          <div
            style={{
              textAlign: "center",
              marginBottom: getPadding("80px", "60px"),
              animation: "fadeInDown 0.8s ease-out",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "rgba(255, 140, 66, 0.2)",
                  padding: "8px 24px",
                  borderRadius: "25px",
                  marginBottom: "32px",
                  border: "1px solid rgba(255, 140, 66, 0.3)",
                }}
              >
                <Info size={20} style={{ color: "#FF8C42" }} />
                <span style={{ 
                  color: "#FF8C42", 
                  fontSize: getFontSize("14px", "13px", "12px"), 
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  About Us
                </span>
              </div>
              
              <h1
                style={{
                  fontSize: getFontSize("72px", "56px", "42px"),
                  fontWeight: "900",
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FF8C42 50%, #722F37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "-2px",
                }}
              >
                ABOUT SIGN-NEWS
              </h1>
              
              <div
                style={{
                  fontSize: getFontSize("28px", "24px", "20px"),
                  color: "#FFFFFF",
                  fontWeight: "300",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Professional News Excellence
              </div>
              
              <p
                style={{
                  fontSize: getFontSize("20px", "18px", "16px"),
                  color: "#CCCCCC",
                  marginBottom: getPadding("50px", "40px"),
                  lineHeight: "1.7",
                  maxWidth: isMobile ? "100%" : "800px",
                  margin: `0 auto ${getPadding("50px", "40px")} auto`,
                  padding: isMobile ? "0 8px" : "0",
                }}
              >
                We are dedicated to delivering accurate, timely, and comprehensive news coverage that keeps you informed
                about SIGN DYNASTY around you with unparalleled journalistic integrity.
              </p>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div style={{ marginBottom: getPadding("100px", "80px") }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                  gap: getPadding("24px", "16px"),
                  marginBottom: getPadding("80px", "60px"),
                }}
              >
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mission Section */}
          <div style={{ marginBottom: getPadding("100px", "80px") }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: getPadding("60px", "40px"),
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  <Target size={isMobile ? 28 : 32} style={{ color: "#FF8C42" }} />
                  <h2
                    style={{
                      fontSize: getFontSize("42px", "36px", "30px"),
                      fontWeight: "800",
                      color: "#FFFFFF",
                      margin: 0,
                      letterSpacing: "-1px",
                    }}
                  >
                    Our Mission
                  </h2>
                </div>
                
                <div
                  style={{
                    background: "rgba(255, 140, 66, 0.1)",
                    border: "1px solid rgba(255, 140, 66, 0.2)",
                    borderRadius: "20px",
                    padding: getPadding("32px", "24px"),
                    backdropFilter: "blur(20px)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #FF8C42 0%, #722F37 100%)",
                    }}
                  />
                  
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontSize: getFontSize("18px", "17px", "16px"),
                      lineHeight: "1.8",
                      marginBottom: "24px",
                      fontWeight: "400",
                    }}
                  >
                    At SIGN NEWS, we believe that informed citizens are the foundation of a strong democracy. Our mission is
                    to provide accurate, unbiased, and comprehensive news coverage that empowers people to make informed
                    decisions about SIGN DYNASTY.
                  </p>
                  
                  <p
                    style={{
                      color: "#CCCCCC",
                      fontSize: getFontSize("16px", "15px", "14px"),
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    We strive to be your trusted source for breaking news, in-depth analysis, and multimedia content that
                    matters to your daily life and shapes global perspectives with integrity and excellence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    height: isMobile ? "300px" : "400px",
                    background: "linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(114, 47, 55, 0.2) 100%)",
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(25px)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Animated background pattern */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `
                        radial-gradient(circle at 20% 50%, rgba(255, 140, 66, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(114, 47, 55, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
                      `,
                      animation: "float 15s ease-in-out infinite",
                    }}
                  />
                  
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "24px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? "80px" : "100px",
                        height: isMobile ? "80px" : "100px",
                        background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                        borderRadius: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 20px 40px rgba(255, 140, 66, 0.3)",
                      }}
                    >
                      <Newspaper size={isMobile ? 40 : 50} style={{ color: "#FFFFFF" }} />
                    </div>
                    
                    <div style={{ textAlign: "center" }}>
                      <h3
                        style={{
                          color: "#FFFFFF",
                          fontSize: getFontSize("24px", "22px", "20px"),
                          fontWeight: "700",
                          marginBottom: "8px",
                        }}
                      >
                        Excellence in Journalism
                      </h3>
                      <p
                        style={{
                          color: "#CCCCCC",
                          fontSize: getFontSize("16px", "15px", "14px"),
                          margin: 0,
                          maxWidth: "280px",
                        }}
                      >
                        Delivering Sign Dynasty news coverage with integrity and precision
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: getPadding("50px", "40px"),
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Award size={isMobile ? 28 : 32} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("42px", "36px", "30px"),
                  fontWeight: "800",
                  color: "#FFFFFF",
                  margin: 0,
                  letterSpacing: "-1px",
                }}
              >
                Our Core Values
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  textAlign: "center",
                  color: "#CCCCCC",
                  fontSize: getFontSize("18px", "16px", "15px"),
                  marginBottom: getPadding("60px", "50px"),
                  maxWidth: isMobile ? "100%" : "700px",
                  margin: `0 auto ${getPadding("60px", "50px")} auto`,
                  lineHeight: "1.6",
                }}
              >
                These fundamental principles guide every story we tell and every decision we make in our commitment to exceptional journalism.
              </p>
            </motion.div>
            
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("32px", "24px"),
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {teamValues.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            style={{
              textAlign: "center",
              marginTop: getPadding("120px", "100px"),
              padding: getPadding("60px 40px", "50px 24px"),
              background: "linear-gradient(135deg, rgba(255, 140, 66, 0.15) 0%, rgba(114, 47, 55, 0.15) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "32px",
              backdropFilter: "blur(30px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50%",
                left: "-50%",
                width: "200%",
                height: "200%",
                background: "conic-gradient(from 0deg, transparent, rgba(255, 140, 66, 0.05), transparent, rgba(114, 47, 55, 0.05), transparent)",
                animation: "rotate 30s linear infinite",
                zIndex: 1,
              }}
            />
            
            <div style={{ position: "relative", zIndex: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3
                  style={{
                    fontSize: getFontSize("36px", "30px", "26px"),
                    fontWeight: "800",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #FF8C42 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  Join Our Community
                </h3>
                
                <p
                  style={{
                    color: "#CCCCCC",
                    fontSize: getFontSize("18px", "16px", "15px"),
                    marginBottom: getPadding("40px", "32px"),
                    maxWidth: isMobile ? "100%" : "600px",
                    margin: `0 auto ${getPadding("40px", "32px")} auto`,
                    lineHeight: "1.7",
                  }}
                >
                  Stay connected with the latest news, exclusive content, and behind-the-scenes insights from our editorial team.
                </p>
                
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    style={{
                      padding: getPadding("16px 32px", "14px 24px"),
                      background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                      border: "none",
                      borderRadius: "16px",
                      color: "#FFFFFF",
                      fontSize: getFontSize("16px", "15px", "14px"),
                      fontWeight: "700",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 12px 40px rgba(255, 140, 66, 0.3)",
                      transition: "all 0.4s ease",
                    }}
                    onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.target.style.transform = "translateY(-2px)"
                        e.target.style.boxShadow = "0 20px 60px rgba(255, 140, 66, 0.4)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.target.style.transform = "translateY(0px)"
                        e.target.style.boxShadow = "0 12px 40px rgba(255, 140, 66, 0.3)"
                      }
                    }}
                  >
                    <UserCheck size={18} />
                    Follow Us
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Enhanced mobile interactions */
          @media (max-width: 768px) {
            button:active {
              transform: scale(0.95) !important;
            }
          }
          
          /* Prevent horizontal scroll */
          body {
            overflow-x: hidden;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #FF8C42 0%, #722F37 100%);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #722F37 0%, #FF8C42 100%);
          }
        `}</style>
      </div>
    </div>
  )
}

export default AboutUsPage