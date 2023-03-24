import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  ListItem,
  IconButton,
  Icon,
} from "@mui/material";
import backgroundImg from "../../images/backgroundImg.jpg";
import { Delete, CheckCircleOutline, Add } from "@mui/icons-material";
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo.reducer";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
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
        {todoState.todos.map((todo) => (
          <ListItem
            key={todo.title}
            divider={true}
            secondaryAction={
              <>
                <IconButton onClick={() => toggleChecked(todo)}>
                  <CheckCircleOutline
                    fontSize="small"
                    sx={todo.isComplete ? { color: "green" } : { color: "red" }}
                  />
                </IconButton>

                <IconButton onClick={() => deleteTodo(todo)}>
                  <Delete fontSize="small" />
                </IconButton>
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
