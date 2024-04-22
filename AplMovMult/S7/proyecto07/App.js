import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import axios from 'axios';

// State variable 'data' holds an array of user objects fetched from the API
// Initially set to an empty array, and updated with the fetched data using the 'setData' function

export default function App() {
  const [data, setData] = useState([]);

  // useEffect hook is used to perform side effects in function components
  // In this case, it's used to fetch data from the API when the component mounts
  useEffect(() => {
    // URL de ejemplo de la API JSONPlaceholder para obtener usuarios
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Hacer una solicitud GET a la API
    axios.get(apiUrl)
      .then(response => {
        // Once the data is fetched, update the 'data' state variable with the fetched data
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Usuarios</Text>
      {/*
        FlatList component is used to render a scrollable list of items efficiently
        'data' prop is set to the 'data' state variable, which contains the fetched user data
      */}
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

// StyleSheet creates styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
});