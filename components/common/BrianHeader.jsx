import React from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useRecoilState} from "recoil";
import {menuOpen} from "../../recoil/atom";
const BrianHeader = () => {
  const [menu, setMenu] = useRecoilState(menuOpen);
  const handleMenu = () => {
    setMenu((prev)=>!prev);
  };
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Ammp Admin
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default BrianHeader;