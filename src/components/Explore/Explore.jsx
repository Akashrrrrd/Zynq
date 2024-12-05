import React, { useState } from "react";
import "./Explore.css";
import profile_1 from "./../../assets/profile_1.png";
import profile_2 from "./../../assets/profile_2.png";
import profile_3 from "./../../assets/profile_3.png";
import profile_4 from "./../../assets/profile_4.png";
import profile_5 from "./../../assets/profile_5.png";
import profile_6 from "./../../assets/profile_6.png";

const Explore = () => {
  const [followedUsers, setFollowedUsers] = useState(new Set());

  const trendingTopics = [
    "Tech Innovation",
    "Fitness Goals",
    "AI Revolution",
    "Travel Diaries",
    "Crypto Buzz",
    "Foodie Life",
    "Digital Marketing",
    "Eco Friendly",
    "Startup Journey",
    "Gaming Vibes",
  ];

  const topFollowers = [
    {
      id: 1,
      name: "Sophia Brown",
      username: "@sophiab",
      profilePic: profile_1,
      bio: "AI Specialist | Tech Enthusiast",
      followers: 37400,
    },
    {
      id: 2,
      name: "Liam Johnson",
      username: "@liamjohnson",
      profilePic: profile_2,
      bio: "Travel Blogger | Adventure Seeker",
      followers: 29800,
    },
    {
      id: 3,
      name: "Ava Garcia",
      username: "@avag",
      profilePic: profile_3,
      bio: "Fashion Influencer | Designer",
      followers: 41200,
    },
    {
      id: 4,
      name: "Noah Wilson",
      username: "@noahw",
      profilePic: profile_4,
      bio: "Crypto Trader | Blockchain Advocate",
      followers: 33500,
    },
    {
      id: 5,
      name: "Mia Taylor",
      username: "@miataylor",
      profilePic: profile_5,
      bio: "Fitness Trainer | Health Coach",
      followers: 28900,
    },
    {
      id: 6,
      name: "James Carter",
      username: "@jcarter",
      profilePic: profile_6,
      bio: "Photographer | Wildlife Enthusiast",
      followers: 52300,
    },
  ];

  const handleFollowToggle = (userId) => {
    setFollowedUsers((prevFollowed) => {
      const newFollowed = new Set(prevFollowed);
      if (newFollowed.has(userId)) {
        newFollowed.delete(userId);
      } else {
        newFollowed.add(userId);
      }
      return newFollowed;
    });
  };

  return (
    <div className="explore-container">
      <section className="trending-section">
        <h2 className="section-title">Trending Topics</h2>
        <div className="trending-grid">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="trending-chip"
              aria-label={`Explore ${topic} topic`}
            >
              #{topic.replace(/\s+/g, "")}
            </button>
          ))}
        </div>
      </section>

      <section className="followers-section">
        <h2 className="section-title">Top Followers</h2>
        <div className="followers-grid">
          {topFollowers.map((follower) => (
            <div
              key={follower.id}
              className="follower-card"
              aria-label={`Profile of ${follower.name}`}
            >
              <div className="follower-avatar-wrapper">
                <img
                  src={follower.profilePic}
                  alt={follower.name}
                  className="follower-avatar"
                  loading="lazy"
                />
                <span className="follower-stats">
                  {(follower.followers / 1000).toFixed(1)}K
                </span>
              </div>

              <div className="follower-details">
                <div className="follower-header">
                  <h3 className="follower-name">{follower.name}</h3>
                  <span className="follower-username">{follower.username}</span>
                </div>
                <p className="follower-bio">{follower.bio}</p>
                <button
                  className={`follow-button ${
                    followedUsers.has(follower.id) ? "followed" : ""
                  }`}
                  onClick={() => handleFollowToggle(follower.id)}
                  aria-pressed={followedUsers.has(follower.id)}
                >
                  {followedUsers.has(follower.id) ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
