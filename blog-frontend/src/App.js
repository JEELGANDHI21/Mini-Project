import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogPostList from "./components/BlogPostList";
import BlogPost from "./components/BlogPost";
import NewBlogPost from "./components/NewBlogPost";

const Header = () => (
  <header className="bg-gradient-to-r from-[#0C2D57] to-[#FC6736] p-4 flex items-center justify-between">
    <Link to="/" className="text-white text-xl font-bold flex items-center">
    
      Home
    </Link>
    <nav className="flex space-x-4">
      <Link to="/new" className="text-white hover:text-[#FFB0B0]">
        New Blog Post
      </Link>
    </nav>
  </header>
);

// App component
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/new" element={<NewBlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
