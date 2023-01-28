import React, {useCallback, useEffect, useState} from 'react';
import {Image, TouchableOpacity, View, ScrollView, Text} from 'react-native';
import Navigation from 'src/components/Navigation';
import {Radio, Center, NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/core';
import {useGetDetailProductQuery} from 'src/services/ProductAPI';
import {ButtonBack} from 'src/components/Button/ButtonBack';
import Constant from 'src/controller/Constant';
import {numberWithCommas, starMedium} from 'src/utils/utils';
import RenderHtml from 'react-native-render-html';
import {useDispatch, useSelector} from 'react-redux';
import {addItems} from 'src/redux/slices/cartSlice';
import Button from 'src/components/Button';
import useUnmount from 'src/hooks/useUnmount';
import {SITE_MAP} from 'src/utils/constants/Path';
import {addItemsFavorite} from 'src/redux/slices/favoriteSlice';

const Details = () => {
  const [value, setValue] = React.useState('one');
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.auth);
  const dataCart = useSelector(state => state.cart);
  const dataFavorite = useSelector(state => state.favorite);

  const {
    data: productDetail,
    isError,
    isFetching,
  } = useGetDetailProductQuery(
    {slug: route?.params?.slug},
    {refetchOnMountOrArgChange: true, skip: !route?.params?.slug},
  );

  const onPressBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    if (route?.params?.slug) {
      setQuantity(1);
    }
  }, [route?.params?.slug]);

  const handlePlus = () => {
    setQuantity(prev => {
      return prev + 1;
    });
  };
  const handleMinus = () => {
    setQuantity(prev => {
      if (prev <= 1) {
        return 1;
      }
      return prev - 1;
    });
  };
  const handleAddToCart = () => {
    dispatch(
      addItems({
        idProduct: productDetail?.product.id,
        slug: productDetail?.product.slug,
        quantity: quantity,
        price: productDetail?.product.selling_price,
        idUser: userInfo?.id,
        product: productDetail?.product,
      }),
    );
  };
  const handleAddFavorite = () => {
    dispatch(
      addItemsFavorite({
        idProduct: productDetail?.product.id,
        slug: productDetail?.product.slug,
        price: productDetail?.product.selling_price,
        idUser: userInfo?.id,
        product: productDetail?.product,
      }),
    );
  };
  const handleOrder = () => {
    dispatch(
      addItems({
        idProduct: productDetail?.product.id,
        slug: productDetail?.product.slug,
        quantity: quantity,
        price: productDetail?.product.selling_price,
        idUser: userInfo?.id,
        product: productDetail?.product,
      }),
    );
    navigation.navigate(SITE_MAP.CART);
  };
  const gotoReview = () => {
    navigation.navigate(SITE_MAP.REVIEWS, {
      review: productDetail?.product?.review,
      slug: productDetail?.product?.slug,
    });
  };

  console.log(productDetail);
  return (
    <View
      style={{
        zIndex: 1,
        flex: 1,
      }}>
      <ScrollView>
        <ButtonBack />
        <View style={{paddingHorizontal: 22, paddingVertical: 27}}>
          <View
            style={{
              height: 206,
              width: '100%',
              backgroundColor: 'white',
              borderRadius: 20,
              shadowColor: Constant.color.gray,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 20,
              elevation: 5,
            }}>
            <Image
              source={{
                uri: `${Constant.REACT_APP_API_URL}${productDetail?.product?.img01}`,
              }}
              style={{
                height: 206,
                resizeMode: 'contain',
                borderRadius: 15,
              }}></Image>
          </View>
          <Text
            style={{
              color: Constant.color.textblack,
              fontSize: 28,
              fontWeight: '600',
              marginTop: 22,
            }}>
            {productDetail?.product?.name}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Ionicons name="star" size={22} color={'yellow'} />

            <Text
              style={{
                color: '#111719',
                fontSize: 14,
                fontWeight: '600',
                marginRight: 5,
                marginLeft: 9,
              }}>
              {starMedium(productDetail?.product?.review)}
            </Text>
            <TouchableOpacity onPress={gotoReview}>
              <Text style={{color: '#9796A1', fontSize: 14, fontWeight: '400'}}>
                ({productDetail?.product?.review?.length || 0} Reviews)
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 24, fontWeight: '500', color: '#FE724C'}}>
              {numberWithCommas(productDetail?.product?.selling_price)}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="remove-circle-sharp"
                size={30}
                color="#FE724C"
                onPress={handleMinus}
              />
              <Text
                style={{
                  marginHorizontal: 10,
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                {quantity}
              </Text>
              <Ionicons
                name="add-circle-sharp"
                size={30}
                color="#FE724C"
                onPress={handlePlus}
              />
            </View>
          </View>
          <View
            style={{
              color: '#858992',
              fontSize: 18,
              fontWeight: '400',
              marginTop: 25,
              height: 'auto',
              width: '100%',
              marginRight: 10,
            }}>
            <RenderHtml
              contentWidth={Constant.screen.width - 40}
              source={{
                html: productDetail?.product?.description,
              }}
              tagsStyles={{
                body: {
                  color: Constant.color.textblack,
                },
              }}
            />
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text style={{marginRight: 5, color: Constant.color.main}}>
              SHARE:
            </Text>
            <Ionicons
              name="logo-youtube"
              size={22}
              color={Constant.color.main}
              style={{marginRight: 5}}
            />
            <Ionicons
              name="logo-facebook"
              size={22}
              color={Constant.color.main}
              style={{marginRight: 5}}
            />
            <Ionicons
              name="logo-twitter"
              size={22}
              color={Constant.color.main}
            />
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Ionicons
              name="megaphone-outline"
              size={22}
              color={Constant.color.main}
              style={{marginRight: 5}}
            />
            <Text style={{marginRight: 5, color: Constant.color.main}}>
              Privacy Policy.
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Ionicons
              name="hand-left-outline"
              size={22}
              color={Constant.color.main}
              style={{marginRight: 5}}
            />
            <Text style={{marginRight: 5, color: Constant.color.main}}>
              Delivery Policy.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          bottom: 15,
          left: 0,
          right: 0,
          paddingHorizontal: 10,
        }}>
        <Button
          onPress={handleAddToCart}
          title="Add to cart"
          style={{width: '40%', marginRight: 10}}
        />
        <TouchableOpacity
          onPress={handleAddFavorite}
          style={{
            height: 38,
            width: 38,
            borderRadius: 38,
            backgroundColor: Constant.color.white,
            shadowColor: Constant.color.gray,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 38,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <Ionicons name="heart" size={28} color={Constant.color.main} />
        </TouchableOpacity>
        <Button onPress={handleOrder} title="Order" style={{width: '40%'}} />
      </View>
    </View>
  );
};

export default Details;
