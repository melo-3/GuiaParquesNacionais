import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../context/FavoritesContext';
import { atracoesData } from '../data/parques';
import ParqueCard from '../components/ParqueCard';
import { colors } from '../styles/appStyles';

const FavoritosScreen = () => {
  const { favoriteIds, isLoadingFavorites } = useFavorites();
  const navigation = useNavigation();

  if (isLoadingFavorites) {
    return (
      <View style={styles.container}>
        <Text>Carregando favoritos...</Text>
      </View>
    );
  }

  const parquesFavoritos = atracoesData.filter((p) => favoriteIds.includes(p.id));

  const handleParquePress = (parque) => {
    navigation.navigate('Parques', {
      screen: 'DetalhesParque',
      params: { parqueDetalhes: parque },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Favoritos</Text>
      {parquesFavoritos.length === 0 ? (
        <Text style={styles.emptyText}>
          Nenhum parque favoritado ainda.{'\n'}
          Explore e favorite seus parques preferidos!
        </Text>
      ) : (
        <FlatList
          data={parquesFavoritos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.linha}
          renderItem={({ item }) => (
            <ParqueCard
              parque={item}
              onPress={() => handleParquePress(item)}
            />
          )}
          contentContainerStyle={styles.lista}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.primary,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 16,
    marginTop: 20,
    lineHeight: 26,
    paddingHorizontal: 40,
  },
  linha: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  lista: {
    paddingBottom: 32,
  },
});

export default FavoritosScreen;
