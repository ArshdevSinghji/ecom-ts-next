"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";
import { removeUser } from "@/app/redux/slice/userSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const User = () => {
  const router = useRouter();

  const [dropdown, setDropdown] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
  };

  if (!user.displayName) {
    return (
      <Box>
        <Typography variant="body2" color="inherit">
          Not logged in{" "}
          <Link
            href="/login"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Sign In?
          </Link>
        </Typography>
      </Box>
    );
  }

  return (
    <Box position={"relative"} display="flex" alignItems="center" gap={1}>
      {user.photoURL && (
        <Avatar alt={user.displayName || ""} src={user.photoURL || ""} />
      )}
      <Box>
        <Typography variant="body2" color="inherit">
          {user.displayName}
        </Typography>
        <Typography variant="caption" color="inherit">
          {user.email}
        </Typography>
      </Box>
      <ArrowDropDownIcon onClick={handleDropdownClick} cursor="pointer" />
      {dropdown && (
        <Paper
          elevation={2}
          sx={{
            position: "absolute",
            top: "100%",
            right: 0,
            width: "200px",
            backgroundColor: "#fff",
            zIndex: 1,
          }}
        >
          <Typography
            variant="body2"
            color="error"
            p={2}
            sx={{
              cursor: "pointer",
              ":hover": { textDecoration: "underline" },
            }}
            onClick={() => {
              dispatch(removeUser());
              setDropdown(false);
              router.push("/login");
            }}
          >
            Sign Out
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default User;
