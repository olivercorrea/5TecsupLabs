import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri: 'https://i.pinimg.com/736x/fd/3f/d6/fd3fd667d1dde2ab7c88fc508e4a0ae4.jpg'}} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Stack')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Ver lista de más populares</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        marginTop: '20%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
    },
});

export default HomeScreen;
