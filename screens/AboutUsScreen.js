import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../colors';

export default function AboutUsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.content}>
        At <Text style={styles.highlight}>CompoundIT</Text>, our mission is to
        empower individuals with the knowledge to make{' '}
        <Text style={styles.bold}>smart financial decisions</Text> by educating
        them on the{' '}
        <Text style={styles.bold}>importance of saving and investing</Text>. We
        believe that building <Text style={styles.bold}>wealth</Text> is not
        just about earning more, but about making the most of what you earn.
      </Text>
      <Text style={styles.content}>
        <Text style={styles.bold}>Saving</Text> and{' '}
        <Text style={styles.bold}>investing</Text> have a{' '}
        <Text style={styles.bold}>transformative impact</Text> over time. When
        done consistently, even small investments can{' '}
        <Text style={styles.bold}>compound significantly</Text>, ultimately
        outpacing traditional income. Our aim is to make{' '}
        <Text style={styles.bold}>financial education</Text> accessible, easy to
        understand, and practical for everyone, helping them achieve{' '}
        <Text style={styles.bold}>financial security</Text> and{' '}
        <Text style={styles.bold}>peace of mind</Text>.
      </Text>
      <Text style={styles.content}>
        Join us on this journey to{' '}
        <Text style={styles.bold}>financial freedom</Text>, where the focus is
        on <Text style={styles.bold}>growth</Text>, not just earnings. Let’s
        make <Text style={styles.bold}>informed investment decisions</Text>{' '}
        together and secure a brighter financial future.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.backgroundPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  highlight: {
    color: colors.accentPrimary,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
    color: colors.accentPrimary,
  },
});
