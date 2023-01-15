import {useNavigation, useRoute} from '@react-navigation/core';
import {ScrollView} from 'native-base';
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
import {useReviewProductMutation} from 'src/services/OrderAPI';
import {useGetDetailProductQuery} from 'src/services/ProductAPI';
import {SITE_MAP} from 'src/utils/constants/Path';
const starImgFilled =
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
const starImgCorner =
  'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
function Index() {
  const [defaultRating, setdefaultRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const route = useRoute();
  const {
    data: productDetail,
    isError,
    isFetching,
  } = useGetDetailProductQuery(
    {slug: route?.params?.slug},
    {refetchOnMountOrArgChange: true, skip: !route?.params?.slug},
  );
  const [review] = useReviewProductMutation();
  const {navigate} = useNavigation();

  const handleSubmit = () => {
    const data = {
      content: reviewText || '',
      id_product: productDetail?.product?.id,
      rate_star: defaultRating || 5,
    };
    review(data)
      .unwrap()
      .then(res => {
        console.log('ok');
        navigate(SITE_MAP.ORDER);
      });
  };

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
    <ScrollView style={styles.container}>
      <View style={{position: 'relative'}}>
        <TouchableOpacity>
          <Image
            style={{height: 140, width: '100%', borderRadius: 10}}
            source={require('../../assets/Icons/banner.png')}
          />
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
          source={{
            uri: `${Constant.REACT_APP_API_URL}${productDetail?.product?.img01}`,
          }}
          style={{
            height: 108,
            width: 108,
            borderRadius: 100,
            backgroundColor: '#FFC529',
            resizeMode: 'contain',
          }}
        />
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
          backgroundColor: Constant.color.main,
        }}></View>

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
          top: 70,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: 'Sofia Pro',
            color: '#000000',
          }}>
          {productDetail?.product?.name}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          top: 70,
        }}>
        <Text
          style={{
            fontSize: 14,
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
          setReviewText(text);
        }}
        value={reviewText}
        placeholder="Write review"
        style={{
          borderWidth: 1,
          borderColor: '#959589',
          width: 'auto',
          height: 160,
          fontSize: 16,
          top: 30,
          paddingLeft: 10,
          paddingBottom: 120,
          textcolor: '#959589',
          borderRadius: 10,
        }}
      />
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            height: 60,
            width: 248,
            marginTop: 60,
            borderRadius: 30,
            backgroundColor: '#FE724C',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
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
    </ScrollView>
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
