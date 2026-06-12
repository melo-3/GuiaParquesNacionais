import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParqueCard from '../components/ParqueCard';
import parques from '../data/parques';

const ListaParques = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedRegiao, setSelectedRegiao] = useState('Todas');

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const filteredParques = useMemo(() => {
    let currentFiltered = parques;

    if (debouncedSearchTerm) {
      const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();
      currentFiltered = currentFiltered.filter(parque =>
        parque.nome.toLowerCase().includes(lowerCaseSearchTerm) ||
        parque.descricao.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    if (selectedRegiao !== 'Todas') {
      currentFiltered = currentFiltered.filter(parque =>
        parque.regiao === selectedRegiao
      );
    }

    return currentFiltered;
  }, [debouncedSearchTerm, selectedRegiao]);

  const handleParquePress = (parque) => {
    navigation.navigate('DetalhesParque', { parqueDetalhes: parque });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Descubra a natureza de cada região do Brasil</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar parques..."
        placeholderTextColor="#A6775B"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <View style={styles.filterContainer}>
        {['Todas', 'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'].map(regiao => (
          <TouchableOpacity
            key={regiao}
            style={[
              styles.filterButton,
              selectedRegiao === regiao && styles.selectedFilterButton,
            ]}
            onPress={() => setSelectedRegiao(regiao)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedRegiao === regiao && styles.selectedFilterButtonText,
              ]}
            >
              {regiao}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {filteredParques.length === 0 && debouncedSearchTerm !== '' ? (
        <Text style={styles.noResultsText}>Nenhum parque encontrado para "{debouncedSearchTerm}".</Text>
      ) : (
        <FlatList
          data={filteredParques}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          renderItem={({ item }) => (
            <ParqueCard
              parque={item}
              onPress={() => handleParquePress(item)}
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
    backgroundColor: '#142615',
    paddingTop: 20,
    paddingBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
    color: '#F5EAD3',
  },
  searchInput: {
    height: 45,
    borderColor: '#4F7336',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: '#593122',
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 12,
    gap: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#593122',
    borderWidth: 1,
    borderColor: '#4F7336',
  },
  selectedFilterButton: {
    backgroundColor: '#4F7336',
  },
  filterButtonText: {
    color: '#CCBBAB',
    fontFamily: 'Trebuchet MS',
    fontSize: 12,
    fontWeight: 'bold',
  },
  selectedFilterButtonText: {
    color: '#F5EAD3',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Trebuchet MS',
    color: '#A6775B',
  },
});

export default ListaParques;