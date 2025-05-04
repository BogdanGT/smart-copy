import React, {useState} from 'react';
import {View, FlatList, StatusBar, BackHandler} from 'react-native';

import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {addImagesApi} from './src/api/images';
import useScreenDimensions from './src/hooks/useScreenDimensions';
import Image from './src/components/image';
import HomeScreen from './src/screens/Home';

const App = () => {
  const [images, setImages] = useState([]);
  const {screenDim} = useScreenDimensions();

  const isImages = images.length > 0;

  const addImages = async () => {
    setImages(await addImagesApi());
  };

  BackHandler.addEventListener('hardwareBackPress', () => true);
  hideNavigationBar();

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'} barStyle="dark-content" hidden />

      {isImages ? (
        <FlatList
          data={images}
          keyExtractor={el => el.id}
          snapToInterval={screenDim.width}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          horizontal
          overScrollMode="never"
          renderItem={({item}) => {
            return <Image item={item} />;
          }}
        />
      ) : (
        <HomeScreen addImages={addImages} />
      )}
    </View>
  );
};

export default App;
