// Estilos globais do app — cada tela também pode ter seus próprios StyleSheet
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#0f5132',      // verde floresta profundo
  primaryLight: '#2f9e44', // verde vibrante
  accent: '#e8702a',       // terracota (destaques, favoritos)
  background: '#f4f7f3',
  card: '#ffffff',
  textLight: '#d3f0d8',
  white: '#ffffff',
  textDark: '#22332a',
  textMuted: '#677a6f',
  border: '#e3ede2',
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
    paddingBottom: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerImagem: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 12,
  },
  headerTitulo: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: 4,
  },

  // Lista
  lista: {
    paddingBottom: 32,
    paddingTop: 8,
  },

  // Card compartilhado
  card: {
    backgroundColor: colors.card,
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 5,
    borderLeftColor: colors.primaryLight,
    elevation: 3,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardCategoria: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 6,
  },
  cardDescricao: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 21,
  },
});
