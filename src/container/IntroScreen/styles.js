import { StyleSheet, Platform } from "react-native";
import { w, h } from '../../utils/Dimensions';
import Colors from '../../constants/Colors'; 

const styles = StyleSheet.create({
//   container: {
//     flex: 0.8,
//     alignItems: "center",
//     marginTop: "20%",
//     justifyContent: "space-around"
//   },
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    marginHorizontal:20,
    fontSize: 14,
    color: '#000',
    //textAlign: 'center',
    //paddingVertical: 30,
  },
  introTitleStyle: {
    marginHorizontal:20,
    fontSize: 25,
    color: '#000',
    //textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  paginationStyle: {
      flexDirection: "row",
      justifyContent: "left",
      marginBottom: 200 / 7.5
    },
    title: {
      color: '#000',
      fontSize: 24,
      paddingBottom: 17
    },
    subTitle: {
      color: '#d3d3d3',
      fontSize: 14,
      paddingHorizontal: 37,
      textAlign: "center",
      lineHeight: 20
    },
    activeDots: {
      backgroundColor: '#6863FF'
    },
    inActiveDots: {
      backgroundColor: '#000'
    },
    textContainer: {
      backgroundColor: '#d3d3d3',
      width: 325,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
      height: 50,
      marginTop: 60
    },
    textStyle: {
      fontSize: 20,
      color: '#FFF',
      fontWeight: "400"
    },
    paginationStyle: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 200 / 7.5
    },
    sliderItemStyle: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 100,
    },
    doneButtonViewStyle: {
        width: 300, 
        height:40, 
        borderRadius:22, 
        backgroundColor: '#fff', 
        alignItems:"center", 
        justifyContent:"center", 
        alignSelf:"center", 
        marginTop:4
    },
    doneButtonTextStyle: {
        fontSize:15, 
        fontWeight:"bold", 
        color: '#000'
    },
    nextButtonViewStyle: {
        width: 300, 
        height:40, 
        borderRadius:22, 
        backgroundColor: '#fff', 
        alignItems:"center", 
        justifyContent:"center", 
        alignSelf:"center", 
        marginTop:4
    },
    nextButtonTextStyle: {
        fontSize:15, 
        fontWeight:"bold", 
        color: '#000'
    },
    skipButtonViewStyle: {
        width: 99, 
        height:40, 
        borderRadius:22, 
        backgroundColor: Colors.appGreyColor, 
        alignItems:"center", 
        justifyContent:"center", 
        alignSelf:"center", 
        marginTop:4
    },
    skipButtonTextStyle: {
        fontSize:15, 
        fontWeight:"bold", 
        color: Colors.appPrimaryColor
    },
    renderItemViewStyle: {
       // flex: 1,
       height:'100%',
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 100,
    },
    renderItemImageStyle: {
        width:350, 
        height:400,
    }
});

export default styles;
