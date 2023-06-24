import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LineChart from '../chart/line_chart';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiProvider';
import { useEffect } from 'react';

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
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}
TabPanel.prototype = {
  childen: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [listTemp, setListTemp] = React.useState([]);
  const [listEC, setListEC] = React.useState([]);
  const [listDO, setListDO] = React.useState([]);
  const [listPH, setListPH] = React.useState([]);
  const [listLabel, setListLabel] = React.useState([]);

  const { chartData } = useContext(ApiContext);

  useEffect(() => {
    if (chartData && chartData.list && chartData.list.length > 0) {
      let lstLabel = [];
      let lstTemp = [];
      let lstEC = [];
      let lstDO = [];
      let lstPH = [];
      for (const item of chartData.list) {
        lstLabel.push(item.dt_txt);
        lstPH.push(item.main.temp);
        lstDO.push(item.main.feels_like);
        lstEC.push(item.wind.speed);
        lstTemp.push(item.main.humidity);
      }
      setListTemp([
        {
          label: 'Nhiệt độ',
          data: lstTemp,
          backgroundColor: '#2196F3',
          borderColor: '#2196F3',
        },
      ]);
      setListEC([
        {
          label: 'EC',
          data: lstEC,
          backgroundColor: '#2196F3',
          borderColor: '#2196F3',
        },
      ]);
      setListDO([
        {
          label: 'DO',
          data: lstDO,
          backgroundColor: '#2196F3',
          borderColor: '#2196F3',
        },
      ]);
      setListPH([
        {
          label: 'PH',
          data: lstPH,
          backgroundColor: '#2196F3',
          borderColor: '#2196F3',
        },
      ]);
      setListLabel(lstLabel);
    }
  }, [chartData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
        position: 'relative',
        minHeight: '100%',
      }}
    >
      <AppBar position="static" color="default" sx={{ height: '30px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          fontSize="15"
          minHeight="0"
          sx={{ minHeight: '30px' }}
        >
          <Tab label="Temp" {...a11yProps(0)} />
          <Tab label="EC" {...a11yProps(1)} />
          <Tab label="DO" {...a11yProps(2)} />
          <Tab label="pH" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listTemp}></LineChart>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listEC}></LineChart>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listDO}></LineChart>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listPH}></LineChart>
      </TabPanel>
    </Box>
  );
}
