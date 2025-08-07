import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const containerRef = useRef(null);
  const fullText = 'Your Trusted\nNews Source';
  
  const features = [
    { icon: <TrendingUp size={20} />, title: "Real-Time Updates", description: "Breaking news delivered instantly as events unfold" },
    { icon: <Users size={20} />, title: "Verified Sources", description: "All news verified by trusted  and fact-checkers" },
    { icon: <Globe size={20} />, title: "Global Coverage", description: "Comprehensive news from every corner of Sign Dynasty" }
  ];

  const handleWatchNewsBrief = () => {
    console.log('Watch News Brief clicked');
  };

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

  // Mouse tracking for parallax effect (disabled on mobile)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current && windowSize.width > 768) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container && windowSize.width > 768) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [windowSize.width]);

  // Generate floating particles (fewer on mobile)
  useEffect(() => {
    const generateParticles = () => {
      const particleCount = windowSize.width > 768 ? 20 : 10;
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [windowSize.width]);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const typewriterInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 150);

    return () => clearInterval(typewriterInterval);
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

  // Function to render text with proper line breaks and styling
  const renderTypewriterText = () => {
    const lines = displayText.split('\n');
    return (
      <>
        <span style={{ color: '#FFFFFF' }}>{lines[0]}</span>
        {lines[1] && (
          <>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B1A 50%, #722F37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {lines[1]}
            </span>
          </>
        )}
        <span style={{
          color: '#FF8C42',
          animation: 'blink 1s infinite',
          marginLeft: '2px'
        }}>|</span>
      </>
    );
  };

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Floating Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(255, 140, 66, ${particle.opacity}) 0%, transparent 70%)`,
              borderRadius: '50%',
              pointerEvents: 'none',
              transition: 'all 0.1s ease-out'
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Pattern with Parallax */}
      <div style={{ position: 'absolute', inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
        <div style={{
          position: 'absolute',
          top: isMobile ? '40px' : '80px',
          left: isMobile ? '20px' : '40px',
          width: isMobile ? '200px' : '288px',
          height: isMobile ? '200px' : '288px',
          background: '#FF8C42',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: isMobile ? 'none' : `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '40px' : '80px',
          right: isMobile ? '20px' : '40px',
          width: isMobile ? '250px' : '384px',
          height: isMobile ? '250px' : '384px',
          background: '#722F37',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transform: isMobile ? 'none' : `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          transition: 'transform 0.3s ease-out'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: isMobile 
            ? 'translate(-50%, -50%)' 
            : `translate(calc(-50% + ${mousePosition.x * 10}px), calc(-50% + ${mousePosition.y * 10}px))`,
          width: isMobile ? '220px' : '320px',
          height: isMobile ? '220px' : '320px',
          background: '#FF6B1A',
          borderRadius: '50%',
          filter: 'blur(80px)',
          transition: 'transform 0.3s ease-out'
        }}></div>
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: getPadding('120px 24px 80px 24px', '120px 16px 60px 16px'),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: getFontSize('72px', '56px', '42px'),
            fontWeight: 'bold',
            marginBottom: getPadding('24px', '20px'),
            lineHeight: '1.1',
            margin: `0 0 ${getPadding('24px', '20px')} 0`,
            transform: isMobile ? 'none' : `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out',
            textShadow: '0 0 30px rgba(255, 140, 66, 0.3)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}
        >
          {renderTypewriterText()}
        </h1>

        {/* Enhanced Subtitle */}
        <p
          style={{
            fontSize: getFontSize('24px', '20px', '18px'),
            color: '#CCCCCC',
            marginBottom: getPadding('32px', '24px'),
            maxWidth: isMobile ? '100%' : '768px',
            lineHeight: '1.6',
            margin: `0 0 ${getPadding('32px', '24px')} 0`,
            transform: isMobile ? 'none' : `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
            padding: isMobile ? '0 8px' : '0'
          }}
        >
          Stay informed with real-time news, breaking stories, and in-depth analysis from around the world. 
          <span style={{ 
            color: '#FF8C42',
            textShadow: '0 0 20px rgba(255, 140, 66, 0.5)'
          }}> SIGN-NEWS</span> delivers truth when you need it most.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: getPadding('16px', '12px'),
            marginBottom: getPadding('64px', '48px'),
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '400px' : 'none',
            animation: 'fadeInUp 0.8s ease-out 0.6s both'
          }}
        >
          <button
            onClick={() => window.open('https://sign.global/orange-dynasty/orange-print', '_blank')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: getPadding('16px 32px', '14px 24px'),
              background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: getFontSize('16px', '15px', '14px'),
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(255, 140, 66, 0.25)',
              position: 'relative',
              overflow: 'hidden',
              width: isMobile ? '100%' : 'auto',
              minHeight: getPadding('56px', '48px')
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 20px 40px rgba(255, 140, 66, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(0px) scale(1)';
                e.target.style.boxShadow = '0 8px 32px rgba(255, 140, 66, 0.25)';
              }
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Orange Print</span>
            <ArrowRight size={18} style={{ position: 'relative', zIndex: 2 }} />
          </button>
          
          <button
            onClick={handleWatchNewsBrief}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              padding: getPadding('16px 32px', '14px 24px'),
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: getFontSize('16px', '15px', '14px'),
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              width: isMobile ? '100%' : 'auto',
              minHeight: getPadding('56px', '48px')
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            <div style={{
              width: isMobile ? '36px' : '48px',
              height: isMobile ? '36px' : '48px',
              background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 140, 66, 0.3)'
            }}>
              <Play size={isMobile ? 12 : 16} style={{ color: '#FFFFFF', marginLeft: '2px' }} />
            </div>
            <span style={{ position: 'relative', zIndex: 2 }}>
              {isMobile ? 'Watch Brief' : 'Watch News Brief'}
            </span>
          </button>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: getPadding('24px', '12px'),
            width: '100%',
            maxWidth: isMobile ? '320px' : '700px',
            animation: 'fadeInUp 0.8s ease-out 0.8s both'
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: getPadding('24px 20px', '16px 12px'),
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                animation: `fadeInUp 0.6s ease-out ${0.8 + (index * 0.2)}s both`
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(-10px) scale(1.05)';
                  e.target.style.boxShadow = '0 25px 50px rgba(255, 140, 66, 0.15)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(0px) scale(1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #FF8C42, #722F37)',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease'
              }}></div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: getPadding('20px', '16px')
              }}>
                <div style={{
                  padding: getPadding('16px', '12px'),
                  background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                  borderRadius: '16px',
                  color: '#FFFFFF',
                  transition: 'all 0.5s ease',
                  boxShadow: '0 8px 32px rgba(255, 140, 66, 0.25)'
                }}>
                  {React.cloneElement(feature.icon, { size: isMobile ? 18 : 20 })}
                </div>
              </div>
              <div style={{
                fontSize: getFontSize('20px', '18px', '16px'),
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginBottom: getPadding('12px', '8px')
              }}>{feature.title}</div>
              <div style={{
                color: '#CCCCCC',
                fontSize: getFontSize('14px', '13px', '12px'),
                lineHeight: '1.6'
              }}>{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator - Hidden on Mobile */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'fadeIn 1s ease-out 1.2s both'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                color: '#AAAAAA',
                fontSize: '14px'
              }}>Scroll for more</span>
              <div style={{
                width: '24px',
                height: '40px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div
                  style={{
                    width: '4px',
                    height: '12px',
                    background: '#FF8C42',
                    borderRadius: '2px',
                    marginTop: '8px',
                    animation: 'scroll-indicator 2s infinite'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          80% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        /* Touch-friendly hover states for mobile */
        @media (max-width: 768px) {
          button:active {
            transform: scale(0.95) !important;
          }
        }

        /* Enhanced mobile spacing for very small screens */
        @media (max-width: 480px) {
          .main-content {
            padding: 140px 12px 60px 12px !important;
          }
        }

        /* Extra small screens - even more top spacing */
        @media (max-width: 320px) {
          .main-content {
            padding: 160px 12px 60px 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;