import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './CotizacionStyles';
import sharedStateStore from '../store/sharedStateStore';
import { observer } from 'mobx-react';

const Cotizacion: React.FC = observer(() => {
    
    const { resultado } = sharedStateStore;

  if (!resultado) {
    return null;
  }

    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE} </Text>
            </Text>
            <Text style={styles.texto}>
                Precio más alto del día:{' '}
                <Text style={styles.span}> {resultado.HIGHDAY} </Text>
            </Text>
            <Text style={styles.texto}>
                Precio más bajo del día:{' '}
                <Text style={styles.span}> {resultado.LOWDAY} </Text>
            </Text>
            <Text style={styles.texto}>
                Variación últimas 24 horas:{' '}
                <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} % </Text>
            </Text>
            <Text style={styles.texto}>
                Última Actualización:{' '}
                <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
            </Text>
        </View>
    );
});

export default Cotizacion;
