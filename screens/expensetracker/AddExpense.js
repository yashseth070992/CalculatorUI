// AddExpense.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../colors';

const AddExpense = ({ route, navigation }) => {
  const { categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Expense</Text>

      <View style={styles.dateContainer}>
        <Ionicons
          name="calendar-outline"
          size={24}
          color={colors.accentPrimary}
        />
        <Text style={styles.dateText}>Friday, 1 November</Text>
      </View>

      <View style={styles.amountContainer}>
        <Ionicons
          name="cash-outline"
          size={30}
          color={colors.textAccentPrimary}
        />
        <TextInput
          style={styles.amountInput}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor={colors.textAccentPrimary}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="close-outline"
            size={24}
            color={colors.textAccentPrimary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.noteContainer}>
        <Ionicons
          name="create-outline"
          size={24}
          color={colors.accentPrimary}
        />
        <TextInput
          style={styles.noteInput}
          placeholder="Note"
          placeholderTextColor={colors.textSecondary}
        />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons
          name="add-circle-outline"
          size={24}
          color={colors.accentPrimary}
        />
        <Text style={styles.addText}>ADD '{categoryName.toUpperCase()}'</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  title: {
    fontSize: 18,
    color: colors.accentPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.textSecondary,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accentPrimary,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  amountInput: {
    flex: 1,
    fontSize: 24,
    color: colors.textAccentPrimary,
    textAlign: 'center',
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    marginBottom: 20,
  },
  noteInput: {
    flex: 1,
    fontSize: 16,
    color: colors.textSecondary,
    marginLeft: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  addText: {
    fontSize: 18,
    color: colors.accentPrimary,
    marginLeft: 10,
  },
});

export default AddExpense;
