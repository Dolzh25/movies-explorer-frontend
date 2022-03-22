import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = (props) => {
  const {
    isLoggedIn,
    isLoading,
    isSearching,
    searchMovies,
    movies,
    searchValue,
    savedMoviesIds,
    saveMovie,
    removeMovie,
  } = props;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Container>
          <SearchForm searchMovies={searchMovies} searchValue={searchValue} />
          {isSearching ?
            <MoviesCardList
              listType="main"
              isLoading={isLoading}
              movies={movies}
              saveMovie={saveMovie}
              removeMovie={removeMovie}
              savedMoviesIds={savedMoviesIds}
            />
            :
            <p>Воспользуйтесь поиском</p>
          }
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Movies;
