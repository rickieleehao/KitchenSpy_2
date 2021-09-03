import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './navigation/tabs'
import { RecipePage, Start, ItemList, Profile } from './screens'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          "tabBarShowLabel": false,
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}
        initialRouteName={'Start'}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="RecipePage" component={RecipePage} />
        <Stack.Screen name="ItemList" component={ItemList} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;