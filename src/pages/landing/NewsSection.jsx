"use client"
import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Modal,
  Paper,
  IconButton,
} from "@mui/material"
import { motion } from "framer-motion"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ImageIcon from "@mui/icons-material/Image"
import ArticleIcon from "@mui/icons-material/Article"
import FavoriteIcon from "@mui/icons-material/Favorite"

const NewsSection = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)
  const [likes, setLikes] = useState({
    1: 0,
    2: 0,
    3: 0,
  })
  const [liked, setLiked] = useState({
    1: false,
    2: false,
    3: false,
  })

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: liked[id] ? prev[id] - 1 : prev[id] + 1,
    }))
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleOpenModal = (news) => {
    setSelectedNews(news)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedNews(null)
  }

  const newsData = [
    {
      id: 1,
      title: "Episode 2: The Flat Tire",
      summary:
        "Kelechi's journey continues as a simple act of kindness leads to an unexpected opportunity that could change everything.",
      writer: "Proftbright",
      image: "/Bright1.jpeg",
      type: "image",
      category: "Community",
      date: "2025-07-10",
      fullContent: (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Slab', Georgia, serif",
              color: "#722F37",
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            Episode 2: The Flat Tire
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>By @proftbright | July 10, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/Bright1.jpeg"
              alt="Episode 2: The Flat Tire"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            The sun was harsh that afternoon, painting the cracked road in heat waves. Kelechi had just finished another
            three-hour stretch at the cyber café, eyes sore from the blue light, heart sore from hunger. But his trouser
            was still sharply ironed, like a soldier's uniform. He walked tall, sweat on his back, hope in his chest.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Then he saw her — a woman pacing beside a black SUV with a flat tire.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Everyone watched but no one moved.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Kelechi hesitated for a second, then stepped forward.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "Ma, you need help?"
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            She turned. Sharp eyes. Neatly tied gele. No-nonsense energy.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "You know how to fix a tire?" she asked, raising a brow.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "I can try."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            And he did. Quietly, carefully, using tools from her trunk. She watched not just his hands, but his posture.
            How he didn't flinch when his shirt got dusty. How he didn't talk too much. How he smiled when it was done.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "What's your name?" she finally asked.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "Kelechi."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "What do you do?"
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "I'm learning design… graphics and web. Still learning."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            She looked at him for a long second, then reached into her bag and brought out a business card.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            "Come to this address on Monday. 10 a.m. Tell the secretary Madam Fola sent you."
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Before he could say thank you, she was already behind the wheel, driving off.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            He stared at the card.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            It was real.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Everything in him wanted to jump, scream, dance.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            But instead, he folded the card with care, slipped it into his pocket, and smiled.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Let them laugh.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            They didn't see this one coming.
          </Typography>
        </>
      ),
    },
    {
      id: 2,
      title: "Sign CEO Xin Yan Shares Vision and Philosophy in Comprehensive AMA Discussion",
      summary:
        "A detailed discussion covering Sign's evolution, blockchain philosophy, and vision for digital sovereignty and infrastructure.",
      writer: "Sign Team",
      image: "/Farm1.jpeg",
      type: "image",
      category: "Blockchain",
      date: "2025-07-08",
      fullContent: (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Slab', Georgia, serif",
              color: "#722F37",
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            Sign CEO Xin Yan Shares Vision and Philosophy in Comprehensive AMA Discussion
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>By Sign Team | July 8, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/Farm1.jpeg"
              alt="Sign CEO AMA Discussion"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Introduction</strong>
            <br />
            Mr. Xin Yan introduced himself as the co-founder and CEO of Sign, with experience in crypto investment since
            2017. Sign is a blockchain technology company with a strong community in the Philippines.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Background and Motivation</strong>
            <br />
            Mr. Yan shared his early interest in hardware and electronic engineering, driven by a passion to build
            innovative tech. He shifted focus to blockchain due to its potential for broad impact beyond hardware,
            especially in improving societal coordination.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            He emphasized the importance of digital sovereignty and blockchain's role in providing a fair, transparent,
            and global currency, contrasting it with the US dollar's dominance and geopolitical implications. Blockchain
            is seen not just as hard tech, but as tech involving coordination and fairness.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Influential Books</strong>
            <br />
            Mr. Yan recommended "Sapiens: A Brief History of Humankind" by Yuval Noah Harari for its historical insights
            into humanity. He also recommended "The Contrarian" by Peter Thiel for its unique and practical
            perspectives.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Overview of Sign and Its Vision</strong>
            <br />
            Sign focuses on blockchain-based signature generation and verification. The company's flagship product is
            TokenTable, a token distribution platform holding approximately 60% market share, servicing major wallets
            and exchanges.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Sign is transitioning from a Web3 product company to a digital infrastructure provider for nations. Current
            projects include building digital IDs, payment systems, stablecoins, CBDCs, welfare distribution, land
            titling, and more. Partnerships with six countries are underway, with pilot projects launching soon.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Sign aims to offer turnkey digital infrastructure solutions akin to infrastructure construction companies
            building bridges and roads, but digitally. They also emphasize community-building with the "Orange Dynasty"
            global community sharing the vision of money, freedom, and integrity.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Use Cases and Technological Insights</strong>
            <br />
            Digital ID is crucial for ensuring citizen voting rights anonymously and verifiably. Sign uses layer-2
            solutions built on public blockchains like Ethereum or BNB Chain for security, flexibility, and sovereign
            control.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            TokenTable's existing infrastructure can scale to billions of wallets, enabling national distributions like
            Universal Basic Income (UBI) via smart contracts efficiently. Blockchain's ability to securely and privately
            verify ID data protects privacy, avoiding surveillance creep via encryption and zero-knowledge proofs.
          </Typography>
        </>
      ),
    },
    {
      id: 3,
      title: "Deep Dive: Sign's Evolution from Token Distribution to National Infrastructure",
      summary:
        "Comprehensive analysis of Sign's business model transformation, revenue streams, and strategic positioning in the evolving crypto landscape.",
      writer: "Sign Team",
      image: "/Farm2.jpeg",
      type: "image",
      category: "Business",
      date: "2025-07-05",
      fullContent: (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Slab', Georgia, serif",
              color: "#722F37",
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            Deep Dive: Sign's Evolution from Token Distribution to National Infrastructure
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>By Sign Team | July 5, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/Farm2.jpeg"
              alt="Sign Business Evolution"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Business Focus: From Token Table to National Infrastructure</strong>
            <br />
            <strong>Products Overview:</strong>
            <br />• Token Table: Core income source involving token issuance and distribution
            <br />• Climb: Other token claim tools for projects
            <br />• National Infrastructure Services: An emerging, revenue-stable segment involving blockchain solutions
            for nation-level applications
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>National Infrastructure</strong>
            <br />
            Motivation: Recognizing Web3 is not ready to fully replace Web2; instead focus on unique value in
            traditional industries. Developed a framework integrating:
            <br />• Layer 2 Blockchain: Secure, flexible, customizable blockchain infrastructure replacing traditional
            permissioned chains
            <br />• Digital Identity (DID): Verification of identity to enable differentiated services (e.g.,
            citizenship, banking status)
            <br />• Stablecoins: For in-chain sovereign currency, enabling on-chain governance and transactions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            Use cases include welfare distribution (government subsidies, basic income, pensions), land registration,
            corporate registration, and voting. The system enables transparency and efficiency improvements compared to
            traditional government systems.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Modular and Customizable Solutions</strong>
            <br />
            The framework is modular and plug-and-play. It can integrate with existing national ID systems or offer new
            ones. Works with various stablecoins and chains depending on the country's needs.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Pricing and Contract Model</strong>
            <br />
            Pricing model based on country's population, charging a fixed annual fee (e.g., $1 per person per year).
            Contracts usually span 5 years or more. National infrastructure revenue is a growing part, potentially
            exceeding Token Table revenue as it matures.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Current and Prospective Clients</strong>
            <br />
            Actively cooperating countries: Thailand, Belarus, Sierra Leone, Abu Dhabi, Kyrgyzstan, etc. (some
            confidential). Business development (BD) is complex, relying heavily on referrals from investors and
            diplomatic connections.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            BD requires multi-layer engagement: top-down (government leaders) and bottom-up (staff executing projects)
            approaches for success. Binance and other exchanges are important partners and sources of referrals.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Community and User Base</strong>
            <br />
            <strong>Geographic Focus:</strong> Main active user communities are in developing regions: Nigeria, India,
            Philippines. Western/US communities are smaller and harder to engage. The community is organized into tribes
            aligned around country origin and roles within the virtual society.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Virtual Society Model</strong>
            <br />
            Built around Sign's Super App, which serves as a "townhall" where users interact. Incorporates token
            economy, reputation scores, roles, and gamification. Inspired by successful gaming projects and other
            community-centric projects. The goal is to build a sustainable, engaged community beyond just trading or
            farming tokens.
          </Typography>
        </>
      ),
    },
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <PlayArrowIcon />
      case "image":
        return <ImageIcon />
      default:
        return <ArticleIcon />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "video":
        return "#FF4444"
      case "image":
        return "#44AA44"
      default:
        return "#722F37"
    }
  }

  const renderMediaContent = (news) => {
    return (
      <Box sx={{ position: "relative", height: "200px" }}>
        <CardMedia
          component="img"
          height="200"
          image={news.image || "/placeholder.svg?height=200&width=450"}
          alt={news.title}
          sx={{ objectFit: "cover", height: "100%" }}
        />
        <Chip
          icon={getTypeIcon(news.type)}
          label={news.type.toUpperCase()}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: getTypeColor(news.type),
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
            padding: { xs: "2px 5px", sm: "3px 6px" },
          }}
        />
      </Box>
    )
  }

  return (
    <Box sx={{ py: { xs: 2.5, sm: 4.5 }, backgroundColor: "#F8F8F8" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              color: "#722F37",
              fontWeight: "bold",
              fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.3rem" },
              fontFamily: "'Roboto Slab', Georgia, serif",
            }}
          >
            Latest News
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 4,
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },
              fontFamily: "'Open Sans', Helvetica, sans-serif",
            }}
          >
            Stay updated with the most recent developments across various categories
          </Typography>
        </motion.div>
        <Grid
          container
          spacing={{ xs: 1.8, sm: 2.5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {newsData.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: "450px",
                    width: "100%",
                    maxWidth: "450px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "15px",
                    overflow: "visible",
                    boxShadow: "0 9px 22px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-9px)",
                      boxShadow: "0 14px 26px rgba(114, 47, 55, 0.25)",
                    },
                  }}
                >
                  {renderMediaContent(news)}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: { xs: 1.8, sm: 2.5 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
                        <Chip
                          label={news.category}
                          size="small"
                          sx={{
                            backgroundColor: "#722F37",
                            color: "white",
                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                            padding: { xs: "2px 5px", sm: "3px 6px" },
                          }}
                        />
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: { xs: "0.65rem", sm: "0.75rem" } }}
                        >
                          {news.date}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 0.4,
                          color: "#722F37",
                          lineHeight: 1.3,
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          fontFamily: "'Roboto Slab', Georgia, serif",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {news.title}
                      </Typography>
                      {news.writer && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontFamily: "'Open Sans', Helvetica, sans-serif",
                            fontSize: { xs: "0.75rem", sm: "0.8rem" },
                            mb: 0.4,
                          }}
                        >
                          By {news.writer}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 0.8,
                          lineHeight: 1.4,
                          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                          fontFamily: "'Open Sans', Helvetica, sans-serif",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {news.summary}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#722F37",
                          color: "white",
                          fontSize: { xs: "0.75rem", sm: "0.85rem" },
                          fontWeight: "bold",
                          padding: { xs: "3.5px 9px", sm: "5px 11px" },
                          borderRadius: "11px",
                          textTransform: "none",
                          fontFamily: "'Open Sans', Helvetica, sans-serif",
                          "&:hover": {
                            backgroundColor: "#5A2630",
                            color: "white",
                            fontWeight: "bold",
                          },
                          flexGrow: 1,
                        }}
                        onClick={() => handleOpenModal(news)}
                      >
                        Read More
                      </Button>
                      <IconButton
                        onClick={() => toggleLike(news.id)}
                        sx={{ color: liked[news.id] ? "#722F37" : "#666" }}
                      >
                        <FavoriteIcon sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }} />
                        <Typography
                          variant="caption"
                          sx={{
                            ml: 0.5,
                            fontFamily: "'Open Sans', Helvetica, sans-serif",
                            fontSize: { xs: "0.65rem", sm: "0.75rem" },
                          }}
                        >
                          {likes[news.id]}
                        </Typography>
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="news-modal-title"
          aria-describedby="news-modal-description"
        >
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "80%", md: "700px", lg: "900px" },
              maxHeight: { xs: "85vh", sm: "80vh" },
              overflowY: "auto",
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: "15px",
              backgroundColor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 9px 22px rgba(0,0,0,0.15)",
            }}
          >
            {selectedNews && (
              <>
                {selectedNews.fullContent || (
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
                    }}
                  >
                    {selectedNews.summary}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#722F37",
                    color: "white",
                    fontFamily: "'Open Sans', Helvetica, sans-serif",
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    px: { xs: 1.8, sm: 2.5 },
                    py: 0.5,
                    borderRadius: "11px",
                    "&:hover": {
                      backgroundColor: "#5A2630",
                    },
                  }}
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </>
            )}
          </Paper>
        </Modal>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#722F37",
              color: "white",
              px: { xs: 3, sm: 4 },
              py: 1.5,
              borderRadius: "20px",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#5A2630",
                boxShadow: "0 9px 22px rgba(114, 47, 55, 0.3)",
              },
            }}
          >
            View All News
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default NewsSection
