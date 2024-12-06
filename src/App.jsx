import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Explore from "./components/Explore/Explore";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import Shared from "./components/Shared/Shared";
import AI from "./components/AI/AI";
import Diary from "./components/Diary/Diary";
import Community from "./components/Community/Community";
import JoinCom from "./pages/JoinCom/JoinCom";
import comm_1 from './assets/comm_1.png';
import comm_2 from './assets/comm_2.png';
import comm_3 from './assets/comm_3.png';
import comm_4 from './assets/comm_4.png';
import comm_5 from './assets/comm_5.png';
import comm_6 from './assets/comm_6.png';
import comm_7 from './assets/comm_7.png';
import comm_8 from './assets/comm_8.png';
import comm_9 from './assets/comm_9.png';
import comm_10 from './assets/comm_10.png';
import comm_11 from './assets/comm_11.png';
import comm_12 from './assets/comm_12.png';
import comm_13 from './assets/comm_13.png';
import ComRoom from "./pages/ComRoom/ComRoom";


const App = () => {
  const communityData = [
    // Collaboration Category
    {
      id: 1,
      name: "Climate Solutions",
      members: 5420,
      focus: "Environmental Innovation",
      category: "collaboration",
      description:
        "Climate Solutions is a global community focused on developing cutting-edge strategies to tackle the climate crisis. By fostering collaborations among scientists, engineers, and environmental activists, we aim to create sustainable solutions that reduce carbon emissions, promote renewable energy, and protect natural ecosystems. Join us as we work towards a greener planet, share resources, and collaborate on innovative projects designed to combat global warming and its impact on vulnerable communities.",
      socialMedia: {
        twitter: "@climate_solutions",
        facebook: "/climatesolutions",
        instagram: "/climatesolutions",
        linkedin: "/company/climatesolutions",
      },
      media: {
        image: comm_1, // Sample image link
        video: "https://www.youtube.com/watch?v=examplevideo", // Sample video link
      },
    },
    {
      id: 2,
      name: "AI for Accessibility",
      members: 3680,
      focus: "Technology for Inclusion",
      category: "collaboration",
      description:
        "AI for Accessibility is committed to utilizing artificial intelligence to create a more inclusive world for individuals with disabilities. Through innovative technologies such as voice recognition, AI-powered assistive devices, and adaptive learning systems, we aim to bridge the accessibility gap in education, employment, and daily living. This community provides a platform for AI researchers, developers, and accessibility advocates to collaborate on projects that enhance the quality of life for those with physical and cognitive challenges.",
      socialMedia: {
        twitter: "@aiaccessibility",
        facebook: "/aiforaccessibility",
        instagram: "/aiforaccessibility",
        linkedin: "/company/aiforaccessibility",
      },
      media: {
        image: comm_2, // Sample image link
        video: "https://www.youtube.com/watch?v=ai_video", // Sample video link
      },
    },
    {
      id: 3,
      name: "Energy Revolutionists",
      members: 3780,
      focus: "Renewable Energy Solutions",
      category: "collaboration",
      description:
        "Energy Revolutionists is a community of passionate individuals and organizations working toward the widespread adoption of renewable energy technologies. By focusing on solar, wind, hydropower, and sustainable storage solutions, we aim to revolutionize the global energy sector. Members collaborate on research, policy advocacy, and real-world implementation of green technologies, striving for a future where clean energy powers the world, mitigates climate change, and drives economic development in underserved regions.",
      socialMedia: {
        twitter: "@energyrev",
        facebook: "/energyrev",
        instagram: "/energyrev",
        linkedin: "/company/energyrev",
      },
      media: {
        image: comm_3,
        video: "https://www.youtube.com/watch?v=energy_video",
      },
    },
    {
      id: 4,
      name: "EdTech Innovators",
      members: 4120,
      focus: "Educational Technology",
      category: "collaboration",
      description:
        "EdTech Innovators is dedicated to transforming the education sector through technology. Our community is a hub for educators, technologists, and entrepreneurs who are passionate about creating educational tools that enhance learning experiences. Whether it's through AI-driven personalized learning, gamification, or virtual classrooms, we aim to break down traditional barriers to education, making learning more accessible, engaging, and impactful for students of all ages across the globe.",
      socialMedia: {
        twitter: "@edtechinnovators",
        facebook: "/edtechinnovators",
        instagram: "/edtechinnovators",
        linkedin: "/company/edtechinnovators",
      },
      media: {
        image: comm_4,
        video: "https://www.youtube.com/watch?v=edtech_video",
      },
    },

    // Impact Category
    {
      id: 5,
      name: "Health Tech Pioneers",
      members: 3210,
      focus: "Medical Technology",
      category: "impact",
      description:
        "Health Tech Pioneers is a vibrant community of innovators striving to redefine healthcare using advanced technology. We focus on developing cutting-edge tools, devices, and platforms that improve diagnostics, treatment outcomes, and overall patient care. Through collaboration with healthcare professionals, researchers, and technologists, we aim to address pressing challenges in global healthcare systems, such as accessibility, affordability, and quality of care, while making healthcare more patient-centric and efficient.",
      socialMedia: {
        twitter: "@healthtechpioneers",
        facebook: "/healthtechpioneers",
        instagram: "/healthtechpioneers",
        linkedin: "/company/healthtechpioneers",
      },
      media: {
        image: comm_5,
        video: "https://www.youtube.com/watch?v=health_video",
      },
    },
    {
      id: 6,
      name: "Clean Water Alliance",
      members: 2750,
      focus: "Access to Clean Water",
      category: "impact",
      description:
        "The Clean Water Alliance is on a mission to ensure that everyone, regardless of location or economic status, has access to clean and safe drinking water. This community brings together advocates, engineers, environmentalists, and policy-makers to collaborate on water purification technologies, infrastructure improvements, and water conservation practices. We work on projects that aim to reduce waterborne diseases, improve sanitation, and protect freshwater ecosystems, ultimately improving health and quality of life worldwide.",
      socialMedia: {
        twitter: "@cleanwateralliance",
        facebook: "/cleanwateralliance",
        instagram: "/cleanwateralliance",
        linkedin: "/company/cleanwateralliance",
      },
      media: {
        image: comm_6,
        video: "https://www.youtube.com/watch?v=cleanwater_video",
      },
    },
    {
      id: 7,
      name: "Zero Hunger Initiative",
      members: 4900,
      focus: "Global Food Security",
      category: "impact",
      description:
        "Zero Hunger Initiative is dedicated to eliminating global hunger through sustainable agricultural practices, innovative food distribution systems, and nutrition education. Our community is focused on building resilient food systems that ensure everyone, everywhere, has access to sufficient and nutritious food. We collaborate with farmers, governments, NGOs, and technology companies to develop solutions that reduce food waste, increase food production efficiency, and tackle the root causes of hunger and malnutrition.",
      socialMedia: {
        twitter: "@zerohungerinitiative",
        facebook: "/zerohungerinitiative",
        instagram: "/zerohungerinitiative",
        linkedin: "/company/zerohungerinitiative",
      },
      media: {
        image: comm_7,
        video: "https://www.youtube.com/watch?v=zerohunger_video",
      },
    },
    {
      id: 8,
      name: "Mental Wellness Advocates",
      members: 3120,
      focus: "Psychological Support",
      category: "impact",
      description:
        "Mental Wellness Advocates is a community committed to raising awareness about mental health and promoting wellness through education, advocacy, and support. We believe in the power of a healthy mind as the foundation of overall well-being, and our mission is to reduce the stigma surrounding mental health issues while providing access to resources and self-care strategies. Our initiatives include mental health workshops, peer support networks, and collaborations with mental health professionals to improve mental health care services globally.",
      socialMedia: {
        twitter: "@mentalwellness",
        facebook: "/mentalwellnessadvocates",
        instagram: "/mentalwellnessadvocates",
        linkedin: "/company/mentalwellnessadvocates",
      },
      media: {
        image: comm_8,
        video: "https://www.youtube.com/watch?v=mentalwellness_video",
      },
    },

    // Funding Category
    {
      id: 9,
      name: "Blockchain for Good",
      members: 2890,
      focus: "Social Impact",
      category: "funding",
      description:
        "Blockchain for Good is a community of blockchain enthusiasts, developers, and philanthropists who are using blockchain technology to create positive social impact. We focus on projects that apply blockchain for transparency, security, and decentralization to solve critical social issues such as financial inclusion, identity management, and supply chain transparency. Our goal is to democratize access to resources, empower marginalized communities, and enhance global trust through the decentralized nature of blockchain.",
      socialMedia: {
        twitter: "@blockchainforgood",
        facebook: "/blockchainforgood",
        instagram: "/blockchainforgood",
        linkedin: "/company/blockchainforgood",
      },
      media: {
        image: comm_9,
        video: "https://www.youtube.com/watch?v=blockchain_video",
      },
    },
    {
      id: 10,
      name: "Circular Economy Group",
      members: 2400,
      focus: "Sustainable Business Models",
      category: "funding",
      description:
        "The Circular Economy Group is dedicated to promoting sustainable and regenerative business practices that reduce waste, conserve resources, and create economic value. We advocate for the transition from a linear economy to a circular one, where products are designed for reuse, recycling, and minimal environmental impact. By connecting businesses, governments, and entrepreneurs, we work to accelerate the adoption of circular practices and help companies transition to sustainable models that align with long-term environmental goals.",
      socialMedia: {
        twitter: "@circulareconomygroup",
        facebook: "/circulareconomygroup",
        instagram: "/circulareconomygroup",
        linkedin: "/company/circulareconomygroup",
      },
      media: {
        image: comm_10,
        video: "https://www.youtube.com/watch?v=circular_video",
      },
    },

    // Innovation Category
    {
      id: 11,
      name: "Smart Cities Pioneers",
      members: 4400,
      focus: "Urban Innovation",
      category: "innovation",
      description:
        "Smart Cities Pioneers is a forward-thinking community focused on developing innovative solutions for the cities of tomorrow. We explore the intersection of technology, sustainability, and urban design to create cities that are smarter, greener, and more livable. Through collaboration with urban planners, data scientists, and local governments, we work on projects that improve urban mobility, reduce energy consumption, enhance public safety, and increase citizen engagement in governance and city planning.",
      socialMedia: {
        twitter: "@smartcitiespioneers",
        facebook: "/smartcitiespioneers",
        instagram: "/smartcitiespioneers",
        linkedin: "/company/smartcitiespioneers",
      },
      media: {
        image: comm_11,
        video: "https://www.youtube.com/watch?v=smartcities_video",
      },
    },
    {
      id: 12,
      name: "Quantum Computing for Good",
      members: 2800,
      focus: "Harnessing Quantum Technology for Social Impact",
      category: "innovation",
      description:
        "Quantum Computing for Good is a trailblazing community dedicated to leveraging quantum computing to solve some of the world's most pressing challenges. Our members are exploring how quantum technologies can be applied to fields like climate change, healthcare, and resource management to drive global social and environmental impact. We are committed to researching and developing quantum algorithms and applications that can address complex problems at a scale and speed beyond what classical computers can achieve.",
      socialMedia: {
        twitter: "@quantumforgood",
        facebook: "/quantumforgood",
        instagram: "/quantumforgood",
        linkedin: "/company/quantumforgood",
      },
      media: {
        image: comm_12,
        video: "https://www.youtube.com/watch?v=quantum_video",
      },
    },
    {
      id: 13,
      name: "Clean Energy Innovators",
      members: 3100,
      focus: "Next-Gen Energy Solutions",
      category: "innovation",
      description:
        "Clean Energy Innovators is a community of forward-thinking innovators committed to advancing clean energy technologies for a sustainable and resilient future. Our members collaborate on groundbreaking projects in solar, wind, and next-gen energy storage solutions that aim to reduce global dependence on fossil fuels and create a more sustainable energy landscape. We focus on bringing scalable and affordable clean energy solutions to markets worldwide, while addressing climate change and energy equity challenges.",
      socialMedia: {
        twitter: "@cleanenergyinnovators",
        facebook: "/cleanenergyinnovators",
        instagram: "/cleanenergyinnovators",
        linkedin: "/company/cleanenergyinnovators",
      },
      media: {
        image: comm_13,
        video: "https://www.youtube.com/watch?v=cleanenergy_video",
      },
    },
  ];

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/diary" element={<Diary />} />
          <Route
            path="/community"
            element={<Community communityData={communityData} />}
          />
          <Route
            path="/community/:communityId"
            element={<JoinCom communityData={communityData} />}
          />
          <Route path="/comroom" element={<ComRoom/>}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
