import React, { useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import WeeklySchedule from "./components/WeeklySchedule";
import { getShiftAssignments } from "./api/getShiftAssignments";
import ErrorScreen from "./components/ErrorScreen";

// Import the sample data to be used when testing
import shiftDataExample from "./assets/shiftDataExample.json";

// Get the device's screen width and height
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/**
 * Main component that renders the app. Fetches shift data, sets state variables,
 * and passes props to child components.
 *
 * @returns {JSX.Element} The main app component
 */
const App = () => {
  // --- State Variables ---

  // @type {Array} shiftData will contain an array of shift assignment objects with the following structure: [{ "shiftAssignmentId": 4988, "userId": 2, "shiftId": 1, "dateAssigned": "2023-03-13T00:00:00", "sectionId": 5, "releasedByUser": false, "dayId": 2, "section": "5", "assignee": "Aleesha Johnson", "releaseByUserId": 0, "shiftName": "AM"}, ...]
  const [shiftData, setShiftData] = useState([]);

  // @type {Boolean} isLoading is true when the app is fetching data from the API, and false otherwise
  const [isLoading, setIsLoading] = useState(true);

  // @type {Date} The date to start the schedule from
  const [startDate, setStartDate] = useState(new Date());

  // @type {Date} The date to end the schedule at
  const [endDate, setEndDate] = useState();

  // @type {String} Error message string if API call fails
  const [error, setError] = useState(null);

  // @type {Number} The ID of the user whose schedule is being displayed
  const userId = 5;

  // --- Memoized Props ---

  // Create a memoized object of props to pass to WeeklySchedule component
  const weeklyScheduleProps = useMemo(
    () => ({
      shiftData,
      startDate,
      userId,
    }),
    [shiftData, startDate, userId]
  );

  // --- API Call ---

  useEffect(() => {
    setIsLoading(true); // set loading to true when useEffect runs

    // Make API call to retrieve shift data
    getShiftAssignments(
      startDate, // @param {Date} start date for the schedule
      endDate, // @param {Date} end date for the schedule
      setShiftData, // @param {Function} callback to set the shift data returned by the API
      setIsLoading, // @param {Function} callback to set the loading state
      setError // @param {Function} callback to set the error state if API call fails
    );
  }, []);

  // Retry the API call when the retry button is pressed
  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    // Make API call to retrieve shift data
    getShiftAssignments(
      startDate,
      endDate,
      setShiftData,
      setIsLoading,
      setError
    );
  };

  // --- Render ---

  // Render the ErrorScreen component if an error occurs during API call
  if (error) {
    return <ErrorScreen message={error} on
      Retry={() => fetchData()} />;
  }

  return (
    <View style={styles.container}>
      {/* Render the ActivityIndicator if the data is loading, otherwise render the WeeklySchedule component */}
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#1e90ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <WeeklySchedule style={styles.weeklySchedule}
          {...weeklyScheduleProps}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    //maxWidth: "798px",
    marginHorizontal: windowWidth * 0.02, // set margin of 5% of the device width on the left and right sides
    marginTop: windowHeight * 0.1, // set margin of 2% of the device height at the top
    marginBottom: windowHeight * 0.04, // set margin of 2% of the device height at the bottom
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
  },
  weeklySchedule: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default App;
