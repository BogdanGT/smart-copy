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
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          width: '70%',
        }}>
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
              fontSize: 13,
            }}>
            Protection against accidental touches by disabling the “Back” button
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
              fontSize: 13,
              marginLeft: 10,
            }}>
            Black placeholder images on the left and right sides
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
            Images automatically adjust based on screen orientation
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={addImages}
        style={{
          backgroundColor: 'black',
          height: 50,
          justifyContent: 'center',
          borderRadius: 15,
          borderWidth: 1,
          borderColor: '#e8e8e8',
          alignSelf: 'center',
          marginTop: 50,
          width: width - 130,
        }}>
        <Text
          style={{
            color: '#e8e8e8',
            fontFamily: 'DMSans-Bold',
            textAlign: 'center',
            fontSize: 15,
          }}>
          Add images
        </Text>
      </TouchableOpacity>

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
        {'<3'} from BogdanGT
      </Text>
    </View>
  );
};

export default HomeScreen;
