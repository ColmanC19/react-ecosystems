import React, { useState }from 'react';
import './NewTodoForm.css';


const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-todo-input" type="text">
        <input
         className="new-todo-button"
         type="text"
         placeholder="Type your new todo here"
         value={inputValue}
         onChange={e => setInputValue(e.target.value)} />
    </div>
  );
};