"use client"
import { useState, useEffect, useRef } from "react"
import { Clock, Camera, ArrowRight, Heart, Play, ImageIcon, FileText, X, Volume2, VolumeX } from "lucide-react"
import Navbar from "../landing/Navbar";
const Article = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
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
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
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
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
  })

  const [mutedVideos, setMutedVideos] = useState({})
  const videoRefs = useRef({})

  // Add after the state declarations
  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
    large: 1400,
  }

  const isMobile = windowSize.width <= BREAKPOINTS.mobile
  const isTablet = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.tablet
  const isDesktop = windowSize.width > BREAKPOINTS.mobile && windowSize.width <= BREAKPOINTS.desktop
  const isLarge = windowSize.width > BREAKPOINTS.desktop

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize all videos as muted
  useEffect(() => {
    const initialMutedState = {}
    newsData.forEach((item) => {
      if (item.type === "video") {
        initialMutedState[item.id] = true
      }
    })
    setMutedVideos(initialMutedState)
  }, [])

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

  const toggleVideoMute = (videoId) => {
    const video = videoRefs.current[videoId]
    if (video) {
      const newMutedState = !mutedVideos[videoId]
      video.muted = newMutedState
      setMutedVideos((prev) => ({
        ...prev,
        [videoId]: newMutedState,
      }))
    }
  }

  const newsData = [
    {
      id: 1,
      title: "Episode 6: Back to the Cyber Café",
      summary:
        "It had been almost a year since Kelechi last stepped foot into the café. The walls were still yellowed by heat. The fans still made the same tired noise. And the boy in the back corner—the same position Kelechi once sat in—was hunched over, battling with a slow-loading page.",
      writer: "Sign News Desk",
      image: "/PT1.jpeg",
      type: "image",
      category: "Story",
      date: "2025-08-01",
      fullContent: (
        <>
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Episode 6: Back to the Cyber Café
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            It had been almost a year since Kelechi last stepped foot into the café. The walls were still yellowed by
            heat. The fans still made the same tired noise. And the boy in the back corner—the same position Kelechi
            once sat in—was hunched over, battling with a slow-loading page.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi walked in quietly, holding two things: a new wireless mouse, and a folded flyer. He greeted the café
            attendant like an old friend.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            "Still saving lives with WiFi, I see," he joked.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Then he walked to the boy. "You learning design?" he asked.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The boy nodded without looking up. "Yes, sir. I just dey teach myself."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi placed the mouse beside him and the flyer on the desk. "Free weekend classes," the flyer read.
            "Design, branding, mindset. For beginners. No payment. Just commitment."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The boy stared. "Why?" he asked.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi paused. "Because someone once helped me… and I swore I'd never keep the ladder to myself."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Word spread fast. Every Saturday, the back room of his small office filled with dreamers: Girls who couldn't
            afford design school. Boys laughed at for chasing 'soft' skills. Men and women who only needed a chance.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi gave them tools—but more than that, he gave them belief. "You're not small," he told them. "You're
            just not seen yet."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            And as he taught, he remembered the heat. The hunger. The ₦500 trousers. But now, he wore gratitude like a
            badge.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Let them laugh. He had made it back to the café—but this time, with keys.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Episode 5: The Ones Who Laughed",
      summary:
        "It started slowly—the whispers. 'Is that not Kelechi? The one that used to iron one trouser like it was Gucci?' 'I heard Madam Fola uses him now.' The same boys who once joked about his cyber café hustle now stood at his shop window, pretending not to look in.",
      writer: "Sign News Desk",
      image: "/PT2.jpeg",
      type: "image",
      category: "Story",
      date: "2025-07-31",
      fullContent: (
        <>
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Episode 5: The Ones Who Laughed
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            It started slowly—the whispers.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            "Is that not Kelechi? The one that used to iron one trouser like it was Gucci?"
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            "I heard Madam Fola uses him now."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The same boys who once joked about his cyber café hustle now stood at his shop window, pretending not to
            look in. He had rented a small corner space—white walls, simple desk, and a bold sign:{" "}
            <strong>KEL DESIGNS — CREATIVITY WITH DIGNITY</strong>.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            One of them, Oba, finally walked in.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            "Guy, abeg. I get business card design. I no get full money now, but you fit run am for me?"
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi looked at him. This was the same Oba who once laughed the loudest. The same one who said, "Designer
            wey never chop."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            But Kelechi didn't flinch. "Send me the details," he said calmly.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            "No vex, bro," Oba added, voice lower now. "I dey reason you. You carry grace."
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi smiled. Not because he wanted revenge. But because he'd grown past the need for it. He didn't rise
            to prove them wrong. He rose because he believed he was right.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">And now…</p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The ones who laughed were telling the story. "That boy? We knew him! We saw him from the beginning!"
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            But what they didn't see—what they never could—was the night without data, the trousers ironed in silence,
            the hunger disguised as patience.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Let them talk. The story is writing itself.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Open Conspiracy: How to Send $SIGN to $1",
      summary:
        "Welcome to the open conspiracy. If you're holding $SIGN, whether it's spot, staked, or you hold a long position on perp, this article is for you. This isn't financial advice. This is memetic warfare. A battle for consensus. A mission to make $SIGN = $1.",
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
            Welcome to the open conspiracy. If you're holding $SIGN, whether it's spot, staked, or you hold a long
            position on perp, this article is for you. This isn't financial advice. This is memetic warfare. A battle
            for consensus. A mission to make $SIGN = $1.
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
            It's counterintuitive, but the price of things you can't directly use isn't determined by fundamentals. It's
            shaped by belief, by narrative, by collective conviction.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            $SIGN, like everything else — from USD to BTC to Nvidia's $4T valuation — is worth what we believe it's
            worth. That number? It doesn't hold any intrinsic meaning anymore. $4T could theoretically buy 16 years of
            global rice production… but deep down, we all know it never will.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "SignPass Project Update: Residency, NFT Access, and Orange Dynasty Integration",
      summary:
        "In a newly released update, the team behind SignPass has shared important developments regarding the project's direction, NFT availability, residency offerings, and upcoming integrations into the growing Orange Dynasty ecosystem.",
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
            developments regarding the project's direction, NFT availability, residency offerings, and upcoming
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
        </>
      ),
    },
    {
      id: 5,
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
            On Wednesday, July 16th, the Sign community was treated to an exciting update during a Twitter Space hosted
            by the Sign Intern, who revealed a detailed look into the highly anticipated Sign App and its ongoing
            development.
          </p>
        </>
      ),
    },
    {
      id: 6,
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
            In a notable advancement that highlights its growing influence in the Web3 space,{" "}
            <strong>TokenTable</strong>, one of the featured ecosystems of <strong>Sign</strong> has once again
            demonstrated its commitment to transparency and community empowerment.
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Sign Protocol Surpasses 8 Million Attestations as New Developments Unfold
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | July 15, 2025</strong>
          </p>
          <div className="mb-6 text-center bg-gray-100 p-4 rounded-lg">
            <img
              src="/Just2.jpeg"
              alt="Sign Protocol Surpasses 8 Million Attestations"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
              onError={() => console.error("Failed to load image: /Just2.jpeg")}
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            In a major milestone for decentralized identity systems, Sign Protocol has officially surpassed 8 million
            attestations, further solidifying its position as a leader in the onchain identity space.
          </p>
        </>
      ),
    },
    {
      id: 8,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Episode 2: The Flat Tire
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By @proftbright | July 10, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/Bright1.jpeg"
              alt="Episode 2: The Flat Tire"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            The sun was harsh that afternoon, painting the cracked road in heat waves. Kelechi had just finished another
            three-hour stretch at the cyber café, eyes sore from the blue light, heart sore from hunger. But his trouser
            was still sharply ironed, like a soldier's uniform. He walked tall, sweat on his back, hope in his chest.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Then he saw her — a woman pacing beside a black SUV with a flat tire.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Everyone watched but no one moved.
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Kelechi hesitated for a second, then stepped forward.
          </p>
        </>
      ),
    },
    {
      id: 9,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Sign CEO Xin Yan Shares Vision and Philosophy in Comprehensive AMA Discussion
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | July 8, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/Farm1.jpeg"
              alt="Sign CEO AMA Discussion"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>Introduction</strong>
            <br />
            Mr. Xin Yan introduced himself as the co-founder and CEO of Sign, with experience in crypto investment since
            2017. Sign is a blockchain technology company with a strong community in the Philippines.
          </p>
        </>
      ),
    },
    {
      id: 10,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Deep Dive: Sign's Evolution from Token Distribution to National Infrastructure
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | July 5, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/Farm2.jpeg"
              alt="Sign Business Evolution"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>Business Focus: From Token Table to National Infrastructure</strong>
            <br />
            <strong>Products Overview:</strong>
            <br />• Token Table: Core income source involving token issuance and distribution
            <br />• Climb: Other token claim tools for projects
            <br />• National Infrastructure Services: An emerging, revenue-stable segment involving blockchain solutions
            for nation-level applications
          </p>
        </>
      ),
    },
    {
      id: 11,
      title: "Sign CEO Unveils Bold Vision for Blockchain Civilization at Danjo Capital AMA",
      summary: "Xin Yan shares Sign's roadmap for digital nation-building and blockchain infrastructure.",
      writer: "Just Hemmy",
      videoUrl: "/VID1.mp4",
      type: "video",
      category: "Blockchain",
      date: "2025-06-27",
      fullContent: (
        <>
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Sign CEO Unveils Bold Vision for Blockchain Civilization at Danjo Capital AMA
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | June 27, 2025</strong>
          </p>
          <div className="mb-6">
            <video
              controls
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
              }}
            >
              <source src="/VID1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            On Tuesday, June 27th, blockchain enthusiasts tuned in for a thought-provoking AMA hosted by Danjo Capital,
            where Xin Yan, Co-founder and CEO of Sign Crypto, shared his story, philosophy, and an ambitious roadmap for
            Sign's future.
          </p>
        </>
      ),
    },
    {
      id: 12,
      title: "Explaining TokenTable: A Powerful Tool for Simplifying Token Distribution in Web3",
      summary: "Johnny Sign breaks down how TokenTable streamlines token management for Web3 projects.",
      writer: "Johnny Sign",
      videoUrl: "/VID2.mp4",
      type: "video",
      category: "Blockchain",
      date: "2025-07-02",
      fullContent: (
        <>
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Explaining TokenTable: A Powerful Tool for Simplifying Token Distribution in Web3
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Johnny Sign | July 2, 2025</strong>
          </p>
          <div className="mb-6">
            <video
              controls
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
              }}
            >
              <source src="/VID2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            GM, Sign Fam!
            <br />
            Johnny Sign here again and today we're diving deep into one of the most important tools in the Sign
            ecosystem: TokenTable.
          </p>
        </>
      ),
    },
    {
      id: 13,
      title: "Sign CEO Xin Yan Discusses Digital Identity, Token Governance, and the Future of Web3 on Korean TV",
      summary: "Xin Yan highlights Sign's role in digital identity and token governance on Korean TV.",
      writer: "Just Hemmy",
      image: "/IMG3.jpeg",
      type: "image",
      category: "Blockchain",
      date: "2025-06-27",
      fullContent: (
        <>
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Sign CEO Xin Yan Discusses Digital Identity, Token Governance, and the Future of Web3 on Korean TV
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | June 27, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/IMG3.jpeg"
              alt="Sign CEO Xin Yan on Korean TV"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            In a groundbreaking television appearance on Korean national TV, Sign CEO Xin Yan shared insights into the
            future of digital identity and token governance, highlighting how blockchain technology is reshaping the way
            we think about digital sovereignty and Web3 infrastructure.
          </p>
        </>
      ),
    },
    {
      id: 14,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Weekly Story Episode by @proftbright - Episode 1: Ironed with Honour
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By @proftbright | June 1, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/IMG44.jpeg"
              alt="Ironed with Honour Story"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>Episode 1: Ironed with Honour</strong>
          </p>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            In a small town where everyone knew each other, there was a guy named Kelechi who owned only one pair of
            trousers — faded blue, worth maybe ₦500 (about $0.3125) at best — but every morning, he ironed them like
            they were designer.
          </p>
        </>
      ),
    },
    {
      id: 15,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Welcome to Sign News - Top Creators of the Week Spotlight
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Farmie, Your Sign Marites | June 1, 2025</strong>
          </p>
          <div className="mb-6">
            <video
              controls
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
              }}
            >
              <source src="/VID3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            Hey Sign community! It's June 1st, and we're kicking off the month with a bang!
          </p>
        </>
      ),
    },
    {
      id: 16,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Bybit Hosts 'Deep Dive into SIGN' Twitter Space, Showcasing EthSign's On-Chain Agreement Vision and $SIGN
            Token Potential
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | June 4, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/IMG5.jpeg"
              alt="Bybit Deep Dive into SIGN Twitter Space"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            On Wednesday, June 4th, Bybit hosted a live Space titled 'Deep Dive into Sign,' featuring Claire known to
            many as the 'Product Queen' offering valuable insights into the vision and purpose behind Sign.
          </p>
        </>
      ),
    },
    {
      id: 17,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Sign CEO Reveals Major Update: Sign App Public Test Launching Soon with Social, Gaming & KTV Features
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | June 23, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/IMG7.jpeg"
              alt="Sign App Public Test Launch"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            In a major announcement on Monday, June 23rd, Xin Yan, Co-founder and CEO of Sign Crypto, delivered an
            exciting update that has the community buzzing.
          </p>
        </>
      ),
    },
    {
      id: 18,
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
          <h2 className="font-['Roboto_Slab'] text-[#722F37] mb-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Sign CEO Xin Yan on Web3 Talk: 'We're Building the Digital Infrastructure Layer for Nations'
          </h2>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <strong>By Sign Team | June 20, 2025</strong>
          </p>
          <div className="mb-6 text-center">
            <img
              src="/IMG6.jpeg"
              alt="Sign CEO Xin Yan Web3 Talk"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-md mx-auto"
            />
          </div>
          <p className="font-['Open_Sans'] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
            In a new episode of Web3 Talk, Xin Yan, Co-founder and CEO of Sign Crypto, laid out a bold vision for the
            future of blockchain: not just powering communities and products—but underpinning national digital
            infrastructure.
          </p>
        </>
      ),
    },
  ]

  // Split news into latest (first 9) and past (rest)
  const latestNews = newsData.slice(0, 9)
  const pastNews = newsData.slice(9)

  // Responsive values

  const getFontSize = (large, desktop, tablet, mobile) => {
    if (isMobile) return mobile
    if (isTablet) return tablet
    if (isDesktop) return desktop
    return large
  }

  const getPadding = (desktop, mobile) => {
    return isMobile ? mobile : desktop
  }

  const getGridColumns = () => {
    if (isMobile) return "1fr"
    if (isTablet) return "repeat(2, 1fr)"
    if (windowSize.width >= 1400) return "repeat(5, 1fr)"
    if (windowSize.width >= 1200) return "repeat(4, 1fr)"
    return "repeat(3, 1fr)"
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Play size={isMobile ? 10 : 12} />
      case "image":
        return <ImageIcon size={isMobile ? 10 : 12} />
      default:
        return <FileText size={isMobile ? 10 : 12} />
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

  const NewsCard = ({ item }) => (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        backdropFilter: "blur(20px)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        animation: "fadeInUp 0.6s ease-out",
        height: isMobile ? "280px" : isTablet ? "300px" : "320px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(-8px)"
          e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 140, 66, 0.15)"
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = "translateY(0px)"
          e.currentTarget.style.boxShadow = "none"
        }
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: isMobile ? "100px" : isTablet ? "120px" : "140px",
          width: "100%",
        }}
      >
        {item.videoUrl && item.type === "video" ? (
          <div style={{ position: "relative" }}>
            <video
              ref={(el) => {
                if (el) {
                  videoRefs.current[item.id] = el
                  // Set initial muted state
                  el.muted = mutedVideos[item.id] !== false
                }
              }}
              autoPlay
              loop
              muted={mutedVideos[item.id] !== false}
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              poster={item.image || "/placeholder.svg?height=200&width=400"}
              onMouseEnter={(e) => {
                if (!isMobile) e.target.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                if (!isMobile) e.target.style.transform = "scale(1)"
              }}
            >
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Volume Control Button */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "40px",
                width: "28px",
                height: "28px",
                background: "rgba(0, 0, 0, 0.7)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
                zIndex: 10,
              }}
              onClick={(e) => {
                e.stopPropagation()
                toggleVideoMute(item.id)
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.background = "rgba(255, 140, 66, 0.8)"
                  e.target.style.transform = "scale(1.1)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.background = "rgba(0, 0, 0, 0.7)"
                  e.target.style.transform = "scale(1)"
                }
              }}
            >
              {mutedVideos[item.id] !== false ? (
                <VolumeX size={14} style={{ color: "#FFFFFF" }} />
              ) : (
                <Volume2 size={14} style={{ color: "#FFFFFF" }} />
              )}
            </div>
          </div>
        ) : (
          <img
            src={item.image || "/placeholder.svg?height=200&width=400"}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) e.target.style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              if (!isMobile) e.target.style.transform = "scale(1)"
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            background: getTypeColor(item.type),
            color: "#FFFFFF",
            padding: getPadding("3px 6px", "2px 4px"),
            borderRadius: "8px",
            fontSize: getFontSize("10px", "9px", "8px"),
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          {getTypeIcon(item.type)}
          {item.type.toUpperCase()}
        </div>

        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
            color: "#FFFFFF",
            padding: getPadding("3px 8px", "2px 6px"),
            borderRadius: "8px",
            fontSize: getFontSize("10px", "9px", "8px"),
            fontWeight: "600",
          }}
        >
          {item.category}
        </div>
      </div>

      <div style={{ padding: getPadding("12px", "10px"), flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
            <span
              style={{
                color: "#AAAAAA",
                fontSize: getFontSize("10px", "9px", "8px"),
              }}
            >
              {item.date}
            </span>
          </div>

          <h3
            style={{
              color: "#FFFFFF",
              fontSize: getFontSize("16px", "14px", "13px", "12px"),
              fontWeight: "bold",
              marginBottom: "4px",
              lineHeight: "1.2",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.title}
          </h3>

          {item.writer && (
            <p
              style={{
                color: "#CCCCCC",
                fontSize: getFontSize("10px", "9px", "8px"),
                marginBottom: "4px",
              }}
            >
              By {item.writer}
            </p>
          )}

          <p
            style={{
              color: "#CCCCCC",
              fontSize: getFontSize("12px", "11px", "10px"),
              marginBottom: "8px",
              lineHeight: "1.4",
              display: "-webkit-box",
              WebkitLineClamp: isMobile ? 2 : 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.summary}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <button
            style={{
              flex: 1,
              padding: getPadding("8px 12px", "6px 10px"),
              background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
              border: "none",
              borderRadius: "6px",
              color: "#FFFFFF",
              fontSize: getFontSize("12px", "11px", "10px"),
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleOpenModal(item)}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1.05)"
                e.target.style.boxShadow = "0 6px 15px rgba(255, 140, 66, 0.3)"
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = "scale(1)"
                e.target.style.boxShadow = "none"
              }
            }}
          >
            Read More
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              padding: "6px",
              background: "transparent",
              border: "none",
              color: liked[item.id] ? "#FF8C42" : "#AAAAAA",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onClick={() => toggleLike(item.id)}
          >
            <Heart size={isMobile ? 14 : 16} fill={liked[item.id] ? "currentColor" : "none"} />
            <span style={{ fontSize: getFontSize("10px", "9px", "8px") }}>{likes[item.id]}</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with top padding to account for fixed navbar */}
      <div
        style={{
          paddingTop: "100px", // Add space for fixed navbar
          padding: getPadding("100px 16px 40px 16px", "100px 12px 20px 12px"),
          background: "linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          width: "100vw",
          boxSizing: "border-box",
        }}
      >
        {/* Background Effects */}
        <div style={{ position: "absolute", inset: 0, opacity: isMobile ? 0.05 : 0.1 }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: isMobile ? "150px" : "250px",
              height: isMobile ? "150px" : "250px",
              background: "#722F37",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              width: isMobile ? "120px" : "200px",
              height: isMobile ? "120px" : "200px",
              background: "#FF8C42",
              borderRadius: "50%",
              filter: "blur(50px)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              width: isMobile ? "100px" : "150px",
              height: isMobile ? "100px" : "150px",
              background: "#FF8C42",
              borderRadius: "50%",
              filter: "blur(70px)",
            }}
          ></div>
        </div>

        <div
          style={{
            maxWidth: "100%",
            width: "100%",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            padding: getPadding("0 20px", "0 8px"),
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: getPadding("40px", "30px"),
              animation: "fadeInDown 0.8s ease-out",
            }}
          >
            <h1
              style={{
                fontSize: getFontSize("48px", "42px", "36px", "28px"),
                fontWeight: "bold",
                color: "#FFFFFF",
                marginBottom: "12px",
                lineHeight: "1.2",
              }}
            >
              Articles <span style={{ color: "#FF8C42" }}>Updates</span>
            </h1>
            <p
              style={{
                fontSize: getFontSize("16px", "14px", "12px"),
                color: "#CCCCCC",
                marginBottom: getPadding("30px", "20px"),
                lineHeight: "1.6",
                maxWidth: isMobile ? "100%" : "500px",
                margin: `0 auto ${getPadding("30px", "20px")} auto`,
                padding: isMobile ? "0 8px" : "0",
              }}
            >
              Stay updated with the latest developments, stories, and insights from the Sign ecosystem and blockchain
              world.
            </p>
          </div>

          {/* Latest News Section */}
          <div style={{ marginBottom: getPadding("60px", "40px") }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: getPadding("30px", "20px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Camera size={isMobile ? 18 : 20} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("32px", "26px", "22px", "18px"),
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Latest Articles
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("16px", "12px"),
                width: "100%",
                margin: "0 auto",
                padding: getPadding("0", "0 4px"),
              }}
            >
              {latestNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Past News Section */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: getPadding("30px", "20px"),
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Clock size={isMobile ? 18 : 20} style={{ color: "#FF8C42" }} />
              <h2
                style={{
                  fontSize: getFontSize("32px", "26px", "22px", "18px"),
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                Past Articles
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: getGridColumns(),
                gap: getPadding("16px", "12px"),
                width: "100%",
                margin: "0 auto",
                padding: getPadding("0", "0 4px"),
              }}
            >
              {pastNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            style={{
              textAlign: "center",
              marginTop: getPadding("60px", "40px"),
              padding: getPadding("40px 30px", "30px 20px"),
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(20px)",
              animation: "fadeInUp 0.8s ease-out",
              width: "100%",
              boxSizing: "border-box",
              margin: `${getPadding("60px", "40px")} auto 0 auto`,
            }}
          >
            <h3
              style={{
                fontSize: getFontSize("22px", "20px", "18px"),
                fontWeight: "bold",
                color: "#FFFFFF",
                marginBottom: "12px",
              }}
            >
              Stay Connected
            </h3>
            <p
              style={{
                color: "#CCCCCC",
                fontSize: getFontSize("14px", "13px", "12px"),
                marginBottom: getPadding("24px", "20px"),
                maxWidth: isMobile ? "100%" : "400px",
                margin: `0 auto ${getPadding("24px", "20px")} auto`,
                lineHeight: "1.6",
              }}
            >
              Follow us for the latest updates, breaking news, and exclusive content from the Sign community.
            </p>
            <button
              style={{
                padding: getPadding("12px 24px", "10px 20px"),
                background: "linear-gradient(135deg, #FF8C42 0%, #722F37 100%)",
                border: "none",
                borderRadius: "10px",
                color: "#FFFFFF",
                fontSize: getFontSize("14px", "13px", "12px"),
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                boxShadow: "0 6px 24px rgba(255, 140, 66, 0.25)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1.05)"
                  e.target.style.boxShadow = "0 8px 30px rgba(255, 140, 66, 0.35)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1)"
                  e.target.style.boxShadow = "0 6px 24px rgba(255, 140, 66, 0.25)"
                }
              }}
            >
              Join Community
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Modal */}
        {openModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={handleCloseModal}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: getPadding("40px", "20px"),
                maxWidth: "800px",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
                width: "100%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#722F37",
                  padding: "8px",
                }}
                onClick={handleCloseModal}
              >
                <X size={24} />
              </button>

              {selectedNews && (
                <div>
                  {selectedNews.fullContent || (
                    <div>
                      <h2 style={{ color: "#722F37", marginBottom: "16px" }}>{selectedNews.title}</h2>
                      <p style={{ lineHeight: "1.6", color: "#333" }}>{selectedNews.summary}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          /* Touch-friendly interactions for mobile */
          @media (max-width: 768px) {
            button:active {
              transform: scale(0.95) !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default Article
