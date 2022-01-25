import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import SinglePage from "./SinglePage";

const About = () => {
  return (
    <div className="about_content">
      <ul className="about_list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
          <Routes>
            <Route path=":slug" element={<SinglePage />}/>
          </Routes>
      </ul>
    </div>
  );
}

export default About;
