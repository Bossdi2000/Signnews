import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Badge,
  Drawer,
  Divider,
  Chip,
  Avatar,
  Button,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Close as CloseIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Delete as DeleteIcon,
  MarkEmailRead as MarkEmailReadIcon,
} from '@mui/icons-material';

const NotificationPanel = ({ open, onClose }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Article Published',
      message: 'Article "The Future of Technology" has been published successfully.',
      type: 'success',
      timestamp: '2 minutes ago',
      read: false,
    },
    {
      id: 2,
      title: 'Entertainment Content Updated',
      message: 'Movie review content has been updated and is ready for review.',
      type: 'info',
      timestamp: '15 minutes ago',
      read: false,
    },
    {
      id: 3,
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur tonight at 2 AM. Expect brief downtime.',
      type: 'warning',
      timestamp: '1 hour ago',
      read: true,
    },
    {
      id: 4,
      title: 'Upload Failed',
      message: 'Failed to upload video file. Please try again or contact support.',
      type: 'error',
      timestamp: '2 hours ago',
      read: true,
    },
    {
      id: 5,
      title: 'New User Registration',
      message: 'A new user has registered and is awaiting approval.',
      type: 'info',
      timestamp: '3 hours ago',
      read: true,
    },
  ]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon sx={{ color: '#22C55E' }} />;
      case 'warning':
        return <WarningIcon sx={{ color: '#F59E0B' }} />;
      case 'error':
        return <ErrorIcon sx={{ color: '#EF4444' }} />;
      case 'info':
      default:
        return <InfoIcon sx={{ color: '#3B82F6' }} />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return '#22C55E';
      case 'warning':
        return '#F59E0B';
      case 'error':
        return '#EF4444';
      case 'info':
      default:
        return '#3B82F6';
    }
  };

  const handleMarkAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: '400px' },
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#FFFFFF',
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box
          sx={{
            p: 3,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Badge badgeContent={unreadCount} color="error">
              <NotificationsIcon sx={{ fontSize: '24px', color: '#FF8C42' }} />
            </Badge>
            <Typography variant="h6" sx={{ fontWeight: '600' }}>
              Notifications
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ color: 'rgba(204, 204, 204, 0.6)' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Actions */}
        {notifications.length > 0 && (
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              gap: 1,
            }}
          >
            <Button
              size="small"
              startIcon={<MarkEmailReadIcon />}
              onClick={handleMarkAllAsRead}
              sx={{
                color: 'rgba(204, 204, 204, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                px: 2,
                py: 0.5,
                fontSize: '12px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              Mark All Read
            </Button>
            <Button
              size="small"
              startIcon={<DeleteIcon />}
              onClick={handleClearAll}
              sx={{
                color: '#EF4444',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                px: 2,
                py: 0.5,
                fontSize: '12px',
                '&:hover': {
                  background: 'rgba(239, 68, 68, 0.1)',
                },
              }}
            >
              Clear All
            </Button>
          </Box>
        )}

        {/* Notifications List */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {notifications.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 4,
                color: 'rgba(204, 204, 204, 0.6)',
              }}
            >
              <NotificationsIcon sx={{ fontSize: '64px', mb: 2, opacity: 0.5 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                No notifications
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                You're all caught up! Check back later for new updates.
              </Typography>
            </Box>
          ) : (
            <List sx={{ p: 0 }}>
              {notifications.map((notification, index) => (
                <React.Fragment key={notification.id}>
                  <ListItem
                    sx={{
                      p: 2,
                      background: notification.read
                        ? 'transparent'
                        : 'rgba(255, 140, 66, 0.05)',
                      borderLeft: `3px solid ${getNotificationColor(notification.type)}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: notification.read
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(255, 140, 66, 0.1)',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      {getNotificationIcon(notification.type)}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: notification.read ? '500' : '600',
                              color: '#FFFFFF',
                            }}
                          >
                            {notification.title}
                          </Typography>
                          {!notification.read && (
                            <Box
                              sx={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#FF8C42',
                                flexShrink: 0,
                              }}
                            />
                          )}
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'rgba(204, 204, 204, 0.8)',
                              mb: 1,
                              lineHeight: 1.4,
                            }}
                          >
                            {notification.message}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography
                              variant="caption"
                              sx={{
                                color: 'rgba(204, 204, 204, 0.6)',
                                fontSize: '11px',
                              }}
                            >
                              {notification.timestamp}
                            </Typography>
                            <Chip
                              label={notification.type}
                              size="small"
                              sx={{
                                background: `${getNotificationColor(notification.type)}15`,
                                color: getNotificationColor(notification.type),
                                border: `1px solid ${getNotificationColor(notification.type)}30`,
                                fontSize: '10px',
                                height: '20px',
                              }}
                            />
                          </Box>
                        </Box>
                      }
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {!notification.read && (
                        <IconButton
                          size="small"
                          onClick={() => handleMarkAsRead(notification.id)}
                          sx={{
                            color: 'rgba(204, 204, 204, 0.6)',
                            '&:hover': {
                              color: '#22C55E',
                              background: 'rgba(34, 197, 94, 0.1)',
                            },
                          }}
                        >
                          <MarkEmailReadIcon sx={{ fontSize: '16px' }} />
                        </IconButton>
                      )}
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteNotification(notification.id)}
                        sx={{
                          color: 'rgba(204, 204, 204, 0.6)',
                          '&:hover': {
                            color: '#EF4444',
                            background: 'rgba(239, 68, 68, 0.1)',
                          },
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: '16px' }} />
                      </IconButton>
                    </Box>
                  </ListItem>
                  {index < notifications.length - 1 && (
                    <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default NotificationPanel;
