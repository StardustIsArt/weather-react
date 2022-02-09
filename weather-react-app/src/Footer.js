import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        This project was coded by Samantha Yocius,
        <a
          href="https://github.com/StardustIsArt/Vanilla-Weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
        and
        <a href="https://vanilla-weather-application.netlify.app/">
          {" "}
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}
