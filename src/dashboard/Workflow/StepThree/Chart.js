import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Eyebrows',
    Results: 800,
    ParkAvg: 490,
    HealthyAvg: 100,
  },
  {
    name: 'Cheeks',
    Results: 967,
    ParkAvg: 590,
    HealthyAvg: 100,
  },
  {
    name: 'Lips and mouth',
    Results: 1098,
    ParkAvg: 350,
    HealthyAvg: 100,
  },
  {
    name: 'Blink',
    Results: 1200,
    ParkAvg: 480,
    HealthyAvg: 100,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Legend />
          <Bar dataKey="Results" barSize={20} fill="#413ea0" />
          <Scatter dataKey="ParkAvg" fill="red" />
          <Scatter dataKey="HealthyAvg" fill="green" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}