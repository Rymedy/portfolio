import './App.css';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Footer from './PortfolioContainer/Footer/Footer';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Home />
      <Fade bottom distance='5%'>
      <AboutMe />
      <Resume />
      <ContactMe />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
