import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ itemsLeft, currentFilter, onFilterChange, onClearCompleted }) => {
    return (
        <footer className = {styles.footer}>
            <span>{itemsLeft} items left</span>

            <div className = {styles.filterButtons}>
                <button
                    type = "button"
                    className = {`${styles.button} ${currentFilter === 'all' ? styles.active : ''}`}
                    onClick = {() => onFilterChange('all')}
                >
                    All
                </button>
                <button
                    type = "button"
                    className = {`${styles.button} ${currentFilter === 'active' ? styles.active : ''}`}
                    onClick = {() => onFilterChange('active')}
                >
                    Active
                </button>
                <button
                    type = "button"
                    className = {`${styles.button} ${currentFilter === 'completed' ? styles.active : ''}`}
                    onClick = {() => onFilterChange('completed')}
                >
                    Completed
                </button>
            </div>

            <button
                type="button"
                className={styles.button}
                onClick={onClearCompleted}
            >
                Clear Completed
            </button>
        </footer>
    );
};

export default Footer;
