import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const fetchTodos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    );

    const data = await response.json();

    setTodos(data);
    setLoading(false);
  };

    fetchTodos();


}, []);

if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
  <main>
    <h1>Todo List</h1>
    <TodoList todos={todos} />
  </main>
);
};

export default App;