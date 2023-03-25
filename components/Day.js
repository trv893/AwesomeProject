import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Day = ({ day, isCurrentDay, isFirstDay, isLastDay }) => {
  const { dayString, dayNumberString } = day;

  return (
    <View
      style={[
        styles.dayContainer,
        isFirstDay && styles.firstDayContainer,
        isLastDay && styles.lastDayContainer,
        isCurrentDay && styles.currentDayContainer,
      ]}
    >
      <Text style={[styles.dayString, isCurrentDay && styles.currentDayString]}>
        {dayString}
      </Text>
      <View style={[styles.dayNumberContainer, isCurrentDay && styles.currentDayNumberContainer]}>
        <Text style={[styles.dayNumber, isCurrentDay && styles.currentDayNumber]}>
          {dayNumberString}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  firstDayContainer: {
    borderLeftWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    
  },
  lastDayContainer: {
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  currentDayContainer: {
    borderWidth: 1,
    borderColor: '#FF0000',
  },
  dayString: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  dayNumber: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#000000',
    top: 0,
  },
  currentDayString: {
    color: '#FF0000',
  },
  dayNumberContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 0,
  },
  currentDayNumberContainer: {
    backgroundColor: '#FF0000',
  },
  currentDayNumber: {
    color: '#FFFFFF',
  },
});

export default Day;
