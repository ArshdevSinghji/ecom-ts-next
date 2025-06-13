"use client";

import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";
import { useAppDispatch } from "@/app/redux/hooks";
import { setUser } from "@/app/redux/slice/userSlice";
import { useRouter } from "next/navigation";
const AuthButton = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useAppDispatch();

  const router = useRouter();

  async function handleLogin() {
    try {
      const response = await signInWithPopup(auth, provider);
      console.log("User signed in:", response.user);
      dispatch(
        setUser({
          displayName: response.user.displayName,
          email: response.user.email,
          photoURL: response.user.photoURL,
        })
      );
      router.push("/products");
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  }
  return (
    <Button
      startIcon={<GoogleIcon />}
      onClick={handleLogin}
      variant="outlined"
      fullWidth
    >
      Login With Google
    </Button>
  );
};

export default AuthButton;
