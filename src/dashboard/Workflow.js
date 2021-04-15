import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Workflow from "./Workflow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import VideoSquares from "./VideoSquares";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: "62vh",
  },
}));

function getSteps() {
  return ["Choose a video", "Break down your results", "Next steps"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "";

    case 1:
      return "";
    case 2:
      return "";
    default:
      return "Unknown step";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
    const theme = useTheme();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper style={{backgroundColor: "transparent"}} alternativeLabel activeStep={activeStep} nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div>
        {activeStep === 0 && (
          <Grid lg={12}>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <Paper elevation={2} className={fixedHeightPaper}>
             <VideoSquares/>
            </Paper>
          </Grid>
        )}

        {activeStep === 1 && (
          <Grid lg={12}>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
        )}

        {activeStep === 2 && (
          <Grid lg={12}>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <Paper className={fixedHeightPaper}>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            </Paper>
          </Grid>
        )}

        {activeStep === steps.length-1 ? (
          <Grid style={{paddingTop:"12px"}} container spacing={1} justify={"flex-end"}>
            <Grid item>
          <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
               </Grid>
            <Grid item>
            <Button onClick={handleReset} className={classes.button}  variant="contained"
                color="primary">
              Save and start over
            </Button>
             </Grid>

            </Grid>
       
        ) : (
          <div>
            <Grid style={{paddingTop:"12px"}} container spacing={1} justify={"flex-end"}>
            <Grid item>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
                            </Grid>

            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}