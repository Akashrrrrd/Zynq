import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Users,
  Tag,
  Info,
  ArrowLeft,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Plus } from "react-feather";
import "./JoinCom.css";

const JoinCom = ({ communityData }) => {
  const { communityId } = useParams();
  const navigate = useNavigate();

  const community = communityData.find(
    (com) => com.id === parseInt(communityId)
  );

  if (!community) {
    return (
      <div className="jc-container jc-not-found">
        <div className="jc-error-content">
          <Info size={48} className="jc-error-icon" />
          <h2>Community Not Found</h2>
          <p>
            The community you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="jc-btn jc-btn-secondary"
          >
            <ArrowLeft size={20} /> Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="jc-container jc-community-details">
      <header className="jc-header">
        <div className="jc-header-content">
          <h1>{community.name}</h1>
          <p className="jc-focus-area">
            <Tag size={16} /> {community.focus}
          </p>
        </div>
      </header>

      <div className="jc-details-grid">
        <div className="jc-details-card">
          <div className="jc-card-header">
            <Users size={24} />
            <h3>Community Stats</h3>
          </div>
          <div className="jc-card-body">
            <p>
              <strong>Total Members:</strong> {community.members}
            </p>
            <p>
              <strong>Category:</strong> {community.category}
            </p>
          </div>
        </div>

        <div className="jc-details-card jc-welcome-card">
          <div className="jc-card-header">
            <Info size={24} />
            <h3>Welcome Message</h3>
          </div>
          <div className="jc-card-body">
            <p>{community.description}</p>
          </div>
        </div>
      </div>

      <div className="jc-social-media">
        <div className="jc-card-header">
          <h3>Connect With Us</h3>
        </div>
        <div className="jc-social-links">
          {community.socialMedia.twitter && (
            <a
              href={`https://twitter.com/${community.socialMedia.twitter.replace(
                "@",
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="jc-social-icon"
            >
              <Twitter />
            </a>
          )}
          {community.socialMedia.facebook && (
            <a
              href={`https://facebook.com${community.socialMedia.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="jc-social-icon"
            >
              <Facebook />
            </a>
          )}
          {community.socialMedia.instagram && (
            <a
              href={`https://instagram.com${community.socialMedia.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="jc-social-icon"
            >
              <Instagram />
            </a>
          )}
          {community.socialMedia.linkedin && (
            <a
              href={`https://linkedin.com${community.socialMedia.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="jc-social-icon"
            >
              <Linkedin />
            </a>
          )}
        </div>
      </div>

      <div className="jc-media-section">
        {community.media.image && (
          <div className="jc-media-image">
            <img
              src={community.media.image}
              alt={`${community.name} Community`}
            />
          </div>
        )}
        {community.media.video && (
          <div className="jc-media-video">
            <iframe
              width="560"
              height="315"
              src={community.media.video.replace("watch?v=", "embed/")}
              title={`${community.name} Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="jc-actions">
        <Link to="/comroom" className="jc-btn jc-btn-primary">
          <Plus size={20} /> Join
        </Link>
      </div>
    </div>
  );
};

export default JoinCom;
