import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import { database } from '../database/firebase'
import { collection, addDoc } from 'firebase/firestore'

const CreteUserScreen = (props) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    }

    const saveNewUser = async () => {
        if (state.name === '' || state.email === '' || state.phone === '') {
            alert('Es necesario completar todos los campos');
        } else if (!isValidEmail(state.email)) {
            alert('Ingresa un correo electrónico válido');
        } else if (!isValidPhone(state.phone)) {
            alert('Ingresa un número de teléfono válido');
        } else {
            await addDoc(collection(database, 'usuarios'), state);
            props.navigation.navigate('UsersList');
        }
    };
    
    // Funciones de validación de correo electrónico y teléfono
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
    const isValidPhone = (phone) => {
        return /^\d{10}$/.test(phone);
    };

  return (
    <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput placeholder='Nombre del usuario'
            onChangeText={(value) => handleChangeText('name', value)} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder='Email del usuario'
            onChangeText={(value) => handleChangeText('email', value)} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder='Número del usuario'
            onChangeText={(value) => handleChangeText('phone', value)}/>
        </View>
        <View>
            <Button title='Guardar usuario' onPress={() => saveNewUser()} color="#32CD32"/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: '#E6E6FA'
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    }
})

export default CreteUserScreen