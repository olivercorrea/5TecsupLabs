import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();
    
    return ( 
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Stack')}
                style={{
                    backgroundColor: 'purple',
                    padding: 10,
                    marginTop: '20%',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: 'white'
                    }}
                >Ir a pantalla Stack</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;