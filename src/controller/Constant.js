import {Dimensions} from 'react-native';

export default {
  color: {
    main: '#FE724C',
    background: '#FFFFFF',
    text: '#adacac',
    black: '#000000',
    grey: '#8C8A9D',
    border: '#BEBEBE',
    green_tick: '#029094',
    green_point: '#4EE476',
    dropShadow: 'rgba(211, 209, 216, 1)',
  
  },
  images: {
    // bellActive: require('../assets/images/ic_bell_active.png'),
    // bell: require('../assets/images/ic_bell.png'),
    pizza: require('../assets/images/pizza.png'),
    avatar: require('../assets/images/avatar.png'),
    starbuck: require('../assets/images/starbuck.png'),
  },
  fonts: {
    notoSansJPBold: 'NotoSansJP-Bold',
    notoSansJPRegular: 'NotoSansJP-Regular',
    notoSansJPMedium: 'NotoSansJP-Medium',
    notoSansJPThin: 'NotoSansJP-Thin',
    notoSansJPLight: 'NotoSansJP-Light',
  },

  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
