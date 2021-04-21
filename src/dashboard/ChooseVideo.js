import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VideoSquares from "./VideoSquares";
import clsx from "clsx";

export default function ChooseVideo() {

  return (
      <div>
          <Grid lg={12}>
            <Paper elevation={2}>
              <VideoSquares />
            </Paper>
          </Grid>
    </div>
  );
}