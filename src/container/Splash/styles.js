import { StyleSheet } from 'react-native';
import { h, w } from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignContent: 'center'
  },
  splashImg: {
    height: h(30),
    width: h(30),
    alignSelf: 'center',
  },
});
