import React from "react";
import "./social.css";
import "./footer.css";

function Social() {
  return (
    <div className="cont">
      <div>
        <div class="social">
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
