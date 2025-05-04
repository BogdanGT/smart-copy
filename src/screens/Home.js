import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('screen');

const HomeScreen = ({addImages}) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: '50%',
      }}>
      <TouchableOpacity
        onPress={addImages}
        style={{
          backgroundColor: 'black',
          width: width - 60,
          height: 50,
          justifyContent: 'center',
          borderRadius: 15,
          borderWidth: 1,
          borderColor: '#e8e8e8',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#e8e8e8',
            fontFamily: 'DMSans-Bold',
            textAlign: 'center',
            fontSize: 15,
          }}>
          Adauga imaginile
        </Text>
      </TouchableOpacity>

      <View style={{width: '80%', alignSelf: 'center', marginTop: '30%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Evilicons
            name="lock"
            color="#e8e8e8"
            size={40}
            style={{alignSelf: 'flex-start'}}
          />
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              color: '#e8e8e8',
              lineHeight: 18,
              width: '80%',
              fontSize: 13,
            }}>
            Siguranta impotriva atingerilor neintentionate avand butonul "back"
            blocat
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: 20,
              height: 30,
              borderRadius: 5,
              borderWidth: 1.5,
              borderColor: '#e8e8e8',
              marginLeft: 10,
            }}
          />
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              color: '#e8e8e8',
              width: '80%',
              fontSize: 13,
              marginLeft: 10,
            }}>
            Poze negre in stanga si in dreapta
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <MaterialCommunityIcons
            name="phone-rotate-landscape"
            color="#e8e8e8"
            size={25}
            style={{marginLeft: 5}}
          />
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              color: '#e8e8e8',
              width: '80%',
              fontSize: 13,
              marginLeft: 10,
            }}>
            Imaginile se ajusteaza automat dupa orientarea telefonului
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontFamily: 'DMSans-Regular',
          color: '#e8e8e8',
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 10,
        }}>
        {'<3'} from BogdanGT Company
      </Text>
    </View>
  );
};

export default HomeScreen;
