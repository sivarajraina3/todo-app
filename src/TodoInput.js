import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/todoSlice";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const createTodo = () => {
    dispatch(addTodo({ id: Date(), name: todo, status: false }));
    setTodo("");
  };
  return (
    <Box sx={{ alignItems: "center", display: "flex", gap: "1rem" }}>
      <TextField
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && todo.length > 0) {
            createTodo();
          }
        }}
      />
      <Button
        onClick={() => todo.length > 0 && createTodo()}
        variant="contained"
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
