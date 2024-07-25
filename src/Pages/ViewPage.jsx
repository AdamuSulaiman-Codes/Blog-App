import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';


const ViewPage = ({blogs}) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  console.log({  blog , blogs })

  return (
    <>
      <NavBar/>
      <div className="view-page">
        <img src={blog.picture} alt={blog.description} className="view-page-image" />
        <div className="view-page-content">
          <h1 className="view-page-topic">{blog.topic}</h1>
          <h2 className="view-page-heading">{blog.heading}</h2>
          <p className="view-page-description">{blog.description}</p>
        </div>
      </div>
    </>
  );
};

export default ViewPage;
