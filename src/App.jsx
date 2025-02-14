
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import Download from './components/Download';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Download />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
