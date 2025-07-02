"use client"

import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip, Button } from "@mui/material"
import { motion } from "framer-motion"

const CoreTeamPage = () => {
  const teamMembers = [
    {
      name: "Just Hemmy",
      position: "Founder",
      bio: "I’m hemmy, motion-graphics animator, poet and a crypto/forex trader",
      image: "/DP1.jpeg", // Slightly increased image size
      skills: ["Motion Graphics", "Poetry", "Crypto Trading"],
      twitter: "https://x.com/hemmy499",
    },
    {
      name: "Farmie",
      position: "Founder",
      bio: "Technology and business specialist with expertise in digital media and emerging trends.",
      image: "DP2.jpeg", // Slightly increased image size
      skills: ["Digital Media", "Business Strategy", "Emerging Trends"],
      twitter: "https://x.com/Farmie_KIND",
    },
    {
      name: "Cute Aunty",
      position: "Sign news Intern",
      bio: "Investigative journalist focusing on environmental and social justice issues.",
      image: "DP3.jpeg", // Slightly increased image size
      skills: ["Investigative Reporting", "Environment", "Social Justice"],
      twitter: "https://x.com/pikmenaba",
    },
    {
      name: "Big_D",
      position: "Sign news Developer",
      bio: "I’m a full-stack developer with a passion for creating innovative web applications. I love turning ideas into reality through code.",
      image: "DP4.jpg", // Slightly increased image size
      skills: ["FrontendDeveloper", "Backend Developer", "UIUX Designer"],
      twitter: "https://x.com/_BigDe",
    },
    {
      name: "ProfBright",
      position: "Sign news Storyteller",
      bio: "I’m a story writer and the voice behind Sign News & Entertainment.🧡",
      image: "DP5.jpeg", // Slightly increased image size
      skills: ["Storytelling", "Content Creation", "Social Media Management"],
      twitter: "https://x.com/proftbright",
    },
    {
      name: "Johnny Sign",
      position: "Sign news Educational video creator",
      bio: "I’m Creative mind in motion. I’m a Web3 enthusiast and video animation specialist, passionate about bringing stories to life through tech and visuals",
      image: "DP6.jpeg", // Slightly increased image size
      skills: ["Video Animation", "Web3", "Content Creation"],
      twitter: "https://x.com/johnnykepuz",
    },
    {
      name: "CYBROX",
      position: "Sign news Major wins Announcer",
      bio: "Expert in health and wellness topics, focusing on mental health and nutrition.",
      image: "DP7.jpeg", // Slightly increased image size
      skills: ["Health Writing", "Nutrition", "Mental Health"],
      twitter: "https://x.com/manuelchuk89697",
    },
    {
      name: "BossGe",
      position: "Sign news Editor",
      bio: "I'm a web3 memes creator, graphic designer, video editor and moderator.",
      image: "DP8.jpeg", // Slightly increased image size
      skills: ["Web3 Memes", "Graphic Design", "Video Editing"],
      twitter: "https://x.com/bossge226456",
    },
    {
      name: "Bern Signcares",
      position: "Sign news Amplifier",
      bio: "Lifestyle and fashion influencer with a focus on entertainment and pop culture.",
      image: "DP9.jpeg", // Slightly increased image size
      skills: ["Lifestyle", "Fashion", "Entertainment"],
      twitter: "https://x.com/BernSigncares",
    },
    {
      name: "Hey Amari",
      position: "Sign news Reporter",
      bio: "Experienced political journalist covering local and national elections.",
      image: "DP10.jpeg", // Slightly increased image size
      skills: ["Political Reporting", "Elections", "Policy Analysis"],
      twitter: "https://x.com/Amari_matex",
    },
  ]

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
        py: { xs: 2.5, sm: 4.5 }, // Slightly increased padding
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 2.5, sm: 4.5 },
          background: "linear-gradient(135deg, #722F37 0%, #000000 100%)",
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography
              variant="h1"
              sx={{
                mb: { xs: 1.2, sm: 1.8 },
                fontWeight: "bold",
                fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.3rem" }, // Slightly increased fonts
              }}
            >
              Meet Our Core Team
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: { xs: "90%", sm: "800px" },
                mx: "auto",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" }, // Slightly increased fonts
              }}
            >
              Our dedicated team of journalists, editors, and content creators work tirelessly to bring you accurate and engaging news coverage.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Team Members Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 2.5, sm: 4.5 } }}>
        <Grid
          container
          spacing={{ xs: 1.8, sm: 2.5 }} // Slightly increased spacing
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "450px", // Increased from 400px
                    width: "100%",
                    maxWidth: "450px", // Increased from 400px
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: "20px",
                    overflow: "visible",
                    boxShadow: "0 9px 22px rgba(0,0,0,0.15)", // Slightly increased shadow
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-9px)", // Slightly increased hover lift
                      boxShadow: "0 14px 26px rgba(114, 47, 55, 0.25)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #722F37 0%, #000000 100%)",
                      p: { xs: 1.8, sm: 2.5 }, // Slightly increased padding
                      color: "white",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={member.image}
                      sx={{
                        width: { xs: 120, sm: 140, md: 160 }, // Slightly increased from 100-140px
                        height: { xs: 120, sm: 140, md: 160 },
                        mx: "auto",
                        mb: { xs: 0.8, sm: 1.2 },
                        border: "3.5px solid white", // Slightly increased border
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        mb: { xs: 0.4, sm: 0.6 },
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" }, // Slightly increased fonts
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#FFD700",
                        fontWeight: "500",
                        fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" }, // Slightly increased fonts
                      }}
                    >
                      {member.position}
                    </Typography>
                  </Box>

                  <CardContent
                    sx={{
                      p: { xs: 1.8, sm: 2.5 }, // Slightly increased padding
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        lineHeight: 1.4,
                        mb: 1.2,
                        fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" }, // Slightly increased fonts
                        maxWidth: "95%",
                      }}
                    >
                      {member.bio}
                    </Typography>

                    <Button
                      variant="contained"
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: "#722F37", // Wine color
                        color: "white",
                        fontSize: { xs: "0.75rem", sm: "0.85rem" }, // Slightly increased font size
                        fontWeight: "bold", // Bold font
                        padding: { xs: "3.5px 9px", sm: "5px 11px" }, // Slightly increased padding
                        borderRadius: "11px", // Slightly increased border radius
                        mb: 1.2,
                        "&:hover": {
                          backgroundColor: "#5A2630", // Darker wine on hover
                          color: "white", // Keep white on hover
                          fontWeight: "bold", // Keep bold on hover
                        },
                      }}
                    >
                      Follow on Twitter
                    </Button>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 0.7, sm: 0.9 }, // Slightly increased gap
                        justifyContent: "center",
                        width: "100%",
                        px: 0.75, // Slightly increased padding
                      }}
                    >
                      {member.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: "#722F37",
                            color: "white",
                            fontSize: { xs: "0.65rem", sm: "0.75rem" }, // Slightly increased fonts
                            padding: { xs: "2.5px 5.5px", sm: "3.5px 6.5px" }, // Slightly increased padding
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CoreTeamPage