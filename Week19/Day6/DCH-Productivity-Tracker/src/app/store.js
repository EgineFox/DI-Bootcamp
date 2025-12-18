import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import categoryReducer from '../features/categories/categoriesSlice';

export default configureStore({
    reducer: {
        task: tasksReducer,
        category: categoryReducer,
    }
})