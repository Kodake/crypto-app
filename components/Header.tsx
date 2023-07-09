import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from './HeaderStyles';
import { HEADER_STRINGS } from '../messages/appMessages';

const Header: React.FC = () => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.encabezado}>{HEADER_STRINGS.cryptoCurrency}</Text>
        </SafeAreaView>
    );
};

export default Header;
