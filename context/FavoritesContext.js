import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // [cite: 226]

const FavoritesContext = createContext(); 

const FAVORITES_KEY = '@GuiaParquesNacionais:favorites'; // [cite: 227]

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]); // [cite: 228]
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);

  const loadFavorites = useCallback(async () => { // [cite: 230]
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

  const saveFavorites = useCallback(async (ids) => { // [cite: 231]
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)); 
    } catch (error) {
      console.error("Erro ao salvar favoritos:", error);
    }
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]); // [cite: 232]

  useEffect(() => {
    if (!isLoadingFavorites) { 
      saveFavorites(favoriteIds);
    }
  }, [favoriteIds, isLoadingFavorites, saveFavorites]); // [cite: 234]

  const toggleFavorite = (parqueId) => { // [cite: 235]
    setFavoriteIds(prevIds => {
      if (prevIds.includes(parqueId)) {
        return prevIds.filter(id => id !== parqueId); 
      } else {
        return [...prevIds, parqueId]; 
      }
    });
  };

  const isFavorite = useCallback((parqueId) => { // [cite: 237]
    return favoriteIds.includes(parqueId);
  }, [favoriteIds]);

  const contextValue = { favoriteIds, isLoadingFavorites, toggleFavorite, isFavorite };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext); // [cite: 238]