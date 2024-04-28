import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MovieList from './components/MovieList';
import { getMovies } from './services/api';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <View style={styles.container}>
      <MovieList movies={movies} />
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
