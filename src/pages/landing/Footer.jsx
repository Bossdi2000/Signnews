import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import {
  Public as GlobeIcon,
  Notifications as BellIcon,
  TrendingUp as TrendingUpIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  LocationOn as MapPinIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  ArrowForward as ArrowRightIcon,
} from '@mui/icons-material';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, url: '#', color: '#1877F2' },
    { name: 'Twitter', icon: TwitterIcon, url: '#', color: '#1DA1F2' },
    { name: 'Instagram', icon: InstagramIcon, url: '#', color: '#E4405F' },
  ];

  const quickLinks = [
    'Home',
    'Breaking News',
    'Sports',
  ];

  const entertainmentLinks = [
    'Reviews',
    'Terms of Service',
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Contact Us',
    'About Us',
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          mt: { xs: 8, md: 12 },
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 4 },
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Effects */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            '& > div:first-of-type': {
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: { xs: '100px', md: '200px' },
              height: { xs: '100px', md: '200px' },
              background: '#FF8C42',
              borderRadius: '50%',
              filter: 'blur(80px)',
            },
            '& > div:last-of-type': {
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              width: { xs: '80px', md: '150px' },
              height: { xs: '80px', md: '150px' },
              background: '#722F37',
              borderRadius: '50%',
              filter: 'blur(60px)',
            },
          }}
        >
          <div></div>
          <div></div>
        </Box>

        <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 10 }}>
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
              gap: { xs: 4, md: 6 },
              mb: { xs: 4, md: 6 },
            }}
          >
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GlobeIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  SIGN-NEWS
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: '#CCCCCC',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Your trusted source for breaking news, entertainment updates, and exclusive content from around SIGN DYNASTY.
                Stay informed with accurate, timely reporting.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#AAAAAA', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  <MailIcon sx={{ color: '#FF8C42', fontSize: 16 }} />
                  <Typography component="span">contact@sign-news.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#AAAAAA', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  <PhoneIcon sx={{ color: '#FF8C42', fontSize: 16 }} />
                  <Typography component="span">+1 (555) 123-4567</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#AAAAAA', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                  <MapPinIcon sx={{ color: '#FF8C42', fontSize: 16 }} />
                  <Typography component="span">SIGN DYNASTY</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={social.url}
                        aria-label={`Visit our ${social.name} page`}
                        sx={{
                          width: 44,
                          height: 44,
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: `${social.color}22`,
                            borderColor: social.color,
                          },
                        }}
                      >
                        <IconComponent sx={{ color: '#FFFFFF', fontSize: 18 }} />
                      </Link>
                    </motion.div>
                  );
                })}
              </Box>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{ color: '#FFFFFF', fontSize: { xs: '1rem', md: '1.125rem' }, fontWeight: 600, mb: 2 }}
              >
                News Categories
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {quickLinks.map((link) => (
                  <motion.div key={link} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      sx={{
                        color: '#CCCCCC',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': { color: '#FF8C42' },
                      }}
                    >
                      <ArrowRightIcon sx={{ fontSize: 12, opacity: 0.5 }} />
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Entertainment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{ color: '#FFFFFF', fontSize: { xs: '1rem', md: '1.125rem' }, fontWeight: 600, mb: 2 }}
              >
                Entertainment
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {entertainmentLinks.map((link) => (
                  <motion.div key={link} whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      sx={{
                        color: '#CCCCCC',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': { color: '#FF8C42' },
                      }}
                    >
                      <ArrowRightIcon sx={{ fontSize: 12, opacity: 0.5 }} />
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{ color: '#FFFFFF', fontSize: { xs: '1rem', md: '1.125rem' }, fontWeight: 600, mb: 2 }}
              >
                Stay Updated
              </Typography>
              <Typography
                sx={{
                  color: '#CCCCCC',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  mb: 2,
                  lineHeight: 1.5,
                }}
              >
                Subscribe to our newsletter for daily updates, breaking news alerts, and exclusive content.
              </Typography>
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  sx={{
                    p: 2,
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ color: '#22C55E', fontSize: { xs: '0.75rem', md: '0.875rem' }, fontWeight: 600 }}>
                    ✓ Successfully subscribed!
                  </Typography>
                </motion.div>
              ) : (
                <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                  <TextField
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    sx={{
                      '& .MuiInputBase-root': {
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 2,
                        color: '#FFFFFF',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        p: 1,
                        '&:focus-within': {
                          borderColor: '#FF8C42',
                          boxShadow: '0 0 0 3px rgba(255, 140, 66, 0.1)',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      sx={{
                        py: 1.5,
                        px: 2,
                        background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                        borderRadius: 2,
                        color: '#FFFFFF',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': { background: 'linear-gradient(135deg, #FF8C42 20%, #722F37 100%)' },
                      }}
                    >
                      Subscribe Now
                      <ArrowRightIcon sx={{ fontSize: 16 }} />
                    </Button>
                  </motion.div>
                </Box>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#AAAAAA', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                <BellIcon sx={{ color: '#FF8C42', fontSize: 14 }} />
                <Typography component="span">Get breaking news alerts instantly</Typography>
              </Box>
            </motion.div>
          </Box>

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              pt: 4,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 }, flexWrap: 'wrap' }}>
              <Typography sx={{ color: '#AAAAAA', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                © 2025 SIGN-NEWS. All rights reserved.
              </Typography>
              <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, flexWrap: 'wrap' }}>
                {legalLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    sx={{
                      color: '#AAAAAA',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      textDecoration: 'none',
                      '&:hover': { color: '#FF8C42' },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#AAAAAA', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              <TrendingUpIcon sx={{ color: '#FF8C42', fontSize: 16 }} />
              <Typography component="span">Trusted by 500K+ readers worldwide</Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.footer>
  );
};

export default Footer;