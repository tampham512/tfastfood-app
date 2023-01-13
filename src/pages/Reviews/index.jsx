import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Constant from 'src/controller/Constant';
import { position } from 'native-base/lib/typescript/theme/styled-system';

function Index() {

  return (
<View>
      <View style ={{
        flex : 1,
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
        }}
       >
        <Ionicons name="chevron-back-outline" size={32} color={'black'} />
      </TouchableOpacity>
        <Text style ={{
            bottom: 15,
            fontSize : 25,
            fontWeight: '00',
            color : '#000000',
            left: 150
        }}>Reviews</Text>
      </View>
      <View style ={{
        flex:2,
        position:"absolute",
        top : 70,
        left :10

      }}>
      <TextInput 
    onChangeText={text =>{
      console.log(text)
    }}
    placeholder="Write your review"
    style={{
      borderWidth:1,
      borderColor:'#959589',
      width:370,
      height:50,
      fontSize: 16,
      top: 30,
      paddingLeft: 60,
      textcolor: '#959589',
      borderRadius:10
    }}>
    </TextInput>
    <Image  style ={{
        borderRadius: 100,
        width:35,
        height:35,
        bottom : 12,
        left: 12
    }}
    source={require('../../assets/Icons/imguser.png')}></Image>
      </View>
    <ScrollView style ={{
        top: 190,
    }}>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
        <View style ={{
            height:150,
        }}>
          <Image  style ={{
        borderRadius: 100,
        width:50,
        height:50,
        left: 12
    }}
    source={require('../../assets/Icons/avatar.png')}></Image>  
    <View style={{
        height:20,
        width:20,
        backgroundColor:'#FFC529',
        borderRadius:100,
        left:50,
        bottom:20,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: 10,
            color:'white',
        }}
        >5.0</Text>
    </View>
    <Text style={{
        fontSize: 20,
        fontWeight :'500',
        color:'black',
        left : 80,
        bottom: 67
    }}>Alyce Lambo</Text>
    <Text style={{
        fontSize: 13,
        fontWeight :'500',
        color:'gray',
        left : 80,
        bottom: 65
    }}>25/12/2022</Text>
    <Text style = {{
        width: 365,
        left: 15,
        bottom: 50
    }}
    >
    Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.
    </Text>
        </View>
    </ScrollView>
</View>
  )
};




export default Index;
