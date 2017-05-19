/* MainNavigation */

import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View, Navigator } from 'react-native';
import { connect } from 'react-redux';

import { popRoute } from '@actions/route';
import { Colors } from '@theme/';

import Splash from '@containers/Splash';
import LoginMain from '@containers/Login';
import LoginEmail from '@containers/Login/loginEmail';
import Register from '@containers/Login/register';
import Home from '@containers/Home';
import TakeItemPhoto from '@containers/TakeItemPhoto';
import Search from '@containers/Search';
import Filter from '@containers/Filter';

Navigator.prototype.replaceWithAnimation = function (route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

export var globalNav = {};

class AppNavigator extends Component {

  componentDidMount() {
    globalNav.navigator = this._navigator;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this._navigator.getCurrentRoutes();

      if (routes[routes.length - 1].id === 'loginmain' || routes[routes.length - 1].id === 'loginmain') {
        return false;
      }
      else {
        this.popRoute();
        return true;
      }
    });
  }

  popRoute() {
    this.props.popRoute();
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'splash':
        return <Splash navigator={navigator} {...route.passProps} />;
      case 'loginmain':
        return <LoginMain navigator={navigator} {...route.passProps} />;
      case 'loginemail':
        return <LoginEmail navigator={navigator} {...route.passProps} />;
      case 'register':
        return <Register navigator={navigator} {...route.passProps} />;
      case 'home':
        return <Home navigator={navigator} {...route.passProps} />;
      case 'takeitemphoto':
        return <TakeItemPhoto navigator={navigator} {...route.passProps} />;
      case 'search':
        return <Search navigator={navigator} {...route.passProps} />;
      case 'filter':
        return <Filter navigator={navigator} {...route.passProps} />;
      default :
        return <LoginMain navigator={navigator} {...route.passProps} />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={Colors.brandPrimary}
          barStyle={'light-content'}
        />
        <Navigator
          ref={(ref) => { this._navigator = ref; }}
          configureScene={(route) => {
            if (route.id === 'splash') return Navigator.SceneConfigs.FadeAndroid;
            else if (route.id === 'loginmain') return Navigator.SceneConfigs.FadeAndroid;
            else if (route.id === 'loginemail') return Navigator.SceneConfigs.PushFromRight;
            return Navigator.SceneConfigs.PushFromRight;
          }}
          initialRoute={{ id: (Platform.OS === 'android') ? 'splash' : 'splash', statusBarHidden: true }}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}
AppNavigator.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  popRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
