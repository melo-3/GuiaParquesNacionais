import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import parques from '../data/parques';

const coordenadas = {
  '1': { latitude: -4.0, longitude: -59.0 },
  '2': { latitude: -12.5, longitude: -41.3 },
  '3': { latitude: -15.7, longitude: -47.9 },
  '4': { latitude: -25.6, longitude: -54.4 },
  '5': { latitude: -20.2, longitude: -46.5 },
  '6': { latitude: -14.1, longitude: -47.6 },
};

const initialRegion = {
  latitude: -14.0,
  longitude: -51.0,
  latitudeDelta: 30,
  longitudeDelta: 30,
};

const MapaScreen = () => {
  const navigation = useNavigation();

  if (Platform.OS === 'web') {
    return (
      <View style={styles.webContainer}>
        <Text style={styles.title}>Mapa dos Parques</Text>
        <Text style={styles.texto}>O mapa está disponível apenas no aplicativo mobile.</Text>
      </View>
    );
  }

  const MapView = require('react-native-maps').default;
  const { Marker, Callout } = require('react-native-maps');

  const handleMarkerPress = (parque) => {
    navigation.navigate('Explorar', {
      screen: 'DetalhesParque',
      params: { parqueDetalhes: parque },
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
        {parques.map(parque => (
          <Marker
            key={parque.id}
            coordinate={coordenadas[parque.id]}
            title={parque.nome}
            description={parque.descricao}
          >
            <Callout onPress={() => handleMarkerPress(parque)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{parque.nome}</Text>
                <Text style={styles.calloutRegiao}>{parque.regiao}</Text>
                <Text style={styles.calloutDescription}>{parque.descricao}</Text>
                <Text style={styles.calloutLink}>Ver Detalhes »</Text>
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
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  webContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142615',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#A8D5A2',
  },
  texto: {
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
  },
  calloutContainer: {
    width: 180,
    padding: 5,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
    color: '#142615',
  },
  calloutRegiao: {
    fontSize: 11,
    color: '#4F7336',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  calloutDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  calloutLink: {
    fontSize: 12,
    color: '#C1440E',
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default MapaScreen;