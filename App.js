import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri:"https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"},
       {shouldPlay: true}
     )
  }

  render() {
    return (
      <TouchableOpacity style={{
        marginLeft: 100,
        borderWidth: 6,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: "red"}}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 25
      }}>
      press buzzer
      </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


