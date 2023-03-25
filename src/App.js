import { Routes, Route} from 'react-router-dom';
import './index.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from "./routes/Home"
import Project from './routes/Project';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/project" element={<Project />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
  );
}

export default App;
