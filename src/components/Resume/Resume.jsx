import { useState, useEffect } from 'react';
import { StyledResume } from './StyledResume';
import logoFreelance from '../../assets/img/freelance-logo.png';
import logoPlayOctopus from '../../assets/img/play-octopus-logo.png';
import logoTmobile from '../../assets/img/tmo-logo.svg';
import gsap from 'gsap';

const Resume = () => {
  const [selectedCategory, setSelectedCategory] = useState('experience');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    gsap.fromTo('.content', { y: -150, opacity: 0 }, { y: 0, opacity: 1 });
  }, [selectedCategory]);

  const categoryContent = {
    experience: (
      <div className="experience-container">
        <div className="freelance expWrapper">
          <a href="#">
            <img src={logoFreelance} alt="freelance logo" />
          </a>
          <h4>Freelance Graphic Designer</h4>
          <a href="#">Self-Employed</a>
          <div className="clients">
            <p>Thai Palace</p>
            <p>Ion Scientific</p>
            <p>Thana Real Estate Group</p>
            <p>Create & Capture Media</p>
          </div>
        </div>
        <div className="intern expWrapper">
          <a href="https://playoctopus.com" target="_blank" rel="noreferrer">
            <img src={logoPlayOctopus} alt="play octopus interactive logo" />
          </a>
          <h4>Intern</h4>
          <a href="https://playoctopus.com" target="_blank" rel="noreferrer">
            Play Octopus Interactive
          </a>
          <div className="clients">
            <p>Lottery.com</p>
            <p>BetOnline</p>
            <p>Dos Equis</p>
            <p>H.E.B</p>
          </div>
        </div>
        <div className="designer expWrapper">
          <a href="https://www.t-mobile.com" target="_blank" rel="noreferrer">
            <img src={logoTmobile} alt="t-mobile logo" />
          </a>
          <h4>Associate Designer, Graphic</h4>
          <a href="https://www.t-mobile.com" target="_blank" rel="noreferrer">
            T-Mobile
          </a>
          <div className="clients">
            <p>Samsung</p>
            <p>Skillz</p>
            <p>H.E.B</p>
            <p>TikTok</p>
          </div>
        </div>
      </div>
    ),
    school: (
      <div className="school-container">
        <h2>Education</h2>
        <p>Your educational background...</p>
        <img src="school-image.jpg" alt="School" />
      </div>
    ),
    skills: (
      <div className="skills-container">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
        <img src="skills-image.jpg" alt="Skills" />
      </div>
    ),
  };

  return (
    <StyledResume>
      <h1>Resume.</h1>
      <div className="wrapper">
        <div className="categories">
          {Object.keys(categoryContent).map((category) => (
            <div
              key={category}
              className={`category-container ${
                selectedCategory === category && 'selected'
              }`}
              onClick={() => handleCategoryChange(category)}>
              <p
                className={`category ${
                  selectedCategory === category && 'selected'
                }`}>
                {category}
              </p>
            </div>
          ))}
        </div>
        <div className="content">{categoryContent[selectedCategory]}</div>
      </div>
    </StyledResume>
  );
};

export default Resume;
