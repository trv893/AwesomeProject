import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { pixelRatio } from '../../utils/responsiveSizing';

/**
 * A button component that renders a left arrow icon to go to the previous week
 * 
 * @param {function} onPress - Callback function to execute when the button is pressed
 * 
 * @returns {JSX.Element} A TouchableOpacity component with a left arrow icon inside
 */
const PrevButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{'<'}</Text>
    </TouchableOpacity>
  );
};

/**
 * A button component that renders a right arrow icon to go to the next week
 * 
 * @param {function} onPress - Callback function to execute when the button is pressed
 * 
 * @returns {JSX.Element} A TouchableOpacity component with a right arrow icon inside
 */
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
    paddingVertical: pixelRatio(1), // Use responsive padding of 1 pixel
    paddingHorizontal: pixelRatio(6), // Use responsive padding of 6 pixels
  },
  buttonText: {
    color: '#fff',
    fontSize: pixelRatio(24), // Use responsive font size of 24 pixels
    fontWeight: 'bold',
    marginBottom: pixelRatio(4), // Use responsive margin of 4 pixels
  }
});

export { PrevButton, NextButton };
