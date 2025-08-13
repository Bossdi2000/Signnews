//avoid designing, establishing or implementing any features inside the App.jsx file, it should remain as a simple routing/rendering file
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './pages/landing/LandingPage';
import AboutUsPage from './pages/other/AboutUsPage';
import CoreTeamPage from './pages/other/CoreTeamPage';
import News from './pages/other/News';
import AdminRoutes from './pages/admin/AdminRoutes';
import AdminLogin from './pages/admin/AdminLogin';
import SuperAdmin from './pages/admin/SuperAdmin';
import NewsBrief from './pages/landing/NewsBrief';
import Entertainment from './pages/other/Entertainment';
import Article from './pages/other/Article'; // Assuming this is the correct import for the Article component
import UserRoutes from './pages/user/UserRoutes';
import Sample from './pages/other/Sample';
import NotFound from './pages/other/NotFound';



const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          {/* About Us page route */}
          <Route path="/about" element={<AboutUsPage />} />
          {/* Core Team page route */}
          <Route path="/core-team" element={<CoreTeamPage />} />
          {/* News page route */}
          <Route path="/news" element={<News />} />
          {/* User routes */}
          <Route path="/user/*" element={<UserRoutes />} />
          {/* Admin login route */}
          <Route path="/admin-login" element={<AdminLogin />} />
          {/* Super Admin route - only accessible directly */}
          <Route path="/super-admin" element={<SuperAdmin />} />
          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* Route all components that are neither admin or user here as needed */}
          <Route path="/news-brief" element={<NewsBrief />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/article" element={<Article />} />
          <Route path="/sample" element={<Sample />} />
          {/* Fallback route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;