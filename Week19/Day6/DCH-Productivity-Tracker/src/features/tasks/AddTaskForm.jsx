import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./tasksSlice";
import { selectCategories } from "../categories/categoriesSlice";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category) {
      dispatch(addTask({ title, category }));
      setTitle("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;