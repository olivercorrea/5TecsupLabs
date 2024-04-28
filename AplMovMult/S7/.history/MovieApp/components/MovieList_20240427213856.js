import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MovieDetails from './MovieDetails';

const MovieList = (props) => {
  const { movies, selectedMovie, setSelectedMovie } = props;

  const handleMoviePress = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <View>
      {selectedMovie? (
        <MovieDetails movie={selectedMovie} />
      ) : (
        movies.map((movie, index) => (
          <TouchableOpacity key={index} onPress={() => handleMoviePress(movie)}>
            <View style={styles.movieContainer}>
              <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
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
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
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