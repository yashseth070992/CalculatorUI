import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicComponent from './screens/BasicComponent';
import AdvancedComponent from './screens/AdvancedComponent';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Basic" component={BasicComponent} />
        <Tab.Screen name="Advanced" component={AdvancedComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}