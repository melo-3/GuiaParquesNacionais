import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

const DetalhesParque = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { isFavorite, toggleFavorite } = useFavorites();

  const { parqueDetalhes } = route.params;

  if (!parqueDetalhes) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Detalhes do parque não encontrados.</Text>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.botaoVoltarTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const favoriteIconName = isFavorite(parqueDetalhes.id) ? 'heart' : 'heart-outline';
  const favoriteIconColor = isFavorite(parqueDetalhes.id) ? 'red' : 'gray';

  const abrirMaps = () => {
    const { latitude, longitude, titulo } = parqueDetalhes;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${titulo}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.categoria}>{parqueDetalhes.categoria}</Text>
          <TouchableOpacity
            onPress={() => toggleFavorite(parqueDetalhes.id)}
            style={styles.favoriteButton}
          >
            <Ionicons name={favoriteIconName} size={30} color={favoriteIconColor} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{parqueDetalhes.titulo}</Text>
        <Text style={styles.descriptionText}>{parqueDetalhes.descricao}</Text>

        <TouchableOpacity style={styles.botaoMaps} onPress={abrirMaps}>
          <Ionicons name="map" size={20} color="#fff" style={styles.botaoMapsIcone} />
          <Text style={styles.botaoMapsTexto}>Ver no Google Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltarContainer}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.botaoVoltarTexto}>Voltar para a Lista</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f0f4f0',
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  categoria: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2e7d32',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  favoriteButton: {
    padding: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify',
    color: '#444',
    marginBottom: 30,
  },
  botaoMaps: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1b5e20',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 28,
    marginBottom: 14,
    elevation: 4,
  },
  botaoMapsIcone: {
    marginRight: 8,
  },
  botaoMapsTexto: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  botaoVoltarContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  botaoVoltarTexto: {
    color: '#2e7d32',
    fontSize: 15,
    fontWeight: '600',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f0',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 50,
  },
});

export default DetalhesParque;
