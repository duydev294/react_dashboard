import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import Header from '../header/header';
import Mapleaflet from '../map_leaflet/map';
import FloatingActionButtonZoom from '../data_grid/data_grid';

import FrameDetail from '../frame/frame';
import '../dashboard/dashboard.scss';
import FixedBottomNavigation from '../status/statusDevice';
import WAQIProjectInfo from '../info';
// import data from "../chart/data"
export default function Dashboard() {

  return (
    <Box sx={{ display: 'flex', width: '100vw', flexDirection: 'column' }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Grid item xs={12} md={8} lg={9} sx={{ display: 'flex', flexFlow: 'row wrap' }}>
          <Box sx={{ width: '70vw', display: 'flex' }}>
            <Paper
              elevation={6}
              sx={{
                p: 1, // padding
                m: 2, //margin

                display: 'flex',
                flexDirection: 'row',
                height: '45vh',
                width: '100vw',
              }}
            >
              <Mapleaflet />
            </Paper>
          </Box>
          <Box sx={{ width: '30vw', display: 'flex' }}>
            <Paper
              elevation={6}
              sx={{
                p: 1, // padding
                m: 2, //margin

                display: 'flex',
                flexDirection: 'column',
                height: '45vh',
                width: '100vw',
                overflow: 'auto',
              }}
            >
              <FixedBottomNavigation/>
            </Paper>
          </Box>
          <Box sx={{ width: '50vw', display: 'flex' }}>
            <Paper
              elevation={6}
              sx={{
                p: 1, // padding
                m: 2, //margin

                display: 'flex',
                flexDirection: 'row',
                height: '45vh',
                width: '50vw',
                overflow: 'hidden',
              }}
            >
              <FloatingActionButtonZoom></FloatingActionButtonZoom>
            </Paper>
          </Box>
          <Box sx={{ width: '50vw', display: 'flex' }}>
            <Paper
              elevation={6}
              sx={{
                p: 1, // padding
                m: 2, //margin

                display: 'flex',
                flexDirection: 'row',
                height: '45vh',
                width: '50vw',
                overflow: 'hidden',
              }}
            >
              <FrameDetail />
            </Paper>
          </Box>
        </Grid>
      </Box>
      
    </Box>
  );
}
