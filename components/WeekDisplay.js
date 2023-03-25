import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeekDisplay = ({ days }) => {
    return (
      <View style={styles.container}>
        {days.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={[styles.dayText, day.selected && styles.selectedDayText]}>
              {day.dayString}
            </Text>
            <Text style={[styles.dateText, day.selected && styles.selectedDateText]}>
              {day.dayNumberString}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderColor: '#000000',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    dayContainer: {
      alignItems: 'center',
    },
    dayText: {
      fontSize: 16,
      color: '#000000',
    },
    selectedDayText: {
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    dateText: {
      fontSize: 14,
      color: '#000000',
    },
    selectedDateText: {
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });
  
  export default WeekDisplay;
