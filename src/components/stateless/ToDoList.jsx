import React from 'react';
import checkIcon from '../../assets/images/icon-check.svg';
import styles from  './ToDoList.module.css';


const ToDoList = ({ list, onToggle }) => {
    return (
        <ul className = {styles.todoList}>
            {list.map((todo, index) => (
                <li
                    key = {index}
                    className = {`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
                    onClick = {() => onToggle(index)}
                >
          <span className = {styles.todoCircle}>
            {todo.completed && (<img src={checkIcon} alt = "Checked" />)}
          </span>
          <span className={styles.taskText}> {todo.task} </span>
                </li>
            ))}
        </ul>
    );
};

export default ToDoList;