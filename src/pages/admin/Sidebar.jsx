// pages/admin/Sidebar.jsx
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  useMediaQuery,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Article as ArticleIcon,
  Movie as MovieIcon,
  Newspaper as NewspaperIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 280;

const Sidebar = ({ mobileOpen, onDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      label: 'Dashboard', 
      path: '/admin', 
      icon: <DashboardIcon />,
      color: '#FF8C42'
    },
    { 
      label: 'News Management', 
      path: '/admin/news', 
      icon: <NewspaperIcon />,
      color: '#22C55E'
    },
    { 
      label: 'Entertainment Management', 
      path: '/admin/entertainment', 
      icon: <MovieIcon />,
      color: '#8B5CF6'
    },
    { 
      label: 'Article Management', 
      path: '/admin/articles', 
      icon: <ArticleIcon />,
      color: '#F59E0B'
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      onDrawerToggle();
    }
  };

  const isPathActive = (path) => {
    if (path === '/admin') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(26, 26, 26, 0.98) 50%, rgba(0, 0, 0, 0.98) 100%)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '-30px',
          width: { xs: '80px', sm: '100px', md: '120px' },
          height: { xs: '80px', sm: '100px', md: '120px' },
          background: '#722F37',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          right: '-25px',
          width: { xs: '70px', sm: '80px', md: '100px' },
          height: { xs: '70px', sm: '80px', md: '100px' },
          background: '#FF8C42',
          borderRadius: '50%',
          filter: 'blur(35px)',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Header Section */}
      <Box
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#FFFFFF',
            mb: 1,
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
            letterSpacing: '0.5px',
          }}
        >
          SIGN <span style={{ color: '#FF8C42' }}>ADMIN</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(204, 204, 204, 0.8)',
            fontSize: { xs: '10px', sm: '11px', md: '12px' },
            fontWeight: '400',
          }}
        >
          Content Management System
        </Typography>
      </Box>

      {/* User Profile Section */}
      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2 },
            p: { xs: 1.5, sm: 2 },
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.08)',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 12px rgba(255, 140, 66, 0.15)',
            },
          }}
        >
          <Avatar
            sx={{
              width: { xs: 32, sm: 36, md: 40 },
              height: { xs: 32, sm: 36, md: 40 },
              background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
              fontSize: { xs: '12px', sm: '14px', md: '16px' },
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(255, 140, 66, 0.3)',
            }}
          >
            A
          </Avatar>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#FFFFFF',
                fontWeight: '600',
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                lineHeight: 1.2,
              }}
            >
              Admin User
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(204, 204, 204, 0.7)',
                fontSize: { xs: '9px', sm: '10px', md: '11px' },
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                mt: 0.5,
              }}
            >
              <Box
                sx={{
                  width: { xs: 5, sm: 6 },
                  height: { xs: 5, sm: 6 },
                  borderRadius: '50%',
                  background: '#22C55E',
                  boxShadow: '0 0 4px rgba(34, 197, 94, 0.5)',
                }}
              />
              Online
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation Menu */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          position: 'relative',
          zIndex: 2,
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.05)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 140, 66, 0.3)',
            borderRadius: '2px',
          },
        }}
      >
        <List sx={{ p: { xs: 1.5, sm: 2 }, pb: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                selected={isPathActive(item.path)}
                sx={{
                  borderRadius: '14px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  minHeight: { xs: '42px', sm: '46px', md: '50px' },
                  position: 'relative',
                  overflow: 'hidden',
                  background: isPathActive(item.path) 
                    ? `linear-gradient(135deg, ${item.color}15, ${item.color}05)` 
                    : 'transparent',
                  border: isPathActive(item.path) 
                    ? `1px solid ${item.color}30` 
                    : '1px solid transparent',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: isPathActive(item.path) ? '4px' : '0px',
                    height: '100%',
                    background: item.color,
                    transition: 'width 0.3s ease',
                    borderRadius: '0 2px 2px 0',
                  },
                  '&:hover': {
                    background: `linear-gradient(135deg, ${item.color}12, ${item.color}03)`,
                    transform: 'translateX(6px)',
                    border: `1px solid ${item.color}25`,
                    '&::before': {
                      width: '4px',
                    },
                  },
                  '&.Mui-selected': {
                    background: `linear-gradient(135deg, ${item.color}18, ${item.color}08)`,
                    border: `1px solid ${item.color}35`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${item.color}22, ${item.color}12)`,
                      transform: 'translateX(6px)',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isPathActive(item.path) ? item.color : '#CCCCCC',
                    minWidth: { xs: 32, sm: 36, md: 40 },
                    transition: 'all 0.3s ease',
                    '& svg': {
                      fontSize: { xs: '18px', sm: '20px', md: '22px' },
                      filter: isPathActive(item.path) 
                        ? `drop-shadow(0 0 4px ${item.color}40)` 
                        : 'none',
                    }
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: isPathActive(item.path) ? '#FFFFFF' : 'rgba(204, 204, 204, 0.9)',
                      fontSize: { xs: '12px', sm: '13px', md: '14px' },
                      fontWeight: isPathActive(item.path) ? '600' : '500',
                      transition: 'all 0.3s ease',
                      lineHeight: 1.3,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Actions */}
      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            sx={{
              flex: 1,
              color: '#CCCCCC',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              minHeight: { xs: '36px', sm: '40px', md: '44px' },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FF8C42',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(255, 140, 66, 0.2)',
              },
            }}
          >
            <NotificationsIcon sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' } }} />
          </IconButton>
          <IconButton
            sx={{
              flex: 1,
              color: '#CCCCCC',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              minHeight: { xs: '36px', sm: '40px', md: '44px' },
              '&:hover': {
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
              },
            }}
          >
            <LogoutIcon sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' } }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(25px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'none',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar 
          sx={{ 
            minHeight: { xs: '56px', sm: '64px' },
            px: { xs: 2, sm: 3 },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { md: 'none' },
              color: '#FFFFFF',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              width: '40px',
              height: '40px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <MenuIcon sx={{ fontSize: '20px' }} />
          </IconButton>
          <Typography 
            variant="h6" 
            noWrap 
            component="div"
            sx={{
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
              letterSpacing: '0.3px',
            }}
          >
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Navigation */}
      <Box
        component="nav"
        sx={{ 
          width: { md: drawerWidth }, 
          flexShrink: { md: 0 },
          zIndex: theme.zIndex.drawer,
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onDrawerToggle}
          ModalProps={{ 
            keepMounted: true,
            sx: {
              zIndex: theme.zIndex.drawer + 2,
            }
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              border: 'none',
              boxShadow: '4px 0 20px rgba(0, 0, 0, 0.5)',
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
            },
          }}
        >
          {drawer}
        </Drawer>
        
        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              border: 'none',
              position: 'fixed',
              height: '100vh',
              top: 0,
              left: 0,
              zIndex: theme.zIndex.drawer,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export { drawerWidth };
export default Sidebar;