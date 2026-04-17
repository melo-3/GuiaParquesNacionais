import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ParqueCard from './components/ParqueCard';

const parques = [
  {
    id: '1',
    nome: 'Parque Nacional da Amazônia',
    descricao: 'Localizado no Pará, protege uma das áreas mais ricas em biodiversidade da floresta amazônica.',
    regiao: 'Norte',
  },
  {
    id: '2',
    nome: 'Parque Nacional da Chapada Diamantina',
    descricao: 'Na Bahia, encanta com cachoeiras, grutas e chapadas no coração do sertão nordestino.',
    regiao: 'Nordeste',
  },
  {
    id: '3',
    nome: 'Parque Nacional de Brasília',
    descricao: 'Conhecido como "Água Mineral", preserva o cerrado e abastece parte da capital federal.',
    regiao: 'Centro-Oeste',
  },
  {
    id: '4',
    nome: 'Parque Nacional do Iguaçu',
    descricao: 'No Paraná, abriga as famosas Cataratas do Iguaçu, Patrimônio Natural da Humanidade pela UNESCO.',
    regiao: 'Sul',
  },
  {
    id: '5',
    nome: 'Parque Nacional da Serra da Canastra',
    descricao: 'Em Minas Gerais, é a nascente do Rio São Francisco e lar de lobos-guará e tamanduás-bandeira.',
    regiao: 'Sudeste',
  },
  {
    id: '6',
    nome: 'Parque Nacional da Chapada dos Veadeiros',
    descricao: 'Em Goiás, protege o cerrado com cachoeiras cristalinas e formações rochosas milenares.',
    regiao: 'Centro-Oeste',
  },
];

export default function App() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Guia de Parques Nacionais</Text>
        <Text style={styles.subtitle}>Descubra a natureza de cada região do Brasil</Text>

        {parques.map(parque => (
          <ParqueCard
            key={parque.id}
            nome={parque.nome}
            descricao={parque.descricao}
            regiao={parque.regiao}
          />
        ))}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#142615',
  },
  container: {
    flex: 1,
    backgroundColor: '#142615',
    paddingTop: 50,
    paddingBottom: 30,
  },
  mainTitle: {
    fontSize: 26,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
    marginHorizontal: 20,
    color: '#A8D5A2',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
    marginBottom: 24,
    marginHorizontal: 20,
    color: '#F5EAD3',
  },
});