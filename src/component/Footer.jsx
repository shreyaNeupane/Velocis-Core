import React from 'react'
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="f-col-1">
            <img src={logo} alt="" srcset="" />

            <p>
              We are dedicated to delivering innovative solutions to help you
              achieve your business goals. Partner with us for excellence and
              growth.
            </p>
          </div>
          <div className="f-col-2">
            <h2>Get In Touch</h2>
            <br />
            <p>
              <i class="fa-solid fa-location-dot"></i> Himalayan Road, Biratnagar
            </p>
            <br />
            <p>
              <i class="fa-solid fa-phone"></i>  +977 9852079737
            </p>{" "}
            <br />
            <p>
              {" "}
              <i class="fa-solid fa-envelope"></i> info@velociscore.com
            </p>
            <br />
            <div className="f-col-2-icons">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="f-col-3">
            <h2>Popular Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="f-col-4">
            <h2>Our Services</h2>
            <p>Web Development</p>
            <p>App Development</p>
            <p>Social Media Management</p>
            <p>It Consulting</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
