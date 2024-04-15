import {useState} from 'react';
import TodoItem from "../TodoItem";

import styles from './todo-list.module.css'

function TodoList () {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            title: 'Doctor Appointment',
            completed: true
        },
        {
            id: Math.random(),
            title: 'Meeting with friends',
            completed: false
        }
    ]);
    const [title, setTitle] = useState('');

    function addNewTodo(title) {
        const newTodo = {
            id: Math.random(),
            title,
            completed: false
        };
        setTodos([...todos, newTodo]);
        setTitle('');
    }
    function changeCompleted (id) {
        setTodos(todos.map(todo=>{
           if(todo.id ===id){
               return {...todo,completed: !todo.completed};
           } else {
              return todo;
           }
        }));
    }

    function deleteTodo (id) {
        setTodos(todos.filter(todo=>todo.id!==id));
    }

    return (
        <div className={styles.todo_list}>
            {todos.map(todo => (
                <TodoItem
                    key ={todo.id}
                    todo ={todo}
                    changeCompleted = {changeCompleted}
                    deleteTodo = {deleteTodo}
                />

                ))}
            <div className={styles.input_wrapper}>
                <input value={title}
                       onChange={e => setTitle(e.target.value)}
                       placeholder={'write new task'}
                       className={styles.input_title}
                />
                <button onClick={() => addNewTodo(title)}>Add</button>
            </div>
        </div>
    );
}
export default TodoList;