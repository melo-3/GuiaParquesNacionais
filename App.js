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

function ExplorarStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#142615' },
        headerTintColor: '#A8D5A2',
        headerTitleStyle: { fontFamily: 'Cochin', fontWeight: 'bold', fontSize: 36 },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#142615', height: 100 },
      }}
    >
      <Stack.Screen
        name="ListaParques"
        component={ListaParques}
        options={{ title: 'Guia de Parques Nacionais' }}
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
              if (route.name === 'Explorar') {
                iconName = focused ? 'compass' : 'compass-outline';
              } else if (route.name === 'Visitados') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Mapa') {
                iconName = focused ? 'map' : 'map-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4F7336',
            tabBarInactiveTintColor: '#A6775B',
            tabBarStyle: { backgroundColor: '#142615' },
            headerShown: false,
          })}
        >
          <Tab.Screen
            name="Explorar"
            component={ExplorarStack}
            options={{ tabBarLabel: 'Explorar' }}
          />
          <Tab.Screen
            name="Visitados"
            component={FavoritosScreen}
            options={{ tabBarLabel: 'Visitados' }}
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