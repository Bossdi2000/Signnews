"use client"
import { useState, useEffect } from "react"
import { Box, Typography, Container, Card, CardMedia, CardContent, Button, Modal, Paper } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"

const HeroSection = () => {
  const [currentNews, setCurrentNews] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)

  const majorNews = [
    {
      id: 1,
      title: "Sign-News: Empowering the SIGN Ecosystem",
      summary:
        "A dynamic media engine amplifying impactful stories, creators, and initiatives in the SIGN community with transparent, engaging journalism.",
      image: "/NLogo.jpeg",
      type: "article",
      fullContent: (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Slab', Georgia, serif",
              color: "#722F37",
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
            }}
          >
            Sign-News: Empowering the SIGN Ecosystem
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>🎯 GOAL</strong><br />
            To establish a dynamic media engine that elevates and amplifies the most impactful stories, developments, and creative efforts within the Sign ecosystem—merging journalism, entertainment, and community recognition into a powerful, community-first platform.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>🧭 MISSION</strong><br />
            To deliver timely, accurate, and engaging coverage that informs, celebrates, and connects the Sign community—spotlighting standout creators, groundbreaking initiatives, and defining moments. Through this, we aim to build a consistent and trusted channel that fosters inclusion, transparency, and a shared sense of progress among all signees.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", lineHeight: 1.6 }}
          >
            <strong>🌐 VISION</strong><br />
            To become the central news and media hub of the Sign ecosystem—capturing the culture, innovation, and evolution of our collective journey. We envision a platform that not only leads within Sign, but also sets the standard for Web3 media: one that empowers every voice, documents every milestone, and inspires a generation of digital pioneers through high-quality, community-driven storytelling.
          </Typography>
        </>
      ),
    },
    {
      id: 2,
      title: "TokenTable: Transparent Token Management",
      summary:
        "TokenTable enables Web3 projects to manage token allocations on-chain with transparency, vesting schedules, and role-based access for DAOs.",
      image: "/HP3.jpeg",
      type: "article",
      fullContent: (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Slab', Georgia, serif",
              color: "#722F37",
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
            }}
          >
            TokenTable: Transparent Token Management
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            TokenTable is a feature within the Sign ecosystem designed to help Web3 projects and DAOs manage token allocations transparently and on-chain. It acts like a token cap table and a record of who holds what tokens but fully decentralized and automated through smart contracts.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            Imagine you’re launching a Web3 project. You’ve got a group of founders, early supporters, investors, and team members, and you need to divide your project’s tokens among them in a fair, trackable, and secure way. That’s where TokenTable comes in.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>Key Functions of Sign TokenTable:</strong>
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>On-Chain Token Allocation:</strong> Define and record token distributions (e.g., for investors, team members, partners) directly on the blockchain, ensuring transparency and verifiability.</li>
              <li><strong>Role-Based Access Control:</strong> Different participants (like project founders, token recipients, or legal advisors) can interact with the token table according to their roles, managed through permissions and signatures.</li>
              <li><strong>Vesting Schedules & Claims:</strong> Support vesting logic, meaning recipients receive tokens over time or after certain conditions, automatically enforced via smart contracts.</li>
              <li><strong>Transparency for Communities:</strong> Anyone can view the token allocation data, building trust and accountability, especially important in decentralized communities and DAOs.</li>
            </ul>
          </Typography>
        </>
      ),
    },
    {
      id: 3,
      title: "SIGN: Building a Community-First Platform",
      summary:
        "SIGN fosters equal opportunities and financial freedom, supporting creators with $15M in 2024 funding and a vibrant Orange Dynasty community.",
      image: "/HP2.jpg",
      type: "article",
      fullContent: (
        <>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Slab', Georgia, serif",
              color: "#722F37",
              mb: 2,
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
            }}
          >
            SIGN: Building a Community-First Platform
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            SIGN is a company that's building a platform where everyone is treated equally, and your success is the top priority. SIGN is creating a community-driven ecosystem that fosters financial freedom, integrity, and growth for all. SIGN’s approach is to build a platform where you can do anything you want, and they will support you and boost your platforms, connecting you with like-minded people.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>The Best Part?</strong>
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Equal Opportunities:</strong> SIGN treats all individuals equally, regardless of account size or background. Everyone has access to the same opportunities and support.</li>
              <li><strong>Supportive Community:</strong> Join SIGN’s vibrant Orange Dynasty community, where you'll meet like-minded individuals, developers, designers, content writers, and creators. Collaborate, learn, and grow together!</li>
              <li><strong>Existing Success:</strong> SIGN’s products, including Sign Pass, Ethsign, Sign Protocol, and Token Table, are already making waves in the industry. SIGN has secured $15 million in funding in 2024 and received a significant investment from CZ in 2025.</li>
              <li><strong>No Ulterior Motives:</strong> SIGN is not looking for community funding or promising unrealistic returns. SIGN’s goal is to support you in achieving your goals, and the rewards will follow naturally.</li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>How Can You Benefit?</strong>
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Build and Grow:</strong> Create and build on SIGN, and SIGN will provide massive support to help you succeed. You'll have access to exclusive opportunities, including early access to new SIGN releases, community-driven projects, and exclusive benefits.</li>
              <li><strong>Showcase Your Involvement:</strong> Earn recognition through SIGN’s SBTS badges, including Outstanding Creators, Serious Builders, Orange in the Veins, and Support Warriors. You can also own and trade NFTs that represent your commitment to the Orange Dynasty.</li>
              <li><strong>Connect with Like-Minded Individuals:</strong> Join our community and network with people who share your passions and interests.</li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>What Sets SIGN Apart? 🔥</strong><br />
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>No Farming:</strong> SIGN is not farmable, and SIGN is focused on building a sustainable ecosystem that benefits everyone.</li>
              <li><strong>Community-First Approach:</strong> SIGN is committed to providing value to each member. You're not creating for SIGN; you're creating for yourself, and SIGN will be there to support you every step of the way.</li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mb: 2, lineHeight: 1.6 }}
          >
            <strong>Ready to Join the Movement? 🔥</strong><br />
            If you're ready to take control of your financial future and join a community that's changing the game, SIGN is for you. Don't just think about what you can do for SIGN; think about how SIGN can help you grow and achieve your goals. Let's build a brighter future together!
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', Helvetica, sans-serif", mt: 2, lineHeight: 1.6, fontWeight: "bold" }}
          >
            Let's Get Started! 🎉
          </Typography>
        </>
      ),
    },
  ]

  const handleOpenModal = (news) => {
    setSelectedNews(news)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedNews(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % majorNews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [majorNews.length])

  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", sm: "80vh", md: "80vh" },
        background: "linear-gradient(135deg, #722F37 0%, #000000 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 14, sm: 16, md: 18, lg: 20 },
        pb: { xs: 4, sm: 6 },
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: { xs: "100%", sm: "90%", md: "1200px", lg: "1400px", xl: "1600px" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: { xs: 3, sm: 4, md: 5, lg: 6 }, alignItems: "center" }}>
          {/* Left side - Welcome text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "'Roboto Slab', Georgia, serif",
                mb: 3,
                fontSize: { xs: "2.2rem", sm: "2.6rem", md: "3rem", lg: "3.4rem" },
                lineHeight: 1.1,
                textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                letterSpacing: "0.5px",
              }}
            >
              Stay Informed with
              <Box
                component="span"
                sx={{
                  color: "#FFD700",
                  display: "block",
                  fontFamily: "'Roboto Slab', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: { xs: "2.6rem", sm: "3rem", md: "3.4rem", lg: "3.8rem" },
                  fontWeight: 700,
                  textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
                  letterSpacing: "1px",
                }}
              >
                SIGN NEWS
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 4,
                lineHeight: 1.6,
                fontFamily: "'Open Sans', Helvetica, sans-serif",
                fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.25rem", lg: "1.35rem" },
                fontWeight: 300,
                maxWidth: { xs: "100%", sm: "90%", md: "80%" },
              }}
            >
              Your trusted source for breaking news, in-depth analysis, and multimedia content from around the world.
            </Typography>
          </motion.div>

          {/* Right side - Rotating news */}
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", sm: "500px", md: "600px", lg: "700px" }, mx: "auto" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNews}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    border: "2px solid #722F37",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: { xs: 190, sm: 220, md: 230, lg: 250 }, // Slightly increased height
                      objectFit: "cover",
                    }}
                    image={majorNews[currentNews].image}
                    alt={majorNews[currentNews].title}
                  />
                  <CardContent
                    sx={{
                      p: { xs: 1.5, sm: 2 },
                      display: "flex",
                      flexDirection: "column",
                      gap: { xs: 1, sm: 1.5 },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        color: "#722F37",
                        fontFamily: "'Roboto Slab', Georgia, serif",
                        fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" },
                      }}
                    >
                      {majorNews[currentNews].title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        lineHeight: 1.5,
                        fontFamily: "'Open Sans', Helvetica, sans-serif",
                        fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                      }}
                    >
                      {majorNews[currentNews].summary}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#722F37",
                        borderColor: "#722F37",
                        textTransform: "none",
                        fontFamily: "'Open Sans', Helvetica, sans-serif",
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        px: { xs: 1.5, sm: 2 },
                        py: 0.4,
                        "&:hover": {
                          backgroundColor: "#722F37",
                          color: "white",
                        },
                      }}
                      onClick={() => handleOpenModal(majorNews[currentNews])}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* News indicators */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 1.5, sm: 2 }, gap: { xs: 0.6, sm: 0.8 } }}>
              {majorNews.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: 8, sm: 10 },
                    height: { xs: 8, sm: 10 },
                    borderRadius: "50%",
                    backgroundColor: currentNews === index ? "#FFD700" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => setCurrentNews(index)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Modal for full content */}
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
            width: { xs: "90%", sm: "80%", md: "600px", lg: "800px" },
            maxHeight: { xs: "85vh", sm: "80vh" },
            overflowY: "auto",
            p: { xs: 3, sm: 4 },
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
        >
          {selectedNews && (
            <>
              {selectedNews.fullContent}
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#722F37",
                  color: "white",
                  fontFamily: "'Open Sans', Helvetica, sans-serif",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  px: { xs: 1.5, sm: 2 },
                  py: 0.4,
                  "&:hover": {
                    backgroundColor: "#5A252A",
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
    </Box>
  )
}

export default HeroSection