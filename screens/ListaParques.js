import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'; // Alterado de ScrollView para FlatList
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';
import { parques } from '../data/parques';

const ListaParques = () => {
  const navigation = useNavigation();

  // Função isolada para o clique, seguindo as boas práticas da aula [cite: 171]
  const handleParquePress = (parque) => {
    navigation.navigate('Detalhes', { parqueSelecionado: parque }); // [cite: 171]
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.mainTitle}>Portfólio Mobile</Text>
      <Text style={styles.subTitle}>Guia de Parques Nacionais</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={parques} // [cite: 174]
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ParqueCard
            parque={item} // Passa o objeto completo para o card [cite: 264]
            onPress={() => handleParquePress(item)} 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ecf0f1' },
  header: {
    paddingTop: 40, paddingBottom: 30, paddingHorizontal: 20,
    backgroundColor: '#1e272e', borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30, marginBottom: 20,
  },
  mainTitle: { fontSize: 14, color: '#808e9b', textTransform: 'uppercase', letterSpacing: 2, fontWeight: '600' },
  subTitle: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginTop: 6 },
  listContainer: { paddingBottom: 40 }
});

export default ListaParques;