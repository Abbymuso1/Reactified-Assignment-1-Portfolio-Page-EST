import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
//the components included in the home page
import Navbar from './components/Navbar';
import Themes from './components/Themes'; //enables changing of the theme when viewing the portfolio

//the pages of the website
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Jokes from './pages/jokes/Jokes';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Themes />
    <Routes>
      <Route path='/Reactified-Assignment-1-Portfolio-Page-EST/' element= {<Home />} />
      <Route path='/Reactified-Assignment-1-Portfolio-Page-EST/about' element={<About />} />
      <Route path='/Reactified-Assignment-1-Portfolio-Page-EST/portfolio' element={<Portfolio />} />
      <Route path='/Reactified-Assignment-1-Portfolio-Page-EST/contact' element={<Contact />} />
      <Route path='/Reactified-Assignment-1-Portfolio-Page-EST/jokes' element={<Jokes />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
