import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';
import { atracoesData } from '../data/parques';
import { colors } from '../styles/appStyles';

const ListHeader = () => (
  <View style={styles.header}>
    <Image
      source={require('../assets/Ubajara_park.jpg')}
      style={styles.headerImagem}
      resizeMode="cover"
    />
    <Text style={styles.headerTitulo}>Parques Nacionais do Brasil</Text>
    <Text style={styles.headerSubtitulo}>Guia do Visitante aos principais parques!</Text>
  </View>
);

const ListaParques = () => {
  const navigation = useNavigation();

  const handleParquePress = (parque) => {
    navigation.navigate('DetalhesParque', { parqueDetalhes: parque });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={atracoesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.linha}
        renderItem={({ item }) => (
          <ParqueCard
            parque={item}
            onPress={() => handleParquePress(item)}
          />
        )}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingBottom: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 4,
  },
  headerImagem: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 12,
  },
  headerTitulo: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 4,
  },
  linha: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  lista: {
    paddingBottom: 32,
  },
});

export default ListaParques;
