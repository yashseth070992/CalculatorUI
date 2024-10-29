// components/ResultRow.js
import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../globalStyles';
import { colors } from '../colors';

const ResultRow = ({ item, isAdvanced = false }) => (
  <View style={globalStyles.resultRow}>
    <Text style={globalStyles.cell}>{item.year || item.id}</Text>
    <Text style={globalStyles.cell}>
      ₹ {item.principal || `+${item.profit}`}
    </Text>
    <Text style={[globalStyles.cell, { color: colors.resultPositive }]}>
      ₹ {item.profit}
    </Text>
    <Text style={globalStyles.cell}>₹ {item.total}</Text>
  </View>
);

export default ResultRow;
