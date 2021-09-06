import React from 'react';
import JgpAiSignature from './jgpai';
import AppBar from '@material-ui/core/AppBar';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import * as D3 from 'd3';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlbumIcon from '@material-ui/icons/TableChart';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import * as uuid from 'uuid';

const csvUrl = '/data.csv';
const metadataUrl = '/metadata.json';
var vizData: D3.DSVRowArray<string>;
let columns: GridColDef[];

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
}));


function RawData() {
  return (
    <div style={{ height: 1000, width: '100%' }}>
      <DataGrid
        rows={vizData} // {rows}
        columns={columns}
        pageSize={50}
        getRowId={(row) => uuid.v4()}
        disableSelectionOnClick
      />
    </div>
  );
}

function SmartViz() {
  return (
    <div>Hello</div>
  );
}

function RawPayload() {
  return (
    <pre>{D3.csvFormat(vizData)}</pre>
  );
}

function Meta() {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <ListItemText primary={Math.round(D3.csvFormat(vizData).length / 1024)} secondary="KB" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AlbumIcon />
        </ListItemIcon>
        <ListItemText primary={vizData.length} secondary="records" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ViewWeekIcon />
        </ListItemIcon>
        <ListItemText primary={vizData.columns.length} secondary="columns" />
      </ListItem>
    </List>
  );
}

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const tabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  // Assigns the changed data to the usable data for all
  D3.csv(csvUrl).then(data => {
    vizData = data;
    console.log('New load' + data);
  }
  );

  // Reads the metadata
  fetch(metadataUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonPayload) {
      columns = jsonPayload
    });

  return (
    <div >
      <Paper className={classes.root}>
        <AppBar
          position="fixed"
          color="default">
          <Tabs
            value={value}
            onChange={tabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="data tabs"
            centered
          >
            <Tab label="Smart Viz" {...a11yProps(0)} />
            <Tab label="Raw Data" {...a11yProps(1)} />
            <Tab label="Raw Payload" {...a11yProps(2)} />
            <Tab label="Meta" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          <SmartViz />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <RawData />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <RawPayload />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Meta />
        </TabPanel>
      </SwipeableViews>
      <JgpAiSignature />

    </div>
  );
}


//     
