"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Chip,
  Badge,
} from "@mui/material"
import { 
  Menu, 
  Users, 
  Newspaper,
  UserCheck,
  Globe,
  Activity,
  Home,
  Gamepad2,
  Mic,
  BookOpen,
  Info,
} from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

// Define constants for reused styles with red/burgundy theme
const PRIMARY_GRADIENT = "linear-gradient(135deg, #722F37 0%, #4B1C22 50%, #2D0F12 100%)"
const DARK_GRADIENT = "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)"
const DRAWER_GRADIENT = "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #722F37 100%)"
const RED_GLOW = "0 0 20px rgba(114, 47, 55, 0.5), 0 0 40px rgba(114, 47, 55, 0.3), 0 0 80px rgba(114, 47, 55, 0.1)"
const RED_SHADOW = "0 8px 32px rgba(114, 47, 55, 0.25)"

const BUTTON_STYLES = {
  background: PRIMARY_GRADIENT,
  border: "1px solid #722F37",
  color: "#FFFFFF",
  padding: "12px 24px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: RED_SHADOW,
  transition: "all 0.3s ease",
  textTransform: "none",
  "&:hover": {
    transform: "scale(1.05) translateY(-2px)",
    background: "linear-gradient(135deg, #722F37 0%, #8B3A42 100%)",
    boxShadow: RED_GLOW,
    border: "1px solid #722F37",
  },
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [newsCount, setNewsCount] = useState("247")
  const [membersCount, setMembersCount] = useState("1,543")
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const { scrollY } = useScroll()
  const [navbarBackground, setNavbarBackground] = useState("rgba(0, 0, 0, 0.7)")
  const [navbarBorder, setNavbarBorder] = useState("1px solid rgba(114, 47, 55, 0.2)")

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setNavbarBackground("rgba(0, 0, 0, 0.95)")
      setNavbarBorder("1px solid rgba(114, 47, 55, 0.4)")
    } else {
      setNavbarBackground("rgba(0, 0, 0, 0.7)")
      setNavbarBorder("1px solid rgba(114, 47, 55, 0.2)")
    }
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsCount(prev => {
        const num = parseInt(prev.replace(',', ''))
        return (num + Math.floor(Math.random() * 3)).toString()
      })
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const navItems = [
    { name: "Home", icon: <Home size={16} />, href: "/" },
    { name: "News", icon: <Newspaper size={16} />, href: "/news" },
    { name: "Entertainment", icon: <Gamepad2 size={16} />, href: "/entertainment" },
    { name: "Orange mic", icon: <Mic size={16} />, href: "https://orange-mic.vercel.app", special: true },
    { name: "About", icon: <Info size={16} />, href: "/about" },
    { name: "Core Team", icon: <Users size={16} />, href: "/core-team" }
  ]

  const handleNavigation = (href) => {
    window.location.href = href
  }

  const drawer = (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        width: isMobile ? "260px" : "280px",
        height: "100vh",
        background: DRAWER_GRADIENT,
        padding: isMobile ? "16px" : "24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        borderLeft: "2px solid #722F37",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Typography
          variant="h6"
          sx={{
            my: 2,
            color: "#FF8C42",
            marginBottom: isMobile ? "20px" : "32px",
            textAlign: "center",
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 140, 66, 0.5)",
            fontSize: isMobile ? "18px" : "20px",
          }}
        >
          SIGN-NEWS
        </Typography>
      </motion.div>

      {/* Mobile stats */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ color: "#888", fontSize: isMobile ? "12px" : "14px" }}>News Articles</Typography>
          <Typography sx={{ color: "#FF8C42", fontWeight: "600", fontSize: isMobile ? "12px" : "14px" }}>{newsCount}</Typography>
        </Box>
      </Box>

      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <ListItem disablePadding sx={{ mb: 1 }}>
              <Button
                sx={{
                  background: "rgba(114, 47, 55, 0.1)",
                  border: "1px solid rgba(114, 47, 55, 0.2)",
                  color: item.special ? "#FFFFFF" : "#FF8C42",
                  fontSize: isMobile ? "14px" : "16px",
                  cursor: "pointer",
                  padding: isMobile ? "10px 12px" : "12px 16px",
                  textAlign: "left",
                  borderRadius: "8px",
                  width: "100%",
                  justifyContent: "flex-start",
                  gap: "12px",
                  textTransform: "none",
                  ...(item.special && {
                    background: "linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)",
                    border: "1px solid #FF8C42",
                  }),
                  "&:hover": {
                    background: item.special ? "linear-gradient(135deg, #FF6B1A 0%, #FF8C42 100%)" : "rgba(114, 47, 55, 0.2)",
                    border: item.special ? "1px solid #FF8C42" : "1px solid #722F37",
                    boxShadow: item.special ? "0 4px 16px rgba(255, 140, 66, 0.3)" : "0 4px 16px rgba(114, 47, 55, 0.2)",
                    color: "#FFFFFF",
                  },
                }}
                onClick={() => {
                  handleNavigation(item.href)
                  handleDrawerToggle()
                }}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.icon}
                {item.name}
              </Button>
            </ListItem>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="contained"
            sx={{
              background: "rgba(114, 47, 55, 0.1)",
              border: "1px solid rgba(114, 47, 55, 0.2)",
              color: "#FF8C42",
              padding: isMobile ? "10px 20px" : "12px 24px",
              borderRadius: "8px",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "none",
              mt: 2,
              width: "100%",
              "&:hover": {
                background: "rgba(114, 47, 55, 0.2)",
                border: "1px solid #722F37",
                boxShadow: "0 4px 16px rgba(114, 47, 55, 0.2)",
                color: "#FFFFFF",
              },
            }}
            onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
            startIcon={<UserCheck size={isMobile ? 16 : 18} />}
            aria-label="Join Community"
          >
            Join Us
          </Button>
        </motion.div>
      </List>
    </motion.div>
  )

  return (
    <motion.div
      animate={{ 
        background: navbarBackground, 
        borderBottom: navbarBorder,
        boxShadow: scrollY.get() > 50 ? "0 4px 24px rgba(114, 47, 55, 0.1)" : "none"
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: navbarBackground,
        borderBottom: navbarBorder,
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          padding: "0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
            padding: isMobile ? "4px 12px" : isDesktop ? "16px 24px" : "8px 16px",
            minHeight: isMobile ? "48px" : isDesktop ? "64px" : "56px",
          }}
        >
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: isMobile ? "6px" : isDesktop ? "16px" : "12px" }}>
              <Box
                component="img"
                src="/NLogo.jpeg"
                alt="SIGN-NEWS Logo"
                sx={{
                  width: isMobile ? "28px" : isDesktop ? "48px" : "36px",
                  height: isMobile ? "28px" : isDesktop ? "48px" : "36px",
                  borderRadius: isMobile ? "6px" : isDesktop ? "12px" : "8px",
                  objectFit: "cover",
                  boxShadow: RED_SHADOW,
                  border: "2px solid rgba(114, 47, 55, 0.3)",
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{
                    margin: 0,
                    fontSize: isMobile ? "14px" : isDesktop ? "24px" : "18px",
                    fontWeight: "bold",
                    fontFamily: "'Roboto Slab', Georgia, serif",
                  }}
                >
                  <span style={{ color: "white" }}>SIGN</span>
                  <span style={{ color: "#FF8C42" }}>-NEWS</span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? "8px" : isDesktop ? "12px" : "10px",
                    color: "#FF8C42",
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  News Platform
                </Typography>
              </Box>
              <Chip
                label="Live"
                size="small"
                sx={{
                  background: "rgba(255, 140, 66, 0.2)",
                  color: "#FF8C42",
                  border: "1px solid rgba(255, 140, 66, 0.3)",
                  fontSize: isMobile ? "8px" : isDesktop ? "11px" : "9px",
                  fontWeight: "600",
                  height: isMobile ? "18px" : isDesktop ? "24px" : "20px",
                }}
              />
            </Box>
          </motion.div>

          <Box sx={{ display: "flex", alignItems: "center", gap: isMobile ? "6px" : isDesktop ? "32px" : "16px" }}>
            {/* Stats Section - Only on Desktop and Tablet */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: isDesktop ? "24px" : "16px", alignItems: "center" }}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ color: "#888", fontSize: isDesktop ? "12px" : "10px" }}>Articles</Typography>
                    <Typography sx={{ color: "#FF8C42", fontWeight: "600", fontSize: isDesktop ? "14px" : "12px" }}>
                      {newsCount}
                    </Typography>
                  </Box>
                </motion.div>
                <Badge
                  badgeContent={<Activity size={isDesktop ? 12 : 10} />}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#FF8C42",
                      color: "#FFFFFF",
                    }
                  }}
                >
                  <Newspaper size={isDesktop ? 20 : 16} color="#FF8C42" />
                </Badge>
              </Box>
            )}

            {/* Join Us Button - Only on Desktop */}
            {isDesktop && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  sx={BUTTON_STYLES}
                  onClick={() => window.open("https://x.com/0xsign_news", "_blank", "noopener,noreferrer")}
                  startIcon={<UserCheck size={18} />}
                  aria-label="Join Community"
                >
                  Join Us
                </Button>
              </motion.div>
            )}

            {/* Hamburger Menu - For All Screen Sizes */}
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                color: "#FF8C42",
                border: "1px solid rgba(255, 140, 66, 0.3)",
                borderRadius: isMobile ? "6px" : "8px",
                padding: isMobile ? "6px" : "8px",
                "&:hover": {
                  background: "rgba(255, 140, 66, 0.1)",
                  boxShadow: "0 4px 16px rgba(255, 140, 66, 0.2)",
                }
              }}
            >
              <Menu size={isMobile ? 20 : 24} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: isMobile ? "260px" : "280px",
                background: "transparent",
              },
              "& .MuiBadge-badge": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              }
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar;