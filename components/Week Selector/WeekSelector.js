import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrevButton, NextButton } from './Buttons';
import WeekDisplay from './WeekDisplay';
import { pixelRatio } from '../../utils/responsiveSizing';

/**
 * WeekSelector component that renders the buttons and week display for selecting a week.
 * 
 * Props:
 *   - formattedArrayOfDateObjs: an array of date objects for the selected week in the following format:
 *       [
 *         { dayNumberString: '01', dayString: 'Mon', dateObject: '2023-03-28T04:00:00.000Z' },
 *         { dayNumberString: '02', dayString: 'Tue', dateObject: '2023-03-29T04:00:00.000Z' },
 *         { dayNumberString: '03', dayString: 'Wed', dateObject: '2023-03-30T04:00:00.000Z' },
 *         { dayNumberString: '04', dayString: 'Thu', dateObject: '2023-03-31T04:00:00.000Z' },
 *         { dayNumberString: '05', dayString: 'Fri', dateObject: '2023-04-01T04:00:00.000Z' },
 *         { dayNumberString: '06', dayString: 'Sat', dateObject: '2023-04-02T04:00:00.000Z' },
 *         { dayNumberString: '07', dayString: 'Sun', dateObject: '2023-04-03T04:00:00.000Z' }
 *       ]
 *   - onWeekChange: a function that updates the selected week on button press
 * 
 * Renders the PrevButton, WeekDisplay, and NextButton components.
 */

const WeekSelector = ({ formattedArrayOfDateObjs, onWeekChange }) => {
  const today = new Date(); // Create a new Date object for today's date

  /**
   * Function that updates the selected week to the previous week on button press.
   * Calls the onWeekChange function with 'prev' as an argument.
   */
  const onPressPrevious = () => {
    onWeekChange('prev');
    console.log('onPressPrevious ' + formattedArrayOfDateObjs[0].dayNumberString);
  };

  /**
   * Function that updates the selected week to the next week on button press.
   * Calls the onWeekChange function with 'next' as an argument.
   */
  const onPressNext = () => {
    onWeekChange('next');
    console.log('onPressNext ' + formattedArrayOfDateObjs[0].dayNumberString);
  };

  // Render the WeekSelector component
  return (
    <View style={styles.container}>
      {/* Render the PrevButton, WeekDisplay, and NextButton components */}
      <PrevButton style={styles.button} onPress={onPressPrevious} />
      <WeekDisplay
        style={styles.weekDisplay}
        days={formattedArrayOfDateObjs}
        isCurrentDay={today}
      />
      <NextButton style={styles.button} onPress={onPressNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: pixelRatio(400),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#E5D8CC',
    borderRadius: 20,
  },
});

export default WeekSelector;
