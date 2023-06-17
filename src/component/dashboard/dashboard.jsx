import * as React from 'react'
import Box from '@mui/material/Box'
import { Grid, Paper } from '@mui/material';
import Header from '../header/header';
import Map_leaflet from '../map_leaflet/map'
import FloatingActionButtonZoom from "../data_grid/data_grid"
import FrameDetail from '../frame/frame';
// import data from "../chart/data"
export default function Dashboard(){
    return(
        <Box sx={{display :'flex',width:'100vw',flexDirection:'column'}}>
            <Header/>
            <Box 
            component="main"
            sx={{
                flexGrow:1,
                height: '100vh',
                overflow:'auto',
                

            }}
            > 
                <Grid item xs={12} md={8} lg={9} sx ={{display: 'flex', flexFlow:'row wrap',}}>
                    <Box sx={{width:'70vw',display: 'flex'}}>
                        <Paper
                            elevation={6}
                            sx={{
                                p:1, // padding 
                                m:2, //margin
                                
                                display: 'flex',
                                flexDirection:'row',
                                height: '45vh',
                                width: '100vw'
                            }}
                        >
                            
                            <Map_leaflet></Map_leaflet>
                            
                        </Paper>
                    </Box>
                    <Box sx={{width:'29vw',display: 'flex'}}>
                        <Paper
                            elevation={6}
                            sx={{
                                p:1, // padding 
                                m:2, //margin
                                
                                display: 'flex',
                                flexDirection:'row',
                                height: '45vh',
                                width: '100vw'
                            }}
                        >
                            
                        </Paper>
                    </Box>
                    <Box sx={{width:'48vw',display: 'flex'}}>
                        <Paper
                            elevation={6}
                            sx={{
                                p:1, // padding 
                                m:2, //margin
                                
                                display: 'flex',
                                flexDirection:'row',
                                height: '40vh',
                                width: '100vw'
                            }}
                        >
                            <FloatingActionButtonZoom ></FloatingActionButtonZoom>
                        </Paper>
                    </Box>
                    <Box sx={{width:'48vw',display: 'flex'}}>
                        <Paper
                            elevation={6}
                            sx={{
                                p:1, // padding 
                                m:2, //margin
                                
                                display: 'flex',
                                flexDirection:'row',
                                height: '40vh',
                                width: '100vw'
                            }}
                        >
                            <FrameDetail/>
                        </Paper>
                    </Box>
                   
                </Grid>
            </Box>
        </Box>
    );
}