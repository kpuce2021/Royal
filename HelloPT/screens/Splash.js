import React from 'react';
import { View,Text } from 'react-native'
import { WebView } from 'react-native-webview'

function Splash() {
  return(
    // <View
    //   style={{ borderWidth: 1, borderColor: 'red', width: '100%', height:'100%'}}>
    //   <Text>test</Text>
    // </View> 
    <WebView
      style={{ width:'100%', height: '100%', borderWidth: 1, borderColor: 'red'}}
      source={{ uri: 'https://www.naver.com/' }} />
  )
}

export default Splash