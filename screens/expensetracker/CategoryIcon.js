import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoryIcon = ({ icon, color, percentage, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
      <Ionicons name={icon} size={32} color={color} />
      <Text style={{ color }}>{percentage}</Text>
    </TouchableOpacity>
  );
};

export default CategoryIcon;
