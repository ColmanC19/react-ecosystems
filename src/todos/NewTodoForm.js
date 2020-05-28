import React, { useState }from 'react';


const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-todo-input" type="text">
        <input
         className="new-todo-button"
         type="text"
         placeholder="Type"
         value={inputValue}
         onChange={e => setInputValue(e.target.value)} />
    </div>
  );
};