import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';
import parques from '../data/parques';

const ListaParques = () => {
  const navigation = useNavigation();

  const handleParquePress = (parque) => {
    navigation.navigate('DetalhesParque', { parqueDetalhes: parque });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Descubra a natureza de cada região do Brasil</Text>
      <FlatList
        data={parques}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <ParqueCard
            parque={item}
            onPress={() => handleParquePress(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#142615',
    paddingTop: 20,
    paddingBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
    marginBottom: 24,
    marginHorizontal: 20,
    color: '#F5EAD3',
    marginTop: -20,
  },
});

export default ListaParques;