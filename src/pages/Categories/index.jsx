import {useRoute} from '@react-navigation/core';
import React, {useEffect, useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import ProductItem from 'src/components/Product/ProductItem';
import Constant from 'src/controller/Constant';
import {useGetCategoryQuery, useGetProductQuery} from 'src/services/ProductAPI';
import {CheckIcon, ScrollView, Select} from 'native-base';
import {ButtonBack} from 'src/components/Button/ButtonBack';
import {SITE_MAP} from 'src/utils/constants/Path';

const typeSort = {
  'NAME_A-Z': 'NAME_A-Z',
  'NAME_Z-A': 'NAME_Z-A',
  'PRICE_HIGH-LOW': 'PRICE_HIGH-LOW',
  'PRICE_LOW-HIGH': 'PRICE_LOW-HIGH',
};
const optionSort = [
  {
    id: -1,
    value: -1,
    name: 'Choose option',
  },
  {
    id: typeSort['NAME_A-Z'],
    value: typeSort['NAME_A-Z'],
    name: 'Name : A - Z',
  },
  {
    id: typeSort['NAME_Z-A'],
    value: typeSort['NAME_Z-A'],
    name: 'Name : Z - A',
  },
  {
    id: typeSort['PRICE_HIGH-LOW'],
    value: typeSort['PRICE_HIGH-LOW'],
    name: 'Price : High - Low ',
  },
  {
    id: typeSort['PRICE_LOW-HIGH'],
    value: typeSort['PRICE_LOW-HIGH'],
    name: 'Price : Low - High ',
  },
];

const Categories = () => {
  const [selected, setSelected] = React.useState(-1);

  const {data: products, isLoading: isLoadingProduct} = useGetProductQuery(
    {},
    {refetchOnMountOrArgChange: true},
  );

  const {params} = useRoute();

  const {data: category, isLoading: isLoadingCategory} = useGetCategoryQuery(
    {},
    {refetchOnMountOrArgChange: true},
  );

  const categoryData = useMemo(() => {
    return category?.categorys?.map(item => ({
      id: item.slug,
      value: item.slug,
    }));
  }, [category]);

  const productData = useMemo(() => {
    let temp = [];

    if (params?.slug) {
      temp = products?.product?.filter(
        item => item?.category?.slug === params?.slug,
      );
    } else {
      temp = products?.product?.filter(item =>
        item?.name?.toLowerCase().includes(params?.search?.toLowerCase()),
      );
    }

    switch (selected) {
      case 'NAME_A-Z':
        temp = temp.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
        );
        break;
      case 'NAME_Z-A':
        temp = temp.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0,
        );
        break;
      case 'PRICE_HIGH-LOW':
        temp = temp.sort((a, b) => b.selling_price - a.selling_price);
        break;
      case 'PRICE_LOW-HIGH':
        temp = temp.sort((a, b) => a.selling_price - b.selling_price);
        break;
      default:
        temp = temp.sort((a, b) => a.id - b.id);
    }
    return temp;
  }, [products, selected, params]);

  return (
    <View style={styles.container}>
      <View style={[styles.heder, {flexDirection: 'row'}]}>
        <View style={[styles.back, {flex: 1, flexDirection: 'column'}]}>
          <ButtonBack pathBack={SITE_MAP.INDEX} />
          <Text style={styles.fast}>Fast</Text>
          <Text style={styles.food}>Food</Text>
          <Text style={styles.tyet}>
            {productData?.length} type of{' '}
            {params?.slug || `search ${params?.search}`}
          </Text>
        </View>

        <Image
          style={[styles.FaceLogo, {flex: 1.5}]}
          source={require('../../assets/Icons/1.png')}
        />
      </View>
      <View style={[styles.Main, {flexDirection: 'row'}]}>
        <View style={[styles.text1]}>
          <Text style={styles.tyett}>Sort:</Text>
        </View>
        <View style={styles.ComboBox}>
          {/* <SelectList
            setSelected={val => setSelected(val)}
            data={optionSort}
            save="value"
            dropdownStyles={{
              backgroundColor: Constant.color.white,
              width: 150,
            }}
            boxStyles={{width: 150, marginTop: 4}}
          /> */}
          <Select
            selectedValue={selected}
            accessibilityLabel="Select Sort"
            placeholder="Select Sort"
            placeholderTextColor="#111719"
            height="44"
            _selectedItem={{
              endIcon: <CheckIcon size="5" />,
            }}
            borderColor="#9796A1"
            borderRadius={10}
            fontSize="16"
            onValueChange={itemValue => {
              setSelected(itemValue);
            }}>
            {optionSort?.map(({name, value, id}) => (
              <Select.Item label={name} value={value} key={id} />
            ))}
          </Select>
        </View>
      </View>

      <ScrollView style={styles.ScrollView}>
        {productData?.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constant.color.white,
    flex: 1,
  },
  ScrollView: {
    // position: 'relative',
    // paddingBottom: 200,
    height: 300,
  },
  Main: {
    marginTop: 30,
    marginBottom: -30,
  },
  ListMon: {
    position: 'relative',
    marginLeft: 30,
    marginRight: 30,
    // marginBottom: 20,
  },
  FaceLogoMon: {
    height: 200,
    width: '100%',
    marginBottom: 5,
    borderRadius: 20,
  },
  Tenmon: {
    // marginTop: 10,
  },
  FaceLogoback: {
    height: 60,
    width: 60,
    margin: 10,
  },

  fast: {
    color: '#272D2F',
    marginLeft: 30,
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 80,
  },
  food: {
    color: '#FE724C',
    marginLeft: 30,
    fontSize: 50,
    marginTop: -14,
    fontWeight: 'bold',
  },
  tyet: {
    color: '#9796A1',
    marginLeft: 30,
    fontSize: 16,
  },
  tyett: {
    color: '#111719',
    marginLeft: 30,
    marginTop: 15,
    fontSize: 16,
  },
  ComboBox: {
    Color: '#FE724C',
    height: 100,
    marginLeft: 15,
    marginTop: 5,
    zIndex: 100,
    width: 200,
  },

  namemon: {
    color: '#272D2F',
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  phuluc: {
    color: '#9796A1',
    marginLeft: 30,
    fontSize: 15,
  },
  textgia: {
    width: 80,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    position: 'absolute',
  },
  gia: {
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
  IconYT: {
    position: 'absolute',
    marginLeft: 300,
    margin: 10,
  },
  textsao: {
    width: 60,
    height: 21,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 190,
    margin: 10,
    position: 'absolute',
  },
  sao: {
    justifyContent: 'center',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default Categories;
