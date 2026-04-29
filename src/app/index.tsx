import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import HomeImg from "../../assets/img/favicon.png";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemeText";

export default function Home() {
  return (
    <ThemedView className="flex-1 items-center justify-center container mx-auto">
      <Image
        source={HomeImg}
        alt="home"
        className=" w-52 h-52"
        resizeMode="contain"
      />
      <ThemedText title={true} className="text-2xl font-bold mt-5">
        Welcome to Shelfie App!
      </ThemedText>

      <ThemedText className="mt-2 text-base font-semibold">
        The Number 1 Reading List App
      </ThemedText>

      <Link href="/login" className="mt-10 text-lg font-semibold underline">
        <ThemedText> Login Page</ThemedText>
      </Link>

      <Link href="/register" className="mt-5 text-lg font-bold underline">
        <ThemedText> Register page</ThemedText>
      </Link>
    </ThemedView>
  );
}
