import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StackScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cafés más populares</Text>
            <Text style={styles.coffee}>- Café Latte</Text>
            <Text style={styles.coffee}>- Espresso</Text>
            <Text style={styles.coffee}>- Cappuccino</Text>
            <Text style={styles.coffee}>- Mocha</Text>
            <Text style={styles.coffee}>- Americano</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    coffee: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 5,
    },
});

export default StackScreen;
