import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = async () => {
  const res = await AsyncStorage.getItem('addressItems');
  if (res) {
    return JSON.parse(res);
  }
  return [];
};

const initialState = {
  value: items()?.address || [],
};
export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateItemsAddress: (state, action) => {
      const newItem = action.payload;
      state.value = {...state.value, ...newItem};
      AsyncStorage.setItem(
        'addressItems',
        JSON.stringify({address: state.value}),
      );
    },
    removeItemsAddress: state => {
      state.value = null;
      AsyncStorage.removeItem('addressItems');
    },
  },
});

const {actions, reducer} = addressSlice;

export const {updateItemsAddress, removeItemsAddress} = actions;
export default reducer;
