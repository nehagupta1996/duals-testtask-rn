import React from 'react';
import { View, Animated, StatusBar, Image,SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import splashImg from '../../assets/image/cat.png';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0)
    }
  }

  componentWillMount() {
    try {
      setTimeout(async () => {
        Actions.MainHome();
      }, 1500);
    } catch (error) {
      console.log('error' + error);
    }
  }

  startAnimation = () => {
    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 1500,
    }).start();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Image resizeMode="contain" source={splashImg} style={styles.splashImg} />
      </SafeAreaView>
    );
  }

}

Splash.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);