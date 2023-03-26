# App.js Readme

This is the main component of the React Native app that fetches shift data, sets state variables, and passes props to child components. The component is structured as follows:

## State Variables
- \`shiftData\`: An array of shift assignment objects with the following structure:
\`\`\`
  [{
    "shiftAssignmentId": 4988,
    "userId": 2,
    "shiftId": 1,
    "dateAssigned": "2023-03-13T00:00:00",
    "sectionId": 5,
    "releasedByUser": false,
    "dayId": 2,
    "section": "5",
    "assignee": "Aleesha Johnson",
    "releaseByUserId": 0,
    "shiftName": "AM"
  }, ...]
\`\`\`
- \`isLoading\`: A boolean variable that is true when the app is fetching data from the API, and false otherwise.
- \`startDate\`: The date to start the schedule from.
- \`endDate\`: The date to end the schedule at.
- \`error\`: Error message string if API call fails.
- \`userId\`: The ID of the user whose schedule is being displayed.

## Memoized Props
- \`weeklyScheduleProps\`: A memoized object of props to pass to WeeklySchedule component.

## API Call
- \`useEffect()\`: Fetches shift data by making an API call to \`getShiftAssignments()\`.

## Render
- Renders the \`ErrorScreen\` component if an error occurs during API call.
- Renders the \`ActivityIndicator\` if the data is loading, otherwise renders the \`WeeklySchedule\` component.

## Dependencies
- \`React\`
- \`react-native\`
- \`WeeklySchedule\` component
- \`getShiftAssignments()\` function
- \`ErrorScreen\` component
- \`responsiveSizing.js\` file

## Usage
To use this component, simply import it and include it in your React Native app. The component requires the following props:
- \`shiftData\`: An array of shift assignment objects.
- \`startDate\`: The date to start the schedule from.
- \`userId\`: The ID of the user whose schedule is being displayed.

Additionally, the following dependencies must be included in the app:
- \`WeeklySchedule\` component
- \`getShiftAssignments()\` function
- \`ErrorScreen\` component
- \`responsiveSizing.js\` file.
