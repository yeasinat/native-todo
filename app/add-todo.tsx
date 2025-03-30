import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type FormData = {
  todoText: string;
};

const AddTodo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      todoText: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { getItem, setItem } = useAsyncStorage("@todos");

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // console.log("Submitting...");

    try {
      const existingTodos = await getItem();
      const todos = existingTodos ? JSON.parse(existingTodos) : [];

      const newTodo = {
        id: new Date().getTime(),
        text: data.todoText,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      todos.push(newTodo);
      await setItem(JSON.stringify(todos));

      reset({
        todoText: "",
      });
      router.push("/todos");
    } catch (error) {
      Alert.alert("Error", "Failed to save task. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }

    // console.log(data);
    reset();
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="flex-row items-center mb-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 mr-3 rounded-full bg-white/80"
        >
          <Ionicons name="arrow-back" size={22} color="#194a7a" />
        </TouchableOpacity>

        <Text className="text-xl text-primary font-mono font-bold">
          Add New Task
        </Text>
      </View>

      <View className="bg-white rounded-xl p-5 shadow-sm mb-5">
        <Text className="text-primary font-mono mb-4 text-base">
          What would you like to add?
        </Text>

        <View className="mb-5">
          <Controller
            control={control}
            name="todoText"
            defaultValue=""
            rules={{ required: "Please enter a task" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your task here..."
                placeholderTextColor="#7593af"
                className="border-2 border-accent rounded-lg p-3 font-mono text-text"
              />
            )}
          />
          {errors.todoText && (
            <View className="flex-row items-center mt-2">
              <Ionicons name="alert-circle-outline" size={16} color="#e74c3c" />
              <Text className="text-[#e74c3c] ml-1 font-mono text-sm">
                {errors.todoText.message}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary py-3 rounded-lg shadow-sm"
          activeOpacity={0.8}
          disabled={isSubmitting}
        >
          <View className="flex-row justify-center items-center">
            <Ionicons name="add-circle-outline" size={18} color="white" />
            <Text className="text-white font-mono font-bold ml-2">
              {isSubmitting ? "Adding task..." : "Add Task"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="items-center mt-4">
        <Text className="text-accent font-mono text-xs">
          Press and hold to add multiple tasks
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
