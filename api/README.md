# README

This is a JavaScript module that exports a function called `getShiftAssignments` to retrieve a range of shift assignments from an API.

## Usage

```js
import { getShiftAssignments } from "../utils/shiftAssignments";

getShiftAssignments(startDate, endDate, setShiftData, setIsLoading, setError)
  .then(shiftAssignments => {
    console.log(shiftAssignments);
  })
  .catch(error => console.error(error));
```

The function takes in the following parameters:

- `startDate` (required): The start date for the range of shift assignments to retrieve.
- `endDate` (optional): The end date for the range of shift assignments to retrieve.
- `setShiftData` (required): The setState function to update the shiftData state variable.
- `setIsLoading` (required): The setState function to update the isLoading state variable.
- `setError` (required): The setState function to update the error state variable.

The function returns a Promise that resolves with an array of shift assignments or rejects with an error message.

Here is an example of what the shift assignments object looks like:

```json
[
  {
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
  },
  {
    "shiftAssignmentId": 4989,
    "userId": 2,
    "shiftId": 1,
    "dateAssigned": "2023-03-14T00:00:00",
    "sectionId": 5,
    "releasedByUser": true,
    "dayId": 3,
    "section": "5",
    "assignee": "Aleesha Johnson",
    "releaseByUserId": 0,
    "shiftName": "AM"
  }
]
```

## API

### `getShiftAssignments(startDate, endDate, setShiftData, setIsLoading, setError): Promise`

Retrieves a range of shift assignments from an API.

#### Parameters

- `startDate` (required): The start date for the range of shift assignments to retrieve.
- `endDate` (optional): The end date for the range of shift assignments to retrieve.
- `setShiftData` (required): The setState function to update the shiftData state variable.
- `setIsLoading` (required): The setState function to update the isLoading state variable.
- `setError` (required): The setState function to update the error state variable.

#### Returns

A Promise that resolves with an array of shift assignments or rejects with an error message.

#### Example

```js
getShiftAssignments("2023-03-10", "2023-03-15", setShiftData, setIsLoading, setError)
  .then(shiftAssignments => {
    console.log(shiftAssignments);
  })
  .catch(error => console.error(error));
```

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
