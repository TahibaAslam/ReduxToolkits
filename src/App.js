
import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Learning about Redux Toolkits.</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
