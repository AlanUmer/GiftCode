/* Splash Screen */

import { Image } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { replaceRoute } from '@state/route/action';
import { replaceRoute } from '@actions/route';
import { Styles, Images } from '@theme/';

class Splash extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.gotoLoginMain();
    }, 1500);
  }
  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  gotoLoginMain() {
    this.replaceRoute('loginmain');
  }
  render() {
    return (
      <Image
        resizeMode={'stretch'}
        style={[Styles.fullScreen]}
        source={Images.bkgSplash}
      />
    );
  }
}

Splash.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
