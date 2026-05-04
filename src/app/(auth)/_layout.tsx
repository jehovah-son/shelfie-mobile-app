import { StatusBar } from "expo-status-bar";
import React from "react";
import { Stack } from "expo-router";
import { userUser } from "../../../hooks/useUser";

export default function AuthLayout() {
  const { user } = userUser();

  console.log("AuthLayout user", user);
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
          headerTitleAlign: "center",
        }}
      ></Stack>
    </>
  );
}
