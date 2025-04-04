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
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="items-center pt-12 pb-6">
        <Text className="text-5xl font-bold text-primary font-mono">todo</Text>
        <View className="h-1 w-20 bg-accent rounded-full mt-2" />
      </View>

      {/* Main content area with softer spacing */}
      <View className="flex-1 px-8 justify-between">
        {/* Logo area */}
        <View className="items-center mb-8">
          <Image
            source={require("../assets/images/Todo Checklist Icon.png")}
            style={{ width: 140, height: 140 }}
            resizeMode="contain"
          />
        </View>

        {/* Feature highlights with softer appearance */}
        <View className="mb-10">
          <View className="flex-row justify-around mb-6">
            <View className="items-center">
              <View className="bg-white/40 p-4 rounded-full mb-3 shadow-sm">
                <Ionicons name="checkmark-circle" size={28} color="#194a7a" />
              </View>
              <Text className="text-primary font-mono text-xs">
                Track Tasks
              </Text>
            </View>

            <View className="items-center">
              <View className="bg-white/40 p-4 rounded-full mb-3 shadow-sm">
                <Ionicons name="time-outline" size={28} color="#194a7a" />
              </View>
              <Text className="text-primary font-mono text-xs">
                Stay Organized
              </Text>
            </View>

            <View className="items-center">
              <View className="bg-white/40 p-4 rounded-full mb-3 shadow-sm">
                <Ionicons name="stats-chart" size={28} color="#194a7a" />
              </View>
              <Text className="text-primary font-mono text-xs">
                See Progress
              </Text>
            </View>
          </View>
        </View>

        {/* Action buttons with softer shadows */}
        <View className="mb-10">
          <View className="flex flex-col gap-4">
            <Link href="/add-todo" asChild>
              <Pressable className="bg-primary py-4 rounded-xl shadow-md">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="add-circle" size={22} color="white" />
                  <Text className="text-center text-white text-lg font-mono ml-2">
                    Add New Task
                  </Text>
                </View>
              </Pressable>
            </Link>

            <Link href="/todos" asChild>
              <Pressable className="bg-secondary py-4 rounded-xl shadow-md">
                <View className="flex-row items-center justify-center">
                  <Ionicons name="list" size={22} color="white" />
                  <Text className="text-center text-white text-lg font-mono ml-2">
                    View All Tasks
                  </Text>
                </View>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* Footer tagline */}
        <View className="items-center mb-8">
          <Text className="text-accent font-mono text-sm tracking-wide">
            Simplify your day
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
