import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import WeekSelector from "./Week Selector/WeekSelector";
import { weekOfDateObjectsArray, weekFromStartDate } from "../utils/dateFunctions";
import shiftDataExample from "../assets/shiftDataExample.json";

/**
 * WeeklySchedule component that renders an employee's schedule for the following seven days.
 * Uses the WeekSelector component to allow the user to transition beyond the next 7 days and back again.
 * The selected week's data is rendered in a separate component that has not been created yet.
 * 
 * @param {Array} shiftData - An array of shift objects for the employee.
 * @param {Date} startDate - The starting date for the selected week of the schedule.
 * @param {Number} userId - The ID of the employee whose schedule is being rendered.
 */
const WeeklySchedule = React.memo(({ shiftData, startDate, userId }) => {
  // Define state variables using the useState hook
  const [startDateForWeek, setStartDateForWeek] = useState(startDate);
  const [selectedWeekArrayOfDateObject, setSelectedWeekArrayOfDateObject] = useState(
    weekOfDateObjectsArray(startDateForWeek),
  );

  /**
   * Function to be called when the selected week changes.
   * Calculates the new start date based on the direction passed in and the current start date.
   * Sets the new start date and selected week array of date objects in state.
   * 
   * @param {String} direction - The direction in which to change the selected week. Either "prev" or "next".
   */
  const onWeekChange = (direction) => {
    // Calculate the new start date based on the direction passed in and the current start date
    var newStartDate = weekFromStartDate(direction, startDateForWeek,)
    setStartDateForWeek(newStartDate); // Set the new start date in state
    setSelectedWeekArrayOfDateObject(weekOfDateObjectsArray(newStartDate)); // Set the selected week array of date objects in state
  };

  return (
    // Create a parent view that will be used as a container for the component
    <View style={styles.container}>
      {/* Render the WeekSelector component */}
      <WeekSelector
        formattedArrayOfDateObjs={selectedWeekArrayOfDateObject} // Pass the selected week array of date objects as a prop to WeekSelector
        onWeekChange={onWeekChange} // Pass the onWeekChange function as a prop to WeekSelector
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    // Set styles for the component container
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
  weekSelector: {
    // Set styles for the WeekSelector component (not currently used)
    width: "100%",
  }
});

export default WeeklySchedule;
