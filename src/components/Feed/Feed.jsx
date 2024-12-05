import React, { useState } from "react";
import "./Feed.css";
import image_1 from './../../assets/image_1.png';
import image_2 from './../../assets/image_2.png';
import image_3 from './../../assets/image_3.png';
import image_4 from './../../assets/image_4.png';
import image_5 from './../../assets/image_5.png';
import image_6 from './../../assets/image_6.png';
import image_7 from './../../assets/image_7.png';
import image_8 from './../../assets/image_8.png';
import image_9 from './../../assets/image_9.png';
import image_10 from './../../assets/image_10.png';

const Feed = () => {
  // Expanded posts data with more realistic details
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "john_doe",
      fullName: "John Doe",
      profilePic: "/assets/profile1.jpg",
      content: "Exploring the beauty of nature! 🌿 #TravelDiaries",
      postImage: image_1,
      likes: 120,
      comments: 45,
      timestamp: "2 hours ago",
      location: "Yosemite National Park",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 2,
      username: "jane_smith",
      fullName: "Jane Smith",
      profilePic: "/assets/profile2.jpg",
      content: "Just had the best coffee of my life ☕ #CoffeeLover",
      postImage: image_2,
      likes: 230,
      comments: 30,
      timestamp: "5 hours ago",
      location: "Local Café, San Francisco",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 3,
      username: "alex_wanderer",
      fullName: "Alex Wanderer",
      profilePic: "/assets/profile3.jpg",
      content: "Caught this stunning sunset on my hike 🌄 #NatureLover",
      postImage: image_3,
      likes: 340,
      comments: 65,
      timestamp: "1 day ago",
      location: "Grand Canyon",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 4,
      username: "emily_artsy",
      fullName: "Emily Artsy",
      profilePic: "/assets/profile4.jpg",
      content: "Just finished my latest painting 🎨 #ArtIsLife",
      postImage: image_4,
      likes: 410,
      comments: 95,
      timestamp: "4 hours ago",
      location: "New York, NY",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 5,
      username: "mark_traveler",
      fullName: "Mark Traveler",
      profilePic: "/assets/profile5.jpg",
      content: "Who else loves road trips? 🚗💨 #TravelGoals",
      postImage: image_5,
      likes: 150,
      comments: 50,
      timestamp: "6 hours ago",
      location: "Pacific Coast Highway",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 6,
      username: "sophie_foodie",
      fullName: "Sophie Foodie",
      profilePic: "/assets/profile6.jpg",
      content: "This chocolate cake was a slice of heaven 🍰 #FoodiesUnite",
      postImage: image_6,
      likes: 290,
      comments: 72,
      timestamp: "3 hours ago",
      location: "Paris, France",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 7,
      username: "chris_coder",
      fullName: "Chris Coder",
      profilePic: "/assets/profile7.jpg",
      content: "Finally launched my new app! 🚀 #TechLife",
      postImage: image_7,
      likes: 500,
      comments: 120,
      timestamp: "8 hours ago",
      location: "Silicon Valley, CA",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 8,
      username: "linda_fitness",
      fullName: "Linda Fitness",
      profilePic: "/assets/profile8.jpg",
      content: "Morning yoga to start the day 🌅 #HealthGoals",
      postImage: image_8,
      likes: 320,
      comments: 88,
      timestamp: "10 hours ago",
      location: "Bali, Indonesia",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 9,
      username: "sam_gamer",
      fullName: "Sam Gamer",
      profilePic: "/assets/profile9.jpg",
      content: "Just hit the top rank in my favorite game 🎮🔥 #GamerLife",
      postImage: image_9,
      likes: 780,
      comments: 210,
      timestamp: "1 day ago",
      location: "Online",
      likedByUser: false,
      savedByUser: false,
    },
    {
      id: 10,
      username: "mia_books",
      fullName: "Mia Books",
      profilePic: "/assets/profile10.jpg",
      content: "This book changed my perspective 📚✨ #Bookworm",
      postImage: image_10,
      likes: 340,
      comments: 63,
      timestamp: "2 days ago",
      location: "London, UK",
      likedByUser: false,
      savedByUser: false,
    },
  ]);

  // Toggle like functionality
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
              likedByUser: !post.likedByUser,
            }
          : post
      )
    );
  };

  // Toggle save functionality
  const handleSave = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, savedByUser: !post.savedByUser } : post
      )
    );
  };

  // Open comment modal (placeholder)
  const handleCommentClick = (postId) => {
    console.log(`Opening comments for post ${postId}`);
    // In a real app, this would open a modal or navigate to comments
  };

  return (
    <div className="fd-feed">
      {posts.map((post) => (
        <div key={post.id} className="fd-post">
          {/* Post Header */}
          <div className="fd-post-header">
            <div className="fd-header-info">
              <img
                src={post.profilePic}
                alt={`${post.username}'s profile`}
                className="fd-profile-pic"
              />
              <div className="fd-user-details">
                <h3 className="fd-username">{post.fullName}</h3>
                <p className="fd-post-meta">
                  {post.location} • {post.timestamp}
                </p>
              </div>
            </div>
            <button
              className={`fd-save-button ${post.savedByUser ? "fd-saved" : ""}`}
              onClick={() => handleSave(post.id)}
            >
              {post.savedByUser ? "★" : "☆"}
            </button>
          </div>

          {/* Post Content */}
          <div className="fd-post-content">
            <p className="fd-content-text">{post.content}</p>
            {post.postImage && (
              <div className="fd-post-image-container">
                <img
                  src={post.postImage}
                  alt="Post content"
                  className="fd-post-image"
                />
              </div>
            )}
          </div>

          {/* Post Interactions */}
          <div className="fd-post-interactions">
            <div className="fd-interaction-buttons">
              <button
                className={`fd-like-button ${
                  post.likedByUser ? "fd-liked" : ""
                }`}
                onClick={() => handleLike(post.id)}
              >
                {post.likedByUser ? "❤️" : "🤍"} {post.likes}
              </button>
              <button
                className="fd-comment-button"
                onClick={() => handleCommentClick(post.id)}
              >
                💬 {post.comments}
              </button>
            </div>
            <button className="fd-share-button">🔗 Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
