import React, { useState, useCallback, useRef, useEffect, createRef } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, ScrollView, FlatList } from 'react-native';
import { isIntroScreensWatched } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { navigationRef } from "../../navigationRef";
import { useTheme } from '../ThemeContext';
import { Actions } from "react-native-router-flux";
import { TextInput } from "react-native-gesture-handler";
import {catsData} from "../../actions/CheckOffline"


const AppIntro = ({ navigation, ...props }) => {

  console.log('navigation',navigation)
  console.log('navigation props',props)
  const catsDataReducer = useSelector(state => state.catsData.catsData)
  console.log('catsDataReducer',catsDataReducer)
  const introRef = useRef(null);
  const dispatch = useDispatch();
  const [nameText, setNameText] = useState('');
  const [breedText, setBreedText] = useState('');
  const [ageText, setageText] = useState('');
  const [descText, setDescText] = useState('');

  useEffect(() => {
    if(props && props.itemToEdit){
      if(props.itemToEdit.catName){
        setNameText(props.itemToEdit.catName)
      }
      if(props.itemToEdit.catBreed){
        setBreedText(props.itemToEdit.catBreed)
      }
      if(props.itemToEdit.catAge){
        setageText(props.itemToEdit.catAge)
      }
      if(props.itemToEdit.catDesc){
        setDescText(props.itemToEdit.catDesc)
      }
    }
  },[]);

  const onSubmitPress = () =>{
  
    const tempArr = [...catsDataReducer];
    console.log('tempArr',tempArr)
    const params = {
      catName: nameText,
      catBreed: breedText,
      catAge: ageText,
      catDesc: descText,
    }
    tempArr.push(params);
    console.log('tempArr',tempArr)
    dispatch(catsData(tempArr));
    navigation.navigate('MainHome')
    console.log('onSubmitPress')
  }
  return (

    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'yellow', height: '10%', width: '100%', padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('MainHome')}><Image source={require('../../assets/image/menu.png')} /></TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CATS</Text>
        <Image source={require('../../assets/image/plus.png')} />
      </View>
      <View style={{ padding: 20 }}>
        <Text>Name</Text>
        <TextInput
          onChangeText={text => setNameText(text)}
          value={nameText}
          style={{ borderRadius: 10, borderWidth: 1 }}></TextInput>
        <Text>Breed</Text>
        <TextInput
          value={breedText}
          onChangeText={text => setBreedText(text)}
          style={{ borderRadius: 10, borderWidth: 1 }}></TextInput>

        <Text>Age</Text>
        <TextInput value={ageText} onChangeText={text => setageText(text)} style={{ borderRadius: 10, borderWidth: 1 }}></TextInput>
        <Text>Description</Text>
        <TextInput value={descText} onChangeText={text => setDescText(text)} style={{ borderRadius: 10, borderWidth: 1 }}></TextInput>
<TouchableOpacity onPress={()=>onSubmitPress()}>
        <View style={{
          height: 60, width: 100, borderWidth: 1, borderColor: '#d3d3d3', alignSelf: 'center', justifyContent: 'center', alignItems: "center"
        }}>
<Text>SUBMIT</Text>
        </View></TouchableOpacity>
      </View>

    </View>


  );
};

export default AppIntro;