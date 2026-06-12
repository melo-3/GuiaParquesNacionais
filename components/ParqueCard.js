import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../styles/appStyles';

const ParqueCard = ({ parque, onPress }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorito = isFavorite(parque.id);

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable} activeOpacity={0.85}>
      <View style={styles.card}>
        <View style={styles.imagemContainer}>
          <Image source={parque.imagem} style={styles.imagem} resizeMode="cover" />
          <TouchableOpacity
            onPress={() => toggleFavorite(parque.id)}
            style={[styles.favoriteButton, favorito && styles.favoriteButtonAtivo]}
          >
            <Ionicons
              name={favorito ? 'heart' : 'heart-outline'}
              size={18}
              color={favorito ? colors.white : colors.accent}
            />
          </TouchableOpacity>
          <View style={styles.badge}>
            <Text style={styles.categoria}>{parque.categoria}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titulo} numberOfLines={2}>
            {parque.titulo}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '48%',
  },
  card: {
    backgroundColor: colors.card,
    marginTop: 14,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  imagemContainer: {
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: 110,
  },
  badge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: colors.textLight,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  categoria: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
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
  infoContainer: {
    padding: 10,
  },
  titulo: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
    lineHeight: 19,
  },
});

export default ParqueCard;
