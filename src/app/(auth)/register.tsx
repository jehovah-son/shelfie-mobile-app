import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import { Link, Stack } from "expo-router";
import React from "react";
import ThemeButtonProps from "@/components/ThemeButton";

const handleSubmit = () => {
  console.log("register submitted");
};

export default function Register() {
  return (
    <ThemedView className="container mx-auto flex-1 justify-center items-center">
      <ThemedText title={true} className="text-xl font-bold">
        Register to your account
      </ThemedText>

      <ThemeButtonProps text="Register" onPress={handleSubmit} />

      <Link
        href="/login"
        className="mt-5 text-lg font-bold underline text-center"
      >
        <ThemedText> already have an account? Login here</ThemedText>
      </Link>
    </ThemedView>
  );
}
