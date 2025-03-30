import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="add-todo" options={{ headerShown: false }} />
      <Stack.Screen name="todos" options={{ headerShown: false }} />
    </Stack>
  );
}
