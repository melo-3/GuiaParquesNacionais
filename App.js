import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListaParques from './screens/ListaParques';
import DetalhesParque from './screens/DetalhesParque';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListaParques"
          screenOptions={{
            headerStyle: { backgroundColor: '#142615' },
            headerTintColor: '#A8D5A2',
            headerTitleStyle: { fontFamily: 'Cochin', fontWeight: 'bold', fontSize: 26 },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
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
      </NavigationContainer>
    </ScrollView>
  );
}