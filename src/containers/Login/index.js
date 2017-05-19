/* Splash Screen */

import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import I18n from 'react-native-i18n';
import { loadTodos } from '@actions/loadTodos';
import Types from '@actions/actionTypes';
import { replaceRoute, pushNewRoute } from '@actions/route';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class LoginMain extends Component {
  componentDidMount() {
  }
  gotoLoginEmail() {
    this.pushNewRoute('loginemail');
  }
  gotoHome() {
    this.replaceRoute('home');
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  replaceRoute(route) {
    this.props.replaceRoute(route);
  }
  loginSaga() {
    this.props.loadTodos('yayeee!');
    //const { dispatch } = this.props;
    //dispatch({ type: Types.LOAD_TASKS_REQUEST, text: 'abc' });
  }
  render() {
    return (
      <Image
        resizeMode={'stretch'}
        style={[Styles.fullScreen]}
        source={Images.bkgLoginMain}
      >
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.appTitle}>
            {I18n.t('APP_NAME_SPACE')}
          </Text>
          <Text style={styles.appDescription}>
            {I18n.t('FOOD_FOR_EVERYONE')}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={[Styles.center, { flex: 1 }]}>
            <Button
              large
              title={I18n.t('LOGIN')}
              buttonStyle={{ width: Metrics.screenWidth * 0.9,
                backgroundColor: Colors.brandPrimary,
                borderRadius: 25 }}
              textStyle={Fonts.style.buttonText}
              onPress={() => this.loginSaga()}
            />
          </View>
          <View style={[Styles.center, { flex: 1, flexDirection: 'row' }]}>
            <Button
              large
              title={I18n.t('LOGIN_FB')}
              buttonStyle={[styles.buttonContainer, { width: Metrics.screenWidth * 0.5 }]}
              textStyle={Fonts.style.buttonText}
              onPress={() => this.gotoHome()}
            />
            <Text style={[Fonts.style.description, styles.labelText]}>
              {I18n.t('OR')}
            </Text>
            <Button
              large
              title={I18n.t('E_MAIL')}
              buttonStyle={[styles.buttonContainer, { width: Metrics.screenWidth * 0.25 }]}
              textStyle={Fonts.style.buttonText}
              onPress={() => this.gotoLoginEmail()}
            />
          </View>
          <View style={[Styles.center, { flex: 1, flexDirection: 'row' }]}>
            <Text style={[Fonts.style.description, styles.labelText]}>
              {I18n.t('BY_USING_APP')}
            </Text>
            <TouchableOpacity>
              <Text style={styles.underlineText}>
                {I18n.t('TERMS')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

LoginMain.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  pushNewRoute: React.PropTypes.func.isRequired,
  replaceRoute: React.PropTypes.func.isRequired,
  loadTodos: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    replaceRoute: route => dispatch(replaceRoute(route)),
    loadTodos: text => dispatch(loadTodos(text)),
  };
}
function mapStateToProps(state) {
  return { };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginMain);
