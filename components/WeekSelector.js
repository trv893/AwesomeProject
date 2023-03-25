import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrevButton, NextButton } from './Buttons';
import WeekDisplay from './WeekDisplay';
import { pixelRatio } from '../utils/responsiveSizing';

const WeekSelector = ({ formattedArrayOfDateObjs, onWeekChange }) => {
  const today = new Date(); // Create a new Date object for today's date

  const onPressPrevious = () => {
    onWeekChange('prev');
    console.log('onPressPrevious ' + formattedArrayOfDateObjs[0].dayNumberString);
  };

  const onPressNext = () => {
    onWeekChange('next');
    console.log('onPressNext ' + formattedArrayOfDateObjs[0].dayNumberString);
  };

  return (
    <View style={styles.container}>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: '#E5D8CC',
    borderRadius: 20,
  },
});

export default WeekSelector;
