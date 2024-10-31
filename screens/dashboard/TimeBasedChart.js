import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { colors } from '../../colors';

const TimeBasedChart = () => {
  const screenWidth = Dimensions.get('window').width - 40; // Adjust for overall screen padding

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Monthly Overview</Text>
      <BarChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [{ data: [20, 45, 28, 80] }],
        }}
        width={screenWidth - 32} // Subtract padding to fit within the container
        height={200}
        chartConfig={{
          backgroundColor: colors.backgroundPrimary,
          backgroundGradientFrom: colors.backgroundPrimary,
          backgroundGradientTo: colors.backgroundPrimary,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.5,
        }}
        style={{
          borderRadius: 10,
          marginLeft: 16, // Align the chart within the container padding
          marginRight: 16, // Align the chart within the container padding
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 10,
    paddingVertical: 16,
    marginVertical: 10,
  },
  chartTitle: {
    color: colors.textPrimary,
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TimeBasedChart;
