"use client"

import { useState, useEffect, useRef } from "react"
import { User, Eye, Clock, Camera, Video, ArrowRight, Volume2, VolumeX, Star, Play, Heart, Share2, Bookmark, Menu, Users, Newspaper, UserCheck, Globe, Activity, Home, Gamepad2, Mic, BookOpen, Info } from 'lucide-react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Navbar from "../landing/Navbar"

const EntertainmentSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [mutedVideos, setMutedVideos] = useState({})
  const [likedContent, setLikedContent] = useState({})
  const [bookmarkedContent, setBookmarkedContent] = useState({})
  const videoRefs = useRef({})

  // Window resize handler
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

  const allVideoSections = [
    {
      id: 10,
      title: "Movie Premiere Live Stream",
      description: "Exclusive red carpet coverage with celebrity interviews and behind-the-scenes moments",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Movie+Premiere",
      category: "LIVE",
      duration: "2:15:30",
      views: "245.3K",
      isLive: true,
      rating: 4.9,
    },
    {
      id: 11,
      title: "Movie Trailers & Reviews",
      description: "Latest movie trailers and exclusive critic reviews with behind-the-scenes commentary",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Movie+Trailers",
      category: "Reviews",
      duration: "4:25",
      views: "567.8K",
      isLive: false,
      rating: 4.8,
    },
    {
      id: 12,
      title: "Celebrity Interviews",
      description: "Intimate one-on-one conversations exploring the personal journeys of entertainment's biggest names",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Celebrity+Interview",
      category: "Interview",
      duration: "45:12",
      views: "189.7K",
      isLive: false,
      rating: 4.7,
    },
  ]

  // Initialize all videos as muted
  useEffect(() => {
    const initialMutedState = {}
    allVideoSections.forEach((video) => {
      initialMutedState[video.id] = true
    })
    setMutedVideos(initialMutedState)
  }, [])

  // Responsive values
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

  const toggleVideoMute = (videoId) => {
    const video = videoRefs.current[videoId]
    if (video) {
      const newMutedState = !mutedVideos[videoId]
      video.muted = newMutedState
      setMutedVideos((prev) => ({
        ...prev,
        [videoId]: newMutedState,
      }))
    }
  }

  const toggleLike = (contentId) => {
    setLikedContent((prev) => ({
      ...prev,
      [contentId]: !prev[contentId],
    }))
  }

  const toggleBookmark = (contentId) => {
    setBookmarkedContent((prev) => ({
      ...prev,
      [contentId]: !prev[contentId],
    }))
  }

  const VideoCard = ({ item }) => {
    const isMuted = mutedVideos[item.id]
    return (
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "20px",
          overflow: "hidden",
          backdropFilter: "blur(25px)",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          animation: "fadeInUp 0.6s ease-out",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(-12px) scale(1.02)"
            e.currentTarget.style.boxShadow = "0 25px 50px rgba(255, 140, 66, 0.2)"
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(0px) scale(1)"
            e.currentTarget.style.boxShadow = "none"
          }
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <video
            ref={(el) => {
              if (el) {
                videoRefs.current[item.id] = el
                el.muted = mutedVideos[item.id] !== false
              }
            }}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            style={{
              width: "100%",
              height: isMobile ? "160px" : "180px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) e.target.style.transform = "scale(1.08)"
            }}
            onMouseLeave={(e) => {
              if (!isMobile) e.target.style.transform = "scale(1)"
            }}
          >
            <source src={item.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button Overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60px",
              height: "60px",
              background: "rgba(255, 140, 66, 0.9)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              opacity: isMobile ? 1 : 0,
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = "1"
              e.target.style.transform = "translate(-50%, -50%) scale(1.1)"
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.opacity = "0"
                e.target.style.transform = "translate(-50%, -50%) scale(1)"
              }
            }}
          >
            <Play size={24} style={{ color: "#FFFFFF", marginLeft: "4px" }} />
          </div>

          {/* Volume Control */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "40px",
              height: "40px",
              background: "rgba(0, 0, 0, 0.8)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(15px)",
            }}
            onClick={(e) => {
              e.stopPropagation()
              toggleVideoMute(item.id)
            }}
          >
            {isMuted ? (
              <VolumeX size={18} style={{ color: "#FFFFFF" }} />
            ) : (
              <Volume2 size={18} style={{ color: "#FFFFFF" }} />
            )}
          </div>

          {/* Category Badge */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: item.isLive ? "#FF0000" : "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
              color: "#FFFFFF",
              padding: getPadding("6px 14px", "4px 10px"),
              borderRadius: "20px",
              fontSize: getFontSize("12px", "11px", "10px"),
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {item.category}
          </div>

          {/* Duration */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              background: "rgba(0, 0, 0, 0.8)",
              color: "#FFFFFF",
              padding: getPadding("6px 10px", "4px 8px"),
              borderRadius: "8px",
              fontSize: getFontSize("12px", "11px", "10px"),
              fontWeight: "600",
              backdropFilter: "blur(10px)",
            }}
          >
            {item.duration}
          </div>

          {/* Interactive Actions */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "12px",
              display: "flex",
              gap: "8px",
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggleLike(item.id)
              }}
              style={{
                width: "36px",
                height: "36px",
                background: likedContent[item.id] ? "#FF0066" : "rgba(0, 0, 0, 0.7)",
                border: "none",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              <Heart size={14} style={{ color: "#FFFFFF", fill: likedContent[item.id] ? "#FFFFFF" : "none" }} />
            </button>
            <button
              style={{
                width: "36px",
                height: "36px",
                background: "rgba(0, 0, 0, 0.7)",
                border: "none",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              <Share2 size={14} style={{ color: "#FFFFFF" }} />
            </button>
          </div>
        </div>
        
        <div style={{ padding: getPadding("20px", "16px") }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  style={{
                    color: i < Math.floor(item.rating) ? "#FFD700" : "#666",
                    fill: i < Math.floor(item.rating) ? "#FFD700" : "none",
                  }}
                />
              ))}
              <span style={{ color: "#CCCCCC", fontSize: "12px", marginLeft: "4px" }}>
                {item.rating}
              </span>
            </div>
            {item.isLive && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "#FF0000",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#FF0000",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite",
                  }}
                ></div>
                LIVE
              </div>
            )}
          </div>
          
          <h3
            style={{
              color: "#FFFFFF",
              fontSize: getFontSize("18px", "16px", "15px"),
              fontWeight: "bold",
              marginBottom: "8px",
              lineHeight: "1.3",
            }}
          >
            {item.title}
          </h3>
          
          <p
            style={{
              color: "#CCCCCC",
              fontSize: getFontSize("14px", "13px", "12px"),
              marginBottom: "16px",
              lineHeight: "1.5",
              display: "-webkit-box",
              WebkitLineClamp: isMobile ? 2 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.description}
          </p>
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: getFontSize("12px", "11px", "10px"),
              color: "#AAAAAA",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Video size={isMobile ? 10 : 12} />
              <span>Video</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Eye size={isMobile ? 10 : 12} />
              <span>{item.views}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      {/* Updated Navbar */}
      <Navbar />
      
      {/* Main Content */}
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
        {/* Enhanced Background Effects */}
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
          ></div>
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
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              width: isMobile ? "150px" : "300px",
              height: isMobile ? "150px" : "300px",
              background: "radial-gradient(circle, #FF0066 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(120px)",
              animation: "float 10s ease-in-out infinite",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "15%",
              width: isMobile ? "180px" : "280px",
              height: isMobile ? "180px" : "280px",
              background: "radial-gradient(circle, #8A2BE2 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(90px)",
              animation: "float 12s ease-in-out infinite reverse",
            }}
          ></div>
        </div>

        <div
          style={{
            width: "100%",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: getPadding("60px", "40px"),
              animation: "fadeInDown 0.8s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: getFontSize("64px", "48px", "36px"),
                fontWeight: "900",
                background: "linear-gradient(135deg, #FF8C42 0%, #FF0066 50%, #8A2BE2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
                lineHeight: "1.1",
                letterSpacing: "-1px",
              }}
            >
              ENTERTAINMENT
            </h1>
            <div
              style={{
                fontSize: getFontSize("24px", "20px", "16px"),
                color: "#FFFFFF",
                fontWeight: "300",
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Premium Movie Content Hub
            </div>
            <p
              style={{
                fontSize: getFontSize("18px", "16px", "14px"),
                color: "#CCCCCC",
                marginBottom: getPadding("40px", "30px"),
                lineHeight: "1.6",
                maxWidth: isMobile ? "100%" : "700px",
                margin: `0 auto ${getPadding("40px", "30px")} auto`,
                padding: isMobile ? "0 8px" : "0",
              }}
            >
              Dive deep into the world of cinema with exclusive movie premieres, behind-the-scenes content, 
              celebrity interviews, and premium access to the film industry's biggest moments.
            </p>
          </div>

          {/* Video Content */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: getPadding("40px", "30px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Video size={isMobile ? 24 : 28} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("36px", "30px", "26px"),
                  fontWeight: "800",
                  color: "#FFFFFF",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                Exclusive Video Content
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("24px", "20px"),
                width: "100%",
              }}
            >
              {allVideoSections.map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
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
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
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
            .card:active {
              transform: scale(0.98) !important;
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

export default EntertainmentSection
