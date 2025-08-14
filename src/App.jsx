
import { Suspense, lazy } from 'react';
import './App.css';
import Nav from './components/Nav';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from "./pages/Contact";
// import About from './pages/About';
import Footer from './components/Footer';
import { HamburgerProvider } from './contexts/HamburgerContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <ThemeProvider>
      <HamburgerProvider>
        <Router>
          <div className="App">

            <Nav />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
              <Footer />
            </Suspense>

          </div>
        </Router >


      </HamburgerProvider>
    </ThemeProvider>

  );
}

export default App;
