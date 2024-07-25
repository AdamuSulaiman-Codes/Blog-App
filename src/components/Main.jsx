import React from 'react';
import { useNavigate } from 'react-router-dom';


const Main = ({ blogs }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/view/${id}`);
  };

  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog-post" key={blog.id}>
          <img src={blog.picture} alt={blog.topic} className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-topic">{blog.topic}</h2>
            <p className="blog-heading">{blog.heading}</p>
            <button onClick={() => handleClick(blog.id)} className="view-button">View....</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
