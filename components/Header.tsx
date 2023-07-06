import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from './HeaderStyles';

const Header: React.FC = () => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </SafeAreaView>
    );
};

export default Header;
