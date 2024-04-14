import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Se requiere permiso para acceder al equipo');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri})
  }

  return (
    <View style={styles.container}>
      <Text>Hola Mundo!!</Text>
      <Image
        source={{uri: selectedImage !== null
          ? selectedImage.localUri
          : "https://picsum.photos/200/200"
        }}
        style={styles.image}
      />
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
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: 'contain'
  }
});

export default App;