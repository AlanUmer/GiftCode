/* Splash Screen */

import React, { Component } from 'react';
import { Image, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { Button } from 'react-native-elements';
import { View } from 'react-native-animatable';
import HomeTabBar from '@components/HomeTabBar';
import Discover from '@components/Discover';

import { setHomeTab } from '@actions/globals';
import { popRoute, pushNewRoute } from '@actions/route';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class Home extends Component {
  componentDidMount() {
  }
  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  showDiscoverTab() {
    this.props.setHomeTab('discover');
  }
  showMyappTab() {
    this.props.setHomeTab('myapp');
  }
  render() {
    return (
      <View style={[Styles.fullScreen, { backgroundColor: 'white' }]}>
        <Discover />
        <HomeTabBar
          onPressLeftButton={() => this.showDiscoverTab()}
          onPressRightButton={() => this.showMyappTab()}
          onPressMiddleButton={() => this.pushNewRoute('takeitemphoto')}
        />
        <Text>{this.props.globals.homeTab}</Text>
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  setHomeTab: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setHomeTab: homeTab => dispatch(setHomeTab(homeTab)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
