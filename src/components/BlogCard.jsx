import React from "react";

const BlogCard = () => {
  return (
    <article className="trend-card" data-aos-delay={600} data-aos="fade-in">
      <span className="trend-card__lable">Industry news</span>
      <div className="trend-card__img"></div>
      <h4>Title Lorem Ipsum Lorem</h4>
      <p>
        Body text lorem upsum lorem upsum lorem upsum lorem upsum lorem upsum
        lorem upsum lorem upsum lorem upsum lorem
      </p>
      <p className="trend-card__read-more">
        Read more <BsArrowRightShort />{" "}
      </p>
      <footer>
        <span>
          {" "}
          <img src={clock} alt="" />3 min
        </span>
        <span>September 9, 2023</span>
      </footer>
    </article>
  );
};

export default BlogCard;
