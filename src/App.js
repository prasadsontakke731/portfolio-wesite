import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './pages/NavBar';
import Frontpage from './pages/FrontPage';
import { About } from './pages/About';

import { Contact } from './pages/Contact';

import Skills from './pages/Skills';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import Education_cert from './pages/Education_cert';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Frontpage />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path='/education_and_certifications'
          element={
            <>
              <Education_cert />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path='/tech'
          element={
            <>
              <Skills />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
