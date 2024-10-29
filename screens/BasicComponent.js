import React, { useState, useCallback } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import InputField from '../components/InputField';
import ResultRow from '../components/ResultRow';
import HeaderSection from '../components/HeaderSection';
import { calculateBasicInterest } from '../utils/calculatorUtils';
import { globalStyles } from '../globalStyles';

export default function BasicComponent() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [period, setPeriod] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [result, setResult] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [resultingAmount, setResultingAmount] = useState(0);

  const calculateInterest = () => {
    const { resultsArray, totalProfit, resultingAmount } =
      calculateBasicInterest(initialInvestment, period, interestRate);
    setResult(resultsArray);
    setTotalProfit(totalProfit);
    setResultingAmount(resultingAmount);
  };

  // Reset state when the screen is focused
  useFocusEffect(
    useCallback(() => {
      // Reset state values
      setInitialInvestment('');
      setPeriod('');
      setInterestRate('');
      setResult([]);
      setTotalProfit(0);
      setResultingAmount(0);
    }, [])
  );

  return (
    <ScrollView style={[globalStyles.container, { flex: 1 }]}>
      <View>
        <InputField
          label="Initial Investment (₹)"
          name="initialInvestment"
          value={initialInvestment}
          onChangeText={setInitialInvestment}
          keyboardType="numeric"
        />
        <InputField
          label="Number of Times (Period)"
          name="period"
          value={period}
          onChangeText={setPeriod}
          keyboardType="numeric"
        />
        <InputField
          label="Interest Rate (%)"
          name="interestRate"
          value={interestRate}
          onChangeText={setInterestRate}
          keyboardType="numeric"
        />
        <HeaderSection
          title="Compound Interest Calculator"
          totalProfit={totalProfit}
          finalValue={resultingAmount}
          onCalculate={calculateInterest}
        />
      </View>
      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultRow item={item} />}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 50 }} // Adds padding to the bottom
      />
    </ScrollView>
  );
}
