// Estilos globais do app — cada tela também pode ter seus próprios StyleSheet
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#1b5e20',
  primaryLight: '#2e7d32',
  background: '#f0f4f0',
  textLight: '#a5d6a7',
  white: '#ffffff',
  textDark: '#333333',
  textMuted: '#555555',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header compartilhado
  header: {
    backgroundColor: colors.primary,
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
    color: colors.white,
    textAlign: 'center',
  },
  headerSubtitulo: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 4,
  },

  // Lista
  lista: {
    paddingBottom: 32,
  },

  // Card compartilhado
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: colors.primaryLight,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardCategoria: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primaryLight,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 6,
  },
  cardDescricao: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 21,
  },
});
