import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/blogposts");
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-3xl font-bold text-[#0C2D57] text-center mb-8">Blog Posts</h1>

      <ul className="grid sm:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <li
            key={post.id}
            className="shadow rounded overflow-hidden bg-white max-w-sm transition duration-300 hover:shadow-md hover:bg-[#F9EFDB]"
          >
            <Link to={`/post/${post.id}`}>
              <div className="p-4">
                <h2
                  className="text-2xl font-bold text-[#0C2D57] mb-2 hover:text-[#FC6736]"
                >
                  {post.title}
                </h2>
                <p className="text-[#535C91] text-opacity-75 hover:text-opacity-100">
                  {post.content}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostList;
