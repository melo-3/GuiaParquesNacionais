import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const DetalhesParque = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { nomeParque, descricaoParque, regiaoParque } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.regiaoTag}>
        <Text style={styles.regiaoTexto}>{regiaoParque}</Text>
      </View>
      <Text style={styles.titulo}>{nomeParque}</Text>
      <Text style={styles.descricao}>{descricaoParque}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#142615',
  },
  regiaoTag: {
    backgroundColor: '#A6775B',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 16,
  },
  regiaoTexto: {
    fontSize: 12,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 26,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#A8D5A2',
    marginBottom: 16,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 15,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#593122',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#4F7336',
  },
  botaoTexto: {
    color: '#F5EAD3',
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default DetalhesParque;