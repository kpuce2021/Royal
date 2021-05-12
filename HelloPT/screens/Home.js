import React from 'react'
import { View, Text, ScrollView,ToastAndroid, ProgressViewIOSComponent, TouchableOpacity } from 'react-native'
import Header from '../components/Header/Header'

function Home({ navigation }) {
  const showToast = () => {
    ToastAndroid.show("클릭되었습니다", ToastAndroid.SHORT);
  };
  return(
    <View style={{ 
      height: '100%', 
      backgroundColor: '#ffffff',
      flex: 1,
      }}>
      <Header navigation={navigation}/>
      <ScrollView style={{ flex: 1 }}>
        <MainAd />
        <Text>test</Text>
      </ScrollView>
    </View>
  )
}

export default Home


function MainAd() {
  return(
    <View>
      <Text>운동 루틴을 추가해보세요!</Text>
      <Text>본인의 운동 루틴 제작</Text>
      <TouchableOpacity
        style={{ 
          borderWidth: 1,
          borderColor: 'red',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>루틴 제작</Text>
      </TouchableOpacity>
    </View>
  )
}