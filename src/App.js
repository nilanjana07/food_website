
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer'; 
import Work from './components/Work';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';

function App() {
  return (
   <div>
    
    <Home/>
    <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>

   </div>
  );
}

export default App;
