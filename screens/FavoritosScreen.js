import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';
import { parques } from '../data/parques';

const FavoritosScreen = () => {
  const { favoriteIds } = useFavorites();
  const navigation = useNavigation();

  // Filtra apenas os parques cujos IDs estão guardados no AsyncStorage do contexto
  const parquesFavoritos = parques.filter(parque => favoriteIds.includes(parque.id));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Portfólio Mobile</Text>
        <Text style={styles.subTitle}>Os Meus Favoritos</Text>
      </View>

      {parquesFavoritos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Ainda não adicionou nenhum parque aos favoritos.</Text>
        </View>
      ) : (
        <FlatList
          data={parquesFavoritos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <ParqueCard
              parque={item}
              // Navegação segura entre fluxos aninhados: vai para o Stack 'Explorar' e abre a tela 'Detalhes'
              onPress={() => navigation.navigate('Explorar', {
                screen: 'Detalhes',
                params: { parqueSelecionado: item }
              })}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ecf0f1' },
  header: {
    paddingTop: 40, paddingBottom: 30, paddingHorizontal: 20,
    backgroundColor: '#ff4d4d', borderBottomLeftRadius: 30, // Cor avermelhada subtil para combinar com favoritos
    borderBottomRightRadius: 30, marginBottom: 20,
  },
  mainTitle: { fontSize: 14, color: '#ffcccc', textTransform: 'uppercase', letterSpacing: 2, fontWeight: '600' },
  subTitle: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginTop: 6 },
  listContainer: { paddingBottom: 40 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  emptyText: { fontSize: 16, color: '#7f8c8d', textAlign: 'center', lineHeight: 22 }
});

export default FavoritosScreen;