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
} from 'react-native';
import Header from 'src/components/Header';
import Constant from 'src/controller/Constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categoty01Img from 'src/assets/HomeIcons/01.png';
import Categoty02Img from 'src/assets/HomeIcons/02.png';
import Categoty03Img from 'src/assets/HomeIcons/03.png';

function Index() {
  const navigation = useNavigation();
  const [valueSearch, setValueSearch] = useState('');

  const onChangeSearch = value => {
    console.log(value);
    setValueSearch(value);
  };
  const handleClickSearch = () => {
    console.log(valueSearch);
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
              marginTop: 2,
              marginLeft: 5,
            }}
          />
        </View>
        <ScrollView horizontal={true} nestedScrollEnabled={false}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.category_item}>
              <Image
                source={Categoty01Img}
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
                  textAlign: 'center',
                }}>
                Burger
              </Text>
            </View>
            <View style={styles.category_item}>
              <Image
                source={Categoty02Img}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10000,
                }}
              />
              <Text>Burger</Text>
            </View>
            <View style={styles.category_item}>
              <Image
                source={Categoty03Img}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10000,
                }}
              />
              <Text>Burger</Text>
            </View>
            <View style={styles.category_item}>
              <Image
                source={Categoty01Img}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10000,
                }}
              />
              <Text>Burger</Text>
            </View>
            <View style={styles.category_item}>
              <Image
                source={Categoty02Img}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10000,
                }}
              />
              <Text>Burger</Text>
            </View>
            <View style={styles.category_item}>
              <Image
                source={Categoty03Img}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10000,
                }}
              />
              <Text>Burger</Text>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: Constant.color.white,
    height: 100,
    borderRadius: 8,
    shadowColor: Constant.color.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: 'column',
    width: 70,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    // marginRight: 5,
  },
});
