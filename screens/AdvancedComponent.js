import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../globalStyles';
import { colors } from '../colors';

export default function AdvancedComponent() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [isYears, setIsYears] = useState(true);
  const [interestRate, setInterestRate] = useState('');
  const [isYearlyRate, setIsYearlyRate] = useState(true);
  const [compoundFrequency, setCompoundFrequency] = useState('Annually');
  const [result, setResult] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const calculateInterest = () => {
    const initial = parseFloat(initialInvestment) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const period = parseInt(investmentPeriod) || 0;
    const rate = parseFloat(interestRate) / 100;
    const n =
      compoundFrequency === 'Annually'
        ? 1
        : compoundFrequency === 'Semi-Annually'
          ? 2
          : compoundFrequency === 'Quarterly'
            ? 4
            : 12;
    const isMonths = !isYears;
    const time = isMonths ? period / 12 : period;
    const effectiveRate = isYearlyRate ? rate : rate / 12;
    const compoundTimes = isYearlyRate ? time * n : period;

    let totalAmount = initial;
    let cumulativeProfit = 0;
    const resultsArray = [];

    for (let i = 1; i <= compoundTimes; i++) {
      const profit = (totalAmount * effectiveRate) / n;
      cumulativeProfit += profit;
      totalAmount += profit + (i > 1 ? monthly : 0);

      resultsArray.push({
        id: i.toString(),
        year: isMonths ? Math.floor(i / 12) : i,
        principal: totalAmount.toFixed(2),
        profit: profit.toFixed(2),
        total: (totalAmount + profit).toFixed(2),
      });
    }

    setResult(resultsArray);
    setTotalProfit(cumulativeProfit.toFixed(2));
    setFinalValue(totalAmount.toFixed(2));
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
        <Text style={globalStyles.label}>Monthly Contribution (₹)</Text>
        <Text style={globalStyles.subLabel}>
          * added to the principal from the second month.
        </Text>
        <TextInput
          style={globalStyles.input}
          keyboardType="numeric"
          value={monthlyContribution}
          onChangeText={setMonthlyContribution}
        />
      </View>

      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.label}>Investment Period</Text>
        <View style={globalStyles.switchContainer}>
          <Text style={globalStyles.switchLabel}>Years</Text>
          <Switch
            value={isYears}
            onValueChange={() => setIsYears(!isYears)}
            thumbColor={isYears ? colors.accentPrimary : colors.borderLight}
            trackColor={{
              false: colors.borderLight,
              true: colors.accentSecondary,
            }}
            style={globalStyles.toggleSwitch}
          />
          <Text style={globalStyles.switchLabel}>Months</Text>
        </View>

        <TextInput
          style={globalStyles.input}
          keyboardType="numeric"
          value={investmentPeriod}
          onChangeText={setInvestmentPeriod}
        />
      </View>

      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.label}>Interest Rate</Text>
        <View style={globalStyles.switchContainer}>
          <Text style={globalStyles.switchLabel}>Yearly</Text>
          <Switch
            value={isYearlyRate}
            thumbColor={
              isYearlyRate ? colors.accentPrimary : colors.borderLight
            }
            trackColor={{
              false: colors.borderLight,
              true: colors.accentSecondary,
            }}
            style={globalStyles.toggleSwitch}
            onValueChange={() => setIsYearlyRate(!isYearlyRate)}
          />
          <Text style={globalStyles.switchLabel}>Monthly</Text>
        </View>
        <TextInput
          style={globalStyles.input}
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
        />
      </View>

      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.label}>Compound Frequency</Text>
        <Picker
          selectedValue={compoundFrequency}
          style={globalStyles.input}
          onValueChange={(itemValue) => setCompoundFrequency(itemValue)}
        >
          <Picker.Item label="Annually" value="Annually" />
          <Picker.Item label="Semi-Annually" value="Semi-Annually" />
          <Picker.Item label="Quarterly" value="Quarterly" />
          <Picker.Item label="Monthly" value="Monthly" />
        </Picker>
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
          <Text style={globalStyles.resultHeaderText}>Final Value</Text>
          <Text style={globalStyles.resultValue}>₹{finalValue}</Text>
        </View>
      </View>

      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={globalStyles.resultRow}>
            <Text style={globalStyles.cell}>{item.year}</Text>
            <Text style={globalStyles.cell}>{item.principal} ₹</Text>
            <Text style={[globalStyles.cell, { color: colors.resultPositive }]}>
              {item.profit} ₹
            </Text>
            <Text style={[globalStyles.cell, { color: colors.resultNegative }]}>
              {item.total} ₹
            </Text>
          </View>
        )}
      />
    </View>
  );
}
