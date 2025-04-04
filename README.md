# Native Todo App 📝

A modern, user-friendly todo application built with React Native and Expo. Stay organized, track your tasks, and boost your productivity with this clean and intuitive mobile app.

## Features

- ✅ Create, view, update, and delete todos
- 🔄 Toggle task completion status
- 💾 Persistent storage using AsyncStorage
- 📱 Beautiful UI with custom design system
- 🔍 Form validation using React Hook Form

## Tech Stack

- React Native & Expo
- TypeScript
- NativeWind (Tailwind CSS for React Native)
- React Hook Form
- AsyncStorage
- Expo Router for navigation

## Project Structure

```
native-todo/
├── app/                      # Main application screens
├── assets/                   # Static assets (fonts, images)
├── components/               # Reusable components
├── tailwind.config.js        # Styling configuration
```

## Get Started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the app

   ```bash
   bun expo start
   ```

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Development

This project uses [file-based routing](https://docs.expo.dev/router/introduction) with Expo Router. You can start developing by editing the files inside the **app** directory.

### Main Screens

- **Home** (`/app/index.tsx`): Welcome screen with navigation options
- **Todo List** (`/app/todos.tsx`): View and manage all todos
- **Add Todo** (`/app/add-todo.tsx`): Create new todo items

## Reset Project

When you're ready for a fresh start, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)

## Join the Community

- [Expo on GitHub](https://github.com/expo/expo)
- [Discord community](https://chat.expo.dev)
