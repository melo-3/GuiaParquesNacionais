import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps'; // Importando os componentes de mapa
import { useNavigation } from '@react-navigation/native';
import { parques } from '../data/parques'; // Importando a nossa base de dados

const MapaScreen = () => {
  const navigation = useNavigation();

  // initialRegion configura a posição inicial e o zoom da câmara do mapa.
  // Neste caso, está centralizada num ponto central do Brasil, abrangendo a maior parte do país.
  const initialRegion = {
    latitude: -14.2350,
    longitude: -51.9253,
    latitudeDelta: 35.0,
    longitudeDelta: 35.0,
  };

  return (
    <View style={styles.container}>
      {/* Componente base que desenha o mapa na tela */}
      <MapView 
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* Renderização dinâmica dos marcadores baseada na nossa lista */}
        {parques.map((parque) => (
          <Marker
            key={parque.id}
            coordinate={{ latitude: parque.latitude, longitude: parque.longitude }}
          >
            {/* O Callout é o balão que aparece ao tocar no Marker */}
            <Callout 
              tooltip={false} 
              onPress={() => navigation.navigate('Explorar', {
                screen: 'Detalhes',
                params: { parqueSelecionado: parque }
              })}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{parque.titulo}</Text>
                <Text style={styles.calloutDescription}>Tocar para ver detalhes</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // Preenche a tela inteira de forma absoluta
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Orientação exata passada no material
  },
  calloutContainer: {
    width: 200,
    padding: 10,
    alignItems: 'center',
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    color: '#2d3436',
    textAlign: 'center',
  },
  calloutDescription: {
    fontSize: 12,
    color: '#0984e3',
  }
});

export default MapaScreen;