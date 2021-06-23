import React from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Spacer from '../components/Spacer/Spacer';
import {Text} from 'react-native';

function Home({navigation}) {
  const challenges = [
    {id: 1, name: '홍길동'},
    {id: 2, name: '홍길동'},
    {id: 3, name: '홍길동'},
  ];

  const posts = [
    {id: 1, title: 'test', content: 'test'},
    {id: 2, title: 'test', content: 'test'},
    {id: 3, title: 'test', content: 'test'},
    {id: 4, title: 'test', content: 'test'},
  ];
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

        <View style={{ borderBottomWidth: 1, }}/>
        
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>챌린지 랭킹</Text>
            <Text>더보기 ></Text>
          </View>

          <Spacer top={10} />
          
          {
            challenges.map(challenge => {
              return(
                <View>
                  <Spacer top={10} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{challenge.id}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{challenge.name}</Text>
                    <View />
                  </View>
                </View>
              )
            })
          } 
        </View>

        <View style={{ borderBottomWidth: 1, }}/>

        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>게시판</Text>
            <Text>더보기 ></Text>
          </View>

          {
            posts.map(post => {
              return(
                <View>
                  <Spacer top={10} />
                  <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{post.id}</Text>
                    <Spacer left={20} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{post.title}</Text>
                    <View />
                  </View>
                </View>
              )
            })
          } 
        </View>
        
        {/* <Text onPress={() => navigation.navigate('Detect', { screen: 'Detect'})}>test</Text> */}
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
      <Spacer top={10} />
      <Button 
        text='루틴 제작'
        padding={15}
        back="#c0392b"
        border="#c0392b"
      />
    </View>
  )
}