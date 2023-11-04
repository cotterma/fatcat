import Hero from './components/Hero';
import SocialMedias from './components/SocialMedias';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis'
import './App.css';
import './styles/burger.css';
import './styles/menu.css';
import './styles/hero.css';
import './styles/social-medias.css';
import './fonts.css';

function App() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <div className="App">
      <Hero />
      <SocialMedias />
      <Menu />
      <Locations />
      <Footer/>
    </div>
  );
}

export default App;
