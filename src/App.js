import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
    </BrowserRouter>
  );
}

export default App;
