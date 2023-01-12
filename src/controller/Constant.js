import {Dimensions} from 'react-native';

export default {
  color: {
    main: '#FE724C',
    background: '#FFFFFF',

    text: '#adacac',
    // black: '#000000',
    grey: '#8C8A9D',
    border: '#BEBEBE',
    green_tick: '#029094',
    green_point: '#4EE476',
    dropShadow: 'rgba(211, 209, 216, 1)',
    black: '#323643',
    organe: '#FE724C',
    white: '#fff',
    gray: '#333',
    textblack: '#111719',
    textgray: '#30384F',
  },
  images: {
    // bellActive: require('../assets/images/ic_bell_active.png'),
    // bell: require('../assets/images/ic_bell.png'),
    pizza: require('../assets/images/pizza.png'),
    avatar: require('../assets/images/avatar.png'),
    starbuck: require('../assets/images/starbuck.png'),
    background_intro: require('../assets/Icons/background_intro.png'),

    ic_Facebook: require('../assets/Icons/ic_facebook.png'),
    ic_Google: require('../assets/Icons/ic_google.png'),
    eye: require('../assets/Icons/eye.png'),
    ecliporange: require('../assets/Icons/orange.png'),
    eclippink: require('../assets/Icons/pink.png'),
    ecl: require('../assets/Icons/ecl.png'),
    pre: require('../assets/Icons/pre.png'),
    ic_eyeClose: require('../assets/Icons/ic_eyeClose.png'),
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
  REACT_APP_API_URL: 'https://tfastfood.tk/',
};
