import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import { Link, Stack } from "expo-router";
import React, { useState } from "react";
import ThemeButtonProps from "@/components/ThemeButton";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ThemeTextInput from "@/components/ThemeTextInput";

export default function Register() {
  const handleSubmit = () => {
    console.log("register submitted", email, passWord);
  };

  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView className="container mx-auto flex-1 justify-center items-center">
        <ThemedText title={true} className="text-xl font-bold">
          Register to your account
        </ThemedText>

        <ThemeTextInput
          placeholder="Email"
          style={{ width: "80%", marginBottom: 20 }}
          className="mt-5"
          keyBoardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <ThemeTextInput
          placeholder="Password"
          style={{ width: "80%", marginBottom: 20 }}
          className="mt-5"
          onChangeText={setPassWord}
          value={passWord}
          secureTextEntry
        />

        <ThemeButtonProps text="Register" onPress={handleSubmit} />

        <Link
          href="/login"
          className="mt-5 text-lg font-bold underline text-center"
        >
          <ThemedText> already have an account? Login here</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}
