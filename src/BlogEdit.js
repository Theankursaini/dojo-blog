import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogEdit = () => {
    const { id } = useParams();  // Get blog id from URL
    const navigate = useNavigate();  // Used to navigate after saving the blog
    const [blog, setBlog] = useState({
      title: '',
      body: '',
      author: ''
    });

    // Fetch blog details to pre-fill the form
  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated data to the server
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
      .then(response => {
        if (response.ok) {
          navigate(`/blogs/${id}`);  // Navigate to the updated blog's page
        } else {
          throw new Error('Failed to update blog');
        }
      })
      .catch(error => console.error('Error updating blog:', error));
  };

    return ( 
        <div className='editblog'>
        <h1>Edit Blog</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Content:
            <textarea
              name="content"
              value={blog.content}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Update Blog</button>
        </form>
      </div>
     );
}
 
export default BlogEdit;