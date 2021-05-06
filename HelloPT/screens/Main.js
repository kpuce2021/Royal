import React from 'react'
import { View, Text, ScrollView,ToastAndroid, ProgressViewIOSComponent } from 'react-native'
  

function Main(children) {
  const showToast = () => {
    ToastAndroid.show("클릭되었습니다", ToastAndroid.SHORT);
  };
  return(
    <View style={{ height: '100%', borderWidth: 1, borderColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
      <Text>테스트</Text>
      <View style={{ 
          width: '100%',
          borderWidth: 1, 
          borderColor: 'blue', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'}}>
        <Text onPress={showToast}>아이디&비밀번호 찾기</Text>
        <Text style={{ fontSize: 20, color: '#4c5e56' }}>회원가입</Text>
      </View>
      <ComponentTest />
    </View>
  )
}

export default Main

function ComponentTest(props) {
  return(
    <View>
      <Text>{props.test}</Text>
    </View>
  )
}