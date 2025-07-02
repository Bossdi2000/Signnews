"use client"

import { useState } from "react"
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
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { motion } from "framer-motion"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    { text: "About", href: "/about" },
    { text: "News", href: "/news" },
    { text: "Core Team", href: "/core-team" },
  ]

  const drawer = (
    <Box sx={{ width: { xs: 200, sm: 250 }, backgroundColor: "#000000", height: "100%" }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", py: 1.5 }}
            onClick={() => {
              window.location.href = item.href // Navigate using window.location.href
              handleDrawerToggle() // Close the drawer after navigation
            }}
            button // Ensure ListItem behaves like a button
          >
            <ListItemText
              primary={item.text}
              sx={{
                color: "white",
                textAlign: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #722F37, #4B1C22)",
                  borderRadius: "10px",
                  color: "white",
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
                  transform: "translateX(5px)",
                },
                "& .MuiTypography-root": {
                  fontFamily: "'Open Sans', Helvetica, sans-serif",
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", py: 1.5 }}>
          <Button
            href="#join-us" // Kept as is; update if it should navigate to a page
            sx={{
              width: "100%",
              background: "linear-gradient(90deg, #722F37, #4B1C22)",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "25px",
              py: { xs: 1, sm: 1.5 },
              px: { xs: 2, sm: 3 },
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(90deg, #4B1C22, #722F37)",
                border: "2px solid #722F37",
                boxShadow: "0 0 20px rgba(114, 47, 55, 0.7)",
                transform: "translateY(-2px)",
              },
              animation: "pulseBorder 2s infinite",
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              fontSize: { xs: "0.85rem", sm: "0.9rem" },
            }}
          >
            Join Us
          </Button>
        </ListItem>
      </List>
      <style jsx global>{`
        @keyframes pulseBorder {
          0% {
            border-color: rgba(114, 47, 55, 0.4);
            box-shadow: 0 0 5px rgba(114, 47, 55, 0.4);
          }
          50% {
            border-color: rgba(114, 47, 55, 1);
            box-shadow: 0 0 15px rgba(114, 47, 55, 0.8);
          }
          100% {
            border-color: rgba(114, 47, 55, 0.4);
            box-shadow: 0 0 5px rgba(114, 47, 55, 0.4);
          }
        }
      `}</style>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#000000",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: { xs: 1.5, sm: 2, md: 2 },
            px: { xs: 1, sm: 2 },
          }}
        >
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, sm: 1, md: 1.5 } }}>
              <Box
                component="img"
                src="/NLogo.jpeg"
                alt="SIGN-NEWS Logo"
                sx={{
                  width: { xs: 32, sm: 36, md: 40, lg: 44 },
                  height: { xs: 32, sm: 36, md: 40, lg: 44 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  backgroundColor: "#722F37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: { xs: "1px", md: "1.5px" },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" },
                  fontFamily: "'Roboto Slab', Georgia, serif",
                }}
              >
                <span style={{ color: "white" }}>SIGN</span>
                <span style={{ color: "#722F37" }}>-NEWS</span>
              </Typography>
            </Box>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem" } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box sx={{ display: "flex", gap: { xs: 1, sm: 2, md: 3, lg: 4 }, alignItems: "center" }}>
                {menuItems.map((item) => (
                  <motion.div key={item.text} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => window.location.href = item.href} // Navigate using window.location.href
                      color="inherit"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "1rem" },
                        fontWeight: 500,
                        textTransform: "none",
                        px: { xs: 1.5, sm: 2, md: 3 },
                        py: 1,
                        borderRadius: "25px",
                        transition: "all 0.3s ease",
                        fontFamily: "'Open Sans', Helvetica, sans-serif",
                        "&:hover": {
                          background: "linear-gradient(90deg, #722F37, #4B1C22)",
                          boxShadow: "0 4px 15px rgba(114, 47, 55, 0.4)",
                          color: "white",
                          textShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  </motion.div>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    href="#join-us" // Kept as is; update if it should navigate to a page
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "1rem" },
                      fontWeight: 600,
                      textTransform: "none",
                      px: { xs: 2, sm: 3, md: 4 },
                      py: { xs: 0.75, sm: 1 },
                      borderRadius: "25px",
                      background: "linear-gradient(90deg, #722F37, #4B1C22)",
                      color: "white",
                      border: "2px solid transparent",
                      transition: "all 0.3s ease",
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                      "&:hover": {
                        background: "linear-gradient(90deg, #4B1C22, #722F37)",
                        border: "2px solid #722F37",
                        boxShadow: "0 0 20px rgba(114, 47, 55, 0.7)",
                        transform: "translateY(-2px)",
                      },
                      animation: "pulseBorder 2s infinite",
                    }}
                  >
                    Join Us
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 200, sm: 250 },
          },
        }}
      >
        {drawer}
      </Drawer>
      <style jsx global>{`
        @keyframes pulseBorder {
          0% {
            border-color: rgba(114, 47, 55, 0.4);
            box-shadow: 0 0 5px rgba(114, 47, 55, 0.4);
          }
          50% {
            border-color: rgba(114, 47, 55, 1);
            box-shadow: 0 0 15px rgba(114, 47, 55, 0.8);
          }
          100% {
            border-color: rgba(114, 47, 55, 0.4);
            box-shadow: 0 0 5px rgba(114, 47, 55, 0.4);
          }
        }
      `}</style>
    </>
  )
}

export default Navbar