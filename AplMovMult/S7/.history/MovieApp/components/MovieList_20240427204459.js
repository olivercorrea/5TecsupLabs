import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MovieDetails from './MovieDetails';

const MovieList = (props) => {
  const { movies, selectedMovie, setSelectedMovie } = props;

  const handleMoviePress = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <View>
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        movies.map((movie, index) => (
          <TouchableOpacity key={index} onPress={() => handleMoviePress(movie)}>
            <View style={styles.movieContainer}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.releaseDate}>{movie.release_date}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default MovieList;