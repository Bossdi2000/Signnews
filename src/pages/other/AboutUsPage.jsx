"use client"

import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material"

import { motion } from "framer-motion"

const AboutUsPage = () => {
  const teamValues = [
    {
      title: "Integrity",

      description: "We uphold the highest standards of journalistic integrity and ethical reporting.",

      icon: "🎯",
    },

    {
      title: "Accuracy",

      description: "Every story is fact-checked and verified before publication.",

      icon: "✅",
    },

    {
      title: "Transparency",

      description: "We believe in open, honest communication with our readers.",

      icon: "🔍",
    },
  ]

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      {/* Hero Section */}

      <Box
        sx={{
          py: { xs: 4, sm: 6 },

          background: "linear-gradient(135deg, #722F37 0%, #000000 100%)",

          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",

                mb: 2,

                fontWeight: "bold",

                fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.3rem" },

                fontFamily: "'Roboto Slab', Georgia, serif",
              }}
            >
              About SIGN NEWS
            </Typography>

            <Typography
              variant="h5"
              sx={{
                textAlign: "center",

                maxWidth: "800px",

                mx: "auto",

                lineHeight: 1.5,

                color: "rgba(255,255,255,0.9)",

                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem" },

                fontFamily: "'Open Sans', Helvetica, sans-serif",
              }}
            >
              We are dedicated to delivering accurate, timely, and comprehensive news coverage that keeps you informed
              about the world around you.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission and Values Section */}

      <Container maxWidth="lg" sx={{ py: { xs: 1.5, sm: 2.5 } }}>
        {/* Mission Section */}

        <Grid container spacing={4} alignItems="center" sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#722F37",

                  fontWeight: "bold",

                  mb: 2,

                  fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.3rem" },

                  fontFamily: "'Roboto Slab', Georgia, serif",
                }}
              >
                Our Mission
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },

                  lineHeight: 1.6,

                  color: "#666",

                  mb: 2,

                  fontFamily: "'Open Sans', Helvetica, sans-serif",
                }}
              >
                At SIGN NEWS, we believe that informed citizens are the foundation of a strong democracy. Our mission is
                to provide accurate, unbiased, and comprehensive news coverage that empowers people to make informed
                decisions.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },

                  lineHeight: 1.6,

                  color: "#666",

                  fontFamily: "'Open Sans', Helvetica, sans-serif",
                }}
              >
                We strive to be your trusted source for breaking news, in-depth analysis, and multimedia content that
                matters to your daily life and the world at large.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  height: { xs: 200, sm: 250, md: 300 },

                  backgroundImage: "url(https://via.placeholder.com/600x400)",

                  backgroundSize: "cover",

                  backgroundPosition: "center",

                  borderRadius: "15px",

                  boxShadow: "0 9px 22px rgba(0,0,0,0.15)",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Values Section */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",

              mb: 1,

              color: "#722F37",

              fontWeight: "bold",

              fontSize: { xs: "1.7rem", sm: "2.1rem", md: "2.3rem" },

              fontFamily: "'Roboto Slab', Georgia, serif",
            }}
          >
            Our Values
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{
            display: "flex",

            justifyContent: "center",
          }}
        >
          {teamValues.map((value, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "250px",

                    width: "100%",

                    maxWidth: "300px",

                    mx: "auto",

                    display: "flex",

                    flexDirection: "column",

                    justifyContent: "center",

                    textAlign: "center",

                    borderRadius: "15px",

                    boxShadow: "0 9px 22px rgba(114, 47, 55, 0.15)",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-9px)",

                      boxShadow: "0 14px 26px rgba(114, 47, 55, 0.25)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 1.5, sm: 2 },

                      flexGrow: 1,

                      display: "flex",

                      flexDirection: "column",

                      justifyContent: "center",

                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },

                        mb: 0.5,
                      }}
                    >
                      {value.icon}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",

                        mb: 0.5,

                        color: "#722F37",

                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },

                        fontFamily: "'Roboto Slab', Georgia, serif",
                      }}
                    >
                      {value.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",

                        lineHeight: 1.5,

                        fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },

                        fontFamily: "'Open Sans', Helvetica, sans-serif",

                        display: "-webkit-box",

                        WebkitLineClamp: 3,

                        WebkitBoxOrient: "vertical",

                        overflow: "hidden",
                      }}
                    >
                      {value.description}
                    </Typography>
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

export default AboutUsPage
