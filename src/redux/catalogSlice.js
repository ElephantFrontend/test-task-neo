import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchCatalog } from './catalogOps.js';
import { selectFilters } from './filtersSlice';
import { selectCurrentPage, selectItemsPerPage } from './paginationSlice.js';

const initialState = {
    items: [],
    loading: false,
    error: null
};

const equipmentMap = {
    AC: { key: 'AC', expected: true },
    transmission: { key: 'transmission', expected: 'automatic' },
    kitchen: { key: 'kitchen', expected: true },
    TV: { key: 'TV', expected: true },
    bathroom: { key: 'bathroom', expected: true },
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
export const selectLoading = state => state.catalog.loading;

export const selectFilteredCatalog = createSelector(
    [selectCatalog, selectFilters],
    (catalog, filters) => {
        return catalog.filter(product => {
            const matchLocation =
                !filters.location ||
                product.location.toLowerCase().includes(filters.location.toLowerCase());

            const matchType = !filters.type || product.form === filters.type;

            const matchEquipment =
                filters.equipment.length === 0 ||
                filters.equipment.every(eq => {
                    const { key, expected } = equipmentMap[eq] || {};
                    if (!key) return false;
                    return product[key] === expected;
                });

            return matchLocation && matchType && matchEquipment;
        });
    }
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