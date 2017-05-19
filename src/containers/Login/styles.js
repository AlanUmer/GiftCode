import { StyleSheet } from 'react-native';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#EEE5',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 25,
  },
  labelText: {
    color: Colors.textPrimary,
  },
  underlineText: {
    ...Fonts.style.description,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.brandPrimary,
    color: Colors.brandPrimary,
    marginLeft: 5,
  },
  appTitle: {
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.type.bold,
    color: Colors.textPrimary,
    backgroundColor: 'transparent',
  },
  appDescription: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.textPrimary,
    backgroundColor: 'transparent',
  },
});
