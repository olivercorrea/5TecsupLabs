import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetails = (props) => {
  const { movie } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.releaseDate}>{movie.release_date}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
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
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default MovieDetails;