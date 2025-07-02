"use client"
import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Grid, Paper, Snackbar, Alert } from "@mui/material"
import { motion } from "framer-motion"
import EmailIcon from "@mui/icons-material/Email"
import NotificationsIcon from "@mui/icons-material/Notifications"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setOpenSnackbar(true)
      setEmail("")
    }
  }

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #722F37 0%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center" // Center the grid
          sx={{ maxWidth: "1000px", mx: "auto" }} // Limit grid width for centering
        >
          <Grid item xs={12} md={5}> {/* Adjusted width for centering */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <NotificationsIcon sx={{ fontSize: 36, color: "#FFD700", mr: 1.5 }} />
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontFamily: "'Roboto Slab', Georgia, serif",
                  }}
                >
                  Stay Updated
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "'Open Sans', Helvetica, sans-serif",
                }}
              >
                Subscribe to our newsletter and never miss breaking news, exclusive interviews, and in-depth analysis
                delivered straight to your inbox.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#FFD700",
                      mr: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                    }}
                  >
                    Daily news digest
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#FFD700",
                      mr: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                    }}
                  >
                    Breaking news alerts
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#FFD700",
                      mr: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                    }}
                  >
                    Exclusive content access
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={8} md={5}> {/* Adjusted width for centering */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  mx: "auto", // Center the Paper within the Grid item
                  maxWidth: "400px", // Limit Paper width for centering
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <EmailIcon sx={{ fontSize: 40, color: "#722F37", mb: 1.5 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#722F37",
                      fontWeight: "bold",
                      mb: 1,
                      fontSize: { xs: "1.2rem", md: "1.5rem" },
                      fontFamily: "'Roboto Slab', Georgia, serif",
                    }}
                  >
                    Newsletter
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                    }}
                  >
                    Join thousands of readers worldwide
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Enter your email address"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        "&.Mui-focused fieldset": {
                          borderColor: "#722F37",
                        },
                        "& input": {
                          fontSize: "0.9rem",
                          fontFamily: "'Open Sans', Helvetica, sans-serif",
                          textAlign: "center", // Center input text
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "0.9rem",
                        fontFamily: "'Open Sans', Helvetica, sans-serif",
                        textAlign: "center",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#722F37",
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      backgroundColor: "#722F37",
                      color: "white",
                      py: 1.5,
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      fontFamily: "'Open Sans', Helvetica, sans-serif",
                      "&:hover": {
                        backgroundColor: "#5A252A",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Subscribe Now
                  </Button>
                </form>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 2,
                    color: "#666",
                    fontSize: "0.75rem",
                    fontFamily: "'Open Sans', Helvetica, sans-serif",
                  }}
                >
                  We respect your privacy. Unsubscribe at any time.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{
            width: "100%",
            fontSize: "0.85rem",
            fontFamily: "'Open Sans', Helvetica, sans-serif",
          }}
        >
          Successfully subscribed to our newsletter!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Newsletter