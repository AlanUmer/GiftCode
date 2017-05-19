/* Splash Screen */

import React, { Component } from 'react';
import { View, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';


import { popRoute, pushNewRoute } from '@actions/route';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.camera = null;

    this.state = {
      camera: {
        captureQuality: Camera.constants.CaptureQuality.low,
      },
    };
  }
  componentDidMount() {
  }
  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  scanBarcode(data) {
    alert('d');
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={code => this.scanBarcode(code)}
          aspect={Camera.constants.Aspect.fill}
          barCodeTypes={[
            'qr',
          ]}
        />
      </View>
    );
  }
}

Search.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
