import { Pressable, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const [fontLoaded] = useFonts({
    mono: require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 p-6 bg-background">
      <View className="items-center mb-10 mt-10">
        <Text className="text-5xl font-bold text-primary font-mono">todo</Text>
        <View className="h-1 w-16 bg-accent rounded-full mt-2" />
      </View>

      {/* <MaterialCommunityIcons name="clipboard-list" size={50} color="#194a7a" /> */}
      <View className="items-center mt-10">
        <Image
          source={require("../assets/images/Todo Checklist Icon.png")}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 mt-20">
        <View className="flex-row justify-center px-8 gap-5">
          <Link href="/add-todo" asChild>
            <Pressable className="bg-primary py-4 px-4 rounded-2xl shadow-lg">
              <View className="flex-row items-center justify-center">
                <Ionicons name="add-circle" size={22} color="white" />
                <Text className="text-center text-white text-lg font-mono ml-2">
                  Add Task
                </Text>
              </View>
            </Pressable>
          </Link>

          <Link href="/todos" asChild>
            <Pressable className="bg-secondary py-4 px-4 rounded-2xl shadow-lg">
              <View className="flex-row items-center justify-center">
                <Ionicons name="list" size={22} color="white" />
                <Text className="text-center text-white text-lg font-mono ml-2">
                  View Tasks
                </Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Feature highlights to fill the gap */}
      <View className="mb-10 mt-6">
        <Text className="text-primary font-mono font-semibold mb-4 text-center">
          Features
        </Text>

        <View className="flex-row justify-around mb-3">
          <View className="items-center">
            <View className="bg-white/60 p-3 rounded-full mb-2">
              <Ionicons name="checkmark-circle" size={26} color="#194a7a" />
            </View>
            <Text className="text-accent font-mono text-xs">Track Tasks</Text>
          </View>

          <View className="items-center">
            <View className="bg-white/60 p-3 rounded-full mb-2">
              <Ionicons name="stats-chart" size={26} color="#194a7a" />
            </View>
            <Text className="text-accent font-mono text-xs">
              Track Progress
            </Text>
          </View>
        </View>
      </View>

      <View className="items-center mb-8">
        <Text className="text-accent font-mono text-sm tracking-wide">
          Simplify your day
        </Text>
      </View>
    </SafeAreaView>
  );
}
