import { useReducer } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Chat } from "./components/chat/chat";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo.reducer";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}
export default App;
