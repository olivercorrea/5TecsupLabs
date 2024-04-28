import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MovieList from './components/MovieList';
import { getMovies } from './services/api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <View style={styles.container}>
      {selectedMovie ? (
        <MovieList
          movies={[selectedMovie]}
          setSelectedMovie={setSelectedMovie} // Pass the function to unselect the movie
        />
      ) : (
        <MovieList
          movies={movies}
          setSelectedMovie={setSelectedMovie} // Pass the function to select a movie
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
