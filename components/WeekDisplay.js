import React from 'react';
import { View, StyleSheet } from 'react-native';
import Day from './Day';

const WeekDisplay = ({ days }) => {
  const today = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <Day
          key={day.dayString}
          day={day}
          isCurrentDay={day.dayString === today}
          isFirstDay={index === 0}
          isLastDay={index === days.length - 1}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
  },
});

export default WeekDisplay;
