import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();
const FAVORITES_KEY = '@GuiaParques:favorites';

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);

  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
      if (storedFavorites !== null) {
        setFavoriteIds(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    } finally {
      setIsLoadingFavorites(false);
    }
  }, []);

  const saveFavorites = useCallback(async (ids) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
    } catch (error) {
      console.error("Erro ao salvar favoritos:", error);
    }
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  useEffect(() => {
    if (!isLoadingFavorites) {
      saveFavorites(favoriteIds);
    }
  }, [favoriteIds, isLoadingFavorites, saveFavorites]);

  const toggleFavorite = (parqueId) => {
    setFavoriteIds(prevIds => {
      if (prevIds.includes(parqueId)) {
        return prevIds.filter(id => id !== parqueId);
      } else {
        return [...prevIds, parqueId];
      }
    });
  };

  const isFavorite = useCallback((parqueId) => {
    return favoriteIds.includes(parqueId);
  }, [favoriteIds]);

  return (
    <FavoritesContext.Provider value={{ favoriteIds, isLoadingFavorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);