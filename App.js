import React from "react";
import { StyleSheet } from "react-native";
import MainScreens from "./screens/MainScreens";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/slices/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <MainScreens />
    </Provider>
  );
}
