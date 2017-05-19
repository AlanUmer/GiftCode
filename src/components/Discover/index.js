import React, { Component } from 'react';
import { Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
import { Button } from 'react-native-elements';
//import { popRoute, pushNewRoute } from '@state/route/action';
import { popRoute, pushNewRoute } from '@actions/route';
import { Styles, Fonts, Images, Colors, Metrics } from '@theme/';
import styles from './styles';

class Discover extends Component {
  popRoute() {
    this.props.popRoute();
  }
  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }
  gotoTakeItemPhoto() {
    this.pushNewRoute('takeitemphoto');
  }
  gotoSearch() {
    this.pushNewRoute('search');
  }
  gotoFilter() {
    this.pushNewRoute('filter');
  }
  render() {
    const navBtnSearch = (
      <TouchableOpacity onPress={() => this.gotoSearch()}>
        <Icon name="search" size={30} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
    const navBtnFilter = (
      <TouchableOpacity onPress={() => this.gotoFilter()}>
        <Icon name="filter" size={30} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          style={{ marginHorizontal: 10, alignItems: 'center' }}
          containerStyle={[Styles.center, { backgroundColor: 'red' }]}
          title={{ title: I18n.t('APP_NAME'), tintColor: Colors.textPrimary }}
          leftButton={navBtnSearch}
          rightButton={navBtnFilter}
          tintColor={Colors.brandPrimary}
        />
        <View style={[Styles.center, { flex: 1, backgroundColor: 'white' }]}>
          <ScrollView style={{ flex: 1 }} onScroll={this.props.onScrollItems}>
            <View style={{ height: 5500, width: Metrics.screenWidth, backgroundColor: '#050A' }}>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
Discover.propTypes = {
  onScrollItems: React.PropTypes.func.isRequired,
};
Discover.defaultProps = {
  onScrollItems: (event) => {},
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
export default connect(mapStateToProps, mapDispatchToProps)(Discover);
