import { Container, Box, Checkbox } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Offline } from "react-detect-offline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InboxIcon from '@mui/icons-material/Inbox';
import GroupIcon from '@mui/icons-material/Group';
import ShareIcon from '@mui/icons-material/Share';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const MenuBar = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ display: "flex", height: "70em" }}>
				<Container maxWidth="xl" sx={{paddingRight: '0'}}>
					<Box sx={{ display: "flex" }}>
						<Box sx={{ maxWidth: "lg" }}>
							<Box
								sx={{
									flexGrow: 1,
									bgcolor: "background.paper",
									display: "flex",
									// height: 224,
								}}
							>
								<Tabs 
									orientation="vertical"
									value={value}
									onChange={handleChange}
									aria-label="Vertical tabs example"
									sx={{ borderRight: 1, borderColor: "divider", backgroundColor: "" }}
								>
									<Tab icon={<InboxIcon />} {...a11yProps(0)} />
									<Tab icon={<GroupIcon />} {...a11yProps(1)} />
									<Tab icon={<ShareIcon />} {...a11yProps(2)} />
								</Tabs>
								<TabPanel value={value} index={0}>
									<List
										sx={{
											width: "100%",
											maxWidth: 360,
											bgcolor: "background.paper",
										}}
									>
                    <ListItem alignItems="flex-start">
                        <ListItemText>
                            <Typography>
                                <h2>Conversations</h2>
                            </Typography>
                        </ListItemText>
                    </ListItem>
										<ListItem alignItems="flex-start">
											<Checkbox></Checkbox>
											<ListItemText
												primary="Brunch this weekend?"
												secondary={
													<React.Fragment>
														<Typography
															sx={{ display: "inline" }}
															component="span"
															variant="body2"
															color="text.primary"
														>
															Ali Connors
														</Typography>
														{
															" — I'll be in your neighborhood doing errands this…"
														}
													</React.Fragment>
												}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start">
                    <Checkbox></Checkbox>
											<ListItemText
												primary="Summer BBQ"
												secondary={
													<React.Fragment>
														<Typography
															sx={{ display: "inline" }}
															component="span"
															variant="body2"
															color="text.primary"
														>
															to Scott, Alex, Jennifer
														</Typography>
														{" — Wish I could come, but I'm out of town this…"}
													</React.Fragment>
												}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
										<ListItem alignItems="flex-start">
                    <Checkbox></Checkbox>
											<ListItemText
												primary="Oui Oui"
												secondary={
													<React.Fragment>
														<Typography
															sx={{ display: "inline" }}
															component="span"
															variant="body2"
															color="text.primary"
														>
															Sandra Adams
														</Typography>
														{
															" — Do you have Paris recommendations? Have you ever…"
														}
													</React.Fragment>
												}
											/>
										</ListItem>
									</List>
								</TabPanel>
								<TabPanel value={value} index={1}>
									Item Two
								</TabPanel>
								<TabPanel value={value} index={2}>
									Item Three
								</TabPanel>
								<TabPanel value={value} index={3}>
									Item Four
								</TabPanel>
								<TabPanel value={value} index={4}>
									Item Five
								</TabPanel>
								<TabPanel value={value} index={5}>
									Item Six
								</TabPanel>
								<TabPanel value={value} index={6}>
									Item Seven
								</TabPanel>
							</Box>
						</Box>
						<Box sx={{ flexGrow: "1" }}>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<Box sx={{ bgcolor: "red" }}>
									<h1> hello</h1>
								</Box>
								<Box sx={{ bgcolor: "black" }}>
									<h2>world</h2>
								</Box>
							</Box>
						</Box>
					</Box>
				</Container>
				<Container maxWidth="xs" sx={{paddingLeft: '0'}}>
        <Card>
						<Stack direction="column" spacing={1}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							<Stack direction="row" spacing={2}>
								<h5>Amit RG</h5>
							</Stack>

							<Offline>Only shown offline (surprise!)</Offline>
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
				</Container>
			</Box>
		</>
	);
};

export default MenuBar;
