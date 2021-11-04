import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ScoreBoard from './components/ScoreBoard'
import NiloCards from './components/NiloCards'
import NiloInput from './components/NiloInput';
import App from './App';
import { StyleSheet, Dimensions, Pressable, Image, View } from 'react-native'
import MorraLogic  from './components/MorraLogic';


const H = Dimensions.get( 'window' ).height
const W = Dimensions.get( 'window' ).width

const change = (e) =>{
  console.log(e)
  let a = new MorraLogic()
  console.log(a.game("paper"))
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <MorraLogic />
    <Pressable onPress={change} />
    {/* <View style={{flexDirection:'row', width: W, justifyContent: 'space-around', left:0 }}>
      <NiloCards  />
      <NiloCards  />
      <NiloCards  />
      </View> */}
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
