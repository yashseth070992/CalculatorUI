// SettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../colors';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.textPrimary, fontSize: 18 }}>
        Settings Page
      </Text>
    </View>
  );
}