import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

//the images of the projects worked on
import Work1 from './assets/portfolio/swaluke-home.png';
import Work2 from './assets/portfolio/srms-home.png';
import Work3 from './assets/portfolio/wisechoice-home.png';
import Work4 from './assets/portfolio/iprs-home.png';
import Work5 from './assets/portfolio/parking-home.png';
import Work6 from './assets/portfolio/smoothie-place-home.png';

//the images of the different colors that can be implemented as a theme in the website
import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

//The links to the different pages in the website
export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },

  {
    id: 5,
    name: 'Jokes',
    icon: <FaBriefcase className='nav__icon' />,
    path: '/jokes',
  },
];

//Personal Information displayed on the website
export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Abigail',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Wairi',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Kenyan',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Donholm, Nairobi Kenya',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+254 791 498 056',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'abby.muso@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: 'https://github.com/Abbymuso1',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Swahili',
  },
];

//Statistics of the what I have accomplished
export const stats = [
  {
    id: 1,
    no: '5+',
    title: 'Personal <br /> Projects Completed',
  },

  {
    id: 2,
    no: '0',
    title: 'Years of <br /> Professional Experience',
  },

  {
    id: 3,
    no: '3',
    title: 'University <br /> Awards',
  },

  {
    id: 4,
    no: '3+',
    title: ' Recognition <br /> Certifications',
  },
];

//Work experience and education
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '01/2023 - 03/2023',
    title: 'Software Engineer Intern <span> United Bank for Africa </span>',
    desc: 'Engineered a Security Register Management System(SRMS) encompassing development of web service calls and the integration of an enterprise service bus',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '02/2022 - 03/2022',
    title: 'Innovative Hub Intern <span> United Bank for Africa </span>',
    desc: 'Engineered an IPRS system for Identification Card information retrieval for customers at the UBA branch to avoid cases of fraud',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '02/2021 - 03/2021',
    title: 'Library Intern <span> Kenya National Library Services </span>',
    desc: 'Sorted and shelved books, manned the library, processed newly acquired books, entered data of books in the system',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '04/2020 - 11/2023',
    title: 'Bachelor of Informatics and Computer Science <span> Strathmore University : Nairobi, Kenya </span>',
    desc: 'Expected Graduation Date: June 2024 , GPA: 3.64/4',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '01/2016 - 11/2019',
    title: 'HighSchool Education <span> Riara Springs Girls High School : Nairobi, Kenya</span>',
    desc: 'Grade: A- , Student leader in various capacities through my studies.',
  },

];

//Skills in the various technologies
export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '85',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Flask',
    percentage: '80',
  },

  {
    id: 6,
    title: 'React',
    percentage: '80',
  },

  {
    id: 7,
    title: 'Python',
    percentage: '85',
  },

  {
    id: 8,
    title: 'Java',
    percentage: '80',
  },
];

//Portfolio displaying the personal projects completed
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'SwaLuKE Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : SwaLuKE',
        desc: '',
      },
      {
        icon: <FaFolderOpen />,
        title: 'Description : A Swahili-luhya translation website.',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flask, Python, Bootstrap Framework',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Abbymuso1/SwaLuKE',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'SRMS',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : SRMS',
      },
      {
        icon: <FaFolderOpen />,
        title: 'Description : A security register management system.',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Laravel Framework, PHP, Bootstrap Framework',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Abbymuso1/SRMS',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Wise Choice',
    details: [
      {
        icon: <FiFileText />,
        title: 'Wise Choice ',
      },
      {
        icon: <FaFolderOpen />,
        title: 'Description : A university Course Recommendation System.',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Kotlin',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Abbymuso1/WiseChoice',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'IPRS',
    details: [
      {
        icon: <FiFileText />,
        title: 'IPRS',
      },
      {
        icon: <FaFolderOpen />,
        title: 'Description : An Identification Card System.',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Laravel Framework, PHP, Bootstrap Framework',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Abbymuso1/IPRS_SYSTEM',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Intelli Parkings',
    details: [
      {
        title: 'Intelli Parkings ',
      },
      {
        icon: <FaFolderOpen />,
        title: 'Description : An online parking reservation system.',
        desc: '',
      },
      {
        title: 'Language : ',
        desc: 'HTML, CSS, JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://github.com/Abbymuso1/ParkingSystem',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Smoothie Place',
    details: [
      {
        icon: <FiFileText />,
        title: 'Smoothie Place',
      },
      {
        icon: <FaFolderOpen />,
        title: 'Description : An e-commerce website for sale of smoothies.',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Abbymuso1/Smoothie-Place',
      },
    ],
  },
];

//Themes that can be applied in the website
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
