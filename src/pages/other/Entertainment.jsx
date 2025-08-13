"use client"

import { useState, useEffect, useRef } from "react"
import { User, Eye, Clock, Camera, Video, ArrowRight, Volume2, VolumeX, Star, Play, Heart, Share2, Bookmark, Menu, Users, Newspaper, UserCheck, Globe, Activity, Home, Gamepad2, Mic, BookOpen, Info, X } from 'lucide-react'

const Navbar = () => {
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

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: isMobile ? "12px 16px" : "16px 24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div
          style={{
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SIGN NEWS
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "16px" : "24px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
              color: "#FFFFFF",
              padding: isMobile ? "8px 16px" : "10px 20px",
              borderRadius: "25px",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Subscribe
          </div>
          <Menu size={isMobile ? 20 : 24} style={{ color: "#FFFFFF", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  )
}

const EntertainmentSection = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [mutedVideos, setMutedVideos] = useState({})
  const [likedContent, setLikedContent] = useState({})
  const [bookmarkedContent, setBookmarkedContent] = useState({})
  const [expandedStories, setExpandedStories] = useState({})
  const [selectedStory, setSelectedStory] = useState(null)
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
      type: "video",
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
      type: "video",
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
      type: "video",
    },
    {
      id: 1,
      title: "Episode 6: Back to the Cyber Café",
      summary:
        "It had been almost a year since Kelechi last stepped foot into the café. The walls were still yellowed by heat. The fans still made the same tired noise. And the boy in the back corner—the same position Kelechi once sat in—was hunched over, battling with a slow-loading page.",
      writer: "Sign News Desk",
      image: "/PT1.jpeg",
      type: "story",
      category: "Story",
      date: "2025-08-01",
      readTime: "5 min read",
      views: "12.4K",
      rating: 4.9,
      fullContent: `
        <h2>Episode 6: Back to the Cyber Café</h2>
        <p>It had been almost a year since Kelechi last stepped foot into the café. The walls were still yellowed by heat. The fans still made the same tired noise. And the boy in the back corner—the same position Kelechi once sat in—was hunched over, battling with a slow-loading page.</p>
        <p>Kelechi walked in quietly, holding two things: a new wireless mouse, and a folded flyer. He greeted the café attendant like an old friend.</p>
        <p>"Still saving lives with WiFi, I see," he joked.</p>
        <p>Then he walked to the boy. "You learning design?" he asked.</p>
        <p>The boy nodded without looking up. "Yes, sir. I just dey teach myself."</p>
        <p>Kelechi placed the mouse beside him and the flyer on the desk. "Free weekend classes," the flyer read. "Design, branding, mindset. For beginners. No payment. Just commitment."</p>
        <p>The boy stared. "Why?" he asked.</p>
        <p>Kelechi paused. "Because someone once helped me… and I swore I'd never keep the ladder to myself."</p>
        <p>Word spread fast. Every Saturday, the back room of his small office filled with dreamers: Girls who couldn't afford design school. Boys laughed at for chasing 'soft' skills. Men and women who only needed a chance.</p>
        <p>Kelechi gave them tools—but more than that, he gave them belief. "You're not small," he told them. "You're just not seen yet."</p>
        <p>And as he taught, he remembered the heat. The hunger. The ₦500 trousers. But now, he wore gratitude like a badge.</p>
        <p>Let them laugh. He had made it back to the café—but this time, with keys.</p>
      `,
    },
    {
      id: 2,
      title: "Episode 5: The Ones Who Laughed",
      summary:
        "It started slowly—the whispers. 'Is that not Kelechi? The one that used to iron one trouser like it was Gucci?' 'I heard Madam Fola uses him now.' The same boys who once joked about his cyber café hustle now stood at his shop window, pretending not to look in.",
      writer: "Sign News Desk",
      image: "/PT2.jpeg",
      type: "story",
      category: "Story",
      date: "2025-07-31",
      readTime: "4 min read",
      views: "18.7K",
      rating: 4.8,
      fullContent: `
        <h2>Episode 5: The Ones Who Laughed</h2>
        <p>It started slowly—the whispers.</p>
        <p>"Is that not Kelechi? The one that used to iron one trouser like it was Gucci?"</p>
        <p>"I heard Madam Fola uses him now."</p>
        <p>The same boys who once joked about his cyber café hustle now stood at his shop window, pretending not to look in. He had rented a small corner space—white walls, simple desk, and a bold sign: <strong>KEL DESIGNS — CREATIVITY WITH DIGNITY</strong>.</p>
        <p>One of them, Oba, finally walked in.</p>
        <p>"Guy, abeg. I get business card design. I no get full money now, but you fit run am for me?"</p>
        <p>Kelechi looked at him. This was the same Oba who once laughed the loudest. The same one who said, "Designer wey never chop."</p>
        <p>But Kelechi didn't flinch. "Send me the details," he said calmly.</p>
        <p>"No vex, bro," Oba added, voice lower now. "I dey reason you. You carry grace."</p>
        <p>Kelechi smiled. Not because he wanted revenge. But because he'd grown past the need for it. He didn't rise to prove them wrong. He rose because he believed he was right.</p>
        <p>And now…</p>
        <p>The ones who laughed were telling the story. "That boy? We knew him! We saw him from the beginning!"</p>
        <p>But what they didn't see—what they never could—was the night without data, the trousers ironed in silence, the hunger disguised as patience.</p>
        <p>Let them talk. The story is writing itself.</p>
      `,
    },
    {
      id: 8,
      title: "Episode 2: The Flat Tire",
      summary:
        "Kelechi's journey continues as a simple act of kindness leads to an unexpected opportunity that could change everything.",
      writer: "Proftbright",
      image: "/Bright1.jpeg",
      type: "story",
      category: "Community",
      date: "2025-07-10",
      readTime: "6 min read",
      views: "22.1K",
      rating: 4.7,
      fullContent: `
        <h2>Episode 2: The Flat Tire</h2>
        <p><strong>By @proftbright | July 10, 2025</strong></p>
        <p>The sun was harsh that afternoon, painting the cracked road in heat waves. Kelechi had just finished another three-hour stretch at the cyber café, eyes sore from the blue light, heart sore from hunger. But his trouser was still sharply ironed, like a soldier's uniform. He walked tall, sweat on his back, hope in his chest.</p>
        <p>Then he saw her — a woman pacing beside a black SUV with a flat tire.</p>
        <p>Everyone watched but no one moved.</p>
        <p>Kelechi hesitated for a second, then stepped forward.</p>
        <p>"Madam, you need help?" he asked, his voice steady despite the nervousness in his chest.</p>
        <p>The woman looked up, surprised. She was well-dressed, clearly from a different world than his. But her eyes showed genuine distress.</p>
        <p>"Yes, please. My driver is not picking up, and I don't know how to change this tire."</p>
        <p>Kelechi rolled up his sleeves. "No problem. I fit help you."</p>
        <p>For the next thirty minutes, under the scorching sun, Kelechi worked. His shirt became soaked with sweat, his hands dirty with grease. But he didn't stop. The woman watched, occasionally offering water from her car.</p>
        <p>When he finished, she reached for her purse. "How much?"</p>
        <p>Kelechi shook his head. "No, madam. Na help I dey help you."</p>
        <p>She insisted, pressing some notes into his palm. "At least take transport money."</p>
        <p>As she prepared to leave, she paused. "What do you do?"</p>
        <p>"I dey learn design. I dey hustle for cyber café."</p>
        <p>She nodded thoughtfully, then handed him her business card. "Call me tomorrow. I think I have something for you."</p>
        <p>That night, Kelechi stared at the card: "Mrs. Folake Adebayo, Creative Director, Apex Marketing Solutions."</p>
        <p>Sometimes, help comes disguised as a flat tire on a hot afternoon.</p>
      `,
    },
    {
      id: 14,
      title: "Weekly Story Episode by @proftbright - Episode 1: Ironed with Honour",
      summary:
        "A inspiring story about Kelechi, who owned only one pair of faded trousers but carried himself with quiet confidence and unwavering determination.",
      writer: "Proftbright",
      image: "/IMG44.jpeg",
      type: "story",
      category: "Community",
      date: "2025-06-01",
      readTime: "3 min read",
      views: "31.5K",
      rating: 4.9,
      fullContent: `
        <h2>Weekly Story Episode by @proftbright - Episode 1: Ironed with Honour</h2>
        <p><strong>By @proftbright | June 1, 2025</strong></p>
        <p><strong>Episode 1: Ironed with Honour</strong></p>
        <p>In a small town where everyone knew each other, there was a guy named Kelechi who owned only one pair of trousers — faded blue, worth maybe ₦500 (about $0.31) at best — but every morning, he ironed them like they were designer.</p>
        <p>While other guys his age wore multiple outfits throughout the week, Kelechi had learned the art of dignity in simplicity. He would wake up early, iron his single trouser with the precision of a tailor, match it with his two rotating shirts, and step out with confidence that money couldn't buy.</p>
        <p>The boys in the neighborhood would sometimes snicker. "Kelechi and his forever trouser," they'd whisper. But what they didn't see was the determination pressed into every crease, the dreams folded into every corner.</p>
        <p>Every day, he walked to the local cyber café, paid ₦100 for three hours of internet, and taught himself graphic design through YouTube tutorials and free online courses. His notebook was filled with sketches, color combinations, and typography experiments.</p>
        <p>One day, Mrs. Adunni, who owned the biggest provision store in town, needed a banner for her shop's anniversary. She had seen Kelechi's quiet dedication and decided to give him a chance.</p>
        <p>"How much for a simple banner design?" she asked.</p>
        <p>Kelechi's heart raced. This was his first real opportunity. "₦2,000, ma," he said, his voice steady despite his excitement.</p>
        <p>Three days later, he delivered a design so beautiful that Mrs. Adunni stared in amazement. The colors were perfect, the layout professional, the message clear and compelling.</p>
        <p>"This is excellent work," she said, handing him the money. "I'll recommend you to my friends."</p>
        <p>That ₦2,000 felt like ₦2 million in Kelechi's hands. But more than the money, it was validation. Proof that dignity and determination could open doors that wealth alone could never unlock.</p>
        <p>Years later, when Kelechi had his own design agency and could afford a hundred pairs of trousers, he kept that faded blue one hanging in his office. Not as a reminder of poverty, but as a testament to the power of pressing forward, one crease at a time.</p>
        <p>Sometimes, the best outfit you can wear is unwavering determination, ironed with dignity.</p>
      `,
    },
  ]

  // Initialize all videos as muted
  useEffect(() => {
    const initialMutedState = {}
    allVideoSections.forEach((item) => {
      if (item.type === "video") {
        initialMutedState[item.id] = true
      }
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

  const openStoryModal = (story) => {
    setSelectedStory(story)
  }

  const closeStoryModal = () => {
    setSelectedStory(null)
  }

  const VideoCard = ({ item }) => {
    const isMuted = mutedVideos[item.id]
    return (
      <div
        className="video-card"
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
            className="video-element"
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
          >
            <source src={item.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button Overlay */}
          <div
            className="play-button"
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

  const StoryCard = ({ item }) => {
    return (
      <div
        className="story-card"
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
            e.currentTarget.style.boxShadow = "0 25px 50px rgba(114, 47, 55, 0.2)"
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
          <img
            className="story-image"
            src={item.image || "/placeholder.svg?height=180&width=400&text=Story+Image"}
            alt={item.title}
            style={{
              width: "100%",
              height: isMobile ? "160px" : "180px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />

          {/* Story Read Button Overlay */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60px",
              height: "60px",
              background: "rgba(114, 47, 55, 0.9)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              opacity: isMobile ? 1 : 0,
            }}
            onClick={() => openStoryModal(item)}
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
            <BookOpen size={24} style={{ color: "#FFFFFF" }} />
          </div>

          {/* Category Badge */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "linear-gradient(135deg, #722F37 0%, #FF8C42 100%)",
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

          {/* Read Time */}
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
            {item.readTime}
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
              onClick={(e) => {
                e.stopPropagation()
                toggleBookmark(item.id)
              }}
              style={{
                width: "36px",
                height: "36px",
                background: bookmarkedContent[item.id] ? "#FF8C42" : "rgba(0, 0, 0, 0.7)",
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
              <Bookmark size={14} style={{ color: "#FFFFFF", fill: bookmarkedContent[item.id] ? "#FFFFFF" : "none" }} />
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
            <div style={{ color: "#FF8C42", fontSize: "12px", fontWeight: "600" }}>
              By {item.writer}
            </div>
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
              WebkitLineClamp: isMobile ? 3 : 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.summary}
          </p>

          {/* Read More Button */}
          <button
            className="read-button"
            onClick={() => openStoryModal(item)}
            style={{
              background: "linear-gradient(135deg, #722F37 0%, #FF8C42 100%)",
              color: "#FFFFFF",
              border: "none",
              padding: getPadding("12px 24px", "10px 20px"),
              borderRadius: "25px",
              fontSize: getFontSize("14px", "13px", "12px"),
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)"
              e.target.style.boxShadow = "0 8px 25px rgba(255, 140, 66, 0.3)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)"
              e.target.style.boxShadow = "none"
            }}
          >
            Read Full Story
            <ArrowRight size={16} />
          </button>
          
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
              <BookOpen size={isMobile ? 10 : 12} />
              <span>Story</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Eye size={isMobile ? 10 : 12} />
                <span>{item.views}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Clock size={isMobile ? 10 : 12} />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Story Modal Component
  const StoryModal = ({ story, onClose }) => {
    if (!story) return null

    return (
      <div
        className="story-modal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(20px)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "20px" : "40px",
          animation: "modalFadeIn 0.3s ease-out",
        }}
        onClick={onClose}
      >
        <div
          className="story-modal-content"
          style={{
            background: "linear-gradient(135deg, rgba(26, 13, 26, 0.95) 0%, rgba(45, 27, 46, 0.95) 50%, rgba(26, 13, 26, 0.95) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "20px",
            maxWidth: isMobile ? "100%" : "800px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "hidden",
            backdropFilter: "blur(25px)",
            position: "relative",
            animation: "modalSlideUp 0.3s ease-out",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div
            style={{
              padding: getPadding("24px", "20px"),
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              top: 0,
              background: "rgba(26, 13, 26, 0.9)",
              backdropFilter: "blur(20px)",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #722F37 0%, #FF8C42 100%)",
                  color: "#FFFFFF",
                  padding: "6px 12px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                {story.category}
              </div>
              <div style={{ color: "#CCCCCC", fontSize: "14px" }}>
                By {story.writer}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)"
                e.target.style.transform = "rotate(90deg)"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)"
                e.target.style.transform = "rotate(0deg)"
              }}
            >
              <X size={20} style={{ color: "#FFFFFF" }} />
            </button>
          </div>

          {/* Modal Content */}
          <div
            style={{
              padding: getPadding("0", "0"),
              maxHeight: "calc(90vh - 120px)",
              overflowY: "auto",
            }}
          >
            {/* Story Image */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                src={story.image || "/placeholder.svg?height=300&width=800&text=Story+Image"}
                alt={story.title}
                style={{
                  width: "100%",
                  height: isMobile ? "200px" : "300px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
                  padding: getPadding("40px 24px 24px", "30px 20px 20px"),
                }}
              >
                <h1
                  style={{
                    color: "#FFFFFF",
                    fontSize: getFontSize("32px", "28px", "24px"),
                    fontWeight: "bold",
                    marginBottom: "8px",
                    lineHeight: "1.2",
                  }}
                >
                  {story.title}
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    fontSize: "14px",
                    color: "#CCCCCC",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={14} />
                    <span>{story.readTime}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Eye size={14} />
                    <span>{story.views}</span>
                  </div>
                  <div>{story.date}</div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div
              className="story-content"
              style={{
                padding: getPadding("32px", "24px"),
                color: "#FFFFFF",
                lineHeight: "1.8",
                fontSize: getFontSize("16px", "15px", "14px"),
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: story.fullContent }}
                style={{
                  color: "#FFFFFF",
                  lineHeight: "1.8",
                }}
              />
              
              {/* Story Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginTop: "32px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <button
                  onClick={() => toggleLike(story.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: likedContent[story.id] ? "linear-gradient(135deg, #FF0066 0%, #FF8C42 100%)" : "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "25px",
                    padding: "12px 20px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Heart size={16} style={{ fill: likedContent[story.id] ? "#FFFFFF" : "none" }} />
                  {likedContent[story.id] ? "Liked" : "Like Story"}
                </button>
                
                <button
                  onClick={() => toggleBookmark(story.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: bookmarkedContent[story.id] ? "linear-gradient(135deg, #722F37 0%, #FF8C42 100%)" : "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "25px",
                    padding: "12px 20px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Bookmark size={16} style={{ fill: bookmarkedContent[story.id] ? "#FFFFFF" : "none" }} />
                  {bookmarkedContent[story.id] ? "Saved" : "Save Story"}
                </button>
                
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    borderRadius: "25px",
                    padding: "12px 20px",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>
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

          {/* Video Content Section */}
          <div style={{ marginBottom: getPadding("80px", "60px") }}>
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
              {allVideoSections
                .filter((item) => item.type === "video")
                .map((item) => (
                  <VideoCard key={item.id} item={item} />
                ))}
            </div>
          </div>

          {/* Story Content Section */}
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
              <BookOpen size={isMobile ? 24 : 28} style={{ color: "#722F37" }} />
              <h2
                style={{
                  fontSize: getFontSize("36px", "30px", "26px"),
                  fontWeight: "800",
                  color: "#FFFFFF",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                Featured Stories
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
              {allVideoSections
                .filter((item) => item.type === "story")
                .map((item) => (
                  <StoryCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        </div>

        {/* Story Modal */}
        <StoryModal story={selectedStory} onClose={closeStoryModal} />

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
          @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalSlideUp {
            from {
              opacity: 0;
              transform: translateY(50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
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
          
          /* Story content styling */
          .story-content h2 {
            color: #FF8C42 !important;
            font-size: 24px !important;
            font-weight: bold !important;
            margin-bottom: 16px !important;
            margin-top: 24px !important;
          }
          
          .story-content p {
            margin-bottom: 16px !important;
            line-height: 1.8 !important;
          }
          
          .story-content strong {
            color: #FF8C42 !important;
            font-weight: 600 !important;
          }
          
          /* Hover effects */
          .story-card:hover .story-image {
            transform: scale(1.05);
          }
          
          .story-card:hover .read-button {
            background: linear-gradient(135deg, #FF8C42 0%, #722F37 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(114, 47, 55, 0.3);
          }
          
          .video-card:hover .video-element {
            transform: scale(1.08);
          }
          
          .video-card:hover .play-button {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        `}</style>
      </div>
    </div>
  )
}

export default EntertainmentSection