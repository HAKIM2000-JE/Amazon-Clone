import React from "react";

import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <footer>
        <div>
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/explore">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i class="fab fa-youtube"></i>
          </a>
        </div>

        <h5 className="copy">&copy;Jebabra 2020</h5>
      </footer>
    </div>
  );
}

export default Footer;
