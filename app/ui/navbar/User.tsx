"use client";

import { useAppSelector } from "@/app/redux/hooks";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const User = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <Avatar alt={user.displayName || ""} src={user.photoURL || ""} />
      <Box>
        <Typography variant="body2" color="inherit">
          {user.displayName}
        </Typography>
        <Typography variant="caption" color="inherit">
          {user.email}
        </Typography>
      </Box>
    </>
  );
};

export default User;
