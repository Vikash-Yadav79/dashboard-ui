import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <i className="fas fa-bars"></i>
        </button>
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </div>
      <div className="header-right">
        <button className="notification-button">
          <i className="fas fa-bell" style={{ fontSize: '20px' }}></i>
          <span className="notification-badge">6</span>
        </button>
        <div className="language-selector">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx71uJU6Zj98_fsvrFfnW4o6qBdh8zh9M3Mg&s" alt="UK Flag" className="flag-icon" />
          <span>English</span>
          <i className="fas fa-chevron-down chevron-icon" style={{ marginLeft: '10px' }}></i>
        </div>
        <div className="profile-info">
          <img src="images/profile.jpeg" alt="Profile" className="profile-pic" />
          <div className="profile-details">
            <span className="profile-name">Moni Roy</span>
            <br />
            <span className="profile-role">Admin</span>
          </div>
          <i className="fas fa-chevron-down chevron-icon"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
