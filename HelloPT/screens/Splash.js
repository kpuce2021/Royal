import React, { useEffect } from 'react';
import { View,Text, SafeAreaView,PermissionsAndroid } from 'react-native'
import { WebView } from 'react-native-webview'

function Splash() {
  useEffect(() => {
    requestCameraPermission()
  }, [])
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        //props.navigation.navigate('Splash')
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
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