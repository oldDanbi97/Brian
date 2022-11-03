import React from 'react';
import {useRouter} from "next/router";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {useRecoilState} from "recoil";
import {menuOpen} from "../../recoil/atom";

const BrianDrawer = () => {
  const [menu, setMenu] = useRecoilState(menuOpen);
  const handleMenu = () => {
    setMenu((prev)=>!prev);
  };
  const menuList = [
    {
      name: "link metamask",
      url: "/metamask"
    },
    {
      name: "recoil test",
      url: "/recoiltest"
    }
  ];
  const router = useRouter();
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleMenu}
      onKeyDown={handleMenu}
    >
      <List>
        {menuList.map((menu, index) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton
              onClick={()=>router.push(menu.url)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor={"left"}
      open={menu}
      onClose={handleMenu}
    >
    {list()}
  </Drawer>
  );
};

export default BrianDrawer;