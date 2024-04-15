import { useState } from "react";
import "./TwitterFollowCard.css";

export function FollowCard({ icon, userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const textButton = isFollowing ? "Unfollow" : "Follow";
  const imageSource = `${icon}`;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <>
      <div className="container-card">
        <div className="card-icon">
          <img src={imageSource} alt="User Icon" />
        </div>
        <div className="card-info">
          <span className="card-name">{name}</span>
          <span className="card-user">{userName}</span>
        </div>
        <div className="card-option">
          <button onClick={handleClick}>{textButton}</button>
        </div>
      </div>
    </>
  );
}
