import React from 'react';
import styles from './Header.module.css';
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';

const Header = ({darkMode, toggleDarkMode}) => {

    return (
        <header className = {styles.header}>
            <h1 className = {styles.title}>TODO</h1>
            <button onClick = {toggleDarkMode} className = {styles.themeToggle}>
                <img src = {darkMode ? sunIcon :moonIcon}  alt = "toggle theme"/>
            </button>
        </header>
    )
}

export default Header;