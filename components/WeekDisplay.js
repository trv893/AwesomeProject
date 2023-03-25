import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const WeekDisplay = ({ formattedArrayOfDateObjs, today }) => {
  const formatDate = (date) => {
    // format date as desired
  };

  return (
    <View style={styles.weekDisplay}>
      
        {/* render day list with clean borders that displays formattedDate.dayString over top of formattedDate.dayNumberString */}

    </View>
  );
};

const styles = StyleSheet.create({
  weekDisplay: {
    alignItems: 'center',
  },
  weekTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayList: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C73E1D',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default WeekDisplay;
