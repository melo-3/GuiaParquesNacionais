import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.errorText}>Detalhes do parque não encontrados.</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const favoriteIconName = isFavorite(parqueDetalhes.id) ? 'heart' : 'heart-outline';
  const favoriteIconColor = isFavorite(parqueDetalhes.id) ? '#C1440E' : '#A6775B';

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.titulo}>{parqueDetalhes.nome}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(parqueDetalhes.id)} style={styles.favoriteButton}>
            <Ionicons name={favoriteIconName} size={30} color={favoriteIconColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.regiaoTag}>
          <Text style={styles.regiaoTexto}>{parqueDetalhes.regiao}</Text>
        </View>
        <Text style={styles.descricao}>{parqueDetalhes.descricao}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#142615',
  },
  contentContainer: {
    padding: 24,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#F5EAD3',
    flexShrink: 1,
    marginRight: 10,
  },
  favoriteButton: {
    padding: 5,
  },
  regiaoTag: {
    backgroundColor: '#A6775B',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 16,
  },
  regiaoTexto: {
    fontSize: 12,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 15,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#593122',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#4F7336',
  },
  botaoTexto: {
    color: '#F5EAD3',
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142615',
  },
});

export default DetalhesParque;
