import './App.css';
import ContactForm from './components/Molecules/Form/Form';
import Footer from './components/Orgnism/Footer/Footer';
import Plans from './components/Orgnism/Plans/Plans';
import Programs from './components/Orgnism/Programs/Programs';
import Reasons from './components/Orgnism/Reasons/Reasons';
import Testimonials from './components/Orgnism/Testimonials/Testimonials';
import Hero from './components/Pages/Hero/hero';
function App() {
  return (
    <div className="App">
       <Hero/>   
       <Programs/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <ContactForm/>
       <Footer/>
      
    </div>
  );
}

export default App;
