import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // [cite: 254]
import { useFavorites } from '../context/FavoritesContext'; // [cite: 254]

// Agora recebe a prop 'parque' completa [cite: 255]
const ParqueCard = ({ parque, onPress }) => {
  const { isFavorite, toggleFavorite } = useFavorites(); // [cite: 255]
  
  const isFav = isFavorite(parque.id); // Verifica se está nos favoritos
  const favoriteIconName = isFav ? 'heart' : 'heart-outline'; // [cite: 257]
  const favoriteIconColor = isFav ? 'red' : 'gray'; // [cite: 258]

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{parque.titulo}</Text>
        <Text style={styles.descricao}>{parque.descricao}</Text>
      </View>
      
      {/* Botão de favorito utilizando toggleFavorite do contexto [cite: 256, 281] */}
      <TouchableOpacity onPress={() => toggleFavorite(parque.id)} style={styles.favoriteButton}>
        <Ionicons name={favoriteIconName} size={28} color={favoriteIconColor} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Alinhar textos e botão lado a lado [cite: 260]
    alignItems: 'center', // [cite: 260]
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  infoContainer: { 
    flex: 1, // Para a informação ocupar o espaço restante [cite: 261]
    marginRight: 10 
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: '#636e72',
    lineHeight: 24,
  },
  favoriteButton: { 
    padding: 5 // [cite: 261]
  }
});

export default ParqueCard;