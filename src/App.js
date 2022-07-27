import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
    </BrowserRouter>
  );
}

export default App;
