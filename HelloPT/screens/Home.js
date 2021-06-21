import React from 'react'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import Spacer from '../components/Spacer/Spacer'

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
        <Text onPress={() => navigation.navigate('Detect', { screen: 'Detect'})}>test</Text>
      </ScrollView>
    </View>
  )
}

export default Home


function MainAd() {
  return(
    <View style={{ padding: 20 }}>
      <Text>운동 루틴을 추가해보세요!</Text>
      <Spacer top={10} />
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>본인의 운동 루틴 제작</Text>
      <Button 
        text='루틴 제작'
        padding={15}
        back="#c0392b"
        border="#c0392b"
      />
    </View>
  )
}