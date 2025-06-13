import AuthButton from "@/app/ui/auth/AuthButton";
import { Paper, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: 2,
      }}
    >
      <Typography>Login</Typography>
      <AuthButton />
    </Paper>
  );
};

export default Login;
