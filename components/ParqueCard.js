import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';

const ParqueCard = ({ parque, onPress }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favoriteIconName = isFavorite(parque.id) ? 'heart' : 'heart-outline';
  const favoriteIconColor = isFavorite(parque.id) ? '#C1440E' : '#A6775B';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.infoContainer}>
        <View style={styles.regiaoTag}>
          <Text style={styles.regiaoTexto}>{parque.regiao}</Text>
        </View>
        <Text style={styles.titulo}>{parque.nome}</Text>
        <Text style={styles.descricao}>{parque.descricao}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(parque.id)} style={styles.favoriteButton}>
        <Ionicons name={favoriteIconName} size={24} color={favoriteIconColor} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#593122',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4F7336',
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  regiaoTag: {
    backgroundColor: '#A6775B',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  regiaoTexto: {
    fontSize: 11,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#F5EAD3',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 13,
    fontFamily: 'Trebuchet MS',
    color: '#CCBBAB',
    lineHeight: 20,
  },
  favoriteButton: {
    padding: 5,
  },
});

export default ParqueCard;