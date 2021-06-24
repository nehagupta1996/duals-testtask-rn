import React, { useState, useCallback, useRef, useEffect, createRef } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";
import { View, Text, Image, TouchableOpacity, Animated, StyleSheet, ScrollView, FlatList } from 'react-native';
import { isIntroScreensWatched } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { navigationRef } from "../../navigationRef";
import { useTheme } from '../ThemeContext';

const Description = ({ navigation }) => {


    return (

        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'yellow', height: '10%', width: '100%', padding: 20 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('MainHome')}><Image source={require('../../assets/image/menu.png')} /></TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>CATS</Text>
                <Image source={require('../../assets/image/plus.png')} />
            </View>
            <ScrollView>
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 10,textAlign:'center' }}>Persian cat</Text>

                <Image
                    source={require('../../assets/image/PersianCat.jpg')}
                    style={{ borderRadius: 10, margin:20,alignSelf:'center' }} />
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 14 }}>PersianCat</Text>
                <Text style={{ textAlign: 'center', fontSize: 12,marginHorizontal:10 }}>The first Persian cat was presented at the first organized cat show, in 1871 in the Crystal Palace in London, England, organized by Harrison Weir. As specimens closer to the later established Persian conformation became the more popular types, attempts were made to differentiate it from the Angora.</Text>
                <Text style={{ textAlign: 'center', fontSize: 12,margin:10 }}>Bell goes on to detail the differences. Persian coats consist of a woolly under coat and a long, hairy outer coat. The coat loses all the thick underwool in the summer, and only the long hair remains. Hair on the shoulders and upper part of the hind legs is somewhat shorter. Conversely, the Angora has a very different coat which consists of long, soft hair, hanging in locks, "inclining to a slight curl or wave on the under parts of the body." The Angora's hair is much longer on the shoulders and hind legs than the Persian, which Bell considered a great improvement. However, Bell says the Angora "fails to the Persian in head," Angoras having a more wedge-shaped head and Persians having a rounder head.</Text>

            </ScrollView>

        </View>


    );
};

export default Description;