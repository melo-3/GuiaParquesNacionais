import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../context/FavoritesContext';
import ParqueCard from '../components/ParqueCard';
import parques from '../data/parques';

const FavoritosScreen = () => {
  const navigation = useNavigation();
  const { favoriteIds, isLoadingFavorites } = useFavorites();

  const parquesFavoritos = parques.filter(parque => favoriteIds.includes(parque.id));

  if (isLoadingFavorites) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Carregando favoritos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parques Visitados</Text>
      {parquesFavoritos.length === 0 ? (
        <Text style={styles.texto}>Nenhum parque favoritado ainda.</Text>
      ) : (
        <FlatList
          data={parquesFavoritos}
          keyExtractor={(item) => item.id}
          style={{ flex: 1, width: '100%' }}
          renderItem={({ item }) => (
            <ParqueCard
              parque={item}
              onPress={() => navigation.navigate('Explorar', {
                screen: 'DetalhesParque',
                params: { parqueDetalhes: item },
              })}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#142615',
    paddingTop: 20,
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

export default FavoritosScreen;