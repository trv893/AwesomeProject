# Utils

This folder contains a collection of utility functions that can be used across the project.

## dateFunctions.js

This module exports several functions related to formatting and manipulating dates.

### formatDateToString(date)

This function takes a JavaScript `Date` object and returns a string representation of the date in the format "MM/DD/YYYY".

### weekOfDateObjectsArray(startDate)

This function returns an array of formatted date objects representing the seven days of the week starting from the given start date. Each date object contains the following properties:

- `dayString`: The abbreviated day of the week string (e.g., "Mon", "Tue", etc.).
- `dayNumberString`: The day of the month with an appropriate suffix (e.g., "1st", "2nd", etc.).
- `dateString`: The date string formatted as "month/day/year" (e.g., "3/12/2023").
- `dateObj`: The date object representing the day.

### weekFromStartDate(direction, currentStartDate)

This function returns a new `Date` object representing the first or last day of the week based on the direction (`'prev'` or `'next'`) and a current start date.

## filterFunctions.js

This module exports a function for filtering an array of shift data based on the provided filtering criteria.

### filterShiftData(shiftData, params)

This function takes an array of shift data and an object containing filtering parameters, and returns an array of shift objects that match the provided filtering criteria. The available filtering parameters are:

- `date`: The date to filter by, in either a string or `Date` format.
- `userId`: The user ID to filter by.
- `released`: The release status to filter by, or `null` to include all release statuses.
- `shiftTime`: The shift time to filter by, either `"AM"` or `"PM"`.

## responsiveSizing.js

This module exports a function for converting pixel values to their nearest pixel value based on the device's pixel density.

### pixelRatio(pixels)

This function takes a number of pixels and returns the nearest pixel value based on the device's pixel density. It uses the `PixelRatio` module from React Native to perform the conversion.
