import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chart from "./Chart";
import Divider from '@material-ui/core/Divider';
import clsx from "clsx";
// import { ResponsiveContainer, Legend } from 'recharts';
// import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
// import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


// const data = [
//   {
//     "subject": "AU1",
//     "A": 0.059371002216709365,
//     "nonPD": 0.07,
//     "PD": 0.15,
//     "fullMark": 0.15
//   },
//   {
//     "subject": "AU6",
//     "A": 0.2523954753748953,
//     "nonPD": 0.25,
//     "PD": 0.17,
//     "fullMark": 0.15
//   },
//   {
//     "subject": "AU12",
//     "A": 0.48213700893049927,
//     "nonPD": 0.27,
//     "PD": 0.21,
//     "fullMark": 0.15
//   }
// ]

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 500,
  },
}));

export default function Summary(props) {
  const id = props.sendId;
  const data = props.sendData;

  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr[i] = {
      name: data[id - 1][9 + (i * 4)],
      ParkAvg: data[id - 1][10 + (i * 4)],
      HealthyAvg: data[id - 1][11 + (i * 4)],
      Results: data[id - 1][12 + (i * 4)]
    }
  }

  const classes = useStyles();
  const theme = useTheme();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Paper className={fixedHeightPaper} style={{ paddingBottom: "24px" }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "12px",
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                style={{ marginBottom: "-6px" }}

              >
                Your symptoms in perspective
              </Typography>
            </Box>

            <Chart sendData={arr} sendId={id} />

            {/*<RadarChart outerRadius={90} width={730} height={250} data={data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 0.15]} />
                  <Radar name="Participant" dataKey="A" stroke="#8884D8" fill="#8884D8" fillOpacity={0.6} />
                  <Radar name="non-PD Average" dataKey="nonPD" stroke="#82CA9D" fill="#82CA9D" fillOpacity={0.6} />
                  <Radar name="PD Average" dataKey="PD" stroke="#ffa500" fill="#ffa500" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>*/}

          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper style={{ padding: "12px" }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "12px",
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                style={{ marginBottom: "-6px" }}
              >
                What is this chart?
                  </Typography>

              <Divider />
            </Box>

            <Typography>
              This chart places your symptoms in the context of other users. After tracking key points on your face,
              we identified how much control you have over your facial muscles.
                </Typography>
            <br />
            <Typography>
              For reference, we've also calculated average muscle control for individuals with Parkinson's disease and individuals without Parkinson's disease.
                </Typography>
          </Paper>
          <Paper elevation={2} style={{ marginTop: "8px", padding: "12px" }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "12px",
              }}
            >
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
                style={{ marginBottom: "-6px" }}
              >
                Conclusion
                  </Typography>

              <Divider />
            </Box>

            <Typography>
              This diagnostic test indicated that your symptoms align strongly with symptoms associated with Parkinson's disease. This is not a medical diagnosis.</Typography>
            <br />
            <Typography>
              Please consult with your physician for the next steps in diagnosing Parkinson's disease.
                </Typography>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

// default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment width="200px" height="200px">
//       <Title>Variance over time</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>

//           <YAxis type="number" domain={[0, 'dataMax']} stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270}
//               position="left"
//               style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
//             >
//             </Label>
//           </YAxis>
//           <Tooltip/>
//           <Legend/>
//           <Line name="AU01" type="monotone" dataKey="first_au" dot={false} stroke={"red"} />
//           <Line name="AU06"type="monotone" dataKey="second_au" dot={false} stroke={"green"} />
//           <Line name="AU12"type="monotone" dataKey="third_au" dot={false} stroke={"blue"} />
//           <Line name="AU45" type="monotone" dataKey="fourth_au" dot={false} stroke={"orange"} />
//           <ReferenceArea x1={'09:00'} x2={'12:00'} label="an important period" />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }