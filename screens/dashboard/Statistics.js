import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../globalStyles';
import { colors } from '../../colors';

const Statistics = () => {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.statCard}>
        <Text style={styles.statText}>Income</Text>
        <Text style={styles.statAmount}>+ $3,500</Text>
      </View>
      <View style={styles.statCard}>
        <Text style={styles.statText}>Spending</Text>
        <Text style={styles.statAmount}>- $2,100</Text>
      </View>
    </View>
  );
};

const styles = {
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statCard: {
    width: '48%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: colors.backgroundSecondary,
  },
  statText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  statAmount: {
    color: colors.resultPositive, // Assuming this is for positive values; adjust if necessary
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default Statistics;
