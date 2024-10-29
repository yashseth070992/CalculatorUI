import React, { useState, useCallback } from 'react';
import { View, ScrollView, FlatList, Switch, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';
import InputField from '../components/InputField';
import ResultRow from '../components/ResultRow';
import HeaderSection from '../components/HeaderSection';
import { globalStyles } from '../globalStyles';
import { colors } from '../colors';
import { calculateAdvancedInterest } from '../utils/calculatorUtils';

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
    const { resultsArray, totalProfit, finalValue } = calculateAdvancedInterest(
      initialInvestment,
      monthlyContribution,
      investmentPeriod,
      isYears,
      interestRate,
      isYearlyRate,
      compoundFrequency
    );
    setResult(resultsArray);
    setTotalProfit(totalProfit);
    setFinalValue(finalValue);
  };

  // Reset state when the screen is focused
  useFocusEffect(
    useCallback(() => {
      // Reset state values
      setInitialInvestment('');
      setMonthlyContribution('');
      setInvestmentPeriod('');
      setIsYears(true);
      setInterestRate('');
      setIsYearlyRate(true);
      setCompoundFrequency('Annually');
      setResult([]);
      setTotalProfit(0);
      setFinalValue(0);
    }, [])
  );

  return (
    <ScrollView style={[globalStyles.container, { flex: 1 }]}>
      <View>
        <InputField
          label="Initial Investment (₹)"
          name="advinitialinvestment"
          value={initialInvestment}
          onChangeText={setInitialInvestment}
          keyboardType="numeric"
        />
        <InputField
          label="Monthly Contribution (₹)"
          name="advmonthlycontribution"
          value={monthlyContribution}
          onChangeText={setMonthlyContribution}
          keyboardType="numeric"
          subLabel="* added to the principal from the second month."
        />
        <InputField
          label="Investment Period"
          name="advperiod"
          value={investmentPeriod}
          onChangeText={setInvestmentPeriod}
          keyboardType="numeric"
        />
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
        <InputField
          label="Interest Rate"
          name="advrate"
          value={interestRate}
          onChangeText={setInterestRate}
          keyboardType="numeric"
        />
        <View style={globalStyles.switchContainer}>
          <Text style={globalStyles.switchLabel}>Yearly</Text>
          <Switch
            value={isYearlyRate}
            onValueChange={() => setIsYearlyRate(!isYearlyRate)}
            thumbColor={
              isYearlyRate ? colors.accentPrimary : colors.borderLight
            }
            trackColor={{
              false: colors.borderLight,
              true: colors.accentSecondary,
            }}
            style={globalStyles.toggleSwitch}
          />
          <Text style={globalStyles.switchLabel}>Monthly</Text>
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
        <HeaderSection
          title="Advanced Compound Interest Calculator"
          totalProfit={totalProfit}
          finalValue={finalValue}
          onCalculate={calculateInterest}
        />
      </View>

      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultRow item={item} isAdvanced />}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 50 }} // Adds padding to the bottom
      />
    </ScrollView>
  );
}
