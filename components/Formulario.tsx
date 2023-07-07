import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { observer } from 'mobx-react';
import { styles } from './FormulatioStyles';
import sharedStateStore from '../store/sharedStateStore';

const Formulario: React.FC = observer(() => {
  useEffect(() => {
    sharedStateStore.fetchCriptomonedas();
  }, []);

  const cotizarPrecio = () => {
    if (sharedStateStore.moneda.trim() === '' || sharedStateStore.criptomoneda.trim() === '') {
      mostrarAlerta();
      return;
    }

    sharedStateStore.cotizarCriptomoneda();
  };

  const mostrarAlerta = () => {
    Alert.alert('Error...', 'Ambos campos son obligatorios', [{ text: 'OK' }]);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={sharedStateStore.moneda}
        onValueChange={(moneda) => sharedStateStore.setMoneda(moneda)}
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
        selectedValue={sharedStateStore.criptomoneda}
        onValueChange={(cripto) => sharedStateStore.setCriptomoneda(cripto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="- Seleccione -" value="" />
        {sharedStateStore.criptomonedas.map((cripto) => (
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
