import React,{useState,useEffect}from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const text="Hii, My Name is Shivam Agarwal";
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prevText => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the speed here (milliseconds per character)

    return () => clearInterval(typingInterval);
  }, [text]);
  return (
    <div className="home">
      <div className="about">
        <h2> {displayText}</h2>
        <div className="prompt">
          <p>A passionate software developer with a love for crafting innovative solutions to complex problems.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;