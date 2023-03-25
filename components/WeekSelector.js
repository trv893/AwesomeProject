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
        <PrevButton onPress={onPressPrevious} />
        <WeekDisplay formattedArrayOfDateObjs={formattedArrayOfDateObjs} today={today} />
        <NextButton onPress={onPressNext} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5D8CC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default WeekSelector;
