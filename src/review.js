import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    });
  };
  const next = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    });
  };

  const Random = () => {
    setIndex(() => {
      let newNum = Math.floor(Math.random() * people.length);
      return checkNum(newNum);
    });
  };

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={Random}>
          Random
        </button>
      </div>
    </article>
  );
};

export default Review;
