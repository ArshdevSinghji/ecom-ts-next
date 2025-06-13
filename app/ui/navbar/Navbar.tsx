import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import BadgeCount from "./BadgeCount";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            product management
          </Typography>
          <Link href="/cart" color="inherit">
            <Box sx={{ mr: 2 }}>
              <BadgeCount />
            </Box>
          </Link>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar />
            <Box>
              <Typography variant="body2" color="inherit">
                User Name
              </Typography>
              <Typography variant="caption" color="inherit">
                email@gmail.com
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
