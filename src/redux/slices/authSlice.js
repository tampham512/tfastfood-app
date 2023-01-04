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
  reducer: {
    login: (state, action) => {
      // const {username, password} = action.payload;
      console.log('🚀 ~ file: authSlice.js:16 ~ password', action);
      // console.log('🚀 ~ file: authSlice.js:16 ~ username', username);

      // LoginAPI.useGetTokenLoginMutation({username, password})
      //   .unwrap()
      //   .then(data => {
      //     state.accessToken = data.token;
      //     AsyncStorage.setItem('accessToken', JSON.stringify(data?.token));
      //     AuthAPI.useGetUserQuery()
      //       .unwrap()
      //       .then(dataUser => {
      //         state.userInfo = dataUser?.user;
      //         AsyncStorage.setItem('userInfo', JSON.stringify(dataUser?.user));
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
    logout: (state, action) => {
      AuthAPI.useLogoutMutation()
        .unwrap()
        .then(() => {
          state.userInfo = null;
          state.accessToken = null;
          AsyncStorage.removeItem('userInfo');
          AsyncStorage.removeItem('accessToken');
        })
        .catch(err => {
          console.log(err);
        });
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
  },
});
const {actions, reducer} = authSlice;
export const {login, logout, register} = actions;
export default reducer;
