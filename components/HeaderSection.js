// components/HeaderSection.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../globalStyles';

const HeaderSection = ({ title, totalProfit, finalValue, onCalculate }) => (
  <View style={globalStyles.container}>
    <TouchableOpacity style={globalStyles.button} onPress={onCalculate}>
      <Text style={globalStyles.buttonText}>Calculate</Text>
    </TouchableOpacity>
    <View style={globalStyles.resultHeader}>
      <View style={globalStyles.resultColumn}>
        <Text style={globalStyles.resultHeaderText}>Total Profit</Text>
        <Text style={globalStyles.resultValue}>₹{totalProfit}</Text>
      </View>
      <View style={globalStyles.resultColumn}>
        <Text style={globalStyles.resultHeaderText}>Resulting Amount</Text>
        <Text style={globalStyles.resultValue}>₹{finalValue}</Text>
      </View>
    </View>
  </View>
);

export default HeaderSection;
