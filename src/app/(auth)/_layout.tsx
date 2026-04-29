import { StatusBar } from "expo-status-bar";
import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
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
