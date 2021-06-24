import React, { useState, useCallback, useRef, useEffect, createRef } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, ScrollView, FlatList } from 'react-native';
import { isIntroScreensWatched } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { navigationRef } from "../../navigationRef";
import { useTheme } from '../ThemeContext';
import {catsData} from "../../actions/CheckOffline"

const MainHome = ({ navigation }) => {
  const catsDataReducer = useSelector(state =>  state.catsData.catsData)
  console.log("catsData",catsData)
  const dispatch = useDispatch();
  const [mockDataList, setMockDataList] = useState([{
    image: '1',
    text: 'Swipe me left!'
  },
  {
    image: '2',
    text: 'Swipe me right!'
  },
  {
    image: '3',
    text: 'Try swiping in both directions'
  },
  {
    image: '1',
    text: 'Swipe me left!'
  },
  {
    image: '2',
    text: 'Swipe me right!'
  },
  {
    image: '3',
    text: 'Try swiping in both directions'
  }]);

  const onEditPress = (item, index) => {
    navigation.navigate('IntroScreen',{itemToEdit: item})
  }
  const onDeletePress = (item, index) => {
    console.log('onDeletePress index',index)
    let tempArr = [...catsDataReducer];
    // let newArr = [];
    if(tempArr.length > 1){
      // newArr  = 
      tempArr.splice(index,1);
    } else if(tempArr.length == 1){
      tempArr = []
    }
    dispatch(catsData(tempArr));
    // for(let tempItem of tempArr){
    //   if(item.nam)
    // }
  }
  return (

    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'yellow', height: '10%', width: '100%', padding: 20 }}>
        <TouchableOpacity onPress={() => Actions.drawerOpen()}><Image source={require('../../assets/image/menu.png')} /></TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CATS</Text>
        <TouchableOpacity onPress={Actions.IntroScreen}><Image source={require('../../assets/image/plus.png')} /></TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 10 }}>Breeds</Text>
        <FlatList

          style={{ padding: 10 }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={catsDataReducer}
          keyExtractor={item => item.id}
          //ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item, index }) => (
            <View style={{ width: '100%', height: 60, flexDirection: 'row' }}>
              <View width="20%" alignItems="center" justifyContent="center">
                <Image
                  source={require('../../assets/image/PersianCat.jpg')}
                  style={{ borderRadius: 10, marginHorizontal: 2, height: 40, width: 40 }} />
              </View>
              <View width="60%" justifyContent="center">
                <Text style={{textAlign:'left'}}>{item.catName}</Text>
              </View>
              <View width="10%" alignItems="center" justifyContent="center">
                <TouchableOpacity onPress={() => onEditPress(item,index)}>
                  <Image
                    source={require('../../assets/image/pen.png')}
                    style={{ borderRadius: 10, marginHorizontal: 2, height: 20, width: 20 }} /></TouchableOpacity>
              </View>
              <View width="10%" alignItems="center" justifyContent="center">
                <TouchableOpacity onPress={() => onDeletePress(item, index)}>
                  <Image
                    source={require('../../assets/image/PersianCat.jpg')}
                    style={{ borderRadius: 10, marginHorizontal: 2, height: 20, width: 20 }} /></TouchableOpacity>
              </View>
            </View>
          )}
        />
       
        {/* <FlatList
                        horizontal={true}
                        style={{padding:10}}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        data={mockDataList}
                        keyExtractor={item => item.id}
                        //ItemSeparatorComponent={() => <Separator />}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/image/PersianCat.jpg')} 
                                    style={{borderRadius:10,marginHorizontal:2}}/>
                                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14}}>PersianCat</Text>
                            </TouchableOpacity>
                        )}
                    />
                  
                  <Text style={{fontSize:18,fontWeight:'bold',paddingHorizontal:20,marginTop:10}}>Names</Text>
              <FlatList
                        horizontal={true}
                        style={{padding:10}}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        data={mockDataList}
                        keyExtractor={item => item.id}
                        //ItemSeparatorComponent={() => <Separator />}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/image/PersianCat.jpg')} 
                                    style={{borderRadius:10,marginHorizontal:2}}/>
                                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14}}>PersianCat</Text>
                            </TouchableOpacity>
                        )}
                    /> */}
      </ScrollView>

    </View>


  );
};

export default MainHome;


// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import {
//   View,
//   Text,
//   StatusBar,
//   Image,
//   TextInput,
//   ScrollView,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   BackHandler,
// } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// //import { loginAPI } from "../../../actions/Login";
// import styles from './styles';
// import { w, h } from '../../utils/Dimensions';
// import { TextSize } from '../../theme/TextSize';
// import Loader from '../../constants/Loader';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import menuIcon from '../../assets/icon/icon-menu.png';


// const mockDataList = [
//   {
//     image: '1',
//     text: 'Swipe me left!'
//   },
//   {
//     image: '2',
//     text: 'Swipe me right!'
//   },
//   {
//     image: '3',
//     text: 'Try swiping in both directions'
//   },
//   {
//     image: '1',
//     text: 'Swipe me left!'
//   },
//   {
//     image: '2',
//     text: 'Swipe me right!'
//   },
//   {
//     image: '3',
//     text: 'Try swiping in both directions'
//   },

// ]
// class MainHome extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: false,
//       userName: '',
//       password: '',
//       passwordShow: true,
//       deviceToken: ''
//     };
//   }

//   componentDidMount() {
//     this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//   }

//   handleBackButton = () => {
//     Alert.alert(
//       'Novus',
//       'Are you sure you want to exit from App?',
//       [
//         { text: 'cancel', onPress: () => console.log('Cancel Pressed') },
//         { text: 'OK', onPress: () => Actions.Login() },
//       ],
//       { cancelable: false },
//     );
//     return true;
//   };

//   componentWillUnmount() {
//     this.backHandler.remove();
//   }
//   adminLogin = () => {
//     Actions.AdminHome()
//     console.log('login')
//   }
//   staffLogin = () => {
//     Actions.StaffLogin()
//     console.log('login')
//   }

//   render() {
//     return (
//       <KeyboardAvoidingView style={styles.mainContainer}>
//         <Loader loading={this.state.isLoading} />
//         <StatusBar />
//         {/* <View>
//           <TouchableOpacity
//             style={styles.menuIconView}
//             onPress={() => Actions.drawerOpen()}>
//             <Image
//               resizeMode="contain"
//               style={styles.menuIconStyle}
//               source={menuIcon}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//           <View style={styles.logoStyle}>
//             <Image resizeMode='contain'
//               style={{ height: h(5), width: h(15), marginTop: h(5), resizeMode: 'stretch' }}
//               source={require('../../assets/icon/dummylogo.png')}
//             />
//           </View>

//           <View>
//             <Image
//               style={{ height: h(40), width: h(70), marginTop: h(5), resizeMode: 'stretch' }}
//               source={require('../../assets/image/desktopimage.jpg')}
//             />
//           </View>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               marginTop: h(10),
//               marginLeft: h(3)

//             }}>
//             <View style={styles.logoStyle}>
//               <TouchableOpacity
//                 onPress={() => this.adminLogin()}
//               >
//                 <Image
//                   style={styles.imageStyle}
//                   source={require('../../assets/icon/dummylogo.png')}
//                 />
//                 <Text
//                   style={styles.appName}>
//                   Admin Home
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.logoStyle}>
//               <TouchableOpacity
//                 onPress={() => this.staffLogin()}
//               >
//                 <Image
//                   style={styles.imageStyle}
//                   source={require('../../assets/icon/dummylogo.png')}
//                 />
//                 <Text
//                   style={styles.appName}>

//                   Staff Login
//                 </Text>
//               </TouchableOpacity>


//             </View>
//           </View>
//         </View> */}

//         <View style={{ flex: 1 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'yellow', height: '10%', width: '100%', padding: 20 }}>
//             <TouchableOpacity onPress={() => Actions.drawerOpen()}><Image source={require('../../assets/image/menu.png')} /></TouchableOpacity>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CATS</Text>
//             <TouchableOpacity onPress={Actions.IntroScreen}><Image source={require('../../assets/image/plus.png')} /></TouchableOpacity>
//           </View>
//           <ScrollView>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 10 }}>Breeds</Text>
//             <FlatList

//               style={{ padding: 10 }}
//               bounces={false}
//               showsVerticalScrollIndicator={false}
//               data={mockDataList}
//               keyExtractor={item => item.id}
//               //ItemSeparatorComponent={() => <Separator />}
//               renderItem={({ item, index }) => (
//                 <View style={{ width: '100%', height: 60 ,flexDirection:'row'}}>
//                   <View width="20%" alignItems="center" justifyContent="center">
//                     <Image
//                       source={require('../../assets/image/PersianCat.jpg')}
//                       style={{ borderRadius: 10, marginHorizontal: 2, height: 40, width:40}} />
//                   </View>
//                   <View width="60%" alignItems="center" justifyContent="center">
//                   <Text>Name</Text>
//                   </View>
//                   <View width="10%" alignItems="center" justifyContent="center">
//                  <TouchableOpacity onPress={()=>onEditPress()}>
//                  <Image
//                       source={require('../../assets/image/PersianCat.jpg')}
//                       style={{ borderRadius: 10, marginHorizontal: 2, height: 20, width:20}} /></TouchableOpacity> 
//                   </View>
//                   <View width="10%" alignItems="center" justifyContent="center">
//                    <TouchableOpacity onPress={()=>onDeletePress()}>
//                    <Image
//                       source={require('../../assets/image/PersianCat.jpg')}
//                       style={{ borderRadius: 10, marginHorizontal: 2, height: 20, width:20}} /></TouchableOpacity> 
//                   </View>
//                 </View>
//               )}
//             />
//             <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 10 }}>Names</Text>
//             {/* <FlatList
//                         horizontal={true}
//                         style={{padding:10}}
//                         bounces={false}
//                         showsVerticalScrollIndicator={false}
//                         data={mockDataList}
//                         keyExtractor={item => item.id}
//                         //ItemSeparatorComponent={() => <Separator />}
//                         renderItem={({ item, index }) => (
//                             <TouchableOpacity>
//                                 <Image
//                                     source={require('../../assets/image/PersianCat.jpg')} 
//                                     style={{borderRadius:10,marginHorizontal:2}}/>
//                                     <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14}}>PersianCat</Text>
//                             </TouchableOpacity>
//                         )}
//                     />

//                   <Text style={{fontSize:18,fontWeight:'bold',paddingHorizontal:20,marginTop:10}}>Names</Text>
//               <FlatList
//                         horizontal={true}
//                         style={{padding:10}}
//                         bounces={false}
//                         showsVerticalScrollIndicator={false}
//                         data={mockDataList}
//                         keyExtractor={item => item.id}
//                         //ItemSeparatorComponent={() => <Separator />}
//                         renderItem={({ item, index }) => (
//                             <TouchableOpacity>
//                                 <Image
//                                     source={require('../../assets/image/PersianCat.jpg')} 
//                                     style={{borderRadius:10,marginHorizontal:2}}/>
//                                     <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14}}>PersianCat</Text>
//                             </TouchableOpacity>
//                         )}
//                     /> */}
//           </ScrollView>

//         </View>
//       </KeyboardAvoidingView>
//     );
//   }
// };

// // Login.propTypes = {
// //   ///  submitForm: PropTypes.func,
// //   /// login: PropTypes.any
// // }

// const mapStateToProps = (state) => {
//   return {
//     ///  login: state.login
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     ///submitForm: (data) => dispatch(loginAPI(data)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MainHome);
