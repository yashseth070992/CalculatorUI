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
import CurrencyConverterScreen from '../screens/CurrencyConverterScreen';
import TaxCalculatorScreen from '../screens/TaxCalculatorScreen';
import EducationalResourcesScreen from '../screens/EducationalResourcesScreen';

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
      <Drawer.Screen name="Home" component={TabNavigator} options={{ title: 'Calculator' }} />
      {/* <Drawer.Screen name="Dashboard" component={DashboardScreen} /> */}
      <Drawer.Screen name="Investment Calculators" component={TabNavigator} options={{ title: 'Investment Calculators' }} />
      <Drawer.Screen name="Debt Management" component={DebtManagementScreen} />
      <Drawer.Screen name="Financial Goals" component={FinancialGoalsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Currency Converter" component={CurrencyConverterScreen} />
      <Drawer.Screen name="Tax Calculator" component={TaxCalculatorScreen} />
      <Drawer.Screen name="Educational Resources" component={EducationalResourcesScreen} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
    </Drawer.Navigator>
  );
}