// components/InputField.js
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../globalStyles';

const InputField = ({
  label,
  name,
  value,
  onChangeText,
  keyboardType = 'default',
  subLabel,
}) => (
  <View style={globalStyles.inputContainer}>
    <Text style={globalStyles.label}>{label}</Text>
    {subLabel && <Text style={globalStyles.subLabel}>{subLabel}</Text>}
    <TextInput
      style={globalStyles.input}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      name={name}
      id={name}
    />
  </View>
);

export default InputField;
