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
    id: 9,
    title: "Open Conspiracy: How to Send $SIGN to $1",
    summary:
      "Welcome to the open conspiracy. If you’re holding $SIGN, whether it's spot, staked, or you hold a long position on perp, this article is for you. This isn’t financial advice. This is memetic warfare. A battle for consensus. A mission to make $SIGN = $1.",
    writer: "Xin(shin)Yan 闞欣",
    image: "/SOB1.jpeg",
    type: "image",
    category: "Blockchain",
    date: "2025-07-18",
    fullContent: (
      <>
        <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
          Open Conspiracy: How to Send $SIGN to $1
        </h2>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <strong>Originally written by:</strong> Xin(shin)Yan 闞欣, July 18, 2025
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <strong>For $SIGN Holders Only</strong>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Welcome to the open conspiracy. If you’re holding $SIGN, whether it's spot, staked, or you hold a long
          position on perp, this article is for you. This isn’t financial advice. This is memetic warfare. A battle for
          consensus. A mission to make $SIGN = $1.
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          I. First Principles
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          1. All value is memetic, based purely on shared conviction.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Let me explain a bit more.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          It’s counterintuitive, but the price of things you can’t directly use isn’t determined by fundamentals. It’s
          shaped by belief, by narrative, by collective conviction.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          $SIGN, like everything else — from USD to BTC to Nvidia’s $4T valuation — is worth what we believe it’s worth.
          That number? It doesn’t hold any intrinsic meaning anymore. $4T could theoretically buy 16 years of global
          rice production… but deep down, we all know it never will.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          ————————————————————————————-
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          2. All $SIGN holders must coordinate better for our shared vision.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          $SIGN has bound us together, socially and financially. If you’ve chosen to hold $SIGN and retire in the next
          180 days, then passive holding isn’t enough. Here’s what I think everyone in this group should do.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          —————————————————————————————
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          II. What the Community Must Do
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">1. Stake your $SIGN!</p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          The goal is to stake 50% circulating supply -&gt;{" "}
          <a href="https://stake.sign.global/" className="text-blue-600 hover:underline">
            https://stake.sign.global/
          </a>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Simple math: the more that’s staked, the less that floats. Less float = more squeeze. Shorters will fear us.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Staking is a sign of your faith in $SIGN, a sacrifice of liquidity for long-term belief. To reward that
          loyalty, we’re using unclaimed airdrops to create a reward pool with 10% fixed yield plus a special Orange
          Hand badge of honor. In the Orange Dynasty, we will make sure you stand out.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          —————————————————————————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">2. Study SIGN.</p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Make sure you understand this:
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Our vision is to reclaim money, freedom, and integrity for all humans.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          ———————————————————————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We’re a team of tech experts and community fanatics, building the best blockchain infrastructure and
          applications for futuristic nation-states and rising communities. Meet the team here:{" "}
          <a href="https://x.com/sign/status/1924174246810423702?s=46" className="text-blue-600 hover:underline">
            https://x.com/sign/status/1924174246810423702?s=46
          </a>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          —————————————————————————————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Sign started 4 years ago, backed by $40M in funding from top players like Sequoia Capital, CZ, and Circle.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We’re post-revenue, the runway lasts forever. We’re not here to sell tokens, we’re here to go big.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          ———————————————————————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          3. Join Orange Dynasty.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We started Orange Dynasty to imagine a global society bound by ideas, not borders. The upcoming community app
          is our townhall:{" "}
          <a href="https://x.com/ethsign/status/1945834242623361228?s=46" className="text-blue-600 hover:underline">
            https://x.com/ethsign/status/1945834242623361228?s=46
          </a>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          The cultural engine. A channel for democratizing best services and assets. The frontline of the memetic war.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          ———————————————————————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">4. Recruit 3 frens.</p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">Not shill. Recruit.</p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Bring them in for the vision, the culture, the upside. We’ve designed a special badge of honor, Orange in My
          Veins, to recognize those who recruit for Orange Dynasty, who build their own cabal, their own clan within the
          movement.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Belief scales through orange-pilled people.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          ———————————————————————————-
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          III. What the Core Team Must Do
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">1. Lead and expand.</p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Just like a DJ controls the rhythm of the club, the core team leads the community through the market. We’re in
          a war against every altcoin for liquidity and attention.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          The core team’s role is to deliver clear messages, strong signals to the community and to align incentives
          with every partner helping us reach our mission.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We will use technology and connections to penetrate every capital market — crypto or stock, retail or
          institutional.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We will build communities across Asia, Europe, and North America, in every language.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          2. Build real products.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Real products are defined by two things: revenue or organic growth.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          The core team must stay focused on market research and solving real problems. We’ve already built many, and we
          will build more.{" "}
          <a href="https://x.com/tokentable/status/1930459761864257837?s=46" className="text-blue-600 hover:underline">
            https://x.com/tokentable/status/1930459761864257837?s=46
          </a>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          ————————————————————————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">3. Self sustain.</p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          The core team (dev company) should generate enough revenue to be self-sustaining, without relying on
          Foundation funding. This ensures that the Foundation’s token allocation can be reserved solely for recruiting
          top talent and long-term contributors.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          4. Create strong content to win attention.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Attention and recognition is all we need.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          I have to admit, we’ve been heads down building, and haven’t spent enough time on content. A lot of exciting
          and important messages have gone out as just plain text tweets.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          I realized video is the most powerful language on the internet now. People want to see us, see the product,
          and feel the vibe.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We’re now hiring a Chief Content Officer.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          If you understand what we’re building and think you’re the right fit, DM me.
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          IV. The Final Truth
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Value is artificial. Nvidia is worth $4T, but that doesn’t mean it owns $4T worth of cows, gold, or real
          estate. It means people believe in the mission, in the upside.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          __________________________________—————————
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          With $SIGN, we have the rarest combo:
        </p>
        <ul className="list-disc list-inside font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <li>real business</li>
          <li>widely listed token</li>
          <li>fanatical, global community</li>
        </ul>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          We don’t need to wait for the market to tell us what we’re worth. We decide. Together.
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <em>Credit: The article was originally published on X and written by Xin(Shin)Yan</em>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Twitter handle:{" "}
          <a href="https://x.com/realyanxin" className="text-blue-600 hover:underline">
            @realyanxin
          </a>
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "SignPass Project Update: Residency, NFT Access, and Orange Dynasty Integration",
    summary:
      "In a newly released update, the team behind SignPass has shared important developments regarding the project’s direction, NFT availability, residency offerings, and upcoming integrations into the growing Orange Dynasty ecosystem.",
    writer: "Sign News Desk",
    image: "/SOB2.jpeg",
    type: "image",
    category: "Blockchain",
    date: "2025-07-19",
    fullContent: (
      <>
        <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
          SignPass Project Update: Residency, NFT Access, and Orange Dynasty Integration
        </h2>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <strong>Published: July 19, 2025</strong>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <em>Sign News Desk</em>, In a newly released update, the team behind SignPass has shared important
          developments regarding the project’s direction, NFT availability, residency offerings, and upcoming
          integrations into the growing Orange Dynasty ecosystem.
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          Minting Paused for SignPass NFTs
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Effective immediately, minting of new SignPass NFTs has been paused. This means no new SignPass NFTs can be
          purchased or created at this time. The team did not provide a date for resumption but emphasized the
          importance of regulatory alignment and system upgrades.
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          Residency & Physical Certificates
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Holders of the SignPass NFT are still eligible for residency in Sierra Leone, which includes both an onchain
          certificate and a physical document. However, the issuance of new physical IDs is temporarily on hold as the
          government finalizes national standards for residency card issuance.
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          Orange Dynasty: Exclusive Access for SignPass Holders
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          In a strategic move, all current SignPass NFT holders will be granted priority access to the Orange Dynasty
          app, including internal testing phases and upcoming reward-based features. To join the waitlist, holders are
          encouraged to visit{" "}
          <a href="https://orange.sign.global" className="text-blue-600 hover:underline">
            orange.sign.global
          </a>{" "}
          and verify their eligibility by submitting their wallet address and indicating their NFT ownership.
        </p>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          Crypto Card Update
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          As part of ongoing platform evolution, the team is exploring the integration of crypto card services into the
          Orange Dynasty app. For those already using the Fiat24 crypto card:
        </p>
        <ul className="list-disc list-inside font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <li>No new cards will be issued going forward</li>
          <li>Current users may continue using their cards without interruption</li>
          <li>Transaction fee rebates previously available to SignPass users will be discontinued.</li>
        </ul>
        <h3 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-lg sm:text-xl md:text-2xl">
          Continued Commitment
        </h3>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          The Sign team expressed deep gratitude to the community, stating:
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <em>
            “We appreciate your continued support and trust. As we enter the next phase of development, we remain
            committed to transparency and delivering long-term value.”
          </em>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <strong>Source: SignPass</strong>
        </p>
        <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          <em>Reported by: JUST_Hemmy (Sign caster)</em> for Sign news and entertainment.
        </p>
      </>
    ),
  },
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
  // ... (the rest of the newsData array remains unchanged)
  {
    id: 1,
    title: "Episode 2: The Flat Tire",
    summary:
      "Kelechi's journey continues as a simple act of kindness leads to an unexpected opportunity that could change everything.",
    writer: "Proftbright",
    image: "/Just1.jpeg",
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
];

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
