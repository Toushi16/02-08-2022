import { useState } from 'react';
import ToDoItem from '../ToDoItem';
import Button from '../Button';
import './index.css';

const ToDoList = ({list, setList}) => {
    const [todoInput, setTodoInput] = useState('');
    
    const onHandleClickAdd = () => {
        setList([...list, { id: list.length + 1, text:todoInput }]);
        setTodoInput('');
    };

    return (
        <div className='ToDoList'>
            <h1>TO DO LIST</h1>
            <br />
            <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} placeholder="Write here"
        />
            <Button onClick={onHandleClickAdd} textContent={'Add'} />
            {
                list.length
                ? list.map(todo => <ToDoItem todo={todo} key={todo.id}/>)
                : <p>Loading ...</p>
            }
        </div>
    )
}

export default ToDoList;