import React from "react"
import About from "sections/about/About";
import Contact from "sections/contact/Contact";
import FloatingNavBar from "sections/floating-navBar/FloatingNavBar";
import Footer from "sections/footer/Footer";
import Header from "sections/header/Header";
import NavBar  from 'sections/navBar/NavBar';
import Portfolio from "sections/portfolio/Portfolio";
import Services from "sections/services/Services";
import Testimonials from "sections/testimonials/Testimonials";
import FAQs from './sections/faqs/FAQs';



const App = () => {
  return (
    <main>
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNavBar/>
    </main>
  )
}

export default App