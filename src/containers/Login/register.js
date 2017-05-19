/* Splash Screen */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button, FormInput } from 'react-native-elements';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//import { popRoute, pushNewRoute } from '@state/route/action';
import { popRoute, pushNewRoute } from '@actions/route';
import Avatar from '@components/Avatar';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class Register extends Component {
  componentDidMount() {
  }
  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  handleAvatarChange(response) {
    // Do something
    // response looks like : {
    //      data: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Base64
    //      fileSize: 474486,
    //      height: 531,
    //      isVertical: false,
    //      origURL: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
    //      uri: "file:///...",
    //      width: 800,
    // }
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
        style={[Styles.fullScreen, { flex: 1, backgroundColor: 'white' }]}
      >
        <NavigationBar
          style={{ marginLeft: 10, alignItems: 'center' }}
          containerStyle={Styles.center}
          title={{ title: I18n.t('REGISTER'), tintColor: Colors.textPrimary }}
          leftButton={navBtnBack}
          rightButton={{ title: I18n.t('DONE'), tintColor: Colors.textPrimary }}
          tintColor={Colors.brandPrimary}
        />
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            extraScrollHeight={0}
            scrollHeight={0}
            style={{ flex: 1 }}
          >
            <View style={[Styles.center, { flex: 1 }]}>
              {spacer}
              <Text style={[Fonts.style.h5, { textAlign: 'center', color: Colors.textSecondary, width: Metrics.screenWidth * 0.8 }]}>
                {I18n.t('WE_NEED_YOUR')}
              </Text>
              {spacer}
              <Avatar
                placeholder={Images.imgAvatar}
                size={'default'}
                interactive={true}
                onChange={this.handleAvatarChange}
              />
              {spacer}
              <FormInput
                containerStyle={{ width: Metrics.screenWidth * 0.7 }}
                inputStyle={{ color: Colors.textSecondary }}
                placeholder={I18n.t('EMAIL')}
                returnKeyType={'next'}
                onSubmitEditing={() => this.refs.regpwd.refs.regpwd.focus()}
              />
              {spacer}
              <FormInput
                ref={'regpwd'}
                textInputRef={'regpwd'}
                containerStyle={{ width: Metrics.screenWidth * 0.7 }}
                inputStyle={{ color: Colors.textSecondary }}
                placeholder={I18n.t('PASSWORD')}
                returnKeyType={'next'}
                onSubmitEditing={() => this.refs.regname.refs.regname.focus()}
              />
              {spacer}
              <FormInput
                ref={'regname'}
                textInputRef={'regname'}
                containerStyle={{ width: Metrics.screenWidth * 0.7 }}
                inputStyle={{ color: Colors.textSecondary }}
                placeholder={I18n.t('NAME')}
                returnKeyType={'go'}
              />
              {spacer}
              <Button
                title={I18n.t('DONE')}
                buttonStyle={{ width: Metrics.screenWidth * 0.75,
                  backgroundColor: Colors.brandPrimary,
                  borderRadius: 25 }}
                textStyle={Fonts.style.buttonText}
              />
              {spacer}
              {spacer}
              {spacer}
              <View style={[Styles.center, { alignItems: 'center', flexDirection: 'row', marginBottom: 20 }]}>
                <Text style={[Fonts.style.description, { color: Colors.textSecondary }]}>
                  {I18n.t('BY_CLICKING_DONE')}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.underlineText}>
                    {I18n.t('TERMS')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

Register.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
