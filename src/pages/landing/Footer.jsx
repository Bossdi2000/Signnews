"use client"
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material"
import { motion } from "framer-motion"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { text: "Home", href: "#" },
      { text: "Latest News", href: "#" },
      { text: "Categories", href: "#" },
      { text: "Archives", href: "#" },
    ],
    About: [
      { text: "Our Story", href: "#" },
      { text: "Core Team", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Contact Us", href: "#" },
    ],
    Services: [
      { text: "Newsletter", href: "#" },
      { text: "RSS Feed", href: "#" },
      { text: "Mobile App", href: "#" },
      { text: "Notifications", href: "#" },
    ],
    Legal: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Cookie Policy", href: "#" },
      { text: "Disclaimer", href: "#" },
    ],
  }

  const socialIcons = [
    { icon: <FacebookIcon />, href: "#", color: "#1877F2" },
    { icon: <TwitterIcon />, href: "#", color: "#1DA1F2" },
    { icon: <InstagramIcon />, href: "#", color: "#E4405F" },
    { icon: <LinkedInIcon />, href: "#", color: "#0A66C2" },
    { icon: <YouTubeIcon />, href: "#", color: "#FF0000" },
  ]

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000000",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#722F37",
                  letterSpacing: "2px",
                }}
              >
                SIGN NEWS
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                }}
              >
                Your trusted source for breaking news, in-depth analysis, and multimedia content. We deliver accurate,
                timely, and comprehensive coverage of events that matter to you.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialIcons.map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                      href={social.href}
                      sx={{
                        color: social.color,
                        backgroundColor: "rgba(255,255,255,0.1)",
                        "&:hover": {
                          backgroundColor: social.color,
                          color: "white",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 2,
                    color: "#722F37",
                  }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#722F37",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      {link.text}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
            © {new Date().getFullYear()} SIGN NEWS. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
            Made with ❤️ for informed readers worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer