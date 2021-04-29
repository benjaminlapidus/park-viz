import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ReactPlayer from "react-player";
import InfoIcon from "@material-ui/icons/Info";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import vid1_1 from '../../Examples/video/1_1.webm'
import vid1_2 from '../../Examples/video/1_2.webm'
import vid1_3 from '../../Examples/video/1_3.webm'
import vid2_1 from '../../Examples/video/2_1.webm'
import vid2_2 from '../../Examples/video/2_2.webm'
import vid2_3 from '../../Examples/video/2_3.webm'

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
    height: 225,
  },
}));

export default function TestDetails(props) {
  const id = props.sendId;
  const data = props.sendData;
  console.log(id);
  console.log(data);
  // fix id later to grab in for loop
  const vid = data[id - 1][14].substring(0, 3)

  var url = vid1_1;
  if (vid == "1_2") {
    url = vid1_2
  } else if (vid == "1_3") {
    url = vid1_3
  } else if (vid == "2_1") {
    url = vid2_1
  } else if (vid == "2_2") {
    url = vid2_2
  } else if (vid == "2_3") {
    url = vid2_3
  }

  const classes = useStyles();
  const theme = useTheme();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <h1 style={{ textAlign: "center" }}>{data[id - 1][3]}</h1>
          <Grid container spacing={1}>
            {/* Chart */}
            <Grid item xs={7}>
              <Paper>
                <ReactPlayer
                  playing={true}
                  controls={true}
                  width={"100%"}
                  style={{ padding: "12px" }}
                  url={url}
                // url={`../../Examples/video/${data[id][14]}`}
                />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={5}>
              <Paper style={{ padding: "12px", height: "100%" }}>
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
                    Understanding this test
                  </Typography>

                  <Divider />
                </Box>

                <Typography>
                  Parkinson's disease targets the nervous system. As a result, individuals with Parkinson's disease may have greater difficulty in controlling their facial movements.</Typography>
                <br />
                <Typography>
                  Using your videos to track key points on your face, we can calculate how strongly you can control different muscle groups in your face.
                </Typography>
                <br />
                 <Typography>
                  The line chart below shows point-tracking in action. <b>Check out how your facial muscle groups were stressed throughout your test.</b>
                </Typography>
               
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}></Box>
        </Container>
      </main>
    </div>
  );
}