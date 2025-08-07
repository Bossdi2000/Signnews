import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Twitter, Globe, User, ChevronLeft, ChevronRight, Menu, Users, Newspaper, UserCheck, Activity, Home, Gamepad2, Mic, BookOpen, Info } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsCount, setNewsCount] = useState("247");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", icon: <Home size={16} />, href: "/" },
    { name: "News", icon: <Newspaper size={16} />, href: "/news" },
    { name: "Entertainment", icon: <Gamepad2 size={16} />, href: "/entertainment" },
    { name: "Orange mic", icon: <Mic size={16} />, href: "https://orange-mic.vercel.app", special: true },
    { name: "Article/Education", icon: <BookOpen size={16} />, href: "/article" },
    { name: "About", icon: <Info size={16} />, href: "/about" },
    { name: "Core Team", icon: <Users size={16} />, href: "/core-team" }
  ];

  const handleNavigation = (href) => {
    window.location.href = href;
  };

  return (
    <>
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.7)",
        borderBottom: scrolled ? "1px solid rgba(114, 47, 55, 0.4)" : "1px solid rgba(114, 47, 55, 0.2)",
        boxShadow: scrolled ? "0 4px 24px rgba(114, 47, 55, 0.1)" : "none",
        transition: "all 0.3s ease"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          padding: "16px 24px",
        }}>
          {/* Logo Section */}
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
            <span style={{
              background: "rgba(255, 140, 66, 0.2)",
              color: "#FF8C42",
              border: "1px solid rgba(255, 140, 66, 0.3)",
              fontSize: "11px",
              fontWeight: "600",
              padding: "4px 8px",
              borderRadius: "12px"
            }}>
              Live
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {/* Stats Section - Only on Desktop */}
            <div style={{ 
              display: window.innerWidth >= 768 ? "flex" : "none", 
              gap: "24px", 
              alignItems: "center" 
            }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#888", fontSize: "12px", margin: 0 }}>Articles</p>
                <p style={{ color: "#FF8C42", fontWeight: "600", fontSize: "14px", margin: 0 }}>
                  {newsCount}
                </p>
              </div>
              <div style={{ position: "relative" }}>
                <Newspaper size={20} color="#FF8C42" />
                <Activity size={12} style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  backgroundColor: "#FF8C42",
                  borderRadius: "50%",
                  color: "#FFFFFF",
                  padding: "2px"
                }} />
              </div>
            </div>

            {/* Join Us Button */}
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
                e.target.style.boxShadow = "0 0 20px rgba(114, 47, 55, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) translateY(0px)";
                e.target.style.background = "linear-gradient(135deg, #722F37 0%, #4B1C22 50%, #2D0F12 100%)";
                e.target.style.boxShadow = "0 8px 32px rgba(114, 47, 55, 0.25)";
              }}
            >
              <UserCheck size={18} />
              Join Us
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={handleDrawerToggle}
              style={{
                color: "#FF8C42",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                borderRadius: "8px",
                background: "transparent",
                padding: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 140, 66, 0.1)";
                e.target.style.boxShadow = "0 4px 16px rgba(255, 140, 66, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.boxShadow = "none";
              }}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            zIndex: 1001,
            backdropFilter: "blur(10px)"
          }}
          onClick={handleDrawerToggle}
        >
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100vh",
              width: "280px",
              background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #722F37 100%)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              borderLeft: "2px solid #722F37",
              animation: "slideIn 0.3s ease-out"
            }}
            onClick={(e) => e.stopPropagation()}
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

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#888", fontSize: "14px" }}>News Articles</span>
                <span style={{ color: "#FF8C42", fontWeight: "600" }}>{newsCount}</span>
              </div>
            </div>

            {navItems.map((item, index) => (
              <button
                key={item.name}
                style={{
                  background: item.special ? "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)" : "rgba(114, 47, 55, 0.1)",
                  border: item.special ? "1px solid #FF8C42" : "1px solid rgba(114, 47, 55, 0.2)",
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
                  marginBottom: "8px"
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
            ))}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

// Core Team Component
const CoreTeamPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  const teamMembers = [
    {
      name: "Just Hemmy",
      position: "Founder",
      bio: "I'm hemmy, A crypto and forex trader, motion-graphics animator and News writer, combining visual storytelling with precise, poetic language to communicate complex ideas clearly and creatively.",
      image: "/DP1.jpeg",
      skills: ["Crypto Trading", "Forex Trading", "Motion Graphics"],
      twitter: "https://x.com/hemmy499",
    },
    {
      name: "Farmie",
      position: "Founder",
      bio: "I'm Farmie a crypto enthusiast, futures trader, content creator and community lead.",
      image: "DP2.jpeg",
      skills: ["Crypto Enthusiast", "Futures Trading", "Content Creation"],
      twitter: "https://x.com/Farmie_KIND",
    },
    {
      name: "Cute Aunty",
      position: "Sign news Intern",
      bio: "I'm Cutie Aunty, Sign News and Entertainment Intern, Web3 explorer, content creator, and space host.",
      image: "DP3.jpeg",
      skills: ["Web3 Explorer", "Content Creation", "Space Hosting"],
      twitter: "https://x.com/pikmenaba",
    },
    {
      name: "Thoth",
      position: "Sign news Community Lead",
      bio: "I'm Thoth, a crypto enthusiast and a good quality content creator standing as a huge supporter of Sign News & Entertainment",
      image: "DP12.jpeg",
      skills: ["Crypto Enthusiast", "Content Creation", "Community Support"],
      twitter: "https://x.com/Trojan_Bus1",
    },
    {
      name: "Lucky Esemuede",
      position: "Sign news Community Lead",
      bio: "I'm Lucky, an early contributor of Sign with outstanding support for the Sign News & Entertainment.",
      image: "DP13.jpeg",
      skills: ["Crypto Enthusiast", "Content Creation", "Community Support"],
      twitter: "https://x.com/Lucky_of_web3",
    },
    {
      name: "Big_D",
      position: "Sign news Developer",
      bio: "I'm a full-stack developer with a passion for creating innovative web applications. I love turning ideas into reality through code.",
      image: "DP4.jpg",
      skills: ["FrontendDeveloper", "Backend Developer", "UIUX Designer"],
      twitter: "https://x.com/_BigDe",
    },
    {
      name: "ProfBright",
      position: "Sign news Storyteller",
      bio: "I'm brightto ---Writer || Founder of @signscroll || crypto enthusiast || Fx trader || voice behind Sign news and Entertainment 🍊🐉🧡",
      image: "DP5.jpeg",
      skills: ["Writing", "Crypto Enthusiast", "Voice Acting"],
      twitter: "https://x.com/proftbright",
    },
    {
      name: "Johnny Sign",
      position: "Sign news Educational video creator",
      bio: "I'm Creative mind in motion. I'm a Web3 enthusiast and video animation specialist, passionate about bringing stories to life through tech and visuals",
      image: "DP6.jpeg",
      skills: ["Video Animation", "Web3", "Content Creation"],
      twitter: "https://x.com/johnnykepuz",
    },
    {
      name: "CYBROX",
      position: "Sign news Major wins Announcer",
      bio: "Expert in health and wellness topics, focusing on mental health and nutrition.",
      image: "DP7.jpeg",
      skills: ["Health Writing", "Nutrition", "Mental Health"],
      twitter: "https://x.com/manuelchuk89697",
    },
    {
      name: "BossGe",
      position: "Sign news Editor",
      bio: "I'm a web3 memes creator, graphic designer, video editor and moderator.",
      image: "DP8.jpeg",
      skills: ["Web3 Memes", "Graphic Design", "Video Editing"],
      twitter: "https://x.com/bossge226456",
    },
    {
      name: "Bern Signcares",
      position: "Sign news Amplifier",
      bio: "I am Bern your Sign Quote... A motivator for everyone and I'm happy to lift your mood up with my motivational quote. ",
      image: "DP9.jpeg",
      skills: ["Motivational Speaking", "Content Creation", "Community Engagement"],
      twitter: "https://x.com/BernSigncares",
    },
    {
      name: "Hey Amari",
      position: "Sign news Reporter",
      bio: "| Sign Storyteller | Orange Mic Host and Founder On-chain energy. I host, I vibe, I build. Bridging stories, culture & community through Sign waves and entertainment.",
      image: "DP10.jpeg",
      skills: ["Storytelling", "Community Building", "Entertainment"],
      twitter: "https://x.com/Amari_matex",
    },
    {
      name: "AJ_cr",
      position: "Sign news Reporter",
      bio: "I'm Aj, known as Aj_cr on X. 4 years in crypto. Leading the Indian Orange Dynasty. A Reasearcher, Content writer & video editor.",
      image: "DP11.jpeg",
      skills: ["Crypto Research", "Content Writing", "Video Editing"],
      twitter: "https://x.com/Aj_cr",
    },
  ];

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive values
  const isMobile = windowSize.width <= 768;
  const isTablet = windowSize.width > 768 && windowSize.width <= 1024;
  
  const getFontSize = (desktop, tablet, mobile) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };

  const getPadding = (desktop, mobile) => {
    return isMobile ? mobile : desktop;
  };

  // Format: Cards Grid
  const renderCardsFormat = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: getPadding('32px', '20px'),
      maxWidth: '1400px',
      margin: '0 auto',
      padding: getPadding('0 24px', '0 16px')
    }}>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 140, 66, 0.2)',
            borderRadius: '20px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backdropFilter: 'blur(20px)'
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 20px 60px rgba(255, 140, 66, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #722F37 0%, #000000 100%)',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              margin: '0 auto 16px auto',
              overflow: 'hidden',
              border: '3px solid rgba(255, 255, 255, 0.3)'
            }}>
              <img src={member.image} alt={member.name} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }} />
            </div>
            <h3 style={{
              color: '#FFFFFF',
              fontSize: getFontSize('20px', '18px', '16px'),
              marginBottom: '8px'
            }}>{member.name}</h3>
            <p style={{
              color: '#FFD700',
              fontSize: getFontSize('14px', '13px', '12px'),
              margin: 0
            }}>{member.position}</p>
          </div>
          
          <div style={{ padding: '24px' }}>
            <p style={{
              color: '#CCCCCC',
              fontSize: getFontSize('14px', '13px', '12px'),
              lineHeight: '1.5',
              marginBottom: '16px'
            }}>{member.bio}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              {member.skills.map((skill, i) => (
                <span key={i} style={{
                  padding: '4px 12px',
                  background: 'rgba(255, 140, 66, 0.2)',
                  borderRadius: '12px',
                  color: '#FF8C42',
                  fontSize: '11px'
                }}>{skill}</span>
              ))}
            </div>
            
            <button
              onClick={() => window.open(member.twitter, '_blank')}
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                border: 'none',
                borderRadius: '10px',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              Follow on Twitter
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        color: '#FFFFFF'
      }}>
        {/* Header */}
        <div style={{
          padding: getPadding('120px 24px 60px 24px', '120px 16px 40px 16px'),
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: getFontSize('64px', '48px', '36px'),
            fontWeight: 'bold',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #FF8C42 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Meet Our Core Team
          </h1>
          
          <p style={{
            fontSize: getFontSize('20px', '18px', '16px'),
            color: '#CCCCCC',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px auto'
          }}>
            Meet the talented individuals behind our success
          </p>
        </div>

        {/* Content */}
        <div style={{ paddingBottom: '80px' }}>
          {renderCardsFormat()}
        </div>
      </div>
    </>
  );
};

export default CoreTeamPage;