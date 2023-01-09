import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Header from 'src/components/Header';
import Constant from 'src/controller/Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categoty01Img from 'src/assets/HomeIcons/01.png';
import Categoty02Img from 'src/assets/HomeIcons/02.png';
import Categoty03Img from 'src/assets/HomeIcons/03.png';
import {useGetCategoryQuery, useGetProductQuery} from 'src/services/ProductAPI';
import {useGetProvincesQuery} from 'src/services/ProvincesAPI';
import {useEffect} from 'react';
const IMAGE_CATEGORY = {
  appetizer: Categoty01Img,
  pizza: Categoty02Img,
  salad: Categoty03Img,
  drinks: Categoty01Img,
};

function Index() {
  const [valueSearch, setValueSearch] = useState('');
  const {data: products, isLoading: isLoadingProduct} = useGetProductQuery(
    {},
    {refetchOnMountOrArgChange: true},
  );

  const {data: category, isLoading: isLoadingCategory} = useGetCategoryQuery(
    {},
    {refetchOnMountOrArgChange: true},
  );
  console.log('🚀 ~ file: index.jsx:25 ~ Index ~ products', products);

  console.log('🚀 ~ file: index.jsx:31 ~ Index ~ category', category);
  const onChangeSearch = value => {
    console.log(value);
    setValueSearch(value);
  };
  const handleClickSearch = () => {
    console.log(valueSearch);
  };
  const handleClickCategory = slug => () => {
    console.log(slug);
  };
  return (
    <View style={{backgroundColor: Constant.color.white}}>
      <Header />
      <View
        style={{backgroundColor: Constant.color.white, paddingHorizontal: 25}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Constant.color.black,
          }}>
          What would you like to order
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          <TextInput
            onBlur={() => console.log('v')}
            onChangeText={onChangeSearch}
            value={valueSearch}
            style={styles.input}
            placeholder="Find for food or restaurant..."
          />

          <Ionicons
            name="search-circle"
            size={42}
            color={Constant.color.main}
            style={{
              position: 'absolute',
              right: 8,
              marginTop: 4,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginRight: -20,
          }}>
          {category?.categorys?.map(item => (
            <View
              style={styles.category_item}
              onStartShouldSetResponder={handleClickCategory(item.slug)}>
              <Image
                source={IMAGE_CATEGORY?.[item.slug]}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10000,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignself: 'center',
                }}
              />
              <Text
                style={{
                  color: Constant.color.white,
                  marginTop: 14,
                  textTransform: 'capitalize',
                }}>
                {item.slug}
              </Text>
            </View>
          ))}
        </View>
        <ScrollView
          horizontal={true}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 10,
          }}></ScrollView>
      </View>
    </View>
  );
}

export default Index;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#afb6bd',
    flex: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  category_item: {
    height: 120,
    borderRadius: 1000,
    shadowColor: Constant.color.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingTop: 8,
    flexDirection: 'column',
    width: 70,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: Constant.color.main,
    marginRight: 20,
    color: Constant.color.white,
  },
});
