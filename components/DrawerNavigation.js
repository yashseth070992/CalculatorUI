import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors';
import TabNavigator from './TabNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: colors.backgroundPrimary,
        },
        drawerActiveBackgroundColor: colors.selectedBackground,
        drawerActiveTintColor: colors.selectedText,
        drawerInactiveTintColor: colors.textSecondary,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ paddingLeft: 16 }}
          >
            <Ionicons name="menu" size={24} color={colors.accentPrimary} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{ paddingRight: 16 }}>
            <Ionicons
              name="person-circle-outline"
              size={32}
              color={colors.accentPrimary}
            />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ title: 'Calculator' }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
