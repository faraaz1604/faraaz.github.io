import React, { useState, useEffect } from "react";
import { UilArrowUp } from "@iconscout/react-unicons";
import "./scrollup.css";

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 560) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {show && (
        <div className={`scrollup ${show ? 'show-scroll' : ''}`} onClick={scrollToTop}>
          <UilArrowUp className="scrollup__icon" />
        </div>
      )}
    </>
  );
};

export default ScrollUp;