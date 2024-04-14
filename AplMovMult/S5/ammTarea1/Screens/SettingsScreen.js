import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cafés más populares</Text>
            <View style={styles.coffeeContainer}>
                <View style={styles.coffeeItem}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg' }} style={styles.image} />
                    <Text style={styles.price}>$3.50</Text>
                </View>
                <View style={styles.coffeeItem}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Double_Espresso.jpg' }} style={styles.image} />
                    <Text style={styles.price}>$4.00</Text>
                </View>
                <View style={styles.coffeeItem}>
                    <Image source={{ uri: 'https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg' }} style={styles.image} />
                    <Text style={styles.price}>$3.75</Text>
                </View>
                <View style={styles.coffeeItem}>
                    <Image source={{ uri: 'https://www.starbucksathome.com/pe/sites/default/files/2021-03/Cafe-Mocha-5.jpg' }} style={styles.image} />
                    <Text style={styles.price}>$4.25</Text>
                </View>
                <View style={styles.coffeeItem}>
                    <Image source={{ uri: 'https://bittercoffees.com/wp-content/uploads/2022/02/Cafe%CC%81-Americano-.jpeg' }} style={styles.image} />
                    <Text style={styles.price}>$3.90</Text>
                </View>
            </View>
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
    coffeeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    coffeeItem: {
        alignItems: 'center',
        margin: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    price: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 5,
    },
});

export default SettingsScreen;