import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import { View } from 'react-native-animatable';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

export default class HomeTabBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[Styles.center, { flex: 1 }]}>
          <TouchableOpacity onPress={this.props.onPressLeftButton}>
            <Text style={[Fonts.style.h5, { color: Colors.textPrimary }]}>{I18n.t('DISCOVER')}</Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.center, styles.centerButton]}>
          <TouchableOpacity onPress={this.props.onPressMiddleButton}>
            <Image
              style={{ width: Metrics.screenWidth / 5, height: Metrics.footerHeight * 0.7 }}
              resizeMode={'contain'}
              source={Images.imgApple}
            />
          </TouchableOpacity>
        </View>
        <View style={[Styles.center, { flex: 1 }]}>
          <TouchableOpacity onPress={this.props.onPressRightButton}>
            <Text style={[Fonts.style.h5, { color: Colors.textPrimary }]}>{I18n.t('MYAPP')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
HomeTabBar.propTypes = {
  onPressLeftButton: React.PropTypes.func.isRequired,
  onPressMiddleButton: React.PropTypes.func.isRequired,
  onPressRightButton: React.PropTypes.func.isRequired,
};
HomeTabBar.defaultProps = {
  onPressLeftButton: () => { alert('L'); },
  onPressMiddleButton: () => { alert('M'); },
  onPressRightButton: () => { alert('R'); },
};

