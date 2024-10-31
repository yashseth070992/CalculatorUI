import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../globalStyles';
import { colors } from '../../colors';

const Goals = () => {
  return (
    <View style={[globalStyles.container, styles.goalContainer]}>
      <Text style={styles.goalTitle}>University</Text>
      <Text style={styles.goalProgress}>$2,500 / $10,500</Text>
    </View>
  );
};

const styles = {
  goalContainer: {
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 10,
    marginVertical: 10,
  },
  goalTitle: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  goalProgress: {
    color: colors.textSecondary,
    fontSize: 14,
  },
};

export default Goals;
