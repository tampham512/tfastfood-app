import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = async () => {
  const res = await AsyncStorage.getItem('favoriteItems');
  if (res) {
    return JSON.parse(res);
  }
  return [];
};

const initialState = {
  value: items()?.favorite || [],
};
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemsFavorite: (state, action) => {
      const newItem = action.payload;

      const dublicate = findItem(state.value, newItem);

      if (dublicate.length <= 0) {
        state.value = [
          ...state.value,
          {
            ...newItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }

      AsyncStorage.setItem(
        'favoriteItems',
        JSON.stringify({favorite: sortItems(state.value)}),
      );
    },

    removeItemFavorite: (state, action) => {
      const itemDelete = action.payload;

      state.value = delItem(state.value, itemDelete);

      AsyncStorage.setItem(
        'favoriteItems',
        JSON.stringify({favorite: sortItems(state.value)}),
      );
    },
  },
});
const findItem = (arr, item) =>
  arr.filter(e => e.slug === item.slug && e.idUser === item.idUser);

const delItem = (arr, item) =>
  arr.filter(e => e.slug !== item.slug || e.idUser !== item.idUser);

const sortItems = arr =>
  arr.sort((a, b) => {
    return a.id - b.id;
  });
const {actions, reducer} = favoriteSlice;

export const {addItemsFavorite, removeItemFavorite} = actions;
export default reducer;
