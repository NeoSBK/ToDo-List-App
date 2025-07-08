import {useState} from "react";

export const useTodo = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    const handleInputChange = ({ target }) => setInput(target.value);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        const newTask = { task: trimmedInput, completed: false };
        setTasks(prev => [...prev, newTask]);
        setInput('');
    };

    const toggleTaskCompleted = (index) => {
        setTasks(prevTasks => {
            const updated = [...prevTasks];
            updated[index] = {
                ...updated[index],
                completed: !updated[index].completed,
            };
            return updated;
        });
    };

    const handleTasksLeft = () => tasks.filter(task => !task.completed).length;

    const handleClearFilter = () => {
        setTasks(prev => prev.filter(task => !task.completed));
    };

    const handleFilterChange = (newFilter) => setFilter(newFilter);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return {
        darkMode,
        input,
        tasks,
        filter,
        filteredTasks,
        toggleDarkMode,
        handleInputChange,
        handleFormSubmit,
        toggleTaskCompleted,
        handleTasksLeft,
        handleClearFilter,
        handleFilterChange,
        setInput,
        setTasks,
    };
};