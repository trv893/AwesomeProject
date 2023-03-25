import { PixelRatio } from 'react-native';

export const pixelRatio = (pixels) => {
  return PixelRatio.roundToNearestPixel(pixels);
};
