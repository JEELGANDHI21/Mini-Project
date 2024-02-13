import React, { useState } from "react";
import axios from "axios";

const NewBlogPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreatePost = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/blogposts", {
        title,
        content,
      });
  
      setSuccessMessage("Post created successfully!");
  
      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
  
      const handleCreatePost = async () => {
        try {
          const response = await axios.post("http://localhost:8080/api/blogposts", {
            title,
            content,
          });
      
          setSuccessMessage("Post created successfully!");
      
          // Clear the success message after 3 seconds
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
      
          setTitle("");
          setContent("");
        } catch (error) {
          console.error("Error creating blog post:", error);
          setSuccessMessage(""); // Reset success message
          setErrorMessage("An error occurred. Please try again.");
        }
      };
      
    } catch (error) {
      console.error("Error creating blog post:", error);
      setSuccessMessage(""); // Reset success message
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0C2D57]">
        Create a New Blog Post
      </h1>
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
          {errorMessage}
        </div>
      )}
      <form className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-60"
          />
        </div>
        <button
          className="bg-[#0C2D57] text-white font-bold py-2 px-4 rounded hover:bg-[#FC6736]"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default NewBlogPost;
