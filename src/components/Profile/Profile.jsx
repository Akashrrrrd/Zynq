import React, { useState } from "react";
import { Camera, Edit, Users, UserPlus } from "lucide-react";
import "./Profile.css";
import profile_1 from "./../../assets/profile_1.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Akash R",
    username: "@akashr2004",
    profilePic: profile_1,
    bio: "Tech enthusiast, blogger, and traveler. Sharing knowledge and exploring the world one step at a time.",
    followers: 12000,
    following: 345,
    posts: 89,
    location: "San Francisco, CA",
    website: "www.akashr.com",
  });

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({
          ...prev,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="nf-profile-container">
      <div className="nf-profile-header">
        <div className="nf-profile-avatar-container">
          <img
            src={user.profilePic}
            alt={`${user.name}'s profile`}
            className="nf-profile-avatar"
          />
          {isEditing && (
            <label className="nf-avatar-edit-overlay">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="nf-avatar-file-input"
              />
              <Camera className="nf-avatar-edit-icon" />
            </label>
          )}
        </div>

        <div className="nf-profile-details">
          <div className="nf-profile-name-section">
            <h1 className="nf-profile-name">{user.name}</h1>
            <span className="nf-profile-username">{user.username}</span>
          </div>

          <p className="nf-profile-bio">{user.bio}</p>

          <div className="nf-profile-additional-info">
            <span className="nf-profile-location">{user.location}</span>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nf-profile-website"
            >
              {user.website}
            </a>
          </div>
        </div>

        <div className="nf-profile-actions">
          <button className="nf-profile-edit-btn" onClick={handleEditProfile}>
            <Edit size={16} /> {isEditing ? "Save" : "Edit"}
          </button>
          <button className="nf-profile-follow-btn">
            <UserPlus size={16} /> Follow
          </button>
        </div>
      </div>

      <div className="nf-profile-stats">
        <div className="nf-stat-item">
          <span className="nf-stat-value">{user.posts}</span>
          <span className="nf-stat-label">Posts</span>
        </div>
        <div className="nf-stat-item">
          <span className="nf-stat-value">
            {user.followers.toLocaleString()}
          </span>
          <span className="nf-stat-label">Followers</span>
        </div>
        <div className="nf-stat-item">
          <span className="nf-stat-value">{user.following}</span>
          <span className="nf-stat-label">Following</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
