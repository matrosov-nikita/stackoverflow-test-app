import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

  
function AppContainer (props) {
  const { dispatch, nav, displayName } = props;

  const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );

  const addListener = createReduxBoundAddListener("root");

  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener,
  });

  const screenProps = {
      displayName: props.displayName
      
  };

  return <AppNavigation navigation={navigation} screenProps={screenProps}/>
}

const mapStateToProps = state => ({ nav: state.nav, displayName: state.displayName })
export default connect(mapStateToProps)(AppContainer);