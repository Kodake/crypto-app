import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import { styles } from './AppStyles';

const App: React.FC = () => {
  const [moneda, guardarMoneda] = useState<string>('');
  const [criptomoneda, guardarCriptomoneda] = useState<string>('');
  const [consultarAPI, guardarConsultarAPI] = useState<boolean>(false);
  const [resultado, guardarResultado] = useState<any>({});
  const [cargando, guardarCargando] = useState<boolean>(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        // consultar la api para obtener la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const response = await axios.get(url);

        // console.log(response.data.DISPLAY[criptomoneda][moneda] );
        guardarCargando(true);

        // Ocultar el spinner y mostrar el resultado
        setTimeout(() => {
          guardarResultado(response.data.DISPLAY[criptomoneda][moneda]);
          guardarConsultarAPI(false);
          guardarCargando(false);
        }, 3000);
      }
    };
    cotizarCriptomoneda();
  }, [consultarAPI, criptomoneda, moneda]);

  // mostrar el spinner o el resultado
  const componente = cargando ? (
    <ActivityIndicator size="large" color="#0077b6" />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <>
      <ScrollView>
        <Header />

        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
            guardarConsultarAPI={guardarConsultarAPI}
          />
        </View>
        <View style={{ marginTop: 40 }}>{componente}</View>
      </ScrollView>
    </>
  );
};

export default App;
