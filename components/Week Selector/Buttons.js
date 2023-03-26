import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { pixelRatio } from '../../utils/responsiveSizing';

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
    paddingVertical: pixelRatio(1),
    paddingHorizontal: pixelRatio(6),
  },
  buttonText: {
    color: '#fff',
    fontSize: "1.5rem",
    fontWeight: 'bold',
    marginBottom: "4px", // or paddingTop: 'auto'
  }
  
  
});

export { PrevButton, NextButton };

