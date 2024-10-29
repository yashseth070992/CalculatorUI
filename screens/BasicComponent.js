import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import InputField from '../components/InputField';
import ResultRow from '../components/ResultRow';
import HeaderSection from '../components/HeaderSection';
import { calculateBasicInterest } from '../utils/calculatorUtils';

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

  return (
    <View style={{ flex: 1 }}>
      {/* Move inputs and header section outside of FlatList */}
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

      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultRow item={item} />}
      />
    </View>
  );
}
