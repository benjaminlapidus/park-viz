import * as React from "react";
import {
	DataGrid,
	GridToolbar,
	GridOverlay,
	GridToolbarContainer,
	GridToolbarExport,
	GridFilterToolbarButton,
} from "@material-ui/data-grid";
import Modal from '@material-ui/core/Modal';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Dialog from "@material-ui/core/Dialog";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import ListAltIcon from "@material-ui/icons/ListAlt";
import WarningIcon from "@material-ui/icons/Warning";

import InformationDialog from "./InformationDialog.js";

let participant = [{
	img: "https://picsum.photos/200",
	id: 1,
	first_name: "Lavern",
	last_name: "Carnevale",
	upload: "2018-12-10T13:49:51.141Z",
	test: 12,
	video: "2020-04-10T14-33-00-709Z71-task12.webm",
}]

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



const useStyles = makeStyles((theme) => ({
	root: {},
	label: {
		marginTop: theme.spacing(1),
	},
}));

function getModalStyle() {
	const top = 50
	const left = 50

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles2 = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#f5f5f9",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: "1px solid #dadde9",
	},
}))(Tooltip);

function CustomNoRowsOverlay() {
	const classes = useStyles();

	return (
		<GridOverlay className={classes.root}>
			<svg
				width="120"
				height="100"
				viewBox="0 0 184 152"
				aria-hidden
				focusable="false"
			>
				<g fill="none" fillRule="evenodd">
					<g transform="translate(24 31.67)">
						<ellipse
							className="ant-empty-img-5"
							cx="67.797"
							cy="106.89"
							rx="67.797"
							ry="12.668"
						/>
						<path
							className="ant-empty-img-1"
							d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
						/>
						<path
							className="ant-empty-img-2"
							d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
						/>
						<path
							className="ant-empty-img-3"
							d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
						/>
					</g>
					<path
						className="ant-empty-img-3"
						d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
					/>
					<g
						className="ant-empty-img-4"
						transform="translate(149.65 15.383)"
					>
						<ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
						<path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
					</g>
				</g>
			</svg>
			<div className={classes.label}>No Tests</div>
		</GridOverlay>
	);
}

export default function ToolbarGrid(props) {
	const data = props.sendData
	const [id, setId] = React.useState();
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(true);
	const classes = useStyles();
	const classes2 = useStyles2();

	const [modalStyle] = React.useState(getModalStyle);

	const CustomToolbar = withStyles(styles)((props) => {
	return (
		<Box display="flex">
			<Box
				justifyContent="flex-start"
				style={{ marginLeft: "12px" }}
				width="100%"
				display="flex"
				p={1}
			>
				<Typography
					component="h2"
					variant="h6"
					color="primary"
					gutterBottom
					style={{ marginBottom: "-6px" }}
				>
					Results by test
				</Typography>
			</Box>
			<Box justifyContent="flex-end" width="100%" display="flex" p={1}>
				<Box p={1}>
					<GridToolbarContainer>
						<Button
							size="small"
							style={{ marginRight: "16px" }}
							color="primary"
							variant="outlined"
							startIcon={<ListAltIcon />}
							onClick={e => (setOpen2(true))}
						>
							Summary
						</Button>
						<GridToolbarExport />
					</GridToolbarContainer>
				</Box>
			</Box>
		</Box>
	);
});

	var people = [];
	var diagnose = 0;
	for (var i = 0; i < data.length; i++) {
		people[i] = {
			id: data[i][0],
			gender: data[i][1],
			age: data[i][2],
			test: data[i][3],
			upload: data[i][4]
		};
		diagnose = diagnose + parseInt(data[i][10])
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};

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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose2}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

	const columns = [
		{
			field: "Avatar",
			headerName: " ",
			width: 70,
			renderCell: () => {
				return <Avatar src="https://picsum.photos/200">H</Avatar>;
			},
		},
		{ field: "id", headerName: "ID", width: 120 },
		{ field: "upload", headerName: "Upload Date", width: 200, flex: 0.5 },
		{ field: "test", headerName: "Diagnostic Test", width: 150, flex: 0.5 },
		{
			field: "results",
			flex: 1,
			headerName: "Results",
			renderCell: (params: CellParams) => {
				return (
					<Box width="100%" display="flex" p={1}>
						<Box p={1} flexGrow={1}>
							<HtmlTooltip
								title={
									<React.Fragment>
										<Typography
											color="inherit"
											style={{ marginBottom: "6px" }}
										>
											We found some symptoms associated
											with Parkinson's disease.
										</Typography>
										{
											"Not to worry – this isn't a diagnosis. View your results to learn more."
										}
									</React.Fragment>
								}
							>
								<IconButton
									onClick={() => {
										handleClickOpen();
									}}
									aria-label="info"
								>
									<WarningIcon
										color="secondary"
										fontSize="medium"
									/>
								</IconButton>
							</HtmlTooltip>
						</Box>

						<Box p={1}>
							<Button
								variant="contained"
								color="primary"
								className={classes.button}
								startIcon={<AssignmentOutlinedIcon />}
								onClick={() => {
									props.handleNext();
								}}
							>
								Results
							</Button>
						</Box>
					</Box>
				);
			},
		},
	];

	const rows = [
		{
			id: 11,
			gender: "Male",
			age: "57",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 12,
			gender: "Male",
			age: "57",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 13,
			gender: "Male",
			age: "57",
			test: "Task 14 - Surprised",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 21,
			gender: "Female",
			age: "57",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 22,
			gender: "Female",
			age: "57",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 23,
			gender: "Female",
			age: "57",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},
		{
			id: 31,
			gender: "Male",
			age: "61",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 32,
			gender: "Male",
			age: "61",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 33,
			gender: "Male",
			age: "61",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},
		{
			id: 41,
			gender: "Female",
			age: "65",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 42,
			gender: "Female",
			age: "65",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 43,
			gender: "Female",
			age: "65",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},

		{
			id: 51,
			gender: "Male",
			age: "55",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 52,
			gender: "Male",
			age: "55",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 53,
			gender: "Male",
			age: "55",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},
		{
			id: 61,
			gender: "Female",
			age: "58",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 62,
			gender: "Female",
			age: "58",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 63,
			gender: "Female",
			age: "58",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},
		{
			id: 71,
			gender: "Female",
			age: "68",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 72,
			gender: "Female",
			age: "68",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 73,
			gender: "Female",
			age: "68",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},
		{
			id: 81,
			gender: "Male",
			age: "69",
			test: "Task 12 - Smiling",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 82,
			gender: "Male",
			age: "69",
			test: "Task 13 - Disgusted",
			upload: "4/19/21, 8:30 AM",
		},
		{
			id: 83,
			gender: "Male",
			age: "69",
			test: "Task 14 - Surprised",
			upload: "4/20/21, 8:30 AM",
		},
	];

	return (
		<div style={{ height: 550, width: "100%" }}>



 <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Your diagnostic screening is complete.
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           {diagnose} out of 3 tests showed symptoms associated with Parkinson's disease.
          </Typography>
          <Typography style={{marginTop: "12px"}} gutterBottom>
            This is not a diagnosis of Parkinson's disease, but we strongly recommend contacting your physician for a follow-up.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant={'contained'} onClick={handleClose2} color="primary">
            View full results
          </Button>
        </DialogActions>
      </Dialog>










			{/*<Modal
				open={open2}
				onClose={handleClose2}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>*/}
			<DataGrid
				pageSize={5}
				rowsPerPageOptions={[5, 15, 30]}
				disableColumnMenu
				disableSelectionOnClick
				density={"comfortable"}
				components={{
					NoRowsOverlay: CustomNoRowsOverlay,
					Toolbar: CustomToolbar,
				}}
				rows={people}
				columns={columns}
				onRowOver={(e) => {
					// make sure index is getting the row and not the actual id
					setId(e.id);
					props.passUserId(id)
				}}
			/>
			<Dialog
				handleClose={handleClose}
				fullWidth
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>

				<InformationDialog sendData={data} sendId={id} />
			}
			</Dialog>
		</div>
	);
}