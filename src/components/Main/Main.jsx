import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Technologies from '../Technologies/Technologies';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = ({ isLoginIn }) => {
  return (
    <>
      <Header isLoginIn={isLoginIn} />
      <Promo />
      <AboutProject />
      <Technologies />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;
