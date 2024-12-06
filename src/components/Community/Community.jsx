import React, { useState, useEffect } from "react";
import {
  Users,
  TrendingUp,
  Zap,
  Check,
  Search,
  Filter,
  Globe,
} from "lucide-react";
import "./Community.css";

const Community = () => {
  const [activeSection, setActiveSection] = useState("collaboration");
  const [communities, setCommunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState([]);

  const communityData = [
    {
      id: 1,
      name: "Climate Solutions",
      members: 5420,
      focus: "Environmental Innovation",
      category: "collaboration",
    },
    {
      id: 2,
      name: "Health Tech Pioneers",
      members: 3210,
      focus: "Medical Technology",
      category: "impact",
    },
    {
      id: 3,
      name: "Blockchain for Good",
      members: 2890,
      focus: "Social Impact",
      category: "funding",
    },
    {
      id: 4,
      name: "EdTech Innovators",
      members: 4120,
      focus: "Educational Technology",
      category: "collaboration",
    },
    {
      id: 5,
      name: "Clean Water Alliance",
      members: 2750,
      focus: "Access to Clean Water",
      category: "impact",
    },
    {
      id: 6,
      name: "AI for Accessibility",
      members: 3680,
      focus: "Technology for Inclusion",
      category: "collaboration",
    },
    {
      id: 7,
      name: "Zero Hunger Initiative",
      members: 4900,
      focus: "Global Food Security",
      category: "impact",
    },
    {
      id: 8,
      name: "Circular Economy Group",
      members: 2400,
      focus: "Sustainable Business Models",
      category: "funding",
    },
    {
      id: 9,
      name: "Energy Revolutionists",
      members: 3780,
      focus: "Renewable Energy Solutions",
      category: "collaboration",
    },
    {
      id: 10,
      name: "Mental Wellness Advocates",
      members: 3120,
      focus: "Psychological Support",
      category: "impact",
    },
  ];

  useEffect(() => {
    setCommunities(communityData);
  }, []);

  useEffect(() => {
    const filtered = communities.filter(
      (community) =>
        community.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        community.category === activeSection
    );
    setFilteredCommunities(filtered);
  }, [searchTerm, activeSection, communities]);

  const sections = {
    collaboration: {
      icon: <Users className="section-icon collaboration-icon" />,
      title: "AI-Powered Collaboration",
      description: "Intelligent matching of global experts and innovators.",
    },
    impact: {
      icon: <TrendingUp className="section-icon impact-icon" />,
      title: "Measurable Impact",
      description:
        "Transparent tracking of project contributions and outcomes.",
    },
    funding: {
      icon: <Zap className="section-icon funding-icon" />,
      title: "Decentralized Funding",
      description: "Secure, blockchain-enabled project support mechanisms.",
    },
  };

  return (
    <div className="community-container">
      <header className="community-header">
        <h1>Global Innovation Networks</h1>
        <p>
          Connect, collaborate, and solve complex challenges with purpose-driven
          communities.
        </p>
      </header>

      <div className="community-navigation">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`nav-section ${activeSection === key ? "active" : ""}`}
          >
            {section.icon}
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      <div className="community-search">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder={`Search ${sections[activeSection].title} Communities`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Filter className="filter-icon" />
        </div>
      </div>

      <div className="community-list">
        {filteredCommunities.map((community) => (
          <div key={community.id} className="community-card">
            <div className="community-details">
              <h3>{community.name}</h3>
              <p>{community.focus}</p>
              <div className="community-stats">
                <span>
                  <Users size={16} /> {community.members} Members
                </span>
                <button className="join-btn">
                  <Check size={16} /> Join Community
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="global-cta">
        <Globe className="global-icon" />
        <h2>Transform Global Challenges</h2>
        <p>Your innovation can make a difference. Start collaborating today.</p>
        <button className="primary-action">Explore Communities</button>
      </div>
    </div>
  );
};

export default Community;
