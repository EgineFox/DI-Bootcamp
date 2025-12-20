import { createSlice, createSelector } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    categoryList: [],
    selectedCategory: null,
};

const categorySlice = createSlice({
    name: "category",
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
            state.categoryList = state.categoryList.map((category) =>
                category.id === id ? { ...category, title } : category
            );
        },
        removeCategory: (state, action) => {
            state.categoryList = state.categoryList.filter(
                (category) => category.id !== action.payload.id
            );
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});


// SELECTORS

// base selector
export const selectCategoryState = (state) => state.category;

// list of categories
export const selectCategories = createSelector(
    [selectCategoryState],
    (categoryState) => categoryState.categoryList
);

// selected category
export const selectSelectedCategory = createSelector(
    [selectCategoryState],
    (categoryState) => categoryState.selectedCategory
);

// category by id
export const selectCategoryById = (id) =>
    createSelector([selectCategories], (categories) =>
        categories.find((category) => category.id === id)
    );


// ACTIONS

export const {
    addCategory,
    editCategory,
    removeCategory,
    setSelectedCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
