import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrevButton, NextButton } from './Buttons';
import WeekDisplay from './WeekDisplay';

const WeekSelector = ({ formattedArrayOfDateObjs, onWeekChange }) => {
    const today = new Date(); // Create a new Date object for today's date
  
    const onPressPrevious = () => {
      onWeekChange("prev");
      console.log(
        "onPressPrevious " + formattedArrayOfDateObjs[0].dayNumberString
      );
    };
  
    const onPressNext = () => {
      onWeekChange("next");
      console.log("onPressNext " + formattedArrayOfDateObjs[0].dayNumberString);
    };
  
    return (
      <View style={styles.container}>
        <PrevButton style={styles.button} onPress={onPressPrevious} />
        <WeekDisplay day={formattedArrayOfDateObjs} isCurrentDay={today} />
        <NextButton onPress={onPressNext} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5D8CC',
    borderRadius: 20,
  },
  button: {
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
});

export default WeekSelector;
