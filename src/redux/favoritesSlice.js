import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload;
            if (state.favorites.includes(id)) {
                state.favorites = state.favorites.filter(favId => favId !== id);
            } else {
                state.favorites.push(id);
            }
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        loadFavorites: (state) => {
            const saved = JSON.parse(localStorage.getItem('favorites'));
            if (saved) {
                state.favorites = saved;
            }
        },
    },
});

export const { toggleFavorite, loadFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const selectFavorites = state => state.favorites.favorites;
