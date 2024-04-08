import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker'

const App = () => {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Se requiere permiso para acceder al equipo');
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text>Hola Mundo!!</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style = {styles.button}
      >
        <Text style={styles.buttonText}>Presiona aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 7,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  }
});

export default App