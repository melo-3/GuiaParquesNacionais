import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';
import { atracoesData } from '../data/parques';

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
    backgroundColor: '#f0f4f0',
  },
  header: {
    backgroundColor: '#1b5e20',
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerImagem: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 12,
  },
  headerTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerSubtitulo: {
    fontSize: 14,
    color: '#a5d6a7',
    marginTop: 4,
  },
  lista: {
    paddingBottom: 32,
  },
});

export default ListaParques;
