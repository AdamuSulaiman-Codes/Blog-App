import React from 'react';
import blogs from '../utility/data';

const Main = () => {
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog-post" key={blog.id}>
          <img src={blog.picture} alt={blog.topic} className="blog-image" />
          <div className="blog-content">
            <h2 className="blog-topic">{blog.topic}</h2>
            <p className="blog-description">{blog.description}</p>
            <button>View....</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
