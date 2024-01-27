import React from 'react'
import { personalInfo } from '../data';

//this component dispays the personal information 
const Inform = () => {
  return (
    <>
    {personalInfo.map(({title, description}, index) => {
      return (
        <li className="info__item" key={index}>
          <span className="info__title">
            {title}
          </span>
          <span className="info__description">
            {description}
          </span>
        </li>
      )
    })}
    </>
  )
}

export default Inform;