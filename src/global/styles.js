import { Dimensions } from "react-native"

export function isIphoneX(){
   const dim = Dimensions.get('window')
}

export const colors = {
    buttons: '#ff8c52',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    background2: '#ff8c52',
    cardComment: '#86939e',
    cardBackground: 'white',
    statusBar:"#ff8c52",
    headerText: "white",
    lightgreen: "#66DF48"
 }

 export const parameters ={
    headerHeight: Platform.OS=== 'android'? 40: isIphoneX() ? 80 : 110,
    paddingTop: Platform.OS=== 'android'? 0: isIphoneX() ? 50 : 35,
    styledButton:{
      backgroundColor:"#ff8c52",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 35,
      borderWidth: 1,
      borderColor: "#ff8c52",
      height: 50,
      paddingHorizontal:20,
      width: "100%"
    },
    buttonTitle:{
         color:"white",
         fontSize:20,
         fontWeight:"bold",
         alignItems:"center",
         justifyContent:"center",
         marginTop:-3
    },
    styledButton1:{
      backgroundColor:"white",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 35,
      borderWidth: 1,
      borderColor: "#ff8c52",
      height: 50,
      paddingHorizontal:20,
      width: "100%"
    },
    buttonTitle1:{
      color:"#ff8c52",
      fontSize:20,
      fontWeight:"bold",
      alignItems:"center",
      justifyContent:"center",
      marginTop:-3
 },
    socialIcon:{
      borderRadius: 12,
      height: 50,  
    }
 }
 export const title ={
   color: "#ff8c52",
   fontSize:20,
   fontWeight:"bold"
 }

 export const fonts = {
  ios:{
    regular: "System",
    light: "System",
    lightItalics: "System",
    bold: "System",
    boldItalic: "System",
    black: "System",
    blackItalic: "System",
  },
  android:{
    regular: "Roboto",
    Italic: "Roboto-Italic",
    thin: "Roboto-Thin",
    thinItalic: "Roboto-ThinItalic",
    light: "Roboto-Light",
    lightItalic:"Roboto-LightItalic",
    medium:"Roboto-medium",
    mediumItalic:"Roboto-MediumItalic",
    bold:"Roboto-Bold",
    boldItalic:"Roboto-BoldItalic",
    condensed: "RobotoCondensed-Regular",
    condensedItalic:"RobotoCondensed-Italic"
  }
 }

 