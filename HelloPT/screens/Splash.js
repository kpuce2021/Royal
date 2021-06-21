import React from 'react';
import { View,Text, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

function Splash() {
  return(
    // <View
    //   style={{ borderWidth: 1, borderColor: 'red', width: '100%', height:'100%'}}>
    //   <Text>test</Text>
    // </View> 
    <WebView
      style={{ width:'100%', height: '100%', borderWidth: 1, borderColor: 'red'}}
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
      useWebKit
      originWhitelist={['*']}
      source={{ uri: 'https://pensive-cori-825c30.netlify.app/' }} />
  )
}

export default Splash