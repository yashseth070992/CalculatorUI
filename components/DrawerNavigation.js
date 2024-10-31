import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors';
import TabNavigator from './TabNavigator';
import DebtManagementScreen from '../screens/DebtManagementScreen';
import FinancialGoalsScreen from '../screens/FinancialGoalsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaxCalculatorScreen from '../screens/TaxCalculatorScreen';
import EducationalResourcesScreen from '../screens/EducationalResourcesScreen';
import Dashboard from '../screens/dashboard/Dashboard';

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
        component={Dashboard}
        options={{
          title: 'Dashboard',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calculator-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Investment Calculators"
        component={TabNavigator}
        options={{
          title: 'Investment Calculators',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Debt Management"
        component={DebtManagementScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Financial Goals"
        component={FinancialGoalsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tax Calculator"
        component={TaxCalculatorScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Educational Resources"
        component={EducationalResourcesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
