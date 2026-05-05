import ThemeButtonProps from "@/components/ThemeButton";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";
import { Link, Stack } from "expo-router";
import ThemeTextInput from "@/components/ThemeTextInput";
import { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";
import { userUser } from "../../../hooks/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState(null);

  const { user, login } = userUser();

  const handleSubmit = async () => {
    setError(null); // Clear previous errors
    try {
      await login(email, passWord);
      console.log("login submitted", email, passWord);
      setEmail("");
      setPassWord("");
      // console.log("current user", user);
    } catch (error: any) {
      setError(
        error.message || "An error occurred during login. Please try again.",
      );
      setEmail("");
      setPassWord("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView className="container mx-auto flex-1 justify-center items-center">
        <ThemedText title={true} className="text-xl font-bold">
          Login to your account
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

        <ThemeButtonProps text="Login" onPress={handleSubmit} />

        {error && (
          <Text className="text-red-500 text-center mb-4">{error}</Text>
        )}

        <Link
          href="/register"
          className="mt-5 text-lg font-bold underline text-center"
        >
          <ThemedText> Register your account</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}
