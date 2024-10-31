import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../globalStyles';
import { colors } from '../../colors';

const BalanceOverview = () => {
  return (
    <View style={[styles.balanceContainer]}>
      <Text style={globalStyles.title}>Total Balance</Text>
      <Text style={styles.balance}>$5,560.32</Text>
      <Text style={styles.budget}>Budget: Personal</Text>
    </View>
  );
};

const styles = {
  balanceContainer: {
    marginVertical: 10,
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 10,
  },
  balance: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  budget: {
    color: colors.textSecondary,
    fontSize: 14,
  },
};

export default BalanceOverview;
