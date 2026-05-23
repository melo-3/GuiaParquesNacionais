import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa dos Parques</Text>
      <Text style={styles.texto}>O mapa está disponível apenas no aplicativo mobile.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default MapaScreen;