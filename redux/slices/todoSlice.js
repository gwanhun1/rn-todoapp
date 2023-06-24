import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { currentId: 4, todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: "todo",
      });
    },
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[item].state =
        state.todos[item].state === "todo" ? "done" : "todo";
      state.todos.push(state.todos.splice(item, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((todo) => todo.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
