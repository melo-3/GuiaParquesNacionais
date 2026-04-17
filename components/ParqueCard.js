import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParqueCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.regiaoTag}>
        <Text style={styles.regiaoTexto}>{props.regiao}</Text>
      </View>
      <Text style={styles.titulo}>{props.nome}</Text>
      <Text style={styles.descricao}>{props.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#593122',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4F7336',
  },
  regiaoTag: {
    backgroundColor: '#A6775B',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  regiaoTexto: {
    fontSize: 11,
    fontFamily: 'Trebuchet MS',
    color: '#F5EAD3',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#F5EAD3',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 13,
    fontFamily: 'Trebuchet MS',
    color: '#CCBBAB',
    lineHeight: 20,
  },
});

export default ParqueCard;