// ExpenseStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExpenseTracker from '../screens/expensetracker/ExpenseTracker';
import AddExpense from '../screens/expensetracker/AddExpense';

const Stack = createStackNavigator();

export default function ExpenseStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ExpenseTracker"
        component={ExpenseTracker}
        options={{ title: 'Expense Manager' }}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpense}
        options={{ title: 'New Expense' }}
      />
    </Stack.Navigator>
  );
}
