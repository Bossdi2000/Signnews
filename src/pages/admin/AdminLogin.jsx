import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  IconButton,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Lock as LockIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, accept any username/password
      if (formData.username && formData.password) {
        // Store admin session
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUser', formData.username);
        
        // Navigate to admin dashboard
        navigate('/admin');
      } else {
        setError('Invalid credentials');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: '#FF8C42',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: '#722F37',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.4,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Card
        sx={{
          maxWidth: '400px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 4px 20px rgba(255, 140, 66, 0.3)',
              }}
            >
              <LockIcon sx={{ fontSize: '32px', color: '#FFFFFF' }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: '24px', sm: '28px' },
              }}
            >
              SIGN <span style={{ color: '#FF8C42' }}>ADMIN</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(204, 204, 204, 0.8)',
                fontSize: '16px',
              }}
            >
              Access your admin dashboard
            </Typography>
          </Box>

          {/* Error Alert */}
          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#EF4444',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px',
              }}
            >
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: 'rgba(204, 204, 204, 0.6)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    border: '1px solid rgba(255, 140, 66, 0.3)',
                  },
                  '&.Mui-focused': {
                    border: '1px solid rgba(255, 140, 66, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(204, 204, 204, 0.8)',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(204, 204, 204, 0.6)',
                  opacity: 1,
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: 'rgba(204, 204, 204, 0.6)' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      sx={{ color: 'rgba(204, 204, 204, 0.6)' }}
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    border: '1px solid rgba(255, 140, 66, 0.3)',
                  },
                  '&.Mui-focused': {
                    border: '1px solid rgba(255, 140, 66, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(204, 204, 204, 0.8)',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(204, 204, 204, 0.6)',
                  opacity: 1,
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{
                background: 'linear-gradient(135deg, #FF8C42 0%, #722F37 100%)',
                color: '#FFFFFF',
                borderRadius: '12px',
                py: 1.5,
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(255, 140, 66, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #722F37 0%, #FF8C42 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 140, 66, 0.4)',
                },
                '&:disabled': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(204, 204, 204, 0.5)',
                  transform: 'none',
                },
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: '#FFFFFF' }} />
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Demo Credentials */}
          <Box sx={{ mt: 4, p: 2, background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px' }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(204, 204, 204, 0.7)',
                fontSize: '12px',
                textAlign: 'center',
                mb: 1,
              }}
            >
              Demo Credentials:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(204, 204, 204, 0.6)',
                fontSize: '11px',
                textAlign: 'center',
                fontFamily: 'monospace',
              }}
            >
              Username: admin
            </Typography>
                             <Typography
                   variant="body2"
                   sx={{
                     color: 'rgba(204, 204, 204, 0.6)',
                     fontSize: '11px',
                     textAlign: 'center',
                     fontFamily: 'monospace',
                   }}
                 >
                   Password: password
                 </Typography>
               </Box>

               {/* Super Admin Link */}
               <Box sx={{ mt: 3, textAlign: 'center' }}>
                 <Button
                   variant="text"
                   onClick={() => navigate('/super-admin')}
                   sx={{
                     color: 'rgba(204, 204, 204, 0.6)',
                     fontSize: '12px',
                     textTransform: 'none',
                     '&:hover': {
                       color: '#FF8C42',
                       background: 'rgba(255, 140, 66, 0.1)',
                     },
                   }}
                 >
                   Super Admin Access
                 </Button>
               </Box>
             </CardContent>
           </Card>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Box>
  );
};

export default AdminLogin;
