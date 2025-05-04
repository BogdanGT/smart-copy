import {useEffect, useState} from 'react';
import {Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');

const useScreenDimensions = () => {
  const [screenDim, setScreenDim] = useState({
    width: width > height ? width - StatusBar.currentHeight : width,
    height,
  });

  useEffect(() => {
    Dimensions.addEventListener('change', ({screen}) => {
      setScreenDim({
        width:
          screen.width > screen.height
            ? screen.width - StatusBar.currentHeight
            : screen.width,
        height: screen.height,
      });
    });
  }, []);

  return {screenDim};
};

export default useScreenDimensions;
