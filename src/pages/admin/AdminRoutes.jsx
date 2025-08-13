// pages/admin/AdminRoutes.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Toolbar, useTheme, useMediaQuery, CircularProgress } from '@mui/material';
import Sidebar, { drawerWidth } from './Sidebar';
import AdminDashboard from './AdminDashboard';
import NewsAdmin from './NewsAdmin';
import EntertainmentAdmin from './EntertainmentAdmin';
import ArticleAdmin from './ArticleAdmin';

const AdminRoutes = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Check if admin is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        }}
      >
        <CircularProgress sx={{ color: '#FF8C42' }} />
      </Box>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Sidebar 
        mobileOpen={mobileOpen} 
        onDrawerToggle={handleDrawerToggle} 
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            xs: '100%',
            md: `calc(100% - ${drawerWidth}px)`
          },
          height: '100vh',
          overflow: 'auto',
          position: 'relative',
          background: 'transparent',
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }} />
        <Box
          sx={{
            padding: {
              xs: '8px',
              sm: '16px',
              md: '24px'
            },
            height: 'calc(100vh - 64px)',
            overflow: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/news" element={<NewsAdmin />} />
            <Route path="/entertainment" element={<EntertainmentAdmin />} />
            <Route path="/articles" element={<ArticleAdmin />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminRoutes;