import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  Image,
  Dimensions,
  StatusBar,
  AsyncStorage,
  BackHandler,
  TouchableOpacity,
  PanResponder,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import Evilicons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import PhotoZoom from 'react-native-photo-zoom';

const {width, height} = Dimensions.get('screen');

const App = () => {
  const [images, setImages] = useState([]);
  const [screenDim, setScreenDim] = useState({
    width: width > height ? width - StatusBar.currentHeight : width,
    height,
  });

  useEffect(() => {
    Dimensions.addEventListener('change', ({screen}) => {
      console.log(screen);
      setScreenDim({
        width:
          screen.width > screen.height
            ? screen.width - StatusBar.currentHeight
            : screen.width,
        height: screen.height,
      });
    });
  }, []);

  const addImages = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
        multiple: true,
        mediaType: 'photo',
      }).then(images => {
        const newImagesTypes = [];
        const newImages = [];
        const asd = [...images];
        for (let i = 0; i < images.length * 2 + 1; i++) {
          if (i % 2 == 0) {
            newImagesTypes.push('black');
          } else {
            newImagesTypes.push('image');
          }
        }
        newImagesTypes.forEach(type => {
          if (type == 'black') {
            newImages.push({id: Math.random(), type: 'black'});
          } else {
            if (asd.length > 0) {
              const firstItem = asd[0];

              firstItem.id = Math.random();
              firstItem.type = 'image';

              newImages.push(firstItem);
              asd.shift();
            }
          }
        });
        console.log(newImages);
        setImages(newImages);
      });
    } catch (error) {
      console.log(error);
    }
  };

  BackHandler.addEventListener('hardwareBackPress', () => true);

  hideNavigationBar();

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'} barStyle="dark-content" hidden />
      {images.length > 0 ? (
        <View>
          <FlatList
            data={images}
            keyExtractor={el => el.id}
            snapToInterval={screenDim.width}
            disableIntervalMomentum
            showsHorizontalScrollIndicator={false}
            horizontal
            overScrollMode="never"
            renderItem={({item}) => {
              return (
                <View
                  style={{width: screenDim.width, height: screenDim.height}}>
                  {item.type == 'image' && (
                    <PhotoZoom
                      style={{
                        width: screenDim.width,
                        height: screenDim.height,
                      }}
                      minimumZoomScale={1}
                      maximumZoomScale={3}
                      source={{uri: item.path}}
                    />
                  )}
                  {item.type == 'black' && (
                    <View
                      style={{
                        width: screenDim.width,
                        height: screenDim.height,
                        backgroundColor: 'black',
                      }}
                    />
                  )}
                </View>
              );
            }}
          />
          {/* <ImageViewer images={images} /> */}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            marginTop: '50%',
          }}>
          <TouchableOpacity
            onPress={() => addImages()}
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
                Siguranta impotriva atingerilor neintentionate avand butonul
                "back" blocat
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
            by @bogdan.gt
          </Text>
        </View>
      )}
    </View>
  );
};

export default App;
