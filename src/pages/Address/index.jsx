import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useMemo} from 'react';
import Navigation from 'src/components/Navigation';
import {useNavigation} from '@react-navigation/core';
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Button,
} from 'native-base';
import {auth} from 'src/redux/slices';
import {autoBatchEnhancer} from '@reduxjs/toolkit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constant from 'src/controller/Constant';
import {useGetProvincesQuery} from 'src/services/ProvincesAPI';
import {useDispatch, useSelector} from 'react-redux';
import {updateItemsAddress} from 'src/redux/slices/addressSlice';
import {SITE_MAP} from 'src/utils/constants/Path';
import {ButtonBack} from 'src/components/Button/ButtonBack';
const STATE = [48, 49];

const Address = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data: provinces} = useGetProvincesQuery();

  const {userInfo} = useSelector(state => state.auth);

  const address = useSelector(state => state.address);
  const [fullName, setFullName] = React.useState(
    address.value?.fullName || userInfo.full_name || '',
  );
  const [numberPhone, setNumberPhone] = React.useState(
    address.value?.numberPhone || userInfo.phone_number || '',
  );

  const [state, setState] = React.useState(address.value?.state?.code || '');
  const [city, setCity] = React.useState(address.value?.district?.code || '');
  const [ward, setWard] = React.useState(address.value?.ward?.code || '');
  const [street, setStreet] = React.useState(address.value?.street || '');

  const stateData = useMemo(() => {
    return provinces?.filter(({code}) => STATE.includes(code));
  }, [provinces]);

  const districtData = useMemo(() => {
    if (state) {
      return provinces?.find(({code}) => code == state)?.districts;
    }
    return [];
  }, [stateData, state]);

  const wardData = useMemo(() => {
    if (state && city) {
      return districtData?.find(({code}) => code == city)?.wards;
    }
    return [];
  }, [districtData, city, state]);
  const handleSave = () => {
    dispatch(
      updateItemsAddress({
        fullName,
        numberPhone,
        street,
        state: stateData?.find(({code}) => code == state),
        district: districtData?.find(({code}) => code == city),
        ward: wardData?.find(({code}) => code == ward),
      }),
    );
    goToBack();
  };
  const goToBack = () => {
    navigation.navigate(SITE_MAP.CART);
  };
  return (
    // <Navigation>
    <View
      style={{
        paddingBottom: 60,
        backgroundColor: '#fff',
        position: 'relative',
      }}>
      <ScrollView>
        <ButtonBack />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 18,
            color: '#111719',
            marginBottom: 44,
            marginTop: 47,
          }}>
          Edit address
        </Text>
        <View style={{paddingHorizontal: 18, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Full name
          </Text>
          <View
            style={{
              paddingVertical: 4,
              paddingHorizontal: 16,
              borderColor: '#9796A1',
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <TextInput
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Constant.color.textblack,
              }}
              placeholder="Arlene McCoy"
              onChangeText={text => setFullName(text)}
              value={fullName}
              placeholderTextColor={Constant.color.border}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Mobile number
          </Text>
          <View
            style={{
              paddingVertical: 4,
              paddingHorizontal: 16,
              borderColor: '#9796A1',
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <TextInput
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Constant.color.textblack,
              }}
              placeholder="018-49862746"
              onChangeText={text => setNumberPhone(text)}
              value={numberPhone}
              placeholderTextColor={Constant.color.border}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            State
          </Text>
          <Select
            selectedValue={state}
            accessibilityLabel="Select State"
            placeholder="Select State"
            placeholderTextColor="#111719"
            height="58"
            _selectedItem={{
              endIcon: <CheckIcon size="5" />,
            }}
            borderColor="#9796A1"
            borderRadius={10}
            fontSize="17"
            onValueChange={itemValue => {
              setState(itemValue);
              setCity('');
              setWard('');
            }}>
            {stateData?.map(({name, code}) => (
              <Select.Item label={name} value={code} key={code} />
            ))}
          </Select>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            City
          </Text>
          <Select
            selectedValue={city}
            accessibilityLabel="District"
            placeholder="Select District"
            height="58"
            placeholderTextColor="#111719"
            _selectedItem={{
              endIcon: <CheckIcon size="5" />,
            }}
            borderColor="#9796A1"
            borderRadius={10}
            fontSize="17"
            onValueChange={itemValue => {
              setCity(itemValue);
              setWard('');
            }}>
            {districtData?.map(({name, code}) => (
              <Select.Item label={name} value={code} key={code} />
            ))}
          </Select>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Ward
          </Text>
          <Select
            selectedValue={ward}
            accessibilityLabel="ward"
            placeholder="Select Ward"
            height="58"
            placeholderTextColor="#111719"
            _selectedItem={{
              endIcon: <CheckIcon size="5" />,
            }}
            borderColor="#9796A1"
            borderRadius={10}
            fontSize="17"
            onValueChange={itemValue => {
              setWard(itemValue);
            }}>
            {wardData?.map(({name, code}) => (
              <Select.Item label={name} value={code} key={code} />
            ))}
          </Select>
        </View>
        <View style={{paddingHorizontal: 18, marginBottom: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#9796A1',
              marginBottom: 12,
            }}>
            Street (Include house number)
          </Text>
          <View
            style={{
              paddingVertical: 4,
              paddingHorizontal: 16,
              borderColor: '#9796A1',
              width: '100%',
              borderRadius: 10,
              backgroundColor: '#fff',
              borderWidth: 1,
            }}>
            <TextInput
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Constant.color.textblack,
              }}
              placeholder="Street"
              onChangeText={text => setStreet(text)}
              value={street}
              placeholderTextColor={Constant.color.border}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            width={240}
            height="50"
            paddingX={50}
            backgroundColor="#FE724C"
            borderRadius={30}
            onPress={handleSave}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#fff'}}>
              Save
            </Text>
          </Button>
        </View>
      </ScrollView>
    </View>
    // </Navigation>
  );
};

export default Address;
