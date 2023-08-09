import React from 'react';
import Avatar from './avatar';
import './header.css';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
const Header = () => {
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
