
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Navigation from 'src/components/Navigation';
function Index() {
const [defaultRating, setdefaultRating] = useState(2)
const [maxRating, setmaxRating] = useState([1,2,3,4,5])
const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
const CustomRatingBar = () => {
  return (
   <View style={styles.customRatingBarStyle}>
    {
      maxRating.map((item, key)=>{
        return (
          <TouchableOpacity
          activeOpacity={0.7}
          key={item}
          onPress={() => setdefaultRating(item)}  
          >
            <Image 
              style={styles.starImgStyle}
              source ={
                item <= defaultRating
                  ? {uri: starImgFilled}
                  : {uri: starImgCorner}
              }
            />

          </TouchableOpacity>
        )
      })
    }

   </View>
  )
}

  return (
    <Navigation>
      <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Pleas Rate Us</Text>
      <CustomRatingBar/>
      <Text style={styles.textStyle}>
        {defaultRating + '/' + maxRating.length}
      </Text>
      </SafeAreaView>
    </Navigation>

  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop:20
  },
  customRatingBarStyle:{
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:30
  } , 
starImgStyle:{
    width:40,
    height:40,
    resizeMode: 'cover'
  }
});


export default Index;
