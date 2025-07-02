"use client"
import { Box } from "@mui/material"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import NewsSection from "./NewsSection"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section with Auto-rotating News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroSection />
        </motion.div>

        {/* Latest News Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <NewsSection />
        </motion.div>

        {/* Newsletter Subscription Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Newsletter />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </Box>
    </motion.div>
  )
}

export default LandingPage;