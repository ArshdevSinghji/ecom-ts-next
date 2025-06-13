import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import BadgeCount from "./BadgeCount";
import User from "./User";

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
            <User />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
