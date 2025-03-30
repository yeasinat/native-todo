import { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
};

export default function TodoListScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { getItem, setItem } = useAsyncStorage("@todos");

  const loadTodos = async () => {
    setRefreshing(true);
    try {
      const storedTodos = await getItem();
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load todos");
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const toggleTodo = async (id: string) => {
    try {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      await setItem(JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    } catch (error) {
      Alert.alert("Error", "Failed to update todo");
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      await setItem(JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
    } catch (error) {
      Alert.alert("Error", "Failed to delete todo");
    }
  };

  const renderItem = ({ item }: { item: Todo }) => (
    <View className="flex-row font-mono justify-between items-center p-4 my-1 bg-white rounded-lg shadow-sm">
      <TouchableOpacity className="flex-1" onPress={() => toggleTodo(item.id)}>
        <Text
          className={`text-base ${
            item.completed ? "line-through text-secondary" : "text-primary"
          }`}
        >
          {item.text}
        </Text>
        <Text className="text-xs text-gray-500 mt-1">
          {new Date(item.createdAt).toLocaleString()}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-2 bg-red-500 rounded-md ml-2"
        onPress={() => deleteTodo(item.id)}
      >
        <Text className="text-white text-sm">Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 p-4 bg-background">
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={loadTodos}
        ListEmptyComponent={
          <Text className="text-center mt-8 text-gray-500">
            No todos yet. Add one!
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity
        className="p-4 bg-primary rounded-lg mt-4 flex-row items-center justify-center"
        onPress={() => router.push("/add-todo")}
        activeOpacity={0.7}
      >
        <Ionicons name="add-circle-outline" size={18} color="white" />
        <Text className="text-white text-center font-medium ml-2">
          Add Task
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
