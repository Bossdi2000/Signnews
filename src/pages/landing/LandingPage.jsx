"use client"
import { Box } from "@mui/material"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import NewsSection from "./NewsSection"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

const LandingPage = () => {
  // Animation variants for smooth page transitions
  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  }

  const sectionVariants = {
    initial: { 
      opacity: 0,
      y: 30
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        width: "100%",
        overflow: "hidden"
      }}
    >
      <Box 
        sx={{ 
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#000000", // Changed to match your dark theme
          background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background Effects */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            zIndex: 0
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "300px",
              height: "300px",
              background: "#722F37",
              borderRadius: "50%",
              filter: "blur(80px)"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: "250px",
              height: "250px",
              background: "#FF8C42",
              borderRadius: "50%",
              filter: "blur(60px)"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "5%",
              width: "200px",
              height: "200px",
              background: "#FF8C42",
              borderRadius: "50%",
              filter: "blur(100px)"
            }}
          />
        </Box>

        {/* Content Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            width: "100%"
          }}
        >
          {/* Navigation */}
          <motion.div variants={sectionVariants}>
            <Navbar />
          </motion.div>

          {/* Hero Section */}
          <motion.div variants={sectionVariants}>
            <HeroSection />
          </motion.div>

          {/* News Section */}
          <motion.div variants={sectionVariants}>
            <NewsSection />
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={sectionVariants}>
            <Newsletter />
          </motion.div>

          {/* Footer */}
          <motion.div variants={sectionVariants}>
            <Footer />
          </motion.div>
        </Box>

        {/* Scroll Progress Indicator */}
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
            transformOrigin: "0%",
            zIndex: 1000
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
        />
      </Box>
    </motion.div>
  )
}

export default LandingPage