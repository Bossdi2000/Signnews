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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  AdminPanelSettings as AdminIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SuperAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'admin',
    fullName: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const navigate = useNavigate();

  // Mock data for existing admins
  const [admins, setAdmins] = useState([
    {
      id: 1,
      username: 'superadmin',
      email: 'superadmin@signnews.com',
      fullName: 'Super Administrator',
      role: 'super_admin',
      status: 'Active',
      createdAt: '2024-01-01',
      lastLogin: '2024-01-15 10:30 AM'
    },
    {
      id: 2,
      username: 'admin',
      email: 'admin@signnews.com',
      fullName: 'Content Administrator',
      role: 'admin',
      status: 'Active',
      createdAt: '2024-01-10',
      lastLogin: '2024-01-15 09:15 AM'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleTogglePassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword || !formData.fullName) {
      setError('Please fill in all fields');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Check if username already exists
    const existingAdmin = admins.find(admin => admin.username === formData.username);
    if (existingAdmin && !editingAdmin) {
      setError('Username already exists');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    // Simulate API call
    setTimeout(() => {
      const newAdmin = {
        id: editingAdmin ? editingAdmin.id : Date.now(),
        username: formData.username,
        email: formData.email,
        fullName: formData.fullName,
        role: formData.role,
        status: 'Active',
        createdAt: editingAdmin ? editingAdmin.createdAt : new Date().toISOString().split('T')[0],
        lastLogin: 'Never'
      };

      if (editingAdmin) {
        setAdmins(prev => prev.map(admin => 
          admin.id === editingAdmin.id ? newAdmin : admin
        ));
        setSuccess('Admin updated successfully!');
      } else {
        setAdmins(prev => [newAdmin, ...prev]);
        setSuccess('Admin created successfully!');
      }

      handleCloseModal();
      setIsLoading(false);
    }, 1500);
  };

  const handleEdit = (admin) => {
    setEditingAdmin(admin);
    setFormData({
      username: admin.username,
      email: admin.email,
      password: '',
      confirmPassword: '',
      role: admin.role,
      fullName: admin.fullName,
    });
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    if (id === 1) {
      setError('Cannot delete super admin account');
      return;
    }
    setAdmins(prev => prev.filter(admin => admin.id !== id));
    setSuccess('Admin deleted successfully!');
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingAdmin(null);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'admin',
      fullName: '',
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'super_admin':
        return '#EF4444';
      case 'admin':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? '#22C55E' : '#EF4444';
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
          background: '#EF4444',
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
          background: '#F59E0B',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.4,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              boxShadow: '0 8px 32px rgba(239, 68, 68, 0.4)',
            }}
          >
            <SecurityIcon sx={{ fontSize: '40px', color: '#FFFFFF' }} />
          </Box>
          <Typography
            variant="h3"
            sx={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '28px', sm: '36px', md: '48px' },
            }}
          >
            SUPER <span style={{ color: '#EF4444' }}>ADMIN</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(204, 204, 204, 0.8)',
              fontSize: { xs: '16px', sm: '18px' },
              mb: 3,
            }}
          >
            Administrator Account Management
          </Typography>
        </Box>

        {/* Error/Success Alerts */}
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

        {success && (
          <Alert
            severity="success"
            sx={{
              mb: 3,
              background: 'rgba(34, 197, 94, 0.1)',
              color: '#22C55E',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '12px',
            }}
          >
            {success}
          </Alert>
        )}

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenModal(true)}
            sx={{
              background: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
              color: '#FFFFFF',
              borderRadius: '12px',
              px: 4,
              py: 1.5,
              fontWeight: '600',
              textTransform: 'none',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(239, 68, 68, 0.4)',
              },
            }}
          >
            Create New Admin
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate('/admin-login')}
            sx={{
              color: 'rgba(204, 204, 204, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              px: 4,
              py: 1.5,
              fontWeight: '600',
              textTransform: 'none',
              fontSize: '16px',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Back to Login
          </Button>
        </Box>

        {/* Admins Table */}
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <TableContainer component={Paper} sx={{ background: 'transparent', boxShadow: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: '600', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      Admin
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: '600', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      Role
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: '600', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      Status
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: '600', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      Created
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: '600', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      Last Login
                    </TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: '600', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {admins.map((admin) => (
                    <TableRow
                      key={admin.id}
                      sx={{
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.05)',
                        },
                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <TableCell sx={{ color: '#FFFFFF', borderBottom: 'none' }}>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: '600', mb: 0.5 }}>
                            {admin.fullName}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(204, 204, 204, 0.8)', fontSize: '12px' }}>
                            {admin.username} • {admin.email}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ borderBottom: 'none' }}>
                        <Chip
                          label={admin.role.replace('_', ' ').toUpperCase()}
                          size="small"
                          sx={{
                            background: `${getRoleColor(admin.role)}15`,
                            color: getRoleColor(admin.role),
                            border: `1px solid ${getRoleColor(admin.role)}30`,
                            fontSize: '10px',
                            fontWeight: '600',
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ borderBottom: 'none' }}>
                        <Chip
                          label={admin.status}
                          size="small"
                          sx={{
                            background: `${getStatusColor(admin.status)}15`,
                            color: getStatusColor(admin.status),
                            border: `1px solid ${getStatusColor(admin.status)}30`,
                            fontSize: '10px',
                            fontWeight: '600',
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ color: 'rgba(204, 204, 204, 0.8)', borderBottom: 'none', fontSize: '12px' }}>
                        {admin.createdAt}
                      </TableCell>
                      <TableCell sx={{ color: 'rgba(204, 204, 204, 0.8)', borderBottom: 'none', fontSize: '12px' }}>
                        {admin.lastLogin}
                      </TableCell>
                      <TableCell sx={{ borderBottom: 'none' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleEdit(admin)}
                            sx={{
                              background: 'rgba(245, 158, 11, 0.1)',
                              color: '#F59E0B',
                              '&:hover': {
                                background: 'rgba(245, 158, 11, 0.2)',
                              },
                            }}
                          >
                            <EditIcon sx={{ fontSize: '16px' }} />
                          </IconButton>
                          {admin.id !== 1 && (
                            <IconButton
                              size="small"
                              onClick={() => handleDelete(admin.id)}
                              sx={{
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: '#EF4444',
                                '&:hover': {
                                  background: 'rgba(239, 68, 68, 0.2)',
                                },
                              }}
                            >
                              <DeleteIcon sx={{ fontSize: '16px' }} />
                            </IconButton>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>

      {/* Create/Edit Admin Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
          }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: '600' }}>
              {editingAdmin ? 'Edit Admin' : 'Create New Admin'}
            </Typography>
            <IconButton onClick={handleCloseModal} sx={{ color: 'rgba(204, 204, 204, 0.6)' }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ pt: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  },
                  '&.Mui-focused': {
                    border: '1px solid rgba(239, 68, 68, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(204, 204, 204, 0.8)',
                },
              }}
            />

            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  },
                  '&.Mui-focused': {
                    border: '1px solid rgba(239, 68, 68, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(204, 204, 204, 0.8)',
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  color: '#FFFFFF',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                  },
                  '&.Mui-focused': {
                    border: '1px solid rgba(239, 68, 68, 0.5)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(204, 204, 204, 0.8)',
                },
              }}
            />

            {!editingAdmin && (
              <>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleTogglePassword('password')}
                          edge="end"
                          sx={{ color: 'rgba(204, 204, 204, 0.6)' }}
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
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
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                      },
                      '&.Mui-focused': {
                        border: '1px solid rgba(239, 68, 68, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(204, 204, 204, 0.8)',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleTogglePassword('confirm')}
                          edge="end"
                          sx={{ color: 'rgba(204, 204, 204, 0.6)' }}
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
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
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                      },
                      '&.Mui-focused': {
                        border: '1px solid rgba(239, 68, 68, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(204, 204, 204, 0.8)',
                    },
                  }}
                />
              </>
            )}
          </form>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              color: 'rgba(204, 204, 204, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              px: 3,
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            sx={{
              background: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
              color: '#FFFFFF',
              borderRadius: '10px',
              px: 3,
              fontWeight: '600',
              '&:hover': {
                background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
              },
              '&:disabled': {
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(204, 204, 204, 0.5)',
              },
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: '#FFFFFF' }} />
            ) : (
              editingAdmin ? 'Update' : 'Create'
            )}
          </Button>
        </DialogActions>
      </Dialog>

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

export default SuperAdmin;
