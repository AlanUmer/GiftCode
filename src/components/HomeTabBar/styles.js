import { StyleSheet } from 'react-native';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrics.footerHeight,
    width: Metrics.screenWidth,
    backgroundColor: Colors.brandPrimary,
  },
  centerButton: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.textPrimary,
  },
});
