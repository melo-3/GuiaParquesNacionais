import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Usamos uma arrow function e desestruturamos as props para pegar diretamente titulo, descricao e a 'onPress' para receber a ação de clique
const ParqueCard = ({ titulo, descricao, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff', // Fundo branco sólido
    padding: 20,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 16, // Bordas bem arredondadas

    // Configurações de sombra para dar um efeito sutil de elevação (Flat Design)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3, // Sombra no Android
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    color: '#636e72',
    lineHeight: 24, // Aumenta o espaçamento entre linhas para melhor legibilidade
  }
});

export default ParqueCard;