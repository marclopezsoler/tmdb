import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

//This page makes a scroll to top when the user clicks the button, and also changes classes of the button depending if it is hovered or not

const Scroll = () => {
    const [showTopBtn] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
              var btn = document.getElementById("scrollBtn");
              btn.className = "in";
            } else {
              var btn = document.getElementById("scrollBtn");
              btn.className = "out";
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="top-to-btm">
          <div id="scrollBtn" className="out">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style" 
                    onClick={goToTop}
                />
            )}{" "}  
          </div>
        </div>
    );
};
export default Scroll;