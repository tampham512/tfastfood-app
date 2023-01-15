import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = async () => {
  const res = await AsyncStorage.getItem('cartItems');

  if (res) {
    return JSON.parse(res);
  }
  return [];
};

const initialState = {
  value: items()?.cart || [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      console.log('v');
      const newItem = action.payload;

      const dublicate = findItem(state.value, newItem);

      if (dublicate.length > 0) {
        state.value = delItem(state.value, newItem);
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: dublicate[0]?.id,
            quantity: newItem.quantity + dublicate[0].quantity,
          },
        ];
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
        'cartItems',
        JSON.stringify({cart: sortItems(state.value)}),
      );
    },
    updateItems: (state, action) => {
      const itemUpdate = action.payload;

      const item = findItem(state.value, itemUpdate);

      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0]?.id,
          },
        ];
        AsyncStorage.setItem(
          'cartItems',
          JSON.stringify({cart: sortItems(state.value)}),
        );
      }
    },
    removeItem: (state, action) => {
      const itemDelete = action.payload;
      state.value = delItem(state.value, itemDelete);
      AsyncStorage.setItem(
        'cartItems',
        JSON.stringify({cart: sortItems(state.value)}),
      );
    },
    clear: (state, action) => {
      state.value = [];
      AsyncStorage.removeItem('cartItems');
    },
  },
});
const findItem = (arr, item) =>
  arr?.filter(e => e.slug === item.slug && e.idUser === item.idUser);

const delItem = (arr, item) =>
  arr?.filter(e => e.slug !== item.slug || e.idUser !== item.idUser);

const sortItems = arr =>
  arr?.sort((a, b) => {
    return a.id - b.id;
  });
const {actions, reducer} = cartSlice;
export const {addItems, updateItems, removeItem, clear} = actions;
export default reducer;
