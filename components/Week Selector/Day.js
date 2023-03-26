import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { pixelRatio } from '../../utils/responsiveSizing';

const Day = ({ day, isCurrentDay, isFirstDay, isLastDay }) => {
  const { dayString, dayNumberString } = day;

  const styles = StyleSheet.create({
    dayContainer: {
      //paddingHorizontal: pixelRatio(0.2),
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
      
      fontSize: '1rem',
      fontWeight: 'bold',
      color: isCurrentDay ? '#FF0000' : '#000000',
    },
    dayNumberContainer: {
      backgroundColor: isCurrentDay ? '#FF0000' : '#FFFFFF',
      borderRadius: 10,
    },
    dayNumber: {
      fontSize: '0.8rem',
      fontWeight: 'bold',
      color: isCurrentDay ? '#FFFFFF' : '#000000',
      paddingHorizontal: "2vw",
    },
  });

  return (
    <View
      style={[
        styles.dayContainer,
        isFirstDay && styles.firstDayContainer,
        isLastDay && styles.lastDayContainer,
        isCurrentDay && styles.currentDayContainer,
      ]}
    >
      <Text style={styles.dayString}>
        {dayString}
      </Text>
      <View style={styles.dayNumberContainer}>
        <Text style={styles.dayNumber}>
          {dayNumberString}
        </Text>
      </View>
    </View>
  );
};

export default Day;
