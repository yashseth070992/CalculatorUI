import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { globalStyles } from '../globalStyles';

export default function BasicComponent() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [period, setPeriod] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [result, setResult] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [resultingAmount, setResultingAmount] = useState(0);

  const calculateInterest = () => {
    const initial = parseFloat(initialInvestment);
    const rate = parseFloat(interestRate) / 100;
    const times = parseInt(period);

    const resultsArray = [];
    let totalAmount = initial;
    let cumulativeProfit = 0;

    for (let i = 1; i <= times; i++) {
      const profit = totalAmount * rate;
      cumulativeProfit += profit;
      totalAmount += profit;

      resultsArray.push({
        id: i.toString(),
        profit: profit.toFixed(2),
        total: totalAmount.toFixed(2),
        yield: ((profit / initial) * 100).toFixed(2) + '%',
      });
    }

    setResult(resultsArray);
    setTotalProfit(cumulativeProfit.toFixed(2));
    setResultingAmount(totalAmount.toFixed(2));
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Compound Interest Calculator</Text>

      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.label}>Initial Investment (₹)</Text>
        <TextInput
          style={globalStyles.input}
          keyboardType="numeric"
          value={initialInvestment}
          onChangeText={setInitialInvestment}
        />
      </View>

      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.label}>Number of Times (Period)</Text>
        <TextInput
          style={globalStyles.input}
          keyboardType="numeric"
          value={period}
          onChangeText={setPeriod}
        />
      </View>

      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.label}>Interest Rate (%)</Text>
        <TextInput
          style={globalStyles.input}
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
        />
      </View>

      <TouchableOpacity style={globalStyles.button} onPress={calculateInterest}>
        <Text style={globalStyles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      <View style={globalStyles.resultHeader}>
        <View style={globalStyles.resultColumn}>
          <Text style={globalStyles.resultHeaderText}>Total Profit</Text>
          <Text style={globalStyles.resultValue}>₹{totalProfit}</Text>
        </View>
        <View style={globalStyles.resultColumn}>
          <Text style={globalStyles.resultHeaderText}>Resulting Amount</Text>
          <Text style={globalStyles.resultValue}>₹{resultingAmount}</Text>
        </View>
      </View>

      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.resultRow}>
            <Text style={globalStyles.cell}>{item.id}</Text>
            <Text style={globalStyles.cell}>+{item.profit} ₹</Text>
            <Text style={globalStyles.cell}>{item.total} ₹</Text>
            <Text style={globalStyles.cell}>{item.yield}</Text>
          </View>
        )}
      />
    </View>
  );
}
