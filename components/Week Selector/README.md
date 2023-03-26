# WeekSelector

WeekSelector is a simple React Native component that allows users to select a week from a calendar view.

![WeekSelector Screenshot](./screenshots/week-selector.png)

## Usage

To use WeekSelector in your React Native project, import the `WeekSelector` component and add it to your JSX code:

```js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import WeekSelector from 'react-native-week-selector';

export default function MyComponent() {
  const [selectedWeek, setSelectedWeek] = useState({});

  function handleWeekSelect(week) {
    setSelectedWeek(week);
  }

  return (
    <View>
      <WeekSelector
        selected={selectedWeek}
        onWeekSelect={handleWeekSelect}
      />
      <Text>Selected Week: {selectedWeek.start.format('MMM D, YYYY')} - {selectedWeek.end.format('MMM D, YYYY')}</Text>
    </View>
  );
}
```

## Props

WeekSelector supports the following props:

| Prop           | Type     | Description                                      |
| --------------| --------| -------------------------------------------------|
| selected       | Object   | The selected week object (start and end dates).  |
| onWeekSelect   | Function | Callback function that is called when a week is selected. |

## Example

Check out the `example` directory in this repository for a complete example of how to use WeekSelector.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
