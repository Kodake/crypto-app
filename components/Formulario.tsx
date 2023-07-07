import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { observer } from 'mobx-react';
import { styles } from './FormulatioStyles';
import store from '../store/sharedStateStore';

const Formulario: React.FC = observer(() => {

  useEffect(() => {
    store.fetchCriptomonedas();
  }, []);

  const cotizarPrecio = () => {
    if (store.moneda.trim() === '' || store.criptomoneda.trim() === '') {
      mostrarAlerta();
      return;
    }

    store.cotizarCriptomoneda();
  };

  const mostrarAlerta = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{ text: 'OK' }]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={store.moneda}
        onValueChange={(moneda) => store.setMoneda(moneda)}
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
        selectedValue={store.criptomoneda}
        onValueChange={(cripto) => store.setCriptomoneda(cripto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="- Seleccione -" value="" />
        {store.criptomonedas.map((cripto) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight style={styles.btnCotizar} onPress={cotizarPrecio}>
        <Text style={styles.textoCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
});

export default Formulario;
