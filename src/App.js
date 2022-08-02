import { useState } from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      text: 'pasta'
    },
    {
      id: 2,
      text: 'eggs'
    }
  ]);

  return (
    <div className="App">
      <ToDoList list={ list } setList={ setList } />
    </div>
  );
}

export default App;
