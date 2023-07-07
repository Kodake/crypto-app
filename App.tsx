import React, { useEffect } from 'react';
import { Image, View, ScrollView, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import { styles } from './AppStyles';
import store from './store/sharedStateStore';

const App: React.FC = observer(() => {

  useEffect(() => {
    store.cotizarCriptomoneda();
  }, []);

  const componente = store.cargando ? (
    <ActivityIndicator size="large" color="#0077b6" />
  ) : (
    <Cotizacion />
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
          <Formulario />
        </View>
        <View style={{ marginTop: 40 }}>{componente}</View>
      </ScrollView>
    </>
  );
});

export default App;
