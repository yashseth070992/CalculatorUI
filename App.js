import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native';
import { colors } from './colors';
import DrawerNavigation from './components/DrawerNavigation';

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}
    >
      <StatusBar backgroundColor={colors.backgroundSecondary} />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
