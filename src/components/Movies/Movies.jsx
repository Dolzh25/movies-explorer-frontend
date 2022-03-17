import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LoadMore from '../LoadMore/LoadMore';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Container>
          <SearchForm />
          <MoviesCardList />
          <LoadMore />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Movies;
