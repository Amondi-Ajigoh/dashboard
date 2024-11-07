// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
