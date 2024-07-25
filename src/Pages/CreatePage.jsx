import React, { useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Modal from '../assets/Modal';
import { Link } from 'react-router-dom';

const CreatePage = ({ setBlogs }) => {
  const topicRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const idRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: parseInt(idRef.current.value),
      topic: topicRef.current.value,
      heading: headingRef.current.value,
      description: descriptionRef.current.value,
      picture: 'https://via.placeholder.com/300'
    };

    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);

    idRef.current.value = '';
    topicRef.current.value = '';
    headingRef.current.value = '';
    descriptionRef.current.value = '';
    openModal(); // Open the modal after successfully creating a new blog
  };

  return (
    <>
      <NavBar />
      <div className="create-page-container">
        <h1>Create New Blog</h1>
        <form onSubmit={handleSubmit} className="create-form">
          <div className="form-group">
            <label htmlFor="id">Id:</label>
            <input type="number" id="id" ref={idRef} required min={1} />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input type="text" id="topic" ref={topicRef} required />
          </div>
          <div className="form-group">
            <label htmlFor="heading">Heading:</label>
            <input type="text" id="heading" ref={headingRef} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" ref={descriptionRef} placeholder="Blog description" required></textarea>
          </div>
          <button type="submit" className="submit-button">Post Blog</button>
        </form>
      </div>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Blog Created!</h2>
        <p>Your blog has been successfully created.</p>
        <Link to="/" className="nav-link" style={{
          color: "black"
        }}>Home</Link>
      </Modal>
    </>
  );
};

export default CreatePage;
