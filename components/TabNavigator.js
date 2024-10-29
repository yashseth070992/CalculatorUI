// TabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../colors';
import BasicComponent from '../screens/BasicComponent';
import AdvancedComponent from '../screens/AdvancedComponent';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.backgroundSecondary,
          borderBottomWidth: 1,
          borderBottomColor: colors.borderAccent,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.accentPrimary,
          height: 3,
        },
        tabBarActiveTintColor: colors.accentPrimary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen name="Basic" component={BasicComponent} />
      <Tab.Screen name="Advanced" component={AdvancedComponent} />
    </Tab.Navigator>
  );
}
