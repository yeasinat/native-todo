import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import {  Text, TextInput, TouchableOpacity, View } from "react-native";

type FormData = {
  todo: string;
};

const TodoForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      todo: "",
    },
    // rules: {
    //   todo: { required: true },
    // },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="flex-row space-x-2 gap-2 items-center">
        <View className="flex-1">
          <Controller
            control={control}
            name="todo"
            rules={{ required: "Write a Todo" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your todo"
                className="border-2 border-primary rounded p-2"
              />
            )}
          />
          {errors.todo && (
            <Text className="text-red-500 absolute mt-11">
              {errors.todo.message}
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-secondary border-2 p-2 rounded border-secondary"
          activeOpacity={0.7}
        >
          <Text className="text-background font-bold">Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TodoForm;
