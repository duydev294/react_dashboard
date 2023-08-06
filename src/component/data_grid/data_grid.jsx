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
  if(chartData){
    console.log(chartData.data.data);
  }
 

  useEffect(() => {
    if (chartData && chartData.data && chartData.data.data.length > 0) {
      let lstLabel = [];
      let lstTemp = [];
      let lstEC = [];
      let lstDO = [];
      let lstPH = [];

      chartData.data.data.forEach(item=>{
        lstLabel.push(item.time);
        lstPH.push(item.pH);
        lstDO.push(item.DO);
        lstEC.push(item.EC);
        lstTemp.push(item.Temp);
      })
      setListTemp([
        {
          label: 'Nhiệt độ',
          data: lstTemp,
          backgroundColor: '#2196F3',
          borderColor: '#2196F3',
          pointBorderColor: 'transparent',
          pointBorderWidth: 2,
          tension: 0.5,
        },
      ]);
      setListEC([
        {
          label: 'EC',
          data: lstEC,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          pointBorderColor: 'transparent',
          pointBorderWidth: 2,
          tension: 0.5,
        },
      ]);
      setListDO([
        {
          label: 'DO',
          data: lstDO,
          backgroundColor: 'rgba(255, 153, 51, 0.75)',
          borderColor: 'rgba(255, 153, 51, 0.75)',
        },
      ]);
      setListPH([
        {
          label: 'PH',
          data: lstPH,
          backgroundColor: 'rgba(0, 153, 102, 0.75)',
          borderColor: 'rgba(0, 153, 102, 0.75)',
        },
      ]);
      console.log(listTemp)
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
        <LineChart listLabel={listLabel} listData={listTemp} min_data={20}></LineChart>
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listEC} min_data={0}></LineChart>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listDO} min_data={0}></LineChart>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <LineChart listLabel={listLabel} listData={listPH} min_data ={5}></LineChart>
      </TabPanel>
    </Box>
  );
}
