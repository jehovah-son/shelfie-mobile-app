import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import { Link, Stack } from "expo-router";
import React from "react";
import { userUser } from "../../../hooks/useUser";
import ThemeButton from "@/components/ThemeButton";

export default function Profile() {
  const { logout } = userUser();

  return (
    <ThemedView safe={true} className="flex-1 items-center container mx-auto">
      {/* <Stack.Screen
        options={{
          title: "Profile",
          headerShown: true,
          headerTitleAlign: "center",
        }}
      /> */}
      <ThemedText title={true} className="text-lg font-bold">
        Profile
      </ThemedText>

      <ThemedText className="text-lg font-bold">
        Time to start reading some books......
      </ThemedText>

      <ThemeButton
        text="Logout"
        onPress={() => {
          logout();
          console.log("User logged out");
        }}
      />
    </ThemedView>
  );
}
