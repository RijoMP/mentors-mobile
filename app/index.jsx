import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full  items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Link href="/home">
            <Text>Go to home</Text>
          </Link>
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
