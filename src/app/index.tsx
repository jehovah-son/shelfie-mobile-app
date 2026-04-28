import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import HomeImg from "../../assets/img/favicon.png";
import ThemedView from "@/components/ThemedView";

export default function Home() {
  return (
    <ThemedView className="flex-1 items-center justify-center container mx-auto">
      <Image
        source={HomeImg}
        alt="home"
        className=" w-52 h-52"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mt-5">Welcome to Shelfie App!</Text>
      {/* This is how you navigate between screens */}
      <Text className="mt-2 text-md font-semibold">
        The Number 1 Reading List App
      </Text>

      <Link href="/about" className="mt-10 text-lg font-bold underline">
        About page
      </Link>

      <Link href="/contact" className="mt-5 text-lg font-bold underline">
        Contact page
      </Link>
    </ThemedView>
  );
}
