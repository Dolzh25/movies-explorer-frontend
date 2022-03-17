import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <Container>
          <SearchForm />
          <MoviesCardList />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Movies;