import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando nossas telas
import ListaParques from './screens/ListaParques';
import DetalhesParque from './screens/DetalhesParque';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen 
          name="Lista" 
          component={ListaParques} 
          options={{ headerShown: false }} // Esconde o cabeçalho padrão para mantermos o nosso estilizado
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetalhesParque} 
          options={{ title: 'Sobre o Parque' }} // Define o título do cabeçalho que o React Navigation cria automaticamente
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}