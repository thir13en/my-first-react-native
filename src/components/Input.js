import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText }) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      style={{ height: 20, width: 100 }}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default Input;
