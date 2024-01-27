import React from 'react';
import Profile from '../../assets/hero.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa"; 
import "./home.css";

const Home = () => {
  return (
   <section className="home section grid">
    <img src={Profile} alt="" className="home__img" />

    <div className="home__content">
      <div className="home__data">
        <h1 className="home__title">
        Hello there! <span>I'm Abigail Wairi. </span> Web Designer
        </h1>

        <p className="home__description">
        I am a recent graduate with a degree in Computer Science passionate about transforming ideas into innovative solutions. 
        Armed with a solid foundation in algorithms, data structures, and programming languages, I am eager to embark on a journey where technology meets creativity🚀.
        </p>

        <Link to='/about' className='button'>
          More About Me 
          <span className='button__icon'> 
          <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>

    <div className="color__block">
      
    </div>
   </section>
  )
}

export default Home