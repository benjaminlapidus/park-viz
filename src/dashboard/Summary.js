import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import VideoSquares from "./VideoSquares";
import Divider from '@material-ui/core/Divider';
import clsx from "clsx";

export default function ChooseVideo() {

  return (
      <div>
          <Grid container spacing={1}>
           <Grid item xs={7}>
              <Paper style={{display:"flex", justifyContent:"space-between", height: "100%", padding: "12px" }}>

                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                  style={{marginBottom:"-6px"}}

                >
                  Intepreting your results
                </Typography>
              

              </Paper>
            </Grid>
          <Grid item xs={5}>
              <Paper style={{padding: "12px"}} >

                <Typography
                  component="h1"
                  variant="h6"
                  color="primary"
                  gutterBottom

                >
                  Raw test results
                </Typography>
                <Typography
                  component="subtitle"
                  variant="subtitle"
                  color="text.secondary"
                  style={{width:"100%", textAlign: "left"}}
                >
                  For physicians and clinicians
                </Typography>
                <Divider />
               

              </Paper>
            </Grid>
           
          </Grid>
    </div>
  );
}