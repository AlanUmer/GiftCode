/* Splash Screen */

import React, { Component } from 'react';
import { View, Image, Text, Platform, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import { Button, FormInput } from 'react-native-elements';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

//import { popRoute, pushNewRoute } from '@state/route/action';
import { popRoute, pushNewRoute } from '@actions/route';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class LoginEmail extends Component {
  componentDidMount() {
  }
  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  gotoRegister() {
    this.pushNewRoute('register');
  }
  render() {
    const spacer = (<View style={{ height: 15 }} />);

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
          title={{ title: I18n.t('LOGIN'), tintColor: Colors.textPrimary }}
          leftButton={navBtnBack}
          tintColor={Colors.brandPrimary}
        />
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            extraScrollHeight={0}
            scrollHeight={0}
            style={{ flex: 1 }}
          >
            <View style={[Styles.center, { flex: 1 }]}>
              <View style={{ height: Metrics.screenHeight / 4 }} />
              <View style={[Styles.center]} >
                <FormInput
                  containerStyle={{ width: Metrics.screenWidth * 0.7 }}
                  inputStyle={{ color: Colors.textSecondary }}
                  placeholder={I18n.t('EMAIL')}
                  returnKeyType={'next'}
                  onSubmitEditing={() => this.refs.loginpwd.refs.loginpwd.focus()}
                />
                {spacer}
                <FormInput
                  ref={'loginpwd'}
                  textInputRef={'loginpwd'}
                  containerStyle={{ width: Metrics.screenWidth * 0.7 }}
                  inputStyle={{ color: Colors.textSecondary }}
                  placeholder={I18n.t('PASSWORD')}
                  returnKeyType={'go'}
                />
                {spacer}
                <Button
                  title={I18n.t('LOGIN')}
                  buttonStyle={{ width: Metrics.screenWidth * 0.75,
                    backgroundColor: Colors.brandPrimary,
                    borderRadius: 25 }}
                  textStyle={Fonts.style.buttonText}
                />
                {spacer}
                <Button
                  title={I18n.t('REGISTER_NOW')}
                  buttonStyle={{ width: Metrics.screenWidth * 0.75,
                    backgroundColor: 'transparent',
                    borderRadius: 25 }}
                  textStyle={[Fonts.style.buttonText, { color: Colors.brandPrimary }]}
                  onPress={() => this.gotoRegister()}
                />
              </View>
              <View style={{ height: Metrics.screenHeight / 10 }} />
              <View style={[Styles.center]} >
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={[Fonts.style.description, { color: Colors.textSecondary }]}>
                    {I18n.t('BY_CLICKING_LOGIN')}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.underlineText}>
                      {I18n.t('TERMS')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

LoginEmail.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginEmail);
