import React, { useState, useEffect } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { styles } from './FormulatioStyles';
import { Criptomoneda, FormularioProps } from '../interfaces/appInterfaces';

const Formulario: React.FC<FormularioProps> = ({
    moneda,
    criptomoneda,
    guardarMoneda,
    guardarCriptomoneda,
    guardarConsultarAPI,
}) => {
    const [criptomonedas, guardarCriptomonedas] = useState<Criptomoneda[]>([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url =
                'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        };
        consultarAPI();
    }, []);

    const obtenerMoneda = (moneda: string) => {
        guardarMoneda(moneda);
    };

    const obtenerCriptomoneda = (cripto: string) => {
        guardarCriptomoneda(cripto);
    };

    const cotizarPrecio = () => {
        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            mostrarAlerta();
            return;
        }

        guardarConsultarAPI(true);
    };

    const mostrarAlerta = () => {
        Alert.alert('Error...', 'Ambos campos son obligatorios', [{ text: 'OK' }]);
    };

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={(moneda) => obtenerMoneda(moneda)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="- Seleccione -" value="" />
                <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                <Picker.Item label="Peso Mexicano" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={(cripto) => obtenerCriptomoneda(cripto)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="- Seleccione -" value="" />
                {criptomonedas.map((cripto) => (
                    <Picker.Item
                        key={cripto.CoinInfo.Id}
                        label={cripto.CoinInfo.FullName}
                        value={cripto.CoinInfo.Name}
                    />
                ))}
            </Picker>

            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}
            >
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Formulario;
