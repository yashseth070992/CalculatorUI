import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CategoryIcon from './CategoryIcon';
import { colors } from '../../colors'; // Import colors

const categories = [
  {
    name: 'Groceries',
    icon: 'cart-outline',
    color: '#f78fb3',
    percentage: '33%',
    amount: '₹400.00',
  },
  {
    name: 'Transport',
    icon: 'car-outline',
    color: '#3dc1d3',
    percentage: '17%',
    amount: '₹200.00',
  },
  {
    name: 'Dining',
    icon: 'restaurant-outline',
    color: '#ff9f43',
    percentage: '8%',
    amount: '₹100.00',
  },
  {
    name: 'House',
    icon: 'home-outline',
    color: '#546de5',
    percentage: '10%',
    amount: '₹250.00',
  },
  {
    name: 'Healthcare',
    icon: 'medkit-outline',
    color: '#eb3b5a',
    percentage: '5%',
    amount: '₹150.00',
  },
  {
    name: 'Sports',
    icon: 'football-outline',
    color: '#26de81',
    percentage: '4%',
    amount: '₹80.00',
  },
  {
    name: 'Entertainment',
    icon: 'tv-outline',
    color: '#a55eea',
    percentage: '15%',
    amount: '₹300.00',
  },
  {
    name: 'Gifts',
    icon: 'gift-outline',
    color: '#fd9644',
    percentage: '8%',
    amount: '₹180.00',
  },
  {
    name: 'Utilities',
    icon: 'flash-outline',
    color: '#ff6b6b',
    percentage: '6%',
    amount: '₹120.00',
  },
  {
    name: 'Education',
    icon: 'book-outline',
    color: '#42a5f5',
    percentage: '12%',
    amount: '₹240.00',
  },
  {
    name: 'Travel',
    icon: 'airplane-outline',
    color: '#ab47bc',
    percentage: '9%',
    amount: '₹180.00',
  },
  {
    name: 'Shopping',
    icon: 'shirt-outline',
    color: '#ffa726',
    percentage: '7%',
    amount: '₹140.00',
  },
];

export default function ExpenseTracker() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();

  const totalExpense = '₹1,200.00';
  const totalBalance = '₹10,600.00';

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    navigation.navigate('AddExpense', { categoryName: category.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>November</Text>

      {/* Top row - 4 categories */}
      <View style={styles.row}>
        {categories.slice(0, 4).map((category, index) => (
          <CategoryIcon
            key={index}
            icon={category.icon}
            color={category.color}
            percentage={category.percentage}
            onPress={() => handleCategoryPress(category)}
          />
        ))}
      </View>

      {/* Middle row with left, circular chart, and right */}
      <View style={styles.middleRow}>
        <View style={styles.sideColumn}>
          <CategoryIcon
            icon={categories[4].icon}
            color={categories[4].color}
            percentage={categories[4].percentage}
            onPress={() => handleCategoryPress(categories[4])}
          />
          <CategoryIcon
            icon={categories[5].icon}
            color={categories[5].color}
            percentage={categories[5].percentage}
            onPress={() => handleCategoryPress(categories[5])}
          />
        </View>

        {/* Central Circular Chart */}
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            {selectedCategory ? (
              <>
                <Ionicons
                  name={selectedCategory.icon}
                  size={40}
                  color={colors.textAccentPrimary}
                />
                <Text style={styles.chartText}>{selectedCategory.name}</Text>
                <Text style={styles.chartAmount}>
                  {selectedCategory.amount}
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.chartText}>{totalBalance}</Text>
                <Text
                  style={[styles.chartAmount, { color: colors.resultNegative }]}
                >
                  {totalExpense}
                </Text>
              </>
            )}
          </View>
        </View>

        <View style={styles.sideColumn}>
          <CategoryIcon
            icon={categories[6].icon}
            color={categories[6].color}
            percentage={categories[6].percentage}
            onPress={() => handleCategoryPress(categories[6])}
          />
          <CategoryIcon
            icon={categories[7].icon}
            color={categories[7].color}
            percentage={categories[7].percentage}
            onPress={() => handleCategoryPress(categories[7])}
          />
        </View>
      </View>
      {/* bottom row - 4 categories */}
      <View style={styles.row}>
        {categories.slice(8, 12).map((category, index) => (
          <CategoryIcon
            key={index}
            icon={category.icon}
            color={category.color}
            percentage={category.percentage}
            onPress={() => handleCategoryPress(category)}
          />
        ))}
      </View>
      {/* Balance bar and footer buttons */}
      <View style={styles.balanceBar}>
        <Text style={styles.balanceText}>Balance ₹9,400.00</Text>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.expenseButton}>
          <Text style={styles.buttonText}>EXPENSE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incomeButton}>
          <Text style={styles.buttonText}>INCOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  monthText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.accentPrimary,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  sideColumn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 160,
  },
  outerCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.accentPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartText: {
    fontSize: 16,
    color: colors.textAccentPrimary,
    fontWeight: 'bold',
    marginTop: 5,
  },
  chartAmount: {
    fontSize: 14,
    color: colors.textAccentPrimary,
  },
  balanceBar: {
    backgroundColor: colors.accentPrimary,
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  balanceText: {
    fontSize: 20,
    color: colors.textAccentPrimary,
    fontWeight: 'bold',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  expenseButton: {
    backgroundColor: colors.resultNegative,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  incomeButton: {
    backgroundColor: colors.resultPositive,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: colors.textAccentPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
