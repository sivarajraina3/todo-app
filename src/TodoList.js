import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, List, ListItem, Switch, Typography } from "@mui/material";
import { deleteTodo, updateTodo } from "./Redux/todoSlice";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todoSlice);
  console.log("todoList", todoList);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "70%",
        marginTop: "1rem",
        scrollbarWidth: "none",
      }}
    >
      {todoList.map((todo) => {
        return (
          <Box>
            <List>
              <ListItem
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  padding: ".2rem",
                  borderRadius: "20px",
                  background: "#fff",
                  "&:hover": {
                    boxShadow: 3,
                  },
                }}
              >
                {" "}
                <Switch
                  size="small"
                  checked={todo.status}
                  onChange={() => dispatch(updateTodo({ id: todo.id }))}
                />
                <Typography sx={{ fontSize: "1.5rem" }}>{todo.name}</Typography>
                <Button
                  onClick={() => dispatch(deleteTodo({ id: todo?.id }))}
                  sx={{ color: "red", padding: "0", width: "max-content" }}
                >
                  X
                </Button>
              </ListItem>
            </List>
          </Box>
        );
      })}
    </Box>
  );
};

export default TodoList;
