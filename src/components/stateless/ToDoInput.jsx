import React from 'react';
import styles from './ToDoInput.module.css';

const ToDoInput = ({ value, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className={styles.todoForm}>
            <span className={styles.todoCircle}></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                value={value}
                onChange={onChange}
                className={styles.todoInput}
            />
        </form>
    );
};

export default ToDoInput;