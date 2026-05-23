import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { FavoritesProvider } from './context/FavoritesContext';

import ListaParques from './screens/ListaParques';
import DetalhesParque from './screens/DetalhesParque';
import FavoritosScreen from './screens/FavoritosScreen';
import MapaScreen from './screens/MapaScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ParquesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1b5e20' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="ListaParques"
        component={ListaParques}
        options={{ title: 'Parques Nacionais' }}
      />
      <Stack.Screen
        name="DetalhesParque"
        component={DetalhesParque}
        options={{ title: 'Detalhes do Parque' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Parques') {
                iconName = focused ? 'leaf' : 'leaf-outline';
              } else if (route.name === 'Favoritos') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Mapa') {
                iconName = focused ? 'map' : 'map-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2e7d32',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Parques"
            component={ParquesStack}
            options={{ tabBarLabel: 'Parques' }}
          />
          <Tab.Screen
            name="Favoritos"
            component={FavoritosScreen}
            options={{ tabBarLabel: 'Favoritos' }}
          />
          <Tab.Screen
            name="Mapa"
            component={MapaScreen}
            options={{ tabBarLabel: 'Mapa' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
