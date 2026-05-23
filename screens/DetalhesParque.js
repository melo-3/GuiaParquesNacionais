import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // [cite: 267]
import { useFavorites } from '../context/FavoritesContext'; // [cite: 267]

const DetalhesParque = () => {
  const route = useRoute(); 
  const navigation = useNavigation();
  const { parqueSelecionado } = route.params;

  const { isFavorite, toggleFavorite } = useFavorites(); // [cite: 268]

  // Tratamento caso os detalhes não sejam passados 
  if (!parqueSelecionado) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Parque não encontrado.</Text>
        <Button title="Voltar" color="#1e272e" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const isFav = isFavorite(parqueSelecionado.id);
  const favoriteIconName = isFav ? 'heart' : 'heart-outline'; // [cite: 271]
  const favoriteIconColor = isFav ? 'red' : 'gray'; // [cite: 272]

  return (
    <View style={styles.container}>
      {/* Novo container para título e favorito lado a lado [cite: 272] */}
      <View style={styles.headerTitle}>
        <Text style={[styles.titulo, {flex: 1}]}>{parqueSelecionado.titulo}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(parqueSelecionado.id)}>
          <Ionicons name={favoriteIconName} size={32} color={favoriteIconColor} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.descricao}>{parqueSelecionado.descricao}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Voltar para a Lista" color="#1e272e" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  headerTitle: {
    flexDirection: 'row', // [cite: 273]
    justifyContent: 'space-between', // [cite: 274]
    alignItems: 'center', // [cite: 274]
    width: '100%', // [cite: 274]
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginRight: 10, // [cite: 274]
  },
  descricao: {
    fontSize: 18,
    color: '#636e72',
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  }
});

export default DetalhesParque;