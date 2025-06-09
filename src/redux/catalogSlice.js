import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCatalog } from './catalogOps.js';
import { selectNameFilter } from './filtersSlice';
import {selectCurrentPage, selectItemsPerPage} from "./paginationSlice.js";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchCatalog.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export const catalogReducer = catalogSlice.reducer;
export const selectCatalog = state => state.catalog.items;

export const selectFilteredCatalog = createSelector(
    [selectCatalog, selectNameFilter],
    (catalog, nameFilter) =>
        catalog.filter(product =>
            product.name.toLowerCase().includes(nameFilter.toLowerCase())
        )
);

export const selectProductById = (productId) =>
    createSelector(
        [selectCatalog],
        (catalog) => catalog.find(product => product.id === productId)
    );

export const selectVisibleCatalog = createSelector(
    [selectFilteredCatalog, selectCurrentPage, selectItemsPerPage],
    (filteredCatalog, page, perPage) => filteredCatalog.slice(0, page * perPage)
);

export const selectHasMore = createSelector(
    [selectFilteredCatalog, selectCurrentPage, selectItemsPerPage],
    (filteredCatalog, page, perPage) => filteredCatalog.length > page * perPage
);