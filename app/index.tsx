import TodoForm from "@/components/TodoForm";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function Index() {
  const [fontLoaded] = useFonts({
    mono: require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View className="flex-1 bg-background">
      <Text className="text-text text-3xl font-bold font-mono">
        Todo Application
      </Text>

      <TodoForm />
    </View>
  );
}
