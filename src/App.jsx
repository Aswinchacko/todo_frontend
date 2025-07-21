import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const API_BASE = 'https://backend-sb-6n5y.onrender.com/api/todos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_BASE}/display`);
      setTodos(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const addTodo = async (text) => {
    try {
      await axios.post(`${API_BASE}/insert`, { item: text });
      fetchTodos();
    } catch (err) {
      console.error('Add error:', err);
    }
  };

  const updateTodo = async (id, updatedText) => {
    try {
      await axios.put(`${API_BASE}/update/${id}`, { item: updatedText });
      fetchTodos();
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE}/delete/${id}`);
      fetchTodos();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4"> TODO App</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
