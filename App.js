import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar, SafeAreaView } from 'react-native';
import { colors } from './colors'; // Importing colors
import BasicComponent from './screens/BasicComponent';
import AdvancedComponent from './screens/AdvancedComponent';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}
    >
      {/* Status bar configuration */}
      <StatusBar backgroundColor={colors.backgroundSecondary} />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: colors.backgroundSecondary, // Tab background color
              borderBottomWidth: 1,
              borderBottomColor: colors.borderAccent, // Border at the bottom of the tab bar
            },
            tabBarIndicatorStyle: {
              backgroundColor: colors.accentPrimary, // Indicator color
              height: 3,
            },
            tabBarActiveTintColor: colors.accentPrimary, // Active tab text color
            tabBarInactiveTintColor: colors.textSecondary, // Inactive tab text color
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen name="Basic" component={BasicComponent} />
          <Tab.Screen name="Advanced" component={AdvancedComponent} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
