import React from 'react';
import Avatar from './avatar';
import './header.css';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  var noti = 6;
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              m: 2,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            BKRES
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" color="inherit">
              {/* <Badge badgeContent={noti} color="error">
                <NotificationsIcon />
              </Badge> */}
            </IconButton>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
