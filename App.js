import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 
import { Ionicons } from '@expo/vector-icons'; // 

// Importando o Provider do Estado Global
import { FavoritesProvider } from './context/FavoritesContext';

// Importando as Telas
import ListaParques from './screens/ListaParques';
import DetalhesParque from './screens/DetalhesParque';
import FavoritosScreen from './screens/FavoritosScreen';
import MapaScreen from './screens/MapaScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // 

// Criamos um Stack Navigator independente para a aba Explorar
function ExplorarStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Lista" 
        component={ListaParques} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Detalhes" 
        component={DetalhesParque} 
        options={{ title: 'Sobre o Parque' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false, // Oculta o cabeçalho global das abas para evitar títulos duplicados 
            tabBarIcon: ({ focused, color, size }) => { // Define ícones dinâmicos com base na seleção 
              let iconName;

              if (route.name === 'Explorar') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'Favoritos') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Mapa') {
                iconName = focused ? 'map' : 'map-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1e272e',   // Cor do ícone ativo
            tabBarInactiveTintColor: '#808e9b', // Cor do ícone inativo
            tabBarStyle: { 
              backgroundColor: '#ffffff', 
              paddingBottom: 5, 
              height: 60 
            },
          })}
        >
          {/* Configuração das três abas principais */}
          <Tab.Screen name="Explorar" component={ExplorarStack} options={{ tabBarLabel: 'Explorar' }} />
          <Tab.Screen name="Favoritos" component={FavoritosScreen} options={{ tabBarLabel: 'Favoritos' }} />
          <Tab.Screen name="Mapa" component={MapaScreen} options={{ tabBarLabel: 'Mapa' }} />
        </Tab.Navigator>
        
      </NavigationContainer>
    </FavoritesProvider>
  );
}