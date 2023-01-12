import React, {useCallback} from 'react';
import ComboBox from 'react-native-combobox';
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

const Favorite = () => {
  const [active, setActive] = React.useState(1);
  return (
    <View style={styles.container}>
      <View style={[styles.heder, {flexDirection: 'row'}]}>
        <TouchableOpacity style={styles.buttonback}>
          <Image
            style={styles.FaceLogoback}
            source={require('../../assets/Icons/3.png')}
          />
        </TouchableOpacity>
        <Text style={styles.fast}>Favorite</Text>

        <TouchableOpacity style={styles.buttonCaNhan}>
          <Image
            style={styles.FaceLogo}
            source={require('../../assets/Icons/13.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => setActive(1)}
          style={{
            backgroundColor: active === 1 ? '#FE724C' : 'blue',
            padding: 10,
            borderRadius: 10,
            marginRight: 10,
          }}>
          <Text style={{color: '#fff'}}>Foods Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActive(2)}
          style={{
            backgroundColor: active === 2 ? '#FE724C' : 'blue',
            padding: 10,
            borderRadius: 10,
            color: '#fff',
          }}>
          <Text style={{color: '#fff'}}>Restoren</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  ScrollView: {
    position: 'relative',
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
  FaceLogo: {
    height: 45,
    width: 45,
    margin: 20,
    marginLeft: 110,
  },

  fast: {
    color: '#272D2F',
    marginTop: 25,
    marginLeft: 70,
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
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

export default Favorite;