import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/shivaga"><GitHub/></a>
        <a href="http://linkedin.com/in/shivam-agarwal-5b081222a/"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/_shiv_aga/"><InstagramIcon/></a>
      </div>
      <p> &copy; 2024 shivaga.com</p>
    </div>
  );
}

export default Footer;