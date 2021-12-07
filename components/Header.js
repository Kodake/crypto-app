import React from 'react';
import { Text, StyleSheet, Platform, SafeAreaView } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 40,
        fontFamily: 'Lato-Black',
        backgroundColor: '#0077b6',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30,
    },
});

export default Header;
