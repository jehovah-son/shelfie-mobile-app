import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import HomeImg from "../../assets/img/favicon.png";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 container mx-auto">
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
    </View>
  );
}
