import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Experience/>
    <Services/>
    <Projects/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
