import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
function Index() {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}>
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{position: 'relative'}}>
        <TouchableOpacity>
          <Image
            style={{height: 140, width: '100%', borderRadius: 10}}
            source={require('../../assets/Icons/banner.png')}></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 85,
          left: 135,
          zIndex: 7,
        }}>
        <Image
          source={require('../../assets/Icons/Hut.jpg')}
          style={{
            height: 108,
            width: 108,
            borderRadius: 100,
            backgroundColor: '#FFC529',
          }}></Image>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 74,
          left: 124,
          zIndex: 5,
          height: 130,
          width: 130,
          borderRadius: 100,
          backgroundColor: '#ffffff',
        }}></View>
      <View
        style={{
          position: 'absolute',
          top: 170,
          left: 210,
          zIndex: 9,
          height: 30,
          width: 30,
          borderRadius: 100,
          backgroundColor: '#029094',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name="checkmark-outline" size={25} color={'white'} />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 165,
          left: 205,
          zIndex: 7,
          height: 45,
          width: 45,
          borderRadius: 100,
          backgroundColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name="checkmark-outline" size={25} color={'white'} />
      </View>
      <View
        style={{
          position: 'absolute',
          width: 38,
          height: 38,
          borderRadius: 12,
          backgroundColor: 'white',
          justifyContent: 'center',
          top: 20,
          left: 20,
          alignItems: 'center',
        }}>
        <Ionicons name="chevron-back-outline" size={22} color={'black'} />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: 60,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: 'Sofia Pro',
            color: '#000000',
          }}>
          Pizza Hut
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          top: 60,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Sofia Pro',
            color: '#9796A1',
          }}>
          4102 Pretty View Lanenda?
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          top: 67,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Sofia Pro',
            color: '#53D776',
          }}>
          Order Delivered
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          top: 90,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '500',
            fontFamily: 'Sofia Pro',
            color: '#000000',
          }}>
          Please Rate Delivery Service
        </Text>
      </View>
      <Text style={styles.textStyle}>
        {defaultRating + '/' + maxRating.length}
      </Text>
      <CustomRatingBar />
      <TextInput
        onChangeText={text => {
          console.log(text);
        }}
        placeholder="Write review"
        style={{
          borderWidth: 1,
          borderColor: '#959589',
          width: 370,
          height: 160,
          fontSize: 16,
          top: 30,
          paddingLeft: 10,
          paddingBottom: 120,
          textcolor: '#959589',
          borderRadius: 10,
        }}></TextInput>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: 248,
            marginTop: 90,
            borderRadius: 30,
            backgroundColor: '#FE724C',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 110,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default Index;
