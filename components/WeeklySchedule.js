import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import WeekSelector from "./WeekSelector";
import { weekOfDateObjectsArray, weekFromStartDate } from "../utils/dateFunctions";
import shiftDataExample from "../assets/shiftDataExample.json";

const WeeklySchedule = React.memo(({ shiftData, startDate, userId }) => {
  const [startDateForWeek, setStartDateForWeek] = useState(startDate);
  const [selectedWeekArrayOfDateObject, setSelectedWeekArrayOfDateObject] = useState(
    weekOfDateObjectsArray(startDateForWeek),
  );
  const onWeekChange = (direction) => {
    var newStartDate = weekFromStartDate(direction, startDateForWeek,)
    setStartDateForWeek(newStartDate);
    setSelectedWeekArrayOfDateObject(weekOfDateObjectsArray(newStartDate));
  };
  return (
    <View style={styles.container}>
      <WeekSelector
        formattedArrayOfDateObjs={selectedWeekArrayOfDateObject}
        onWeekChange={onWeekChange}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
});

export default WeeklySchedule;
