import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Explore from './components/Explore';
import AboutHowWeWork from './components/AboutHowWeWork';
import NetIitSkill from './components/NetIitSkill';
import DownFeautureBanner from './components/DownFeautureBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container">
      <Header />
      <Explore />
      <AboutHowWeWork />
      <NetIitSkill />
      <DownFeautureBanner />
      <Footer />
    </div>
  );
}

export default App;
