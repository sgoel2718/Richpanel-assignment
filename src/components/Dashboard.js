import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Offline } from "react-detect-offline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

export default function OutlinedCard() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<>
			{/* <div className="d-flex bd-highlight example-parent"> */}
			{/* <Box className="p-2 flex-fill bd-highlight col-example"> */}
			<Box sx={{ display: "flex" }}>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<CssBaseline />
					<AppBar position="fixed" open={open}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								sx={{ mr: 2, ...(open && { display: "none" }) }}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" noWrap component="div">
								Persistent drawer
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							"& .MuiDrawer-paper": {
								width: drawerWidth,
								boxSizing: "border-box",
							},
						}}
						variant="persistent"
						anchor="left"
						open={open}
					>
						<DrawerHeader>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === "ltr" ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
						</DrawerHeader>
						<Divider />
						<List>
							{["Inbox", "Starred", "Send email", "Drafts"].map(
								(text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemButton>
											<ListItemIcon>
												{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItemButton>
									</ListItem>
								)
							)}
						</List>
						<Divider />
						<List>
							{["All mail", "Trash", "Spam"].map((text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Drawer>
					<Main open={open}>
						<DrawerHeader />
						<Typography paragraph>Lorem</Typography>
					</Main>
				</Box>
			</Box>
			<Box className="p-1 flex-fill bd-highlight col-example">
				<Card>
					<Stack direction="column" spacing={1}>
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						<Stack direction="row" spacing={2}>
							<h5>Amit RG</h5>
						</Stack>

						<Stack direction="row" spacing={2}>
							<button>
								<CallOutlinedIcon></CallOutlinedIcon>Call
							</button>
							<button>
								<AccountCircleIcon></AccountCircleIcon> Profile
							</button>
						</Stack>
					</Stack>
				</Card>
				<Card>
					<CardContent>
						<Stack direction="row" spacing={2}>
							<Typography variant="h6" component="div">
								Customer details
							</Typography>
						</Stack>
						<Stack direction="row" spacing={2}>
							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								Email
							</Typography>
							<h7>amit@richpanel.com</h7>
						</Stack>
						<Stack direction="row" spacing={2}>
							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								First Name
							</Typography>
							<h6>Amit</h6>
						</Stack>
						<Stack direction="row" spacing={4}>
							<Typography sx={{ mb: 1.5 }} color="text.secondary">
								Last Name
							</Typography>
							<h7>RG</h7>
						</Stack>
					</CardContent>
					<CardActions>
						<Button size="small">View more details</Button>
					</CardActions>
				</Card>
			</Box>
			{/* </div> */}
		</>
	);
}
