"use client"
import { useState, useEffect, useRef } from "react"
import { Clock, Camera, ArrowRight, Heart, Play, ImageIcon, FileText, X, Volume2, VolumeX } from "lucide-react"
import Navbar from "../landing/Navbar";
const Article = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [openModal, setOpenModal] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)
  const [likes, setLikes] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
  })
  const [liked, setLiked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
  })

  const [mutedVideos, setMutedVideos] = useState({})
  const videoRefs = useRef({})

  // Add after the state declarations
  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
    large: 1400,
  }

  const isMobile = windowSize.width <= BREAKPOINTS.mobile
  const isTablet = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.tablet
  const isDesktop = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.desktop
  const isLarge = windowSize.width > BREAKPOINTS.desktop

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
    newsData.forEach((item) => {
      if (item.type === "video") {
        initialMutedState[item.id] = true
      }
    })
    setMutedVideos(initialMutedState)
  }, [])

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: liked[id] ? prev[id] - 1 : prev[id] + 1,
    }))
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleOpenModal = (news) => {
    setSelectedNews(news)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedNews(null)
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

  const newsData = [
    {
      id: 3,
      title: "Open Conspiracy: How to Send $SIGN to $1",
      summary:
        "Welcome to the open conspiracy. If you're holding $SIGN, whether it's spot, staked, or you hold a long position on perp, this article is for you. This isn't financial advice. This is memetic warfare. A battle for consensus. A mission to make $SIGN = $1.",
      writer: "Xin(shin)Yan 闞欣",
      image: "/SOB1.jpeg",
      type: "image",
      category: "Blockchain",
      date: "2025-07-18",
      fullContent: (
        <>
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Open Conspiracy: How to Send $SIGN to $1
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>Originally written by:</strong> Xin(shin)Yan 闞欣, July 18, 2025
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>For $SIGN Holders Only</strong>
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Welcome to the open conspiracy. If you're holding $SIGN, whether it's spot, staked, or you hold a long
            position on perp, this article is for you. This isn't financial advice. This is memetic warfare. A battle
            for consensus. A mission to make $SIGN = $1.
          </p>
          <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
            I. First Principles
          </h3>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            1. All value is memetic, based purely on shared conviction.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Let me explain a bit more.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            It's counterintuitive, but the price of things you can't directly use isn't determined by fundamentals. It's
            shaped by belief, by narrative, by collective conviction.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            $SIGN, like everything else — from USD to BTC to Nvidia's $4T valuation — is worth what we believe it's
            worth. That number? It doesn't hold any intrinsic meaning anymore. $4T could theoretically buy 16 years of
            global rice production… but deep down, we all know it never will.
          </p>
        </>
      ),
    },
  ]

  // Split news into latest (first 9) and past (rest)
  const latestNews = newsData.slice(0, 9)
  const pastNews = newsData.slice(9)

  // Responsive values

  const getFontSize = (large, desktop, tablet, mobile) => {
    if (isMobile) return mobile
    if (isTablet) return tablet
    if (isDesktop) return desktop
    return large
  }

  const getPadding = (desktop, mobile) => {
    return isMobile ? mobile : desktop
  }

  const getGridColumns = () => {
    if (isMobile) return "1fr"
    if (isTablet) return "repeat(2, 1fr)"
    if (windowSize.width >= 1400) return "repeat(5, 1fr)"
    if (windowSize.width >= 1200) return "repeat(4, 1fr)"
    return "repeat(3, 1fr)"
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Play size={isMobile ? 10 : 12} />
      case "image":
        return <ImageIcon size={isMobile ? 10 : 12} />
      default:
        return <FileText size={isMobile ? 10 : 12} />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "video":
        return "#FF4444"
      case "image":
        return "#44AA44"
      default:
        return "#722F37"
    }
  }

  const NewsCard = ({ item }) => (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        animation: "fadeInUp 0.6s ease-out",
        height: isMobile ? "280px" : isTablet ? "300px" : "320px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-8px)"
          e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 140, 66, 0.15)"
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
          position: "relative",
          overflow: "hidden",
          height: isMobile ? "100px" : isTablet ? "120px" : "140px",
          width: "100%",
        }}
      >
        {item.videoUrl && item.type === "video" ? (
          <div style={{ position: "relative" }}>
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
              muted={mutedVideos[item.id] !== false}
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              poster={item.image || "/placeholder.svg?height=200&width=400"}
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
                top: "8px",
                right: "40px",
                width: "28px",
                height: "28px",
                background: "rgba(0, 0, 0, 0.7)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
                zIndex: 10,
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
              {mutedVideos[item.id] !== false ? (
                <VolumeX size={14} style={{ color: "#FFFFFF" }} />
              ) : (
                <Volume2 size={14} style={{ color: "#FFFFFF" }} />
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
        )}

        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: getTypeColor(item.type),
            color: "#FFFFFF",
            padding: getPadding("3px 6px", "2px 4px"),
            borderRadius: "8px",
            fontSize: getFontSize("10px", "9px", "8px"),
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          {getTypeIcon(item.type)}
          {item.type.toUpperCase()}
        </div>

        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
            color: "#FFFFFF",
            padding: getPadding("3px 8px", "2px 6px"),
            borderRadius: "8px",
            fontSize: getFontSize("10px", "9px", "8px"),
            fontWeight: "600",
          }}
        >
          {item.category}
        </div>
      </div>

      <div style={{ padding: getPadding("12px", "10px"), flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <span
              style={{
                color: "#AAAAAA",
                fontSize: getFontSize("10px", "9px", "8px"),
              }}
            >
              {item.date}
            </span>
          </div>

          <h3
            style={{
              color: "#FFFFFF",
              fontSize: getFontSize("16px", "14px", "13px", "12px"),
              fontWeight: "bold",
              marginBottom: "4px",
              lineHeight: "1.2",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.title}
          </h3>

          {item.writer && (
            <p
              style={{
                color: "#CCCCCC",
                fontSize: getFontSize("10px", "9px", "8px"),
                marginBottom: "4px",
              }}
            >
              By {item.writer}
            </p>
          )}

          <p
            style={{
              color: "#CCCCCC",
              fontSize: getFontSize("12px", "11px", "10px"),
              marginBottom: "8px",
              lineHeight: "1.4",
              display: "-webkit-box",
              WebkitLineClamp: isMobile ? 2 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.summary}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <button
            style={{
              flex: 1,
              padding: getPadding("8px 12px", "6px 10px"),
              background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
              border: "none",
              borderRadius: "6px",
              color: "#FFFFFF",
              fontSize: getFontSize("12px", "11px", "10px"),
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleOpenModal(item)}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "0 6px 15px rgba(255, 140, 66, 0.3)"
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "none"
              }
            }}
          >
            Read More
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              padding: "6px",
              background: "transparent",
              border: "none",
              color: liked[item.id] ? "#FF8C42" : "#AAAAAA",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onClick={() => toggleLike(item.id)}
          >
            <Heart size={isMobile ? 14 : 16} fill={liked[item.id] ? "currentColor" : "none"} />
            <span style={{ fontSize: getFontSize("10px", "9px", "8px") }}>{likes[item.id]}</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with top padding to account for fixed navbar */}
      <div
        style={{
          paddingTop: "100px", // Add space for fixed navbar
          padding: getPadding("100px 16px 40px 16px", "100px 12px 20px 12px"),
          background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          width: "100vw",
          boxSizing: "border-box",
        }}
      >
        {/* Background Effects */}
        <div style={{ position: "absolute", inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: isMobile ? "150px" : "250px",
              height: isMobile ? "150px" : "250px",
              background: "#722F37",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: isMobile ? "120px" : "200px",
              height: isMobile ? "120px" : "200px",
              background: "#FF8C42",
              borderRadius: "50%",
              filter: "blur(50px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              width: isMobile ? "100px" : "150px",
              height: isMobile ? "100px" : "150px",
              background: "#FF8C42",
              borderRadius: "50%",
              filter: "blur(70px)",
            }}
          ></div>
        </div>

        <div
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            padding: getPadding("0 20px", "0 8px"),
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: getPadding("40px", "30px"),
              animation: "fadeInDown 0.8s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: getFontSize("48px", "42px", "36px", "28px"),
                fontWeight: "bold",
                color: "#FFFFFF",
                marginBottom: "12px",
                lineHeight: "1.2",
              }}
            >
              Articles <span style={{ color: "#FF8C42" }}>Updates</span>
            </h1>
            <p
              style={{
                fontSize: getFontSize("16px", "14px", "12px"),
                color: "#CCCCCC",
                marginBottom: getPadding("30px", "20px"),
                lineHeight: "1.6",
                maxWidth: isMobile ? "100%" : "500px",
                margin: `0 auto ${getPadding("30px", "20px")} auto`,
                padding: isMobile ? "0 8px" : "0",
              }}
            >
              Stay updated with the latest developments, stories, and insights from the Sign ecosystem and blockchain
              world.
            </p>
          </div>

          {/* Latest News Section */}
          <div style={{ marginBottom: getPadding("60px", "40px") }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: getPadding("30px", "20px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Camera size={isMobile ? 18 : 20} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("32px", "26px", "22px", "18px"),
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Latest Articles
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("16px", "12px"),
                width: "100%",
                margin: "0 auto",
                padding: getPadding("0", "0 4px"),
              }}
            >
              {latestNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Past News Section */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: getPadding("30px", "20px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Clock size={isMobile ? 18 : 20} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("32px", "26px", "22px", "18px"),
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Past Articles
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("16px", "12px"),
                width: "100%",
                margin: "0 auto",
                padding: getPadding("0", "0 4px"),
              }}
            >
              {pastNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            style={{
              textAlign: "center",
              marginTop: getPadding("60px", "40px"),
              padding: getPadding("40px 30px", "30px 20px"),
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(20px)",
              animation: "fadeInUp 0.8s ease-out",
              width: "100%",
              boxSizing: "border-box",
              margin: `${getPadding("60px", "40px")} auto 0 auto`,
            }}
          >
            <h3
              style={{
                fontSize: getFontSize("22px", "20px", "18px"),
                fontWeight: "bold",
                color: "#FFFFFF",
                marginBottom: "12px",
              }}
            >
              Stay Connected
            </h3>
            <p
              style={{
                color: "#CCCCCC",
                fontSize: getFontSize("14px", "13px", "12px"),
                marginBottom: getPadding("24px", "20px"),
                maxWidth: isMobile ? "100%" : "400px",
                margin: `0 auto ${getPadding("24px", "20px")} auto`,
                lineHeight: "1.6",
              }}
            >
              Follow us for the latest updates, breaking news, and exclusive content from the Sign community.
            </p>
            <button
              style={{
                padding: getPadding("12px 24px", "10px 20px"),
                background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                border: "none",
                borderRadius: "10px",
                color: "#FFFFFF",
                fontSize: getFontSize("14px", "13px", "12px"),
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 6px 24px rgba(255, 140, 66, 0.25)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1.05)"
                  e.target.style.boxShadow = "0 8px 30px rgba(255, 140, 66, 0.35)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1)"
                  e.target.style.boxShadow = "0 6px 24px rgba(255, 140, 66, 0.25)"
                }
              }}
            >
              Join Community
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Modal */}
        {openModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={handleCloseModal}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: getPadding("40px", "20px"),
                maxWidth: "800px",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
                width: "100%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#722F37",
                  padding: "8px",
                }}
                onClick={handleCloseModal}
              >
                <X size={24} />
              </button>

              {selectedNews && (
                <div>
                  {selectedNews.fullContent || (
                    <div>
                      <h2 style={{ color: "#722F37", marginBottom: "16px" }}>{selectedNews.title}</h2>
                      <p style={{ lineHeight: "1.6", color: "#333" }}>{selectedNews.summary}</p>
                    </div>
                  )}
                </div>
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
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          /* Touch-friendly interactions for mobile */
          @media (max-width: 768px) {
            button:active {
              transform: scale(0.95) !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default Article
