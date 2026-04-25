import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const DetalhesParque = () => {
  const route = useRoute(); // Hook para acessar a rota atual e seus parâmetros
  const navigation = useNavigation();

  // Desestruturando o parâmetro que enviamos da ListaParques
  const { parqueSelecionado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{parqueSelecionado.titulo}</Text>
      <Text style={styles.descricao}>{parqueSelecionado.descricao}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Voltar para a Lista" color="#1e272e" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 16,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 18,
    color: '#636e72',
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  }
});

export default DetalhesParque;