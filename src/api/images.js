import ImagePicker from 'react-native-image-crop-picker';

export const addImagesApi = async () => {
  try {
    const images = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      multiple: true,
      mediaType: 'photo',
    });

    const newImagesTypes = [];
    const newImages = [];
    const asd = [...images];
    for (let i = 0; i < images.length * 2 + 1; i++) {
      if (i % 2 === 0) {
        newImagesTypes.push('black');
      } else {
        newImagesTypes.push('image');
      }
    }
    newImagesTypes.forEach(type => {
      if (type === 'black') {
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

    return newImages;
  } catch (error) {
    console.log(error);
  }
};
