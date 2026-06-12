import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../styles/appStyles';

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

  const favorito = isFavorite(parqueDetalhes.id);

  const abrirMaps = () => {
    const { latitude, longitude, titulo } = parqueDetalhes;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${titulo}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
      {parqueDetalhes.imagem && (
        <Image source={parqueDetalhes.imagem} style={styles.imagemTopo} resizeMode="cover" />
      )}
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.categoria}>{parqueDetalhes.categoria}</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleFavorite(parqueDetalhes.id)}
            style={[styles.favoriteButton, favorito && styles.favoriteButtonAtivo]}
          >
            <Ionicons
              name={favorito ? 'heart' : 'heart-outline'}
              size={22}
              color={favorito ? colors.white : colors.accent}
            />
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
    backgroundColor: colors.background,
  },
  imagemTopo: {
    width: '100%',
    height: 220,
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: colors.textLight,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  categoria: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  favoriteButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButtonAtivo: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify',
    color: colors.textDark,
    marginBottom: 30,
  },
  botaoMaps: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
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
    color: colors.primaryLight,
    fontSize: 15,
    fontWeight: '600',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 50,
  },
});

export default DetalhesParque;
