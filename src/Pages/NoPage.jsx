import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed


const NoPage = () => {
  return (
    <div className="no-page-container">
      <h1 className="no-page-heading">404</h1>
      <p className="no-page-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
};

export default NoPage;
