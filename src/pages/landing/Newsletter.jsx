import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, ArrowRight, Bell, Zap, Globe } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

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

  const benefits = [
    { icon: <Bell size={20} />, text: "Breaking news alerts" },
    { icon: <Zap size={20} />, text: "Daily news digest" },
    { icon: <Globe size={20} />, text: "Exclusive insights" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 2000);
  };

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

  if (isSubscribed) {
    return (
      <div style={{
        padding: getPadding('80px 24px', '60px 16px'),
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Effects */}
        <div style={{ position: 'absolute', inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: isMobile ? '150px' : '200px',
            height: isMobile ? '150px' : '200px',
            background: '#FF8C42',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
        </div>

        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            animation: 'fadeInScale 0.6s ease-out',
            padding: isMobile ? '0 16px' : '0'
          }}
        >
          <div style={{
            width: isMobile ? '60px' : '80px',
            height: isMobile ? '60px' : '80px',
            background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto',
            boxShadow: '0 0 40px rgba(255, 140, 66, 0.4)'
          }}>
            <CheckCircle size={isMobile ? 30 : 40} style={{ color: '#FFFFFF' }} />
          </div>
          
          <h2 style={{
            fontSize: getFontSize('32px', '28px', '24px'),
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Welcome to SIGN-NEWS!
          </h2>
          
          <p style={{
            fontSize: getFontSize('18px', '16px', '14px'),
            color: '#CCCCCC',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            You've successfully subscribed to our newsletter. Get ready for the latest news and exclusive content delivered straight to your inbox.
          </p>

          <button
            onClick={() => setIsSubscribed(false)}
            style={{
              padding: getPadding('12px 24px', '10px 20px'),
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: getFontSize('16px', '15px', '14px'),
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }
            }}
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      padding: getPadding('80px 24px', '60px 16px'),
      background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: isMobile ? '200px' : '300px',
          height: isMobile ? '200px' : '300px',
          background: '#722F37',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: isMobile ? '150px' : '250px',
          height: isMobile ? '150px' : '250px',
          background: '#FF8C42',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: getPadding('64px', '40px'),
          alignItems: 'center'
        }}>
          
          {/* Left Content */}
          <div style={{
            animation: 'slideInLeft 0.8s ease-out',
            order: isMobile ? 2 : 1
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 140, 66, 0.1)',
              border: '1px solid rgba(255, 140, 66, 0.2)',
              borderRadius: '20px',
              padding: getPadding('6px 12px', '4px 10px'),
              marginBottom: '24px'
            }}>
              <Mail size={isMobile ? 14 : 16} style={{ color: '#FF8C42' }} />
              <span style={{ 
                color: '#FF8C42', 
                fontSize: getFontSize('14px', '13px', '12px'), 
                fontWeight: '500' 
              }}>
                Stay Updated
              </span>
            </div>

            <h2 style={{
              fontSize: getFontSize('48px', '36px', '28px'),
              fontWeight: 'bold',
              color: '#FFFFFF',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}>
              Never Miss a 
              <span style={{ color: '#FF8C42' }}> Breaking Story</span>
            </h2>

            <p style={{
              fontSize: getFontSize('18px', '16px', '14px'),
              color: '#CCCCCC',
              marginBottom: '32px',
              lineHeight: '1.6'
            }}>
              Join thousands of readers who trust SIGN-NEWS for timely, accurate, and unbiased reporting. 
              Get the stories that matter delivered directly to your inbox.
            </p>

            {/* Benefits */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: getPadding('16px', '12px')
            }}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    animation: `slideInLeft 0.6s ease-out ${0.2 + index * 0.1}s both`
                  }}
                >
                  <div style={{
                    padding: getPadding('8px', '6px'),
                    background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    minWidth: isMobile ? '32px' : '36px',
                    height: isMobile ? '32px' : '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {React.cloneElement(benefit.icon, { size: isMobile ? 16 : 20 })}
                  </div>
                  <span style={{
                    color: '#FFFFFF',
                    fontSize: getFontSize('16px', '15px', '14px'),
                    fontWeight: '500'
                  }}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: getPadding('48px', '24px'),
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              animation: 'slideInRight 0.8s ease-out 0.2s both',
              order: isMobile ? 1 : 2
            }}
          >
            <div style={{
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              <h3 style={{
                fontSize: getFontSize('28px', '24px', '20px'),
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginBottom: '8px'
              }}>
                Subscribe Now
              </h3>
              <p style={{
                color: '#CCCCCC',
                fontSize: getFontSize('16px', '15px', '14px')
              }}>
                Free • No spam • Unsubscribe anytime
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{
                    width: '100%',
                    padding: getPadding('16px 20px', '14px 16px'),
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#FFFFFF',
                    fontSize: getFontSize('16px', '15px', '14px'),
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '1px solid #FF8C42';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 140, 66, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !email}
                style={{
                  width: '100%',
                  padding: getPadding('16px', '14px'),
                  background: isLoading ? 'rgba(255, 140, 66, 0.5)' : 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontSize: getFontSize('16px', '15px', '14px'),
                  fontWeight: '600',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 32px rgba(255, 140, 66, 0.25)',
                  minHeight: getPadding('56px', '48px')
                }}
                onMouseEnter={(e) => {
                  if (!isMobile && !isLoading) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 12px 40px rgba(255, 140, 66, 0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile && !isLoading) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(255, 140, 66, 0.25)';
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: isMobile ? '16px' : '20px',
                      height: isMobile ? '16px' : '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid #FFFFFF',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    {isMobile ? 'Subscribing...' : 'Subscribing...'}
                  </>
                ) : (
                  <>
                    {isMobile ? 'Subscribe' : 'Subscribe to Newsletter'}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            <p style={{
              textAlign: 'center',
              color: '#AAAAAA',
              fontSize: getFontSize('14px', '13px', '12px'),
              marginTop: '20px',
              lineHeight: '1.5'
            }}>
              By subscribing, you agree to receive our newsletter and accept our{' '}
              <span style={{ color: '#FF8C42', cursor: 'pointer' }}>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        /* Touch-friendly interactions for mobile */
        @media (max-width: 768px) {
          button:active {
            transform: scale(0.95) !important;
          }
          
          input:focus {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }

        /* Prevent horizontal scroll on very small screens */
        @media (max-width: 320px) {
          .newsletter-container {
            padding: 40px 12px !important;
          }
          
          .form-container {
            padding: 20px 16px !important;
          }
        }

        /* Better spacing for tablets */
        @media (min-width: 769px) and (max-width: 1024px) {
          .benefits-container {
            gap: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Newsletter;