import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({

});

function createData(actionUnit, variance, non_pd_variance, pValue) {
  return { actionUnit, variance, non_pd_variance, pValue };
}

const rows = [
  createData('(AU1) Inner Brow Raiser', .67, .12, .05),
  createData('(AU2) Outer Brow Raiser', .42, .12, .05),
  createData('(AU4) Brow Lowerer', .82, .12, .05),
  createData('(AU6) Cheek Raiser', .29, .12, .05),
  createData('(AU7) Lid Tightener', .34, .12, .05),
  createData('(AU9) Nose Wrinkler', .71, .12, .05),
  createData('(AU12) Lip Corner Puller', .77, .12, .05),
  createData('(AU45) Blink', .45, .12, .05),
];

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function InformationDialog(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const data = props.sendData;
  // console.log(data);

  return (
    <div>
      <DialogTitle id="customized-dialog-title">
        Quantitative results
        </DialogTitle>
      <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Action Unit</TableCell>
                <TableCell>Variance</TableCell>
                <TableCell>Non - PD Variance</TableCell>
                <TableCell align="right">p-value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.actionUnit}
                  </TableCell>
                  <TableCell align="center">{row.variance}</TableCell>
                  <TableCell align="center">{row.non_pd_variance}</TableCell>
                  <TableCell align="right">{row.pValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </div>
  );
}