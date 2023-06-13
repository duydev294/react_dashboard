import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import LineChart from '../chart/line_chart';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}
TabPanel.prototype={
  childen: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary' ,
      sx: fabStyle ,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary' ,
      sx: fabStyle ,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit' ,
      sx: { ...fabStyle, ...fabGreenStyle } ,
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
        position: 'relative',
        minHeight: '100%',
      }}
    >
      <AppBar position="static" color="default"  sx={{height:'30px'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          fontSize="15"
          minHeight = '0'
          sx={{minHeight:'30px'}}
        >
          <Tab label="Temp" {...a11yProps(0)} />
          <Tab label="EC" {...a11yProps(1)} />
          <Tab label="DO" {...a11yProps(2)} />
          <Tab label="pH" {...a11yProps(3)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <LineChart data={data}></LineChart> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {/* <LineChart data={data}></LineChart> */}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        {/* <LineChart data={data}></LineChart> */}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        {/* <LineChart data={data}></LineChart> */}
        </TabPanel>
      </SwipeableViews>
      
    </Box>
  );
}
