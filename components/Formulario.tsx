import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { observer } from 'mobx-react';
import { styles } from './FormulatioStyles';
import store from '../store/sharedStateStore';
import { FORMULARIO_STRINGS } from '../messages/formularioMessages';

const Formulario: React.FC = observer(() => {

  useEffect(() => {
    store.fetchCriptomonedas();
  }, []);

  return (
    <View>
      <Text style={styles.label}>{FORMULARIO_STRINGS.currency}</Text>
      <Picker
        selectedValue={store.moneda}
        onValueChange={(moneda) => store.setMoneda(moneda)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label={FORMULARIO_STRINGS.select} value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>

      <Text style={styles.label}>{FORMULARIO_STRINGS.cryptoCurrency}</Text>
      <Picker
        selectedValue={store.criptomoneda}
        onValueChange={(cripto) => store.setCriptomoneda(cripto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label={FORMULARIO_STRINGS.select} value="" />
        {store.criptomonedas.map((cripto) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight style={styles.btnCotizar} onPress={store.cotizarPrecio}>
        <Text style={styles.textoCotizar}>{FORMULARIO_STRINGS.price}</Text>
      </TouchableHighlight>
    </View>
  );
});

export default Formulario;
