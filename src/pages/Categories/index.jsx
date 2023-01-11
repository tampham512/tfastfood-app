import React, {useCallback, useMemo} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import ComboBox from 'react-native-combobox'; /*npm i react-native-combobox*/
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  useState,
  TouchableOpacity,
  View,
  radio_props,
  Alert,
  Button,
} from 'react-native';
import Constant from 'src/controller/Constant';
import {useGetCategoryQuery, useGetProductQuery} from 'src/services/ProductAPI';

const Categories = () => {
  const [selected, setSelected] = React.useState('');
  console.log(selected);
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
  const categoryData = useMemo(() => {
    return category?.categorys?.map(item => ({
      id: item.slug,
      value: item.slug,
    }));
  }, [category]);

  const productData = useMemo(() => {
    return products?.product?.filter(item => item?.category?.slug === selected);
  }, [products, selected]);

  console.log(productData);

  return (
    <View style={styles.container}>
      <View style={[styles.heder, {flexDirection: 'row'}]}>
        <View style={[styles.back, {flex: 1, flexDirection: 'column'}]}>
          <TouchableOpacity style={styles.buttonback}>
            <Image
              style={styles.FaceLogoback}
              source={require('../../assets/Icons/3.png')}
            />
          </TouchableOpacity>
          <Text style={styles.fast}>Fast</Text>
          <Text style={styles.food}>Food</Text>
          <Text style={styles.tyet}>80 type of pizza</Text>
        </View>

        <Image
          style={[styles.FaceLogo, {flex: 1.5}]}
          source={require('../../assets/Icons/1.png')}
        />
      </View>
      <View style={[styles.Main, {flexDirection: 'row'}]}>
        <View style={[styles.text1]}>
          <Text style={styles.tyett}>Category:</Text>
        </View>
        <View style={styles.ComboBox}>
          <SelectList
            setSelected={val => setSelected(val)}
            data={categoryData}
            save="value"
            dropdownStyles={{
              backgroundColor: Constant.color.white,
              width: 150,
            }}
            boxStyles={{width: 150, marginTop: 4}}
          />
        </View>
      </View>
      <ScrollView style={styles.ScrollView}>
        {productData?.map(item => (
          <View style={styles.ListMon} key={item.id}>
            <TouchableOpacity style={styles.buttonMon}>
              <View
                style={{
                  backgroundColor: Constant.color.main,
                  paddingHorizontal: 70,
                  borderRadius: 20,
                }}>
                <Image
                  style={[styles.FaceLogoMon]}
                  source={{uri: `${Constant.REACT_APP_API_URL}${item.img01}`}}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.IconYT}>
              <TouchableOpacity style={styles.buttonYT}>
                <Image source={require('../../assets/Icons/love.png')} />
              </TouchableOpacity>
            </View>

            <View style={[styles.textgia]}>
              <Text style={styles.gia}>{item.selling_price}</Text>
            </View>
            <View style={[styles.textsao]}>
              <Text style={styles.sao}>5 </Text>
              <Image
                style={styles.sao}
                source={require('../../assets/Icons/star.png')}
              />
            </View>
            <View style={[styles.Tenmon]}>
              <Text style={styles.namemon}>{item.name}</Text>
            </View>
            <View style={[styles.PL]}>
              <Text style={styles.phuluc}>Chicken, Cheese and pineapple</Text>
            </View>
          </View>
        ))}
        {/* <View style={styles.ListMon}>
          <TouchableOpacity style={styles.buttonMon}>
            <Image
              style={[styles.FaceLogoMon]}
              source={require('../../assets/Icons/5.png')}
            />
          </TouchableOpacity>
          <View style={styles.IconYT}>
            <TouchableOpacity style={styles.buttonYT}>
              <Image source={require('../../assets/Icons/love.png')} />
            </TouchableOpacity>
          </View>

          <View style={[styles.textgia]}>
            <Text style={styles.gia}>$10.35</Text>
          </View>
          <View style={[styles.textsao]}>
            <Text style={styles.sao}>4.5 </Text>
            <Image
              style={styles.sao}
              source={require('../../assets/Icons/star.png')}
            />
          </View>
          <View style={[styles.Tenmon]}>
            <Text style={styles.namemon}>Chicken Hawaiian</Text>
          </View>
          <View style={[styles.PL]}>
            <Text style={styles.phuluc}>Chicken, Cheese and pineapple</Text>
          </View>
        </View>

        <View style={styles.ListMon}>
          <TouchableOpacity style={styles.buttonMon}>
            <Image
              style={[styles.FaceLogoMon]}
              source={require('../../assets/Icons/5.png')}
            />
          </TouchableOpacity>
          <View style={styles.IconYT}>
            <TouchableOpacity style={styles.buttonYT}>
              <Image source={require('../../assets/Icons/love.png')} />
            </TouchableOpacity>
          </View>

          <View style={[styles.textgia]}>
            <Text style={styles.gia}>$10.35</Text>
          </View>
          <View style={[styles.textsao]}>
            <Text style={styles.sao}>4.5 </Text>
            <Image
              style={styles.sao}
              source={require('../../assets/Icons/star.png')}
            />
          </View>
          <View style={[styles.Tenmon]}>
            <Text style={styles.namemon}>Chicken Hawaiian</Text>
          </View>
          <View style={[styles.PL]}>
            <Text style={styles.phuluc}>Chicken, Cheese and pineapple</Text>
          </View>
        </View>

        <View style={styles.ListMon}>
          <TouchableOpacity style={styles.buttonMon}>
            <Image
              style={[styles.FaceLogoMon]}
              source={require('../../assets/Icons/5.png')}
            />
          </TouchableOpacity>
          <View style={styles.IconYT}>
            <TouchableOpacity style={styles.buttonYT}>
              <Image source={require('../../assets/Icons/love.png')} />
            </TouchableOpacity>
          </View>

          <View style={[styles.textgia]}>
            <Text style={styles.gia}>$10.35</Text>
          </View>
          <View style={[styles.textsao]}>
            <Text style={styles.sao}>4.5 </Text>
            <Image
              style={styles.sao}
              source={require('../../assets/Icons/star.png')}
            />
          </View>
          <View style={[styles.Tenmon]}>
            <Text style={styles.namemon}>Chicken Hawaiian</Text>
          </View>
          <View style={[styles.PL]}>
            <Text style={styles.phuluc}>Chicken, Cheese and pineapple</Text>
          </View>
        </View>

        <View style={styles.ListMon}>
          <TouchableOpacity style={styles.buttonMon}>
            <Image
              style={[styles.FaceLogoMon]}
              source={require('../../assets/Icons/5.png')}
            />
          </TouchableOpacity>
          <View style={styles.IconYT}>
            <TouchableOpacity style={styles.buttonYT}>
              <Image source={require('../../assets/Icons/love.png')} />
            </TouchableOpacity>
          </View>

          <View style={[styles.textgia]}>
            <Text style={styles.gia}>$10.35</Text>
          </View>
          <View style={[styles.textsao]}>
            <Text style={styles.sao}>4.5 </Text>
            <Image
              style={styles.sao}
              source={require('../../assets/Icons/star.png')}
            />
          </View>
          <View style={[styles.Tenmon]}>
            <Text style={styles.namemon}>Chicken Hawaiian</Text>
          </View>
          <View style={[styles.PL]}>
            <Text style={styles.phuluc}>Chicken, Cheese and pineapple</Text>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constant.color.white,
  },
  ScrollView: {
    position: 'relative',
    marginBottom: 200,
  },
  Main: {
    marginTop: 30,
  },
  ListMon: {
    position: 'relative',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  FaceLogoMon: {
    height: 200,
    width: '100%',
    marginBottom: 5,
    borderRadius: 20,
  },
  Tenmon: {
    marginTop: 10,
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
  },
  food: {
    color: '#FE724C',
    marginLeft: 30,
    fontSize: 50,
    fontWeight: 'bold',
  },
  tyet: {
    color: '#9796A1',
    marginLeft: 30,
    fontSize: 18,
  },
  tyett: {
    color: '#111719',
    marginLeft: 30,
    marginTop: 20,
    fontSize: 16,
  },
  ComboBox: {
    Color: '#FE724C',
    height: 100,
    marginLeft: 15,
    marginTop: 5,
    zIndex: 100,
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
