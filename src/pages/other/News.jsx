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
    7: 0,
    8: 0,
  })

  const [liked, setLiked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
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
        id: 9,
        title: "Sign Intern Reveals Key Features and Updates as Sign App Enters Testing Phase for Serious Builders.",
        summary:
          "On Wednesday, July 16th, the Sign community was treated to an exciting update during a Twitter Space hosted by the Sign Intern, who revealed a detailed look into the highly anticipated Sign App and its ongoing development.",
        writer: "Sign Team",
        image: "/Hemy1.jpeg",
        type: "image",
        category: "Blockchain",
        date: "2025-07-16",
        fullContent: (
          <>
            <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
              Sign Intern Reveals Key Features and Updates as Sign App Enters Testing Phase for Serious Builders.
            </h2>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              <strong>Published: Wednesday, July 16.</strong>
            </p>
            <div className="mb-6 text-center bg-gray-100 p-4 rounded-lg">
              <img
                src="/Hemy1.jpeg"
                alt="Sign Intern Reveals Key Features and Updates as Sign App Enters Testing Phase for Serious Builders."
                className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
                onError={() => console.error("Failed to load image: /Hemy1.jpeg")}
              />
            </div>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              On Wednesday, July 16th, the Sign community was treated to an exciting update during a Twitter Space hosted by
              the Sign Intern, who revealed a detailed look into the highly anticipated Sign App and its ongoing
              development.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              The intern officially announced that the app will be called <strong>“Orange Dynasty”</strong>, a name chosen
              to represent the strength, unity, and vibrant spirit of the Sign community. She emphasized that the app is
              built not just as a social platform, but as a community-first ecosystem focused on rewarding meaningful
              engagement and positive contributions.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              One of the core functionalities of the app includes the integration of <strong>X</strong>. By connecting their
              X accounts, users will be able to earn “oranges”, a form of community reward points, for every comment, reply,
              post, or Sign-related content they share. These oranges reflect a user’s activity and influence within the
              Sign space. More importantly, the intern highlighted the significance of vouching for others and gifting
              oranges, stating that the platform strongly discourages negative interactions or reviews. The app also
              includes a leaderboard, currently tracking users with the most oranges, but this will soon shift focus to
              highlight those who gift the most promoting generosity and recognition within the network.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              In terms of rollout, the intern shared a detailed multi-phase testing plan. The current phase is focused on
              private testing for serious builders, allowing early contributors to explore the platform and provide
              feedback. This will be followed by a private testing round for all SBT holders, and eventually open up to
              everyone who has interacted with Sign, including those who have engaged through posts, content creation, IRL
              events, and other forms of community participation.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              She also disclosed that the app is currently undergoing validation and review by Apple for its iOS version,
              signaling that a broader release is near. Addressing comparisons to existing platforms like X, the intern
              clarified that Sign is not attempting to replicate those models. Instead, the goal is to create something
              uniquely different, blending social interaction with gamified experiences, including exciting additions like a
              dating section and karaoke features designed to bring people closer in fun and creative ways.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              Another major feature is <strong>ZK-proof (zero-knowledge proof)</strong> verification, enabling users to
              verify aspects of their identity or on-chain activity securely. The app will also allow wallet connections for
              users to verify their holdings of SIGN NFTs, SIGN Tokens, and SIGN SBTs, integrating identity, ownership, and
              participation into one seamless experience.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              Feedback from Sign <strong>OGs who have tested the app</strong> has been overwhelmingly positive, with many
              praising its user experience and expressing excitement for what’s to come. As Sign moves through these
              development phases, the anticipation for the public release continues to grow.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              With the Orange Dynasty, Sign is not just launching an app, it’s building a new digital space where community,
              creativity, and trust come together. Stay tuned for more about related updates.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              <em>News credit: JUST_Hemmy (Sign caster)</em>
            </p>
          </>
        ),
      },
      {
        id: 8,
        title:
          "TokenTable Distributes Major Airdrops to Two Leading Web3 Communities, Reinforces Its Role as Transparent On-Chain Allocation Pioneer.",
        summary:
          "In a notable advancement that highlights its growing influence in the Web3 space, TokenTable, one of the featured ecosystems of Sign has once again demonstrated its commitment to transparency and community empowerment.",
        writer: "Sign Team",
        image: "/Hemy2.jpeg",
        type: "image",
        category: "Blockchain",
        date: "2025-07-15",
        fullContent: (
          <>
            <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
              TokenTable Distributes Major Airdrops to Two Leading Web3 Communities, Reinforces Its Role as Transparent
              On-Chain Allocation Pioneer.
            </h2>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              <strong>Published: Tuesday, July 15</strong>
            </p>
            <div className="mb-6 text-center bg-gray-100 p-4 rounded-lg">
              <img
                src="/Hemy2.jpeg"
                alt="TokenTable Distributes Major Airdrops to Two Leading Web3 Communities, Reinforces Its Role as Transparent On-Chain Allocation Pioneer."
                className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
                onError={() => console.error("Failed to load image: /Hemy2.jpeg")}
              />
            </div>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              In a notable advancement that highlights its growing influence in the Web3 space, <strong>TokenTable</strong>,
              one of the featured ecosystems of <strong>Sign</strong> has once again demonstrated its commitment to
              transparency and community empowerment. On Tuesday, July 15, TokenTable successfully executed a major airdrop
              campaign for not one, but two prominent Web3 projects, distributing tokens directly to their communities in a
              seamless and secure process.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              Built as a comprehensive solution for token distribution, vesting, and on-chain allocation,{" "}
              <strong>TokenTable</strong> is fast becoming the go-to infrastructure for Web3 teams looking to launch and
              scale with clarity. With its intuitive dashboard, secure delivery mechanisms, and emphasis on transparency,{" "}
              <strong>TokenTable</strong> ensures that every allocation from investor vesting to public airdrops is fully
              trackable and accessible on-chain.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              This latest airdrop underscores TokenTable’s bold vision: to remove the opacity and friction that typically
              accompany token distribution in decentralized ecosystems. By facilitating drops for two major Web3 projects in
              a single day, <strong>TokenTable</strong> not only proved the scalability of its protocol but also reaffirmed
              its mission to put communities first, rewarding engagement and participation with verifiable ownership.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              More than just a tool, <strong>TokenTable</strong> is shaping the future of community tokenomics. As more
              builders turn to it to manage complex allocations, it continues to raise the bar for what responsible and
              community-aligned token distribution should look like in Web3.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              With this latest achievement, TokenTable cements its role as a trusted partner in the Sign ecosystem and a
              critical pillar for the evolving decentralized economy.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              Stay tuned for further updates as TokenTable continues to unlock new chapters in transparent token
              infrastructure.
            </p>
            <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              <em>News credit: JUST_Hemmy (Sign caster)</em>
            </p>
          </>
        ),
      },
      {
      id: 7,
      title: "Sign Protocol Surpasses 8 Million Attestations as New Developments Unfold",
      summary:
        "In a major milestone for decentralized identity systems, Sign Protocol has officially surpassed 8 million attestations, further solidifying its position as a leader in the onchain identity space.",
      writer: "Sign Team",
      image: "/Just2.jpeg",
      type: "image",
      category: "Blockchain",
      date: "2025-07-15",
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
            Sign Protocol Surpasses 8 Million Attestations as New Developments Unfold
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
            <strong>By Sign Team | July 15, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center", backgroundColor: "#f0f0f0" }}>
            <img
              src="/Just2.jpeg" // Use the same image as the card
              alt="Sign Protocol Surpasses 8 Million Attestations"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
              onError={() => console.error("Failed to load image: /Just2.jpeg")}
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
            In a major milestone for decentralized identity systems, Sign Protocol has officially surpassed 8 million
            attestations, further solidifying its position as a leader in the onchain identity space. The announcement
            came during a recent community update by one of Sign’s core team members, Claire, fondly known as the “Product
            Queen” within the Sign community.
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
            According to Claire, the 8 million attestations have been made across more than 10 different networks, marking
            a significant leap in adoption and demonstrating the cross-chain power and growing influence of the Sign
            Protocol.
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
            During the session, Claire provided a glimpse into the broader vision of Sign, sharing exciting details about
            the infrastructure being built behind the scenes. She explained that Sign is developing a{" "}
            <strong>
              powerful onchain ID system, one that enables users to attest to real-world, government-issued documents and
              unlock various services
            </strong>{" "}
            across the decentralized world. This system represents a pivotal shift in how digital identity is approached,
            offering individuals the ability to take control of their identity data and store it securely on the
            blockchain.
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
            What sets this system apart is the use of attestations, verified claims issued by recognized authorities, such
            as governments. Through these attestations, users can connect official documents like passports or driver’s
            licenses to their onchain identity, creating a secure, transparent, and user-controlled digital profile.
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
            Claire also shared updates on Sign’s latest innovations around news integrations using schema hooks. This new
            feature allows attestations to trigger smart contract actions, seamlessly blending structured data and
            blockchain technology. Essentially, it’s a move toward more automated, event-driven workflows, where verified
            claims instantly set smart contracts into motion. This integration is designed to simplify and accelerate
            onchain interactions, opening doors to more sophisticated decentralized applications and services.
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
            The Sign community responded with enthusiasm to the announcements, celebrating both the milestone and the
            ambitious direction the platform is heading toward.
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
            As the blockchain space continues to evolve, Sign Protocol’s work in decentralized identity and attestation
            infrastructure is emerging as a cornerstone of future onchain systems. With millions of attestations already
            recorded and innovation pushing forward at full speed, Sign is proving to be a key player in shaping a
            trust-based, decentralized internet.
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
            Stay tuned for more updates as Sign continues to build the foundation for an open, verifiable, and user-first
            identity system across Web3….
          </Typography>
        </>
      ),
      },
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
    {
      id: 1,
      title: "Sign CEO Unveils Bold Vision for Blockchain Civilization at Danjo Capital AMA",
      summary: "Xin Yan shares Sign's roadmap for digital nation-building and blockchain infrastructure.",
      writer: "Just Hemmy",
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            On Tuesday, June 27th, blockchain enthusiasts tuned in for a thought-provoking AMA hosted by Danjo Capital,
            where Xin Yan, Co-founder and CEO of Sign Crypto, shared his story, philosophy, and an ambitious roadmap for
            Sign's future. The session provided a rare, unfiltered look into the mind of a crypto founder building not
            just products but digital infrastructure meant to serve entire nations.
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
            <strong>From Hardware Dreams to Global Impact</strong>
            <br />
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>Sign's Vision: Infrastructure for the Digital Age</strong>
            <br />
            At its core, Sign is a blockchain technology company, but its ambitions stretch far beyond any single
            product. The company's flagship offering, TokenTable, is already a market leader in token distribution
            infrastructure, reportedly holding around 60% market share and serving millions of wallets across major
            exchanges. But Sign's bigger play lies in the future of digital nation-building.
            <br />
            "We're shifting from a Web3 product company to a national infrastructure partner," Yan said. "We want to do
            for digital systems what civil engineers do for roads and bridges."
            <br />
            Current initiatives include:
            <br />• Digital ID systems
            <br />• Payment rails and stablecoins
            <br />• CBDC (Central Bank Digital Currency) frameworks
            <br />• Welfare distribution systems
            <br />• Land titling solutions
            <br />
            These are not just concepts. According to Yan, Sign is in partnership with six countries, with pilot
            programs already underway.
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
            <strong>A Philosophy Rooted in Fairness and Sovereignty</strong>
            <br />
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            <strong>A Warning Against the "Casino Mentality"</strong>
            <br />
            During the AMA, Yan also addressed the cultural challenges in crypto today. He criticized the tendency to
            treat blockchain as a speculative playground, likening it to a "casino culture" dominated by hype, meme
            coins, and short-term thinking.
            <br />
            "Crypto's real power isn't in gambling, it's in solving real-world problems," he said. "It's time to return
            to purpose."
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
            <strong>Recommended Readings: Sapiens & The Contrarian</strong>
            <br />
            For those looking to understand the philosophical foundation behind Sign's direction, Yan recommended two
            key books:
            <br />• "Sapiens" by Yuval Noah Harari – for its deep dive into human history and systems of coordination.
            <br />• "The Contrarian" by Peter Thiel – for its insight into original thinking and navigating complex
            systems.
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
            <strong>Looking Ahead</strong>
            <br />
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            GM, Sign Fam!
            <br />
            Johnny Sign here again and today we're diving deep into one of the most important tools in the Sign
            ecosystem: TokenTable. Whether you're a project founder, investor, or just Web3-curious, this breakdown will
            help you understand why TokenTable is fast becoming the go-to solution for token management in the crypto
            world.
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
            <strong>The Challenge: Web3 Is Booming, But Token Management Is Messy</strong>
            <br />
            Let's be real — building in Web3 is thrilling. The potential is massive, the communities are vibrant, and
            innovation is non-stop. But there's a big issue many teams run into: token distribution and unlocks.
            <br />
            Managing things like:
            <br />• Vesting schedules
            <br />• Airdrops
            <br />• Investor transparency
            <br />• Tokenomics visualization
            <br />
            …can become overwhelming, especially when done manually or with scattered tools.
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
            <strong>The Solution: TokenTable by Sign</strong>
            <br />
            TokenTable was designed to solve these exact challenges.
          </Typography>
        </>
      ),
    },
    {
      id: 3,
      title: "Sign CEO Xin Yan Discusses Digital Identity, Token Governance, and the Future of Web3 on Korean TV",
      summary: "Xin Yan highlights Sign's role in digital identity and token governance on Korean TV.",
      writer: "Just Hemmy",
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
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
            sx={{
              fontFamily: "'Open Sans', Helvetica, sans-serif",
              mb: 2,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            }}
          >
            In a groundbreaking television appearance on Korean national TV, Sign CEO Xin Yan shared insights into the
            future of digital identity and token governance, highlighting how blockchain technology is reshaping the way
            we think about digital sovereignty and Web3 infrastructure.
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
            During the interview, Yan emphasized the importance of building robust digital identity systems that give
            users control over their personal data while enabling seamless interactions across different platforms and
            services.
          </Typography>
        </>
      ),
    },
    {
      id: 4,
      title: "Weekly Story Episode by @proftbright - Episode 1: Ironed with Honour",
      summary:
        "A inspiring story about Kelechi, who owned only one pair of faded trousers but carried himself with quiet confidence and unwavering determination.",
      writer: "Proftbright",
      image: "/IMG44.jpeg",
      type: "image",
      category: "Community",
      date: "2025-06-01",
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
            Weekly Story Episode by @proftbright - Episode 1: Ironed with Honour
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
            <strong>By @proftbright | June 1, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/IMG44.jpeg"
              alt="Ironed with Honour Story"
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
            <strong>Episode 1: Ironed with Honour</strong>
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
            In a small town where everyone knew each other, there was a guy named Kelechi who owned only one pair of
            trousers — faded blue, worth maybe ₦500 (about $0.3125) at best — but every morning, he ironed them like
            they were designer.
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
            He'd walk through town square with quiet confidence, even though the soles of his shoes whispered to the
            ground.
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
            "See this one," they'd chuckle at the barber shop. "Walking like he owns the bank, but he can't even afford
            data."
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
            But Kelechi heard none of it. He was too focused.
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
            Each morning before sunrise, he studied digital design at a tiny cyber café. He'd save half of his ₦2,000
            ($1.3125) weekly earnings — sometimes skipping lunch — because he believed in a future he hadn't seen, but
            already lived in his mind.
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
            <strong>Episode 2 coming next…</strong>
          </Typography>
        </>
      ),
    },
    {
      id: 5,
      title: "Welcome to Sign News - Top Creators of the Week Spotlight",
      summary:
        "Farmie, your Sign Marites, celebrates the top creators who've been building amazing things in the Sign community.",
      writer: "Farmie",
      videoUrl: "/VID3.mp4",
      type: "video",
      category: "Community",
      date: "2025-06-01",
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
            Welcome to Sign News - Top Creators of the Week Spotlight
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
            <strong>By Farmie, Your Sign Marites | June 1, 2025</strong>
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
              <source src="/VID3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            Hey Sign community! It's June 1st, and we're kicking off the month with a bang!
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
            It's not just a new month — it's also the start of a fresh lineup for our Top Creators of the Week!
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
            These are the voices in our community who've been showing up, building amazing things, and keeping the Sign
            energy high. Whether through creativity, engagement, or collaboration, they've earned the spotlight this
            week.
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
            Let's celebrate these stars who are shaping the Sign story:
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
            • @hemmy499
            <br />• @smarychain01
            <br />• @wageivan
            <br />• @signrealchef
            <br />• @rollandosilva7
            <br />• @blackbee30
            <br />• @brave_rengoku
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
            Congratulations once again top creators! Keep building and inspire more people. Always be the best version
            of yourself.
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
            That's it for now. Stick with us here on Sign news as we continue to spotlight incredible talent and
            celebrate community wins.
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
            Once again this is Farmie, Your Sign Marites.
          </Typography>
        </>
      ),
    },
    {
      id: 6,
      title: "Bybit Hosts 'Deep Dive into SIGN' Twitter Space, Showcasing EthSign's On-Chain Agreement Vision",
      summary:
        "Bybit hosted a live AMA-style discussion featuring Claire, the 'Product Queen', offering insights into Sign's vision and $SIGN token potential.",
      writer: "Just Hemmy",
      image: "/IMG5.jpeg",
      type: "image",
      category: "Blockchain",
      date: "2025-06-04",
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
            Bybit Hosts 'Deep Dive into SIGN' Twitter Space, Showcasing EthSign's On-Chain Agreement Vision and $SIGN
            Token Potential
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
            <strong>By Sign Team | June 4, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/IMG5.jpeg"
              alt="Bybit Deep Dive into SIGN Twitter Space"
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
            <strong>Event Details:</strong>
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
            • <strong>Host:</strong> Bybit Official X account
            <br />• <strong>Topic:</strong> Deep Dive into SIGN (with EthSign, the on-chain signature/agreement
            protocol)
            <br />• <strong>Date & Time:</strong> June 4, 2025 at 10:00 AM UTC
            <br />• <strong>Format:</strong> Live AMA-style discussion
            <br />• <strong>Incentive:</strong> Attendees had a chance to win from a $250 USDT bonus pool
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
            On Wednesday, June 4th, Bybit hosted a live Space titled 'Deep Dive into Sign,' featuring Claire known to
            many as the 'Product Queen' offering valuable insights into the vision and purpose behind Sign.
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
            The discussion covered EthSign's innovative approach to on-chain agreements and digital signatures,
            highlighting how the protocol is revolutionizing the way contracts and agreements are handled in the Web3
            space.
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
            Claire provided deep insights into the technical architecture and future roadmap of Sign, explaining how the
            platform enables secure, transparent, and immutable agreement processes that can be verified on-chain.
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
            The session also explored the potential of the $SIGN token and its role within the ecosystem, providing
            attendees with valuable information about the project's tokenomics and future utility.
          </Typography>
        </>
      ),
    },
    {
      id: 7,
      title: "Sign CEO Reveals Major Update: Sign App Public Test Launching Soon with Social, Gaming & KTV Features",
      summary:
        "Xin Yan unveils the upcoming public test launch of the Sign App with integrated games, social features, merch store, and karaoke functionality.",
      writer: "Just Hemmy",
      image: "/IMG7.jpeg",
      type: "image",
      category: "Product Updates",
      date: "2025-06-23",
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
            Sign CEO Reveals Major Update: Sign App Public Test Launching Soon with Social, Gaming & KTV Features
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
            <strong>By Sign Team | June 23, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/IMG7.jpeg"
              alt="Sign App Public Test Launch"
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
            In a major announcement on Monday, June 23rd, Xin Yan, Co-founder and CEO of Sign Crypto, delivered an
            exciting update that has the community buzzing. Speaking during an internal update to the Sign community,
            Mr. Yan unveiled the upcoming public test launch of the Sign App, marking a new chapter in the platform's
            mission to blend blockchain utility with real-world digital lifestyle experiences.
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
            <strong>🔹 What's Inside the Sign App?</strong>
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
            The Sign App aims to go far beyond basic crypto utilities, offering a multi-functional platform designed to
            engage users in both fun and utility. Here's a closer look at the features revealed:
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
            <strong>🎮 Integrated Blockchain Games</strong>
            <br />
            The app will come equipped with casual, accessible games that integrate Sign's token ecosystem, allowing
            users to earn, play, and socialize in a gamified blockchain environment.
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
            <strong>💬 Swipe-Based Social Platform</strong>
            <br />
            Described as a "Web3-native social layer," the Sign App introduces a swipe-based interaction model for
            blockchain users. Users can discover profiles, connect with community members, and build digital tribes, all
            powered by verified on-chain identity.
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
            <strong>🛍 Merch Store</strong>
            <br />
            The app will also include a merchandise store, offering Sign-branded goods and exclusive digital-to-physical
            drops. The goal is to give the community more ways to express belonging—and potentially earn through creator
            collaborations.
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
            <strong>🎤 Online KTV (Karaoke)</strong>
            <br />
            In one of the most surprising—and culturally resonant—features, the app will include a karaoke experience,
            allowing users to sing, record, and share performances within the community. It taps into the vibrant music
            and entertainment culture particularly popular in Sign's core markets such as the Philippines and Southeast
            Asia.
          </Typography>
        </>
      ),
    },
    {
      id: 8,
      title: "Sign CEO Xin Yan on Web3 Talk: 'We're Building the Digital Infrastructure Layer for Nations'",
      summary:
        "Xin Yan positions Sign as a digital infrastructure partner for emerging economies, building foundational systems for governments and citizens.",
      writer: "Just Hemmy",
      image: "/IMG6.jpeg",
      type: "image",
      category: "Infrastructure",
      date: "2025-06-20",
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
            Sign CEO Xin Yan on Web3 Talk: 'We're Building the Digital Infrastructure Layer for Nations'
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
            <strong>By Sign Team | June 20, 2025</strong>
          </Typography>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <img
              src="/IMG6.jpeg"
              alt="Sign CEO Xin Yan Web3 Talk"
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
            In a new episode of Web3 Talk, Xin Yan, Co-founder and CEO of Sign Crypto, laid out a bold vision for the
            future of blockchain: not just powering communities and products—but underpinning national digital
            infrastructure.
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
            Speaking with clarity and conviction, Yan positioned Sign as more than a crypto startup. It is, he says, "a
            digital infrastructure partner for emerging economies," combining the principles of Web3 with the scale of
            public-sector ambition.
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
            "Think of Sign like a state-owned enterprise, but globally deployable," he explained. "We build the
            rails—digital ID, payments, token governance—that governments and citizens can actually rely on."
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
            <strong>🔹 From Web3 Startup to Digital Infrastructure Builder</strong>
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
            The conversation focused heavily on Sign's transformation from a product-centric Web3 company to a builder
            of foundational systems that serve not only crypto-native users but national governments, NGOs, and public
            programs.
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
            Yan described Sign's mission as building the "backend layer" for countries entering the digital age—a vision
            aligned with transparency, inclusivity, and long-term societal value.
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
            This includes infrastructure for:
            <br />• Digital identity systems
            <br />• Stablecoin frameworks
            <br />• Public benefit distribution (like welfare or aid)
            <br />• Land title registration
            <br />• Central bank digital currencies (CBDCs)
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
            "We're not chasing trends," Yan noted. "We're solving hard, practical problems for real-world economies."
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
            <strong>🔹 TokenTable: A Global Standard in Token Governance</strong>
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
            A key part of this strategy is TokenTable, Sign's flagship platform for token distribution and investor
            rights. With over 60% market share across major chains like TON and OKX, TokenTable is already trusted by a
            wide range of Web3 projects from stablecoins to meme tokens.
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
            But the real innovation, according to Yan, lies in how TokenTable aligns token governance with policy-grade
            transparency.
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
            "TokenTable brings structure where there's been chaos," Yan said. "It guarantees fair release schedules,
            real accountability, and sharding infrastructure built for scale."
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
            The platform is now being pitched not just to private projects, but governments and institutions, as a way
            to issue, track, and regulate digital assets in compliance with future global standards.
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
    if (news.videoUrl && (news.id === 1 || news.id === 2 || news.id === 5)) {
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
            <Grid item xs={12} sm={6} md={3} key={news.id}>
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

export default News
