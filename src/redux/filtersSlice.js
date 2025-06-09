import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        type: '',
        equipment: []
    },
    reducers: {
        setFilters: (state, action) => {
            const { location, type, equipment } = action.payload;
            state.location = location;
            state.type = type;
            state.equipment = equipment;
        },
        resetFilters: (state) => {
            state.location = '';
            state.type = '';
            state.equipment = [];
        }
    },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectFilters = state => state.filters;
