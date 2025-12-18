import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    categoryList: [],
    selectedCategory: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const { title } = action.payload;
            state.categoryList.push({
                id: nanoid(),
                title,
            });
        },
        editCategory: (state, action) => {
            const { id, title } = action.payload;
            state.categoryList = state.categoryList.map(category => category.id === id ?
                { ...category, title }
                : category
            );
        },
        removeCategory: (state, action) => {
            state.categoryList = state.categoryList.filter(category => category.id !== action.payload.id);
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;

        },


    },
});


// selectors
export const selectCategories = (state) => state.category.categoryList;
export const selectSelectedCategory = (state) => state.category.selectedCategory;
export const selectCategoryById = (id) => (state) =>
    state.category.categoryList.find((category) => category.id === id);



// actions
export const { addCategory, editCategory, removeCategory, setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
