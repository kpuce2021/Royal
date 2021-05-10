import React from 'react'
import { View, Text, ScrollView,ToastAndroid, ProgressViewIOSComponent, TouchableOpacity } from 'react-native'
  

function Main() {
  const showToast = () => {
    ToastAndroid.show("클릭되었습니다", ToastAndroid.SHORT);
  };
  return(
    <View style={{ 
      height: '100%', 
      backgroundColor: '#ffffff',
      flex: 1,
      }}>
      <TopBar />
      <ScrollView style={{ flex: 1}}>
        <MainAd />
        <Text>test</Text>
      </ScrollView>
    </View>
  )
}

export default Main

function TopBar() {
  return(
    <View style={{ 
      width: '100%',
      flexDirection: 'row', 
      justifyContent: 'space-between',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#000000'
    }}>
      {/* 로고 부분 */}
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ color: "#2e64b0", fontSize: 15, fontWeight: "bold", textAlign: "center",}}>Hello</Text>
          <Text style={{ color: "#c41f14", fontSize: 15, fontWeight: "bold", textAlign: "center",}}>PT</Text>
        </View>
      </View>

      <Text>Profile</Text>
    </View>
  )
}

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