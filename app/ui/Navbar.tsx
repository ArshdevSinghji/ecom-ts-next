import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import Link from "next/link";

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
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
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
