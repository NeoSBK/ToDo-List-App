import Header from './components/stateless/Header';
import ToDoInput from './components/stateless/ToDoInput';
import ToDoList from './components/stateless/ToDoList';
import Footer from './components/stateless/Footer'
//custom hook
import { useTodo } from './hooks/useTodo';
import styles from './App.module.css';

function App() {
    const {
        darkMode,
        input,
        filter,
        filteredTasks,
        toggleDarkMode,
        handleInputChange,
        handleFormSubmit,
        toggleTaskCompleted,
        handleTasksLeft,
        handleClearFilter,
        handleFilterChange
    } = useTodo();

    return (
        <div className = {darkMode ? styles.dark : styles.light}>
            <div className = {styles.background}></div>
            <main className = {styles.container}>
                <Header darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
                <ToDoInput value = {input} onChange = {handleInputChange} onSubmit = {handleFormSubmit} />
                <ToDoList list = {filteredTasks} onToggle = {toggleTaskCompleted} />
                <Footer
                    itemsLeft = {handleTasksLeft()}
                    onFilterChange = {handleFilterChange}
                    currentFilter = {filter}
                    onClearCompleted = {handleClearFilter}
                />
            </main>
        </div>
    );
}

export default App;
