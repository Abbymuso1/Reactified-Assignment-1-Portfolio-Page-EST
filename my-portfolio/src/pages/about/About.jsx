import React from 'react';
import Inform from '../../components/Inform';
import Stats from '../../components/Stats';
import Skills from '../../components/Skills';

import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Abigail_Wairi_cv.pdf";

import { resume } from '../../data';
import Resumeitem from '../../components/Resumeitem';


import "./about.css";


const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              Personal Infos
            </h3>

            <ul className="info__list grid">
              <Inform />
            </ul>

            <a href={CV} download='' className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator">
      </div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">
          My Skills
        </h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator">
      </div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience and Education
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'experience'){
                return <Resumeitem key={val.id} {...val}/>;
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'education'){
                return <Resumeitem key={val.id} {...val}/>;
              }
            })}
          </div>
        </div>
      </section>

    </main>
  )
}

export default About