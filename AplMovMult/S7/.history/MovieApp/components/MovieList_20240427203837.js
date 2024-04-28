import React from 'react';
import { View, Text } from 'react-native';

const MovieList = (props) => {
  return (
    <View>
      {props.movies.map((movie, index) => (
        <View key={index}>
          <Text>{movie.title}</Text>
          <Text>{movie.release_date}</Text>
          <Text>{movie.overview}</Text>
        </View>
      ))}
    </View>
  );
};

export default MovieList;
