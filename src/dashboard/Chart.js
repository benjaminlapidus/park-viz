import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', .1),
  createData('06:00', .2),
  createData('09:00', .5),
  createData('12:00', .6),
  createData('13:00', .6),
  createData('15:00', .1),
  createData('18:00', .05),
  createData('21:00', .001),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment width="100px" height="100px">
      <Title>Variance over time</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Variance
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount"  activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} stroke={theme.palette.primary.main} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}