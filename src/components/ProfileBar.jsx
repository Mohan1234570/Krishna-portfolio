import React from "react";
import "./ProfileBar.css";


const  logo = "./images/logo.png"; // <-- replace with your actual image path

const ProfileBar = () => {
  return (
    <div className="profile-bar">
      <img src={logo} alt="Profile" className="profile-avatar" />
      <span className="profile-text">
        Krishna-portfolio/<strong>src</strong> at{" "}
        <span className="branch">main</span>
      </span>
    </div>
  );
};

export default ProfileBar;
