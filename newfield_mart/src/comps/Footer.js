import React from "react";
import "./../styles/Footer.css";
import facebookLogo from "./../assets/facebookLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="location">
          <h3 className="footerHeading">Find Us Here</h3>
          <p className="footerText">
            1381 Harding Hwy, Newfield,<br></br> NJ, 08344-5323
          </p>
          <p className="footerText">
            Located at the intersection of<br></br> Main Road and Harding Highway
          </p>
        </div>
        <div className="contact">
          <h3 className="footerHeading">Contact Us</h3>
          <p className="footerText">
          Phone Number: (856) 839-0203
          </p>
          <p className="footerText">
          Email:
          </p>
          <div className='share'>
            <h3 className="footerText"> Share: </h3>
            <a href="https://www.facebook.com/Newfield-Food-Mart-102478735076598/">
              <img
                alt="facebook logo"
                src={facebookLogo}
                className="facebookLogo2"
              ></img>
            </a>
          </div>
        </div>
        <div className="hours">
          <h3 className="footerHeading">Store Hours</h3>
          <p className="footerText"></p>
        </div>
      </div>
    </footer>
  );
}
