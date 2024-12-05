import React, { useState } from "react";
import "./Feed.css";

const Feed = () => {
  // Expanded posts data with more realistic details
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "john_doe",
      fullName: "John Doe",
      profilePic: "/assets/profile1.jpg",
      content: "Exploring the beauty of nature! 🌿 #TravelDiaries",
      postImage: "/assets/post1.jpg",
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
      postImage: "/assets/post2.jpg",
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
      postImage: "/assets/post3.jpg",
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
      postImage: "/assets/post4.jpg",
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
      postImage: "/assets/post5.jpg",
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
      postImage: "/assets/post6.jpg",
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
      postImage: "/assets/post7.jpg",
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
      postImage: "/assets/post8.jpg",
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
      postImage: "/assets/post9.jpg",
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
      postImage: "/assets/post10.jpg",
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
