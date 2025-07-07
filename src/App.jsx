import { useState } from 'react';
import Header from './components/stateless/Header';
import ToDoInput from './components/stateless/ToDoInput';
import ToDoList from './components/stateless/ToDoList';
import styles from './App.module.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState('');

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const handleInputChange = ({target}) => {
      setInput(target.value);
  };

  const handleFormSubmit = (event) => {
      event.preventDefault();
      setInput('');
  };

  const toggleTaskCompleted = ()=> {return null};
  const Tasks = [{task: 'Code a frontend mentor challenge', completed: true}, {task: 'Code a frontend mentor challenge', completed: false}, {task: 'Code a frontend mentor challenge', completed: false}];

  const appClass = darkMode ? styles.dark : styles.light;

  return (
      <div className={appClass}>
        <div className={styles.background}></div>
        <main className={styles.container}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <ToDoInput value = {input} onChange = {handleInputChange} onSubmit = {handleFormSubmit} />
            {/*implement Task and toggleTaskCompleted even handleInputChange, handleFormSubmit */}
          <ToDoList list = {Tasks} onToggle= {toggleTaskCompleted} />
        </main>
      </div>
  );
}

export default App;
