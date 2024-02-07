import React, { useState }from "react";
import {CATEGORIES, TASKS} from "../data";

function CategoryFilter({setTasks}) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setTasks(
      category === "All" ? TASKS : TASKS.filter((task) => task.category === category)
    )
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategorySelection(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;