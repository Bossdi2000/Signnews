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

const News = () => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)
  const [likes, setLikes] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })
  const [liked, setLiked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
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
      title: "Sign CEO Unveils Bold Vision for Blockchain Civilization at Danjo Capital AMA",
      summary: "Xin Yan shares Sign's roadmap for digital nation-building and blockchain infrastructure.",
      writer: "Sign Team",
      videoUrl: "/VID1.mp4",
      type: "video",
      category: "Blockchain",
      date: "2025-06-27",
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
            Sign CEO Unveils Bold Vision for Blockchain Civilization at Danjo Capital AMA
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>By Sign Team | June 27, 2025</strong>
          </Typography>
          <Box sx={{ position: "relative", paddingTop: "56.25%", mb: 3 }}>
            <video
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/VID1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            On Tuesday, June 27th, blockchain enthusiasts tuned in for a thought-provoking AMA hosted by Danjo Capital,
            where Xin Yan, Co-founder and CEO of Sign Crypto, shared his story, philosophy, and an ambitious roadmap for
            Sign's future. The session provided a rare, unfiltered look into the mind of a crypto founder building not
            just products but digital infrastructure meant to serve entire nations.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>From Hardware Dreams to Global Impact</strong><br />
            Mr. Yan began the session by tracing his roots back to his early passion for hardware and electronic
            engineering. A builder at heart, he described how this technical curiosity gradually evolved into a
            fascination with blockchain—a technology he believes goes beyond just code or decentralization.
            <br />
            "Hardware was always about pushing what's possible, but blockchain unlocked something bigger: the ability to
            coordinate, to build fair systems, and give people sovereignty over their digital lives," he explained.
            <br />
            Having entered the crypto space in 2017 as an investor, Mr. Yan now leads one of Asia's most
            forward-thinking blockchain companies. Notably, Sign has a strong and growing community in the Philippines,
            reflecting its grassroots, cross-border appeal.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>Sign's Vision: Infrastructure for the Digital Age</strong><br />
            At its core, Sign is a blockchain technology company, but its ambitions stretch far beyond any single
            product. The company's flagship offering, TokenTable, is already a market leader in token distribution
            infrastructure, reportedly holding around 60% market share and serving millions of wallets across major
            exchanges. But Sign's bigger play lies in the future of digital nation-building.
            <br />
            "We're shifting from a Web3 product company to a national infrastructure partner," Yan said. "We want to do
            for digital systems what civil engineers do for roads and bridges."
            <br />
            Current initiatives include:<br />
            • Digital ID systems<br />
            • Payment rails and stablecoins<br />
            • CBDC (Central Bank Digital Currency) frameworks<br />
            • Welfare distribution systems<br />
            • Land titling solutions<br />
            These are not just concepts. According to Yan, Sign is in partnership with six countries, with pilot
            programs already underway.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>A Philosophy Rooted in Fairness and Sovereignty</strong><br />
            Beyond the tech, Yan shared a powerful vision: blockchain as a tool for fairness, sovereignty, and freedom.
            He contrasted decentralized systems with the dominance of the U.S. dollar, pointing to blockchain's
            potential to offer neutral, global alternatives that protect users from geopolitical influence.
            <br />
            "Crypto is not just hard tech, it's coordination tech. It's about helping people and governments organize
            more fairly," he emphasized.
            <br />
            This belief is reflected in Sign's global movement called the Orange Dynasty, a community united around
            values of money, freedom, and integrity.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>A Warning Against the "Casino Mentality"</strong><br />
            During the AMA, Yan also addressed the cultural challenges in crypto today. He criticized the tendency to
            treat blockchain as a speculative playground, likening it to a "casino culture" dominated by hype, meme
            coins, and short-term thinking.
            <br />
            "Crypto's real power isn't in gambling, it's in solving real-world problems," he said. "It's time to return
            to purpose."
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>Recommended Readings: Sapiens & The Contrarian</strong><br />
            For those looking to understand the philosophical foundation behind Sign's direction, Yan recommended two
            key books:<br />
            • "Sapiens" by Yuval Noah Harari – for its deep dive into human history and systems of coordination.<br />
            • "The Contrarian" by Peter Thiel – for its insight into original thinking and navigating complex
            systems.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>Looking Ahead</strong><br />
            Sign wasn't just a product update, it was a manifesto for the next phase of blockchain: civilizational tech,
            built with human needs at the center.
            <br />
            "We're not building just apps, we're building structures that can support economies, connect people across
            borders, and create systems where everyone has a fair shot," Yan concluded.
            <br />
            As the crypto world matures and eyes real-world use cases, Sign appears to be positioning itself not only as
            a platform but as a pioneer of digital sovereignty and next-gen infrastructure.
          </Typography>
        </>
      ),
    },
    {
      id: 2,
      title: "Explaining TokenTable: A Powerful Tool for Simplifying Token Distribution in Web3",
      summary: "Johnny Sign breaks down how TokenTable streamlines token management for Web3 projects.",
      writer: "Johnny Sign",
      videoUrl: "/VID2.mp4",
      type: "video",
      category: "Blockchain",
      date: "2025-07-02",
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
            Explaining TokenTable: A Powerful Tool for Simplifying Token Distribution in Web3
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>By Johnny Sign | July 2, 2025</strong>
          </Typography>
          <Box sx={{ position: "relative", paddingTop: "56.25%", mb: 3 }}>
            <video
              controls
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <source src="/VID2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            GM, Sign Fam!<br />
            Johnny Sign here again and today we're diving deep into one of the most important tools in the Sign
            ecosystem: TokenTable. Whether you're a project founder, investor, or just Web3-curious, this breakdown will
            help you understand why TokenTable is fast becoming the go-to solution for token management in the crypto
            world.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>The Challenge: Web3 Is Booming, But Token Management Is Messy</strong><br />
            Let's be real — building in Web3 is thrilling. The potential is massive, the communities are vibrant, and
            innovation is non-stop. But there's a big issue many teams run into: token distribution and unlocks.
            <br />
            Managing things like:<br />
            • Vesting schedules<br />
            • Airdrops<br />
            • Investor transparency<br />
            • Tokenomics visualization<br />
            …can become overwhelming, especially when done manually or with scattered tools.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>The Solution: TokenTable by Sign</strong><br />
            TokenTable was designed to solve these exact challenges.
          </Typography>
        </>
      ),
    },
    {
      id: 3,
      title: "Sign CEO Xin Yan Discusses Digital Identity, Token Governance, and the Future of Web3 on Korean TV",
      summary: "Xin Yan highlights Sign's role in digital identity and token governance on Korean TV.",
      writer: "Sign Team",
      image: "/IMG3.jpeg",
      type: "image",
      category: "Blockchain",
      date: "2025-06-27",
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
            Sign CEO Xin Yan Discusses Digital Identity, Token Governance, and the Future of Web3 on Korean TV
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>By Sign Team | June 27, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/IMG3.jpeg"
              alt="Sign CEO Xin Yan on Korean TV"
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
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            In a groundbreaking television appearance on Korean national TV, Sign CEO Xin Yan shared insights into the
            future of digital identity and token governance, highlighting how blockchain technology is reshaping the way
            we think about digital sovereignty and Web3 infrastructure.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            During the interview, Yan emphasized the importance of building robust digital identity systems that give
            users control over their personal data while enabling seamless interactions across different platforms and
            services.
          </Typography>
        </>
      ),
    },
    {
      id: 4,
      title: "Cultural Festival Celebrates Diversity",
      summary: "Annual celebration brings communities together in unity and harmony.",
      image: "/IMG44.jpeg",
      type: "image",
      category: "Culture",
      date: "2024-01-12",
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
            Cultural Festival Celebrates Diversity
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>January 12, 2024</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/IMG44.png"
              alt="Cultural Festival"
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
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            The annual cultural festival brought together communities from diverse backgrounds in a celebration of unity
            and harmony. This year's event featured performances, art exhibitions, and cultural exchanges that
            highlighted the rich tapestry of traditions and customs from around the world.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            Attendees enjoyed traditional music, dance performances, and authentic cuisine from various cultures,
            creating an atmosphere of mutual understanding and appreciation for diversity.
          </Typography>
        </>
      ),
    },
    {
      id: 5,
      title: "Medical Research Breakthrough",
      summary: "New treatment shows promising results in clinical trials.",
      image: "/placeholder.svg?height=250&width=400",
      type: "video",
      category: "Health",
      date: "2024-01-11",
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
            Medical Research Breakthrough
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>January 11, 2024</strong>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            New treatment shows promising results in clinical trials, offering hope for patients worldwide.
          </Typography>
        </>
      ),
    },
    {
      id: 6,
      title: "Environmental Conservation Success",
      summary: "Wildlife preservation efforts show remarkable positive impact.",
      image: "/placeholder.svg?height=250&width=400",
      type: "image",
      category: "Environment",
      date: "2024-01-10",
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
            Environmental Conservation Success
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            <strong>January 10, 2024</strong>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
          >
            Wildlife preservation efforts show remarkable positive impact, with significant improvements in biodiversity and habitat restoration.
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
    if (news.videoUrl && (news.id === 1 || news.id === 2)) {
      return (
        <Box sx={{ position: "relative", height: "200px" }}>
          <video
            controls
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            poster={news.image || "/placeholder.svg?height=200&width=450"}
          >
            <source src={news.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
    } else {
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
            <Grid item xs={12} sm={6} key={news.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: "450px", // Matches CoreTeamPage
                    width: "100%",
                    maxWidth: "450px", // Matches CoreTeamPage
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
                          sx={{ ml: 0.5, fontFamily: "'Open Sans', Helvetica, sans-serif", fontSize: { xs: "0.65rem", sm: "0.75rem" } }}
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
                    sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", lineHeight: 1.6, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" } }}
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

export default News