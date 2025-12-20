import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "./categoriesSlice";

const AddCategoryForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addCategory({ title }));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter category name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategoryForm;