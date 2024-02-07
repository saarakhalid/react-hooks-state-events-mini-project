// App Component
import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';

import { CATEGORIES, TASKS } from '../data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tasks, setTasks] = useState(TASKS);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (taskData) => {
    // Add a new task to the list with the text and category from the form
    console.log('Hello', taskData);
    setTasks([...tasks, taskData]);
  };
  console.log(tasks.length);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        selectedCategory={selectedCategory}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;