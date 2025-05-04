import React from 'react';
import {View} from 'react-native';
import PhotoZoom from 'react-native-photo-zoom';
import useScreenDimensions from '../hooks/useScreenDimensions';

const Image = ({item}) => {
  const {screenDim} = useScreenDimensions();

  return (
    <View style={{width: screenDim.width, height: screenDim.height}}>
      {item.type === 'image' && (
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
      {item.type === 'black' && (
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
};

export default Image;
