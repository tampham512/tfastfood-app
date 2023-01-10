import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {AuthAPI, LoginAPI, RegisterAPI} from 'src/services';

const initialState = {
  isLoading: false,
  userInfo: null,
  accessToken: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const {accessToken} = action.payload;
      console.log('🚀 ~ file: authSlice.js:16 ~ password', action);

      AsyncStorage.setItem('accessToken', JSON.stringify(accessToken));

      state.accessToken = accessToken;
    },
    updateInfoUser: (state, action) => {
      const {userInfo} = action.payload;
      state.userInfo = userInfo;
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    },
    register: (state, action) => {
      const {username, password, confirm_password, email} = action.payload;
      RegisterAPI.useRegisterAccountMutation({
        username,
        password,
        confirm_password,
        email,
      })
        .unwrap()
        .then(data => {
          state.accessToken = data.token;
          AsyncStorage.setItem('accessToken', JSON.stringify(data?.token));
          AuthAPI.useGetUserQuery()
            .unwrap()
            .then(dataUser => {
              state.userInfo = dataUser?.user;
              AsyncStorage.setItem('userInfo', JSON.stringify(dataUser?.user));
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    isLoginIn: async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const userInfo = await AsyncStorage.getItem('userInfo');
        if (accessToken && userInfo) {
          state.accessToken = accessToken;
          state.userInfo = JSON.parse(userInfo);
        }
      } catch (e) {
        console.log(e);
      }
    },
    logout: state => {
      AsyncStorage.removeItem('accessToken');
      AsyncStorage.removeItem('userInfo');
      state.accessToken = null;
      state.userInfo = null;
    },
  },
});
const {actions, reducer} = authSlice;
export const {login, logout, register, updateInfoUser} = actions;
export default reducer;
