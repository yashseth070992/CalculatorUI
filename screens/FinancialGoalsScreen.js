import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../globalStyles';

export default function FinancialGoalsScreen() {
  const [goal, setGoal] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [sipAmount, setSipAmount] = useState(null);

  const assumedReturnRate = 0.12; // Assuming a 12% annual return rate

  const calculateSIP = () => {
    if (!goal || !targetAmount || !timeFrame) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const monthlyRate = Math.pow(1 + assumedReturnRate, 1 / 12) - 1;
    const months = timeFrame * 12;
    const monthlySIP =
      targetAmount / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    setSipAmount(monthlySIP.toFixed(2));
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Set Your Financial Goal</Text>

      <Text style={globalStyles.label}>What do you want to buy?</Text>
      <Picker
        selectedValue={goal}
        onValueChange={(itemValue) => setGoal(itemValue)}
        style={globalStyles.pickerContainer}
      >
        <Picker.Item label="Select a goal" value="" />
        <Picker.Item label="Car" value="Car" />
        <Picker.Item label="House" value="House" />
        <Picker.Item label="Vacation" value="Vacation" />
        <Picker.Item label="Education" value="Education" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={globalStyles.label}>Target Amount (₹)</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Enter the amount needed"
        value={targetAmount}
        onChangeText={setTargetAmount}
        keyboardType="numeric"
      />

      <Text style={globalStyles.label}>Time Frame (Years)</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Enter years to reach goal"
        value={timeFrame}
        onChangeText={setTimeFrame}
        keyboardType="numeric"
      />

      <TouchableOpacity style={globalStyles.button} onPress={calculateSIP}>
        <Text style={globalStyles.buttonText}>Calculate SIP</Text>
      </TouchableOpacity>

      {sipAmount && (
        <View style={globalStyles.resultContainer}>
          <Text style={globalStyles.resultText}>
            To reach your goal of buying a {goal} in {timeFrame} years, you need
            to invest:
          </Text>
          <Text style={globalStyles.resultValue}>₹{sipAmount} per month</Text>
        </View>
      )}
    </View>
  );
}
