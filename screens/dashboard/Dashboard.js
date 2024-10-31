import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../globalStyles'; // Importing global styles
import BalanceOverview from './BalanceOverview';
import Statistics from './Statistics';
import TimeBasedChart from './TimeBasedChart';
import Goals from './Goals';

const Dashboard = () => {
  return (
    <View style={globalStyles.container}>
      <BalanceOverview />
      <Statistics />
      <TimeBasedChart />
      <Goals />
    </View>
  );
};

export default Dashboard;
