import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogPostsSection from "./BlogPostsSection";

// Css
import "./blog-posts-section.css"

const Blog = () => {
  useEffect(() => {

    AOS.init({
      once: true, 
    });
    console.log(AOS)
    
  },[])
  
  
  return (
    <>
      <Navbar />
      <BlogPostsSection />
      <Footer />
    </>
  );
};

export default Blog;
