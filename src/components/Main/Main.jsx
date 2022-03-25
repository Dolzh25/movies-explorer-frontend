import './Main.css';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Header from '../Header/Header';

const Main = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;
