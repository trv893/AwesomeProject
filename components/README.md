# WeeklySchedule.js Readme

This component renders an employee's schedule for the following seven days. It uses the WeekSelector component to allow the user to transition beyond the next 7 days and back again. The selected week's data is rendered in a separate component that has not been created yet.

## Props

The `WeeklySchedule` component accepts the following props:

| Prop        | Type   | Description                                                  |
| -----------|--------| ------------------------------------------------------------- |
| `shiftData`| Array  | An array of shift objects for the employee.                   |
| `startDate`| Date   | The starting date for the selected week of the schedule.      |
| `userId`   | Number | The ID of the employee whose schedule is being rendered.      |

## State Variables
- \`startDateForWeek\`: The date representing the start of the week currently being displayed.
- \`selectedWeekArrayOfDateObject\`: An array of date objects representing the dates in the week currently being displayed.

## Functions
- \`onWeekChange()\`: Function to be called when the selected week changes. Calculates the new start date based on the direction passed in and the current start date. Sets the new start date and selected week array of date objects in state.

## Dependencies
- \`React\`
- \`react-native\`
- \`WeekSelector\` component
- \`weekOfDateObjectsArray()\` function
- \`weekFromStartDate()\` function
- \`shiftDataExample.json\` file

## Usage
To use this component, simply import it and include it in your React Native app. The component requires the following props:
- \`shiftData\`: An array of shift objects for the employee.
- \`startDate\`: The starting date for the selected week of the schedule.
- \`userId\`: The ID of the employee whose schedule is being rendered.

Additionally, the following dependencies must be included in the app:
- \`WeekSelector\` component
- \`weekOfDateObjectsArray()\` function
- \`weekFromStartDate()\` function
- \`shiftDataExample.json\` file.
