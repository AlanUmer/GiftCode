/* Splash Screen */

import React, { Component } from 'react';
import { View, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

//import { popRoute, pushNewRoute } from '@state/route/action';
import { popRoute, pushNewRoute } from '@actions/route';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class Filter extends Component {
  componentDidMount() {
  }
  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  render() {
    const navBtnBack = (
      <TouchableOpacity onPress={() => this.popRoute()}>
        <Icon name="angle-left" size={40} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
    return (
      <View
        style={[Styles.fullScreen, { backgroundColor: 'white' }]}
      >
        <NavigationBar
          style={{ marginLeft: 10, alignItems: 'center' }}
          containerStyle={Styles.center}
          title={{ title: I18n.t('FILTER'), tintColor: Colors.textPrimary }}
          leftButton={navBtnBack}
          tintColor={Colors.brandPrimary}
        />
        <View style={{ flex: 1 }}>

        </View>
      </View>
    );
  }
}

Filter.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
