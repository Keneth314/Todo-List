import './App.css';
import React from 'react';
import "./style.css";
import { TodoList } from './TodoList';
import { SearchTodo } from './SearchTodo';
import { CreateTodoButton } from './CreateTodoButton';
import { CountTodo } from './CountTodo';
import { TodoItem } from './TodoItem';
import { TodoContext, TodoProvider } from './TodoContext'

function App() {

  const {
    loading,
    error,
    searchTodos,
    onComplete,
    onDelete
  } = React.useContext(TodoContext)


  return (
    <TodoProvider>
      <CountTodo />
      <SearchTodo />
      <CreateTodoButton />

      <TodoList>
        {loading && <p>Cargando ToDos...</p>}
        {error && <p>Hubo un error</p>}
        {!loading && searchTodos.length === 0 && <p>¡Crea tu primer ToDo!</p>}
        {searchTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)} />
        ))}
      </TodoList>

    </TodoProvider>

  );
}

export default App;
