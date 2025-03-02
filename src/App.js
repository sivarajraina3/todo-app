import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@mui/material";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          marginTop: "auto",
        }}
      >
        <Box
          sx={{
            width: "max-content",
            padding: "1rem",
            background: "aliceblue",
            marginBottom: "5rem",
            padding: "4rem",
            borderRadius: "20px",
            boxShadow: 3,
            maxHeight: "70%",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontFamily: "sans-serif",
              fontWeight: "700",
              marginBottom: "2rem",
            }}
          >
            Todo App
          </Typography>
          <TodoInput />
          <TodoList />
        </Box>
      </Box>
    </div>
  );
}

export default App;
