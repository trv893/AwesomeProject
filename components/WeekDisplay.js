import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Day = ({ day, isCurrentDay }) => {
  const { dayString, dayNumberString } = day;

  return (
    <View style={[styles.dayContainer, isCurrentDay && styles.currentDayContainer]}>
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

const WeekDisplay = ({ day }) => {
  const today = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      {day.map(day => (
        <Day key={day.dayString} day={day} isCurrentDay={day.dayString === today} />
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
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  dayContainer: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
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

export default WeekDisplay;
