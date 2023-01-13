import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = AsyncStorage.getItem('favoriteItems') || [];
const initialState = {
  value: items,
};
export const favoriteSlice = createSlice({
  name: 'favoriteItems',
  initialState,
  reducers: {
    addItemsFavorite: (state, action) => {
      const newItem = action.payload;

      const dublicate = findItem(state.value, newItem);

      if (dublicate.length > 0) {
        // state.value = delItem(state.value, newItem);
        // state.value = [
        //   ...state.value,
        //   {
        //     ...newItem,
        //     id: dublicate[0].id,
        //     quantity: newItem.quantity + dublicate[0].quantity,
        //   },
        // ];
      } else {
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
        JSON.stringify(sortItems(state.value)),
      );
    },

    removeItemFavorite: (state, action) => {
      const itemDelete = action.payload;

      state.value = delItem(state.value, itemDelete);

      AsyncStorage.setItem(
        'favoriteItems',
        JSON.stringify(sortItems(state.value)),
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
