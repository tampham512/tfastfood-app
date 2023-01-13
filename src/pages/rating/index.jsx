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
import Constant from 'src/controller/Constant';
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
      <TouchableOpacity
        style={{
          height: 38,
          width: 38,
          borderRadius: 5,
          marginBottom: 10,
          backgroundColor: Constant.color.white,
          shadowColor: Constant.color.gray,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <Ionicons name="chevron-back-outline" size={32} />
      </TouchableOpacity>

      <View
        View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 50,
        }}>
        <Image
          source={require('../../assets/Icons/logo1.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Helvetica',
            color: '#000000',
          }}>
          How was your last
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Helvetica',
            color: '#000000',
          }}>
          order from Pizza Hut?
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
        placeholder="Write"
        style={{
          marginTop: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#959589',
          width: 370,
          height: 40,
          alignItems: 'center',
          fontSize: 16,
          paddingLeft: 10,
          textcolor: '#959589',
        }}></TextInput>
      <View
        style={{
          marginTop: 120,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: 248,
            marginTop: 50,
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
    marginTop: 20,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default Index;
