
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import { HamburgerProvider } from './contexts/HamburgerContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HamburgerProvider>
      <Router>
        <div className="App">

          <Nav />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router >


    </HamburgerProvider>

  );
}

export default App;
