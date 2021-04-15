import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";


const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		height: "100%",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
}));

const tileData = [
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},
	{
		img: "https://picsum.photos/150",
		title: "Image",
		author: "author",
	},

];

export default function TitlebarGridList() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList cellHeight="150px" spacing={12} className={classes.gridList}>
				{tileData.map((tile) => (
					<GridListTile cols={.5} key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							subtitle={<span>by: {tile.author}</span>}
							actionIcon={
								<IconButton
									aria-label={`info about ${tile.title}`}
									className={classes.icon}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}