import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("action", action);
      const newTodo = action.payload;
      newTodo.id && state.todoList.unshift(newTodo);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    updateTodo: (state, action) => {
      const reqTodo = state.todoList.find(
        (todo) => todo.id === action.payload.id
      );
      reqTodo.status = !reqTodo.status;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action) => {
      const filteredTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todoList = filteredTodoList;
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
