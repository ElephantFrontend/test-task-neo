import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalogSlice.js';
import { filtersReducer } from './filtersSlice';
import { favoritesReducer } from './favoritesSlice.js';
import { paginationReducer } from './paginationSlice.js';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
        pagination: paginationReducer
    },
});
