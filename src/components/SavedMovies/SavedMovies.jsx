import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

const SavedMovies = (props) => {
  const { isLoggedIn, isLoading, movies, removeMovie, searchMovies, searchValue } = props;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Container>
          <SearchForm searchMovies={searchMovies} searchValue={searchValue} />
          <MoviesCardList
            listType='save'
            isLoading={isLoading}
            movies={movies}
            removeMovie={removeMovie}
          />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;