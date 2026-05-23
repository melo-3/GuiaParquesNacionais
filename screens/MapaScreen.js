import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { atracoesData } from '../data/parques';

const MapaScreen = () => {
  const abrirMaps = (parque) => {
    const { latitude, longitude, titulo } = parque;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${titulo}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização dos Parques</Text>
      <Text style={styles.subtitle}>Toque em um parque para abrir no Google Maps</Text>
      <FlatList
        data={atracoesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => abrirMaps(item)}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemCategoria}>{item.categoria}</Text>
              <Text style={styles.itemTitulo}>{item.titulo}</Text>
            </View>
            <Ionicons name="navigate-circle-outline" size={32} color="#1b5e20" />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f0',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1b5e20',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  lista: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemCategoria: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2e7d32',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  itemTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
});

export default MapaScreen;
