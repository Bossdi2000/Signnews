"use client"
import { useState, useEffect, useRef } from "react"
import { User, Eye, Clock, Camera, Video, ArrowRight, Volume2, VolumeX } from "lucide-react"

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("news")
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [mutedVideos, setMutedVideos] = useState({})
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

  // Initialize all videos as muted
  useEffect(() => {
    const initialMutedState = {}
    ;[...newsVideoSections, ...entertainmentVideoSections].forEach((video) => {
      initialMutedState[video.id] = true
    })
    setMutedVideos(initialMutedState)
  }, [])

  const newsImageSections = [
    {
      id: 1,
      title: "Breaking News",
      description: "Sign Intern Reveals Key Features and Updates as Sign App enters Testing",
      image: "/Hemy1.jpeg",
      category: "Breaking",
      author: "Just Hemmy",
      readTime: "5 min",
      views: "12.5K",
    },
    {
      id: 2,
      title: "Politics Today",
      description: "Sign CEO Xin Tan Shares Vision and Philosophy in Comprehensive AMA",
      image: "/Farm1.jpeg",
      category: "News",
      author: "Farmie",
      readTime: "8 min",
      views: "8.2K",
    },
    {
      id: 3,
      title: "Story",
      description: "The Flat tire: kelechi's journey continue as a simple act of kindness....",
      image: "/Bright1.jpeg",
      category: "Human Interest",
      author: "ProtBright",
      readTime: "6 min",
      views: "15.1K",
    },
  ]

  const newsVideoSections = [
    {
      id: 1,
      title: "Live Breaking News Coverage",
      description: "24/7 live coverage of the most important stories happening right now",
      videoUrl: "/VID1.mp4",
      category: "LIVE",
      duration: "2:45",
      views: "25.3K",
      isLive: true,
    },
    {
      id: 2,
      title: "Weekly News Roundup",
      description: "Comprehensive summary of the week's most significant events",
      videoUrl: "/VID2.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Weekly+Roundup",
      category: "Weekly",
      duration: "15:30",
      views: "18.7K",
      isLive: false,
    },
    {
      id: 3,
      title: "Investigative Report",
      description: "Deep dive into important issues affecting our community",
      videoUrl: "/VID3.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Investigation",
      category: "Investigation",
      duration: "22:15",
      views: "31.2K",
      isLive: false,
    },
  ]

  const entertainmentImageSections = [
    {
      id: 1,
      title: "Hollywood Updates",
      description: "Latest news from the entertainment capital of the world",
      image: "/placeholder.svg?height=250&width=400&text=Hollywood+Updates",
      category: "Movies",
      author: "Sarah Wilson",
      readTime: "4 min",
      views: "22.1K",
    },
    {
      id: 2,
      title: "Music Industry",
      description: "Chart-toppers, new releases, and exclusive artist interviews",
      image: "/placeholder.svg?height=250&width=400&text=Music+Industry",
      category: "Music",
      author: "David Brown",
      readTime: "7 min",
      views: "19.8K",
    },
    {
      id: 3,
      title: "Celebrity Spotlight",
      description: "Exclusive interviews and behind-the-scenes content with your favorite stars",
      image: "/placeholder.svg?height=250&width=400&text=Celebrity+News",
      category: "Celebrity",
      author: "Lisa Garcia",
      readTime: "5 min",
      views: "28.5K",
    },
  ]

  const entertainmentVideoSections = [
    {
      id: 4,
      title: "Movie Premiere Highlights",
      description: "Red carpet coverage and exclusive premiere footage",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Movie+Premiere",
      category: "Premiere",
      duration: "8:20",
      views: "45.2K",
      isLive: false,
    },
    {
      id: 5,
      title: "Music Video Premieres",
      description: "Latest music videos from top artists and rising stars",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Music+Video",
      category: "Music Video",
      duration: "4:15",
      views: "67.8K",
      isLive: false,
    },
    {
      id: 6,
      title: "Celebrity Interviews",
      description: "Exclusive one-on-one conversations with entertainment's biggest names",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail: "/placeholder.svg?height=250&width=400&text=Celebrity+Interview",
      category: "Interview",
      duration: "12:45",
      views: "38.9K",
      isLive: false,
    },
  ]

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

  const ImageCard = ({ item, type }) => (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        animation: "fadeInUp 0.6s ease-out",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-10px)"
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 140, 66, 0.15)"
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(0px)"
          e.currentTarget.style.boxShadow = "none"
        }
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          style={{
            width: "100%",
            height: isMobile ? "140px" : "160px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (!isMobile) e.target.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            if (!isMobile) e.target.style.transform = "scale(1)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
            color: "#FFFFFF",
            padding: getPadding("4px 12px", "3px 8px"),
            borderRadius: "12px",
            fontSize: getFontSize("12px", "11px", "10px"),
            fontWeight: "600",
          }}
        >
          {item.category}
        </div>
      </div>
      <div style={{ padding: getPadding("16px", "12px") }}>
        <h3
          style={{
            color: "#FFFFFF",
            fontSize: getFontSize("16px", "15px", "14px"),
            fontWeight: "bold",
            marginBottom: "6px",
            lineHeight: "1.3",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            color: "#CCCCCC",
            fontSize: getFontSize("13px", "12px", "11px"),
            marginBottom: "12px",
            lineHeight: "1.4",
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
            flexWrap: isMobile ? "wrap" : "nowrap",
            gap: isMobile ? "8px" : "0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <User size={isMobile ? 10 : 12} />
            <span>{item.author}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "8px" : "12px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={isMobile ? 10 : 12} />
              <span>{item.readTime}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Eye size={isMobile ? 10 : 12} />
              <span>{item.views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const VideoCard = ({ item }) => {
    const isMuted = mutedVideos[item.id]

    return (
      <div
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          animation: "fadeInUp 0.6s ease-out",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(-10px)"
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 140, 66, 0.15)"
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(0px)"
            e.currentTarget.style.boxShadow = "none"
          }
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Video Element - Always visible and autoplaying */}
          <video
            ref={(el) => {
              if (el) {
                videoRefs.current[item.id] = el
                // Set initial muted state
                el.muted = mutedVideos[item.id] !== false
              }
            }}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            style={{
              width: "100%",
              height: isMobile ? "140px" : "160px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) e.target.style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              if (!isMobile) e.target.style.transform = "scale(1)"
            }}
          >
            <source src={item.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Volume Control Button */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "36px",
              height: "36px",
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onClick={(e) => {
              e.stopPropagation()
              toggleVideoMute(item.id)
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.background = "rgba(255, 140, 66, 0.8)"
                e.target.style.transform = "scale(1.1)"
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.background = "rgba(0, 0, 0, 0.7)"
                e.target.style.transform = "scale(1)"
              }
            }}
          >
            {isMuted ? (
              <VolumeX size={16} style={{ color: "#FFFFFF" }} />
            ) : (
              <Volume2 size={16} style={{ color: "#FFFFFF" }} />
            )}
          </div>

          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: item.isLive ? "#FF0000" : "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
              color: "#FFFFFF",
              padding: getPadding("4px 12px", "3px 8px"),
              borderRadius: "12px",
              fontSize: getFontSize("12px", "11px", "10px"),
              fontWeight: "600",
            }}
          >
            {item.category}
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              background: "rgba(0, 0, 0, 0.8)",
              color: "#FFFFFF",
              padding: getPadding("4px 8px", "3px 6px"),
              borderRadius: "6px",
              fontSize: getFontSize("12px", "11px", "10px"),
              fontWeight: "600",
            }}
          >
            {item.duration}
          </div>
        </div>
        <div style={{ padding: getPadding("20px", "12px") }}>
          <h3
            style={{
              color: "#FFFFFF",
              fontSize: getFontSize("18px", "16px", "14px"),
              fontWeight: "bold",
              marginBottom: getPadding("8px", "6px"),
              lineHeight: "1.3",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              color: "#CCCCCC",
              fontSize: getFontSize("14px", "13px", "12px"),
              marginBottom: getPadding("16px", "12px"),
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
    <div
      style={{
        padding: getPadding("80px 24px", "60px 16px"),
        background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            background: "#722F37",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: isMobile ? "150px" : "250px",
            height: isMobile ? "150px" : "250px",
            background: "#FF8C42",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            width: isMobile ? "120px" : "200px",
            height: isMobile ? "120px" : "200px",
            background: "#FF8C42",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        ></div>
      </div>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
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
              fontSize: getFontSize("56px", "42px", "32px"),
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: "16px",
              lineHeight: "1.2",
            }}
          >
            NEWS &<span style={{ color: "#FF8C42" }}> ENTERTAINMENT</span>
          </h1>
          <p
            style={{
              fontSize: getFontSize("18px", "16px", "14px"),
              color: "#CCCCCC",
              marginBottom: getPadding("40px", "30px"),
              lineHeight: "1.6",
              maxWidth: isMobile ? "100%" : "600px",
              margin: `0 auto ${getPadding("40px", "30px")} auto`,
              padding: isMobile ? "0 8px" : "0",
            }}
          >
            Stay informed and entertained with our comprehensive coverage of breaking news, celebrity updates, and
            exclusive content from around the world.
          </p>
          {/* Tab Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "4px",
              maxWidth: isMobile ? "280px" : "300px",
              margin: "0 auto",
            }}
          >
            {["news", "entertainment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: getPadding("12px 24px", "10px 16px"),
                  background: activeTab === tab ? "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)" : "transparent",
                  border: "none",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  fontSize: getFontSize("16px", "15px", "14px"),
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize",
                  flex: 1,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Content Sections */}
        <div
          key={activeTab}
          style={{
            animation: "fadeIn 0.6s ease-out",
          }}
        >
          {/* Image Sections */}
          <div style={{ marginBottom: getPadding("80px", "60px") }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: getPadding("40px", "30px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Camera size={isMobile ? 20 : 24} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("32px", "28px", "24px"),
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Featured {activeTab === "news" ? "News" : "Entertainment"} Stories
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("20px", "16px"),
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {(activeTab === "news" ? newsImageSections : entertainmentImageSections).map((item) => (
                <ImageCard key={item.id} item={item} type={activeTab} />
              ))}
            </div>
          </div>
          {/* Video Sections */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: getPadding("40px", "30px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Video size={isMobile ? 20 : 24} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("32px", "28px", "24px"),
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {activeTab === "news" ? "News" : "Entertainment"} Videos
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("20px", "16px"),
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              {(activeTab === "news" ? newsVideoSections : entertainmentVideoSections).map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: getPadding("80px", "60px"),
            padding: getPadding("60px 40px", "40px 20px"),
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
            backdropFilter: "blur(20px)",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          <h3
            style={{
              fontSize: getFontSize("28px", "24px", "20px"),
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            Want More Exclusive Content?
          </h3>
          <p
            style={{
              color: "#CCCCCC",
              fontSize: getFontSize("16px", "15px", "14px"),
              marginBottom: getPadding("32px", "24px"),
              maxWidth: isMobile ? "100%" : "500px",
              margin: `0 auto ${getPadding("32px", "24px")} auto`,
              lineHeight: "1.6",
            }}
          >
            Subscribe to our newsletter for breaking news alerts, exclusive interviews, and behind-the-scenes content
            delivered straight to your inbox.
          </p>
          <button
            style={{
              padding: getPadding("16px 32px", "14px 24px"),
              background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
              border: "none",
              borderRadius: "12px",
              color: "#FFFFFF",
              fontSize: getFontSize("16px", "15px", "14px"),
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 32px rgba(255, 140, 66, 0.25)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "0 12px 40px rgba(255, 140, 66, 0.35)"
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "0 8px 32px rgba(255, 140, 66, 0.25)"
              }
            }}
          >
            Subscribe Now
            <ArrowRight size={18} />
          </button>
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        /* Touch-friendly interactions for mobile */
        @media (max-width: 768px) {
          button:active {
            transform: scale(0.95) !important;
          }
                              
          .card:active {
            transform: scale(0.98) !important;
          }
        }
        /* Prevent horizontal scroll on very small screens */
        @media (max-width: 320px) {
          .main-container {
            padding: 40px 12px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default NewsSection
