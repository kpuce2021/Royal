import React, { useState, useEffect } from 'react';
import { View,Text, SafeAreaView,PermissionsAndroid, ProgressViewIOSComponent } from 'react-native'
import { WebView } from 'react-native-webview';


function Splash(props) {
  console.log('props>>>>>>>>>>>>>>>>', props)
  const [clock, setClock] = useState(0)


  // useEffect(() => {
  //   requestCameraPermission()
  // }, [])
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
  // setInterval(function() { 
  //   setClock(clock + 1)
  //   console.log('clock state',clock);
  //   if(clock == 90) props.navigation.navigate('ResultPage',{'ex_no': props.route.params.id}); 
  // }, 1000);
  setTimeout(() => {
    props.navigation.navigate('ResultPage',{'ex_no': props.route.params.id});
  }, 90000)
  return(
    // <View
    //   style={{ borderWidth: 1, borderColor: 'red', width: '100%', height:'100%'}}>
    //   <Text>test</Text>
    // </View> 
    <WebView
      style={{ width:'100%', height: '100%', borderWidth: 1, borderColor: 'red'}}
      name='webView'
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
      useWebKit
      originWhitelist={['*']}
      onMessage= {event => alert(event.nativeEvent.data)}
      // onNavigationStateChange={(e) => {
      //   console.warn("current state is ", JSON.stringify(e, null, 2));
      //   /** put your comdition here based here and close webview.
      //    Like if(e.url.indexOf("end_url") > -1)
      //    Then close webview
      //    */
      // }}
      startInLoadingState
      // props.uri
      source={{ uri: props.route.params.uri + '?number='+ props.route.params.number +'&isChallenge='+props.route.params.isChallenge+'&isRecord='+props.route.params.isRecord+'&time='+60}}
      // onLoadEnd={()=>{
      //   /* add you work that you want to do after loading is done. */
      //   }}
      // ref={handleSetRef}
      //  // 웹뷰 로딩이 시작되거나 끝나면 호출하는 함수 navState로 url 감지
      //  onNavigationStateChange={onNavigationStateChange}
      //  // 처음 호출한 URL에서 다시 Redirect하는 경우에, 사용하면 navState url 감지
      //  onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
    />
    
  )
}

export default Splash