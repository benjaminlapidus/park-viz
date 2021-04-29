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
    ParkAvg: .07,
    HealthyAvg: .15,
    Results: 0.07465582580438952,

  },
  {
    name: 'Cheeks',
    ParkAvg: .25,
    HealthyAvg: .17,
    Results: 0.2523954753748953   ,
  },
  {
    name: 'Lips and mouth',
    ParkAvg: .27,
    HealthyAvg: .21,
    Results: 0.48213700893049927,

  }
];

class CustomizedDot extends React.Component {
    render() {
        return (
            <circle stroke="black" strokeWidth={3} fill="red" />
        );
    }
  };

export default class Example extends PureComponent {

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

          <Scatter shape={'triangle'} dataKey="ParkAvg" fill="#dc4d3b" />
          <Scatter shape={'triangle'} dataKey="HealthyAvg" fill="#6fb129" />
          <Scatter dataKey="Results" fill="orange" />

        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}