import { createSlice } from '@reduxjs/toolkit';

const ITEMS_PER_PAGE = 10;

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        page: 1,
        itemsPerPage: ITEMS_PER_PAGE,
    },
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        resetPage: (state) => {
            state.page = 1;
        },
    },
});

export const { nextPage, resetPage } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;

export const selectCurrentPage = (state) => state.pagination.page;
export const selectItemsPerPage = (state) => state.pagination.itemsPerPage;
