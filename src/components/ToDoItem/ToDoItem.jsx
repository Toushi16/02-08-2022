import './index.css';

const ToDoItem = ({ todo }) => {
    
        return (
            <ul className='ToDoItem'>
                <li>{ todo.text }</li>
            </ul>
        )
}

export default ToDoItem;
