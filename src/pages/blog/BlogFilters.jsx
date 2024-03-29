import React, { useState } from "react";
import { motion } from "framer-motion";

const BlogFilters = () => {
  const [arr] = useState([
    "All",
    " Success cases",
    " Industry news",
    " Good to know",
    " Tech and more",
  ]);

  const [selectedIndex, setSelectedIndex] = useState(2);

  const handleClick = (text, index) => {
    setSelectedIndex(index);
  };

  return (
    <section className="blog-filters">
      <div className="container-small blog-filters__container">
        <ul>
          {arr.map((text, index) => (
            <li onClick={() => handleClick(text, index)}>
              {index === selectedIndex ? (
                <motion.span
                  layoutId="underline"
                  className="blog-filter-line"
                  layout
                ></motion.span>
              ) : null}
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogFilters;
