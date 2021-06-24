import React from 'react';
import { Scene, Router, Stack, Drawer } from 'react-native-router-flux';
import { Dimensions, Platform } from 'react-native';
import DrawerBar from './component/Drawer/Drawer';

import IntroScreen from './container/IntroScreen/IntroScreen';
import Splash from './container/Splash/Splash';
import MainHome from './container/MainHome/MainHome';
import Description from './container/Description/Description';
//import StaffLogin from './container/StaffLogin/StaffLogin';


import { connect } from "react-redux";

var width = Dimensions.get('window').width;

const RouterWithRedux = connect()(Router);

class Root extends React.Component {

  render() {
    return (
      <RouterWithRedux>
        <Scene key="root" hideTabBar hideNavBar>
          <Stack key="app">
            <Scene hideNavBar panHandlers={null}>
              <Scene
                initial={true}
                component={Splash}
                hideNavBar={true}
                key="Splash"
                title="Splash"
              />
              <Scene
                component={IntroScreen}
                hideNavBar={true}
                wrap={false}
                key="IntroScreen"
                title="IntroScreen"
              />
              <Drawer
                hideNavBar
                key="drawer"
                contentComponent={DrawerBar}
                drawerWidth={width - 150}>
                <Scene
                  component={MainHome} //classname
                  hideNavBar={true}
                  wrap={false}
                  key="MainHome"
                  title="MainHome"
                />
                <Scene
                  component={Description} //classname
                  hideNavBar={true}
                  wrap={false}
                  key="Description"
                  title="Description"
                />
                {/* <Scene
                  component={StaffLogin} //classname
                  hideNavBar={true}
                  wrap={false}
                  key="StaffLogin"
                  title="StaffLogin"
                /> */}
              </Drawer>
            </Scene>
          </Stack>
        </Scene>
      </RouterWithRedux>
    );
  }
}

export default Root;
console.disableYellowBox = true;
