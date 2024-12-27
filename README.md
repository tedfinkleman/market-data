
# Building Chart Component

This repository contains a reusable React component for visualizing building-specific data using Recharts.

## Purpose

The `BuildingChartComponent` displays:
1. Line chart for average price trends (sold vs. active listings).
2. Bar chart for sales volume (sold vs. active listings).

## Usage

### Step 1: Import the Component and Data
Copy the `building_data.json` and `BuildingChartComponent.jsx` files into your project directory.

```jsx
import BuildingChartComponent from './BuildingChartComponent';
import buildingData from './building_data.json';
```

### Step 2: Render the Component
Use the component in your React application like this:

```jsx
<BuildingChartComponent data={buildingData} />
```

### Step 3: Customize
- To use different data, replace `buildingData` with a JSON object matching the structure of `building_data.json`.
- Update styling and labels in the `BuildingChartComponent.jsx`.

## Dynamic Features
This component is ready for dynamic filtering and adjustment for:
- Different buildings
- Unit types
- Price ranges

---

## Example Data

`building_data.json` contains sample data for testing:

```json
{
    "lineChart": [
        {
            "name": "Sold Average Price",
            "value": 524657.9444444445
        },
        {
            "name": "Active Average Price",
            "value": 446333.3333333333
        }
    ],
    "barChart": [
        {
            "name": "Sold Sales Volume",
            "value": 36
        },
        {
            "name": "Active Sales Volume",
            "value": 3
        }
    ]
}
```
