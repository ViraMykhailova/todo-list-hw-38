import React from 'react';
import styles from './todo-item.module.css'

function TodoItem ({todo,changeCompleted,deleteTodo}) {
    function handleChange() {
        changeCompleted(todo.id)
    }

    return (
        <div className={styles.todo_item}>
            <input type='checkbox'
            checked={todo.completed}
            onChange={handleChange}/>
            <p>{todo.title}</p>
            <button onClick={()=> deleteTodo(todo.id)}>X</button>
        </div>
    );
}
export default TodoItem;