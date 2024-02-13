import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/blogposts/${id}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mx-auto max-w-2xl">
      <h1 className="text-[#0C2D57] font-bold text-4xl mb-4 text-center">{blogPost.title}</h1>
      <p className="text-[#535C91] text-justify">{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
