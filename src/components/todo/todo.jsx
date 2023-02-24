import React, { useState } from "react";
import { Box, Typography, TextField, ListItem } from "@mui/material";
import backgroundImg from "../../images/backgroundImg.jpg";
import { Delete, CheckCircleOutline, Add } from "@mui/icons-material";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title: input, isComplete: false }]);
    setInput("");
    console.log(todos);
  };

  const deleteTodo = (task) => {
    const index = todos.indexOf(task);
    if (index !== -1) {
      setTodos([
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length),
      ]);
    }
    console.log(todos);
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <Box
        sx={{
          backgroundColor: "white",
          border: "5px solid",
          borderColor: "black",
          borderRadius: "20px",
          height: "750px",
          width: "40%",
          margin: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 500,
            letterSpacing: ".15rem",
            color: "#347aeb",
            textAlign: "center",
            padding: "20px",
          }}
        >
          Todo:
        </Typography>
        <Box sx={{ marginLeft: "30%" }}>
          <TextField
            id="standard-basic"
            onInput={onInput}
            value={input}
            label="Enter task"
            variant="standard"
          />
          <Add onClick={addTodo} size="small" sx={{ color: "blue" }} />
        </Box>
        <hr />
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            divider={true}
            secondaryAction={
              <>
                <CheckCircleOutline
                  checked={todo.isComplete}
                  onClick={() => toggleChecked(todo)}
                  fontSize="small"
                  sx={todo.isComplete ? { color: "green" } : { color: "red" }}
                />
                <Delete onClick={() => deleteTodo(todo)} fontSize="small" />
              </>
            }
          >
            <Typography
              sx={{
                marginLeft: "8px",
              }}
            >
              {todo.title}
            </Typography>
          </ListItem>
        ))}
      </Box>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
