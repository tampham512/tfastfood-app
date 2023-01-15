import {useNavigation, useRoute} from '@react-navigation/core';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Constant from 'src/controller/Constant';
import {SITE_MAP} from 'src/utils/constants/Path';
import Util from 'src/utils/utils';

function Index() {
  const route = useRoute();
  console.log(route?.params);
  const {slug, review} = route?.params;
  const {navigate} = useNavigation();
  const gotoBack = () => {
    navigate(SITE_MAP.DETAILS, {slug});
  };
  return (
    <View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
        }}>
        <TouchableOpacity
          style={{
            height: 38,
            width: 38,
            borderRadius: 5,
            backgroundColor: Constant.color.white,
            shadowColor: Constant.color.gray,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
            top: 20,
            left: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={gotoBack}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color={Constant.color.gray}
          />
        </TouchableOpacity>
        <Text
          style={{
            bottom: 15,
            fontSize: 25,
            fontWeight: '00',
            color: '#000000',
            left: 150,
          }}>
          Reviews
        </Text>
      </View>

      {review?.length > 0 ? (
        <ScrollView
          style={{
            top: 80,
            marginBottom: 50,
            marginLeft: 5,
          }}>
          {review.map(item => (
            <View
              key={item.id}
              style={{
                height: 'auto',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  width: 50,
                  height: 50,
                  left: 12,
                  backgroundColor: Constant.color.main,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    color: Constant.color.white,
                  }}>
                  {item.user.username.slice(0, 2)}
                </Text>
              </View>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: '#FFC529',
                  borderRadius: 100,
                  left: 50,
                  bottom: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'white',
                  }}>
                  {item.rate_star}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'black',
                  left: 80,
                  bottom: 67,
                }}>
                {item.user.username}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  color: 'gray',
                  left: 80,
                  bottom: 65,
                }}>
                {Util.format_date_time(item.created_at)}
              </Text>
              <Text
                style={{
                  width: 365,
                  left: 15,
                  bottom: 50,
                  // height: 'auto',
                }}>
                {item.content}
              </Text>
              {/* <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: Constant.color.gray,
                }}></View> */}
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text
          style={{
            top: 80,
            marginLeft: 20,
            fontSize: 18,
          }}>
          No reviews
        </Text>
      )}
    </View>
  );
}

export default Index;
