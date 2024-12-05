import React, { useState, useRef } from "react";
import {
  UserCircleIcon,
  PhotoIcon,
  FaceSmileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import "./Shared.css";

const Shared = ({
  user = {
    id: 1,
    username: "User",
    profilePic: null,
  },
}) => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [privacy, setPrivacy] = useState("public");
  const [posts, setPosts] = useState([]);
  const fileInputRef = useRef(null);

  const handlePost = () => {
    if (!postText.trim() && !image) return;

    const newPost = {
      id: Date.now(),
      userId: user.id,
      username: user.username,
      profilePic: user.profilePic,
      text: postText,
      image,
      privacy,
      likes: 0,
      comments: [],
      createdAt: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setPostText("");
    setImage(null);
    setPrivacy("public");
    fileInputRef.current.value = "";
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    fileInputRef.current.value = "";
  };

  return (
    <div className="shared-container">
      <div className="shared-header">
        <UserCircleIcon className="profile-icon" />
        <div className="user-info">
          <span className="username">{user.username}</span>
          <div
            className="privacy-selector"
            onClick={() =>
              setPrivacy(privacy === "public" ? "friends" : "public")
            }
          >
            <GlobeAltIcon className="privacy-icon" />
            <span>{privacy === "public" ? "Public" : "Friends"}</span>
          </div>
        </div>
      </div>

      <div className="shared-box">
        <textarea
          className="shared-input"
          placeholder={`What's on your mind, ${user.username}?`}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />

        {image && (
          <div className="image-preview-container">
            <img src={image} alt="Preview" className="shared-preview" />
            <button className="remove-image-btn" onClick={handleRemoveImage}>
              ✕
            </button>
          </div>
        )}

        <div className="shared-actions">
          <div className="action-icons">
            <label htmlFor="image-upload" className="action-icon">
              <PhotoIcon className="icon" />
              <span>Photo/Video</span>
              <input
                type="file"
                id="image-upload"
                ref={fileInputRef}
                accept="image/*,video/*"
                onChange={handleImageUpload}
                className="file-input"
              />
            </label>
            <div className="action-icon">
              <FaceSmileIcon className="icon" />
              <span>Feeling/Activity</span>
            </div>
          </div>

          <button
            className="shared-post-btn"
            onClick={handlePost}
            disabled={!postText.trim() && !image}
          >
            Post
          </button>
        </div>
      </div>

      <div className="posts-list">
        {posts.length === 0 ? (
          <div className="no-posts-message">
            <p>No posts to display yet. Share something!</p>
            <p className="subtle-hint">
              Your first post could be a milestone, a thought, or just a hello!
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post-header">
                <UserCircleIcon className="post-profile-icon" />
                <div>
                  <span className="post-username">{post.username}</span>
                  <div className="post-meta">
                    <span className="post-time">{post.createdAt}</span>
                    <span className="post-privacy">
                      <GlobeAltIcon className="privacy-icon-small" />
                      {post.privacy}
                    </span>
                  </div>
                </div>
              </div>

              {post.text && <p className="post-text">{post.text}</p>}
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="post-image"
                />
              )}

              <div className="post-interactions">
                <button className="interaction-btn">👍 Like</button>
                <button className="interaction-btn">💬 Comment</button>
                <button className="interaction-btn">🔁 Share</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shared;
