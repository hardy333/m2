import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogPostsSection from "./BlogPostsSection";

// Css
import "./blog.css";
import "./blog-posts-section.css";
import BlogShowcase from "./Showcase";
import BigBlogPost from "./BigBlogPost";
import BlogFilters from "./BlogFilters";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    console.log(AOS);
  }, []);

  return (
    <>
      <Navbar />
      <BlogShowcase />
      <BlogFilters />
      <div className="container-small">
        <BigBlogPost />
      </div>
      <BlogPostsSection />
      <Footer />
    </>
  );
};

export default Blog;
