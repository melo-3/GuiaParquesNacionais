import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

const ParqueCard = ({ parque, onPress }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favoriteIconName = isFavorite(parque.id) ? 'heart' : 'heart-outline';
  const favoriteIconColor = isFavorite(parque.id) ? 'red' : 'gray';

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.categoria}>{parque.categoria}</Text>
          <Text style={styles.titulo}>{parque.titulo}</Text>
          <Text style={styles.descricao} numberOfLines={2}>
            {parque.descricao}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleFavorite(parque.id)}
          style={styles.favoriteButton}
        >
          <Ionicons name={favoriteIconName} size={24} color={favoriteIconColor} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  categoria: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2e7d32',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 21,
  },
  favoriteButton: {
    padding: 5,
  },
});

export default ParqueCard;
