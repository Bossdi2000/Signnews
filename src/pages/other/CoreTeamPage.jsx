"use client"

import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Twitter, Globe, User, ChevronLeft, ChevronRight, Menu, Users, Newspaper, UserCheck, Activity, Home, Gamepad2, Mic, BookOpen, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../landing/Navbar'

const CoreTeamPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })

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
      skills: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
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
  ]

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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

  // Team Member Card Component
  const TeamMemberCard = ({ member, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 140, 66, 0.2)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        backdropFilter: 'blur(20px)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-8px)'
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 140, 66, 0.2)'
          e.currentTarget.style.borderColor = 'rgba(255, 140, 66, 0.4)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0px)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.borderColor = 'rgba(255, 140, 66, 0.2)'
        }
      }}
    >
      {/* Header with gradient background */}
      <div style={{
        background: 'linear-gradient(135deg, #722F37 0%, #000000 100%)',
        padding: '24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          margin: '0 auto 16px auto',
          overflow: 'hidden',
          border: '3px solid rgba(255, 140, 66, 0.5)',
          position: 'relative',
          zIndex: 2
        }}>
          <img 
            src={member.image || "/placeholder.svg"} 
            alt={member.name} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) e.target.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              if (!isMobile) e.target.style.transform = 'scale(1)'
            }}
          />
        </div>
        
        <h3 style={{
          color: '#FFFFFF',
          fontSize: getFontSize('20px', '18px', '16px'),
          marginBottom: '8px',
          fontWeight: '700',
          position: 'relative',
          zIndex: 2
        }}>
          {member.name}
        </h3>
        
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(255, 215, 0, 0.2)',
          padding: '6px 16px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          position: 'relative',
          zIndex: 2
        }}>
          <span style={{
            color: '#FFD700',
            fontSize: getFontSize('14px', '13px', '12px'),
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {member.position}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div style={{ padding: '24px' }}>
        <p style={{
          color: '#CCCCCC',
          fontSize: getFontSize('14px', '13px', '12px'),
          lineHeight: '1.6',
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {member.bio}
        </p>
        
        {/* Skills */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px', 
          marginBottom: '20px' 
        }}>
          {member.skills.map((skill, i) => (
            <span 
              key={i} 
              style={{
                padding: '6px 12px',
                background: 'rgba(255, 140, 66, 0.15)',
                borderRadius: '12px',
                color: '#FF8C42',
                fontSize: '11px',
                fontWeight: '600',
                border: '1px solid rgba(255, 140, 66, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Twitter Button */}
        <button
          onClick={() => window.open(member.twitter, '_blank')}
          style={{
            width: '100%',
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
            border: 'none',
            borderRadius: '12px',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(255, 140, 66, 0.2)'
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 24px rgba(255, 140, 66, 0.3)'
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(0px)'
              e.target.style.boxShadow = '0 4px 16px rgba(255, 140, 66, 0.2)'
            }
          }}
        >
          <Twitter size={16} />
          Follow on Twitter
        </button>
      </div>
    </motion.div>
  )

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
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  )

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      {/* Updated Navbar */}
      <Navbar />
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1A0D1A 25%, #2D1B2E 50%, #1A0D1A 75%, #000000 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
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
              background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(120px)",
              animation: "float 10s ease-in-out infinite",
            }}
          />
        </div>

        {/* Header */}
        <div style={{
          padding: getPadding('140px 24px 60px 24px', '120px 16px 40px 16px'),
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 140, 66, 0.2)',
              padding: '8px 24px',
              borderRadius: '25px',
              marginBottom: '32px',
              border: '1px solid rgba(255, 140, 66, 0.3)'
            }}>
              <Users size={20} style={{ color: '#FF8C42' }} />
              <span style={{
                color: '#FF8C42',
                fontSize: getFontSize('14px', '13px', '12px'),
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Our Team
              </span>
            </div>

            <h1 style={{
              fontSize: getFontSize('64px', '48px', '36px'),
              fontWeight: '900',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FF8C42 50%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.1',
              letterSpacing: '-2px'
            }}>
              Meet Our Core Team
            </h1>
            
            <p style={{
              fontSize: getFontSize('20px', '18px', '16px'),
              color: '#CCCCCC',
              marginBottom: '60px',
              maxWidth: '700px',
              margin: '0 auto 60px auto',
              lineHeight: '1.7'
            }}>
              Meet the talented individuals behind our success. Our diverse team of experts brings together 
              years of experience in journalism, technology, and community building.
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ 
          paddingBottom: '80px',
          position: 'relative',
          zIndex: 10
        }}>
          {renderCardsFormat()}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
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

export default CoreTeamPage
