import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, selectSelectedCategory, setSelectedCategory } from './categoriesSlice';

const CategorySelector = () => {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Category Selector</h2>
      <ul>
        {(categories ?? []).map(category => (
          <li key={category.id}>
            <button
              style={{
                fontWeight: category.id === selectedCategory ? 'bold' : 'normal'
              }}
              onClick={() => dispatch(setSelectedCategory(category.id))}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
