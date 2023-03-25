import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { pixelRatio } from '../utils/responsiveSizing';

const PrevButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{'<'}</Text>
    </TouchableOpacity>
  );
};

const NextButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{'>'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C73E1D',
    borderRadius: 20,
    paddingVertical: pixelRatio(8),
    paddingHorizontal: pixelRatio(8),
  },
  buttonText: {
    color: '#fff',
    fontSize: "1.5rem",
    fontWeight: 'bold',
  },
});

export { PrevButton, NextButton };
