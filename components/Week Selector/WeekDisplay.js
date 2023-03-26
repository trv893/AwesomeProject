import React from 'react';
import { View, StyleSheet } from 'react-native';
import Day from './Day';

/**
 * WeekDisplay component that renders the schedule for a week.
 *
 * @param {Array} days - An array of Day objects representing each day of the week.
 * @returns {JSX.Element} - The WeekDisplay component
 */
const WeekDisplay = ({ days }) => {
  // Get today's date as a string
  const today = new Date().toLocaleDateString();

  return (
    // Create a parent view that will be used as a container for the component
    <View style={styles.container}>
      {/* Map over the array of Day objects and render each day */}
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
    // Set styles for the component container
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
  },
});

export default WeekDisplay;
