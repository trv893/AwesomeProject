# Week Selector Component

The Week Selector component is a React Native component that renders a set of buttons and a week display for selecting a week. It is designed to be used in conjunction with a calendar or date-picker component, allowing the user to easily navigate between different weeks.

```

## Usage

Import the `WeekSelector` component from the package and render it in your app's component hierarchy. Pass the `formattedArrayOfDateObjs` and `onWeekChange` props to the `WeekSelector` component.

```javascript
import React, { useState } from 'react';
import { View } from 'react-native';
import WeekSelector from '@your-username/week-selector-component';

const MyComponent = () => {
  const [selectedWeek, setSelectedWeek] = useState([]);

  const handleWeekChange = (direction) => {
    // Update the selected week based on the direction
    // ...
  };

  return (
    <View>
      <WeekSelector
        formattedArrayOfDateObjs={selectedWeek}
        onWeekChange={handleWeekChange}
      />
      {/* Render other components */}
    </View>
  );
};
```

## Props

The `WeekSelector` component accepts the following props:

| Prop                       | Type         Description                                                                                       |
| --------------------------|--------------| ------------------------------------------------------------------------------------------------- |
| `formattedArrayOfDateObjs`| Array        | An array of date objects for the selected week in the following format: `[{dayNumberString: '01', dayString: 'Mon', dateObject: '2023-03-28T04:00:00.000Z'}, ...]` |
| `onWeekChange`             | Function     | A function that is called when the user selects a new week. The function should accept a string argument `'prev'` or `'next'` to indicate the direction of the change. |

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
