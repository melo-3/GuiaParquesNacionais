import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';

const parques = [
  { id: '1', titulo: 'Parque Nacional do Iguaçu', descricao: 'Casa das famosas Cataratas do Iguaçu, é um Patrimônio Natural da Humanidade rico em biodiversidade.' },
  { id: '2', titulo: 'Chapada Diamantina', descricao: 'Famoso por suas montanhas, cachoeiras imensas e grutas subterrâneas de águas cristalinas na Bahia.' },
  { id: '3', titulo: 'Lençóis Maranhenses', descricao: 'Uma paisagem única de dunas de areia branca intercaladas por lagoas de água doce formadas pelas chuvas.' },
  { id: '4', titulo: 'Serra dos Órgãos', descricao: 'Localizado no Rio de Janeiro, abriga o famoso pico Dedo de Deus e é um paraíso para o montanhismo.' },
  { id: '5', titulo: 'Parque Nacional do Jaú', descricao: 'Uma das maiores reservas florestais da Amazônia, preservando a bacia do rio Jaú e sua fauna exótica.' },
  { id: '6', titulo: 'Chapada dos Veadeiros', descricao: 'Cerrado de altitude em Goiás, conhecido por seus cânions, cachoeiras e formações de cristais de quartzo.' }
];

const ListaParques = () => {
  const navigation = useNavigation(); // Hook para acessar a navegação

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Portfólio Mobile</Text>
        <Text style={styles.subTitle}>Guia de Parques Nacionais</Text>
      </View>

      <View style={styles.listContainer}>
        {parques.map((parque) => (
          <ParqueCard 
            key={parque.id} 
            titulo={parque.titulo} 
            descricao={parque.descricao}
            // Navega para a tela 'Detalhes' passando o objeto do parque inteiro como parâmetro
            onPress={() => navigation.navigate('Detalhes', { parqueSelecionado: parque })}
          />
        ))}
      </View>
    </ScrollView>
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