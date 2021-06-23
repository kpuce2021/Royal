import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../components/Header/Header";

const styles=StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
    },
    imageDetail: {
      width: 150,
      height: 150,
      justifyContent: 'space-around',
      borderRadius: 37.5,
      marginLeft: 10,
      marginRight: 10
    }
})

function EditProfile() {
  return(
    <View>
      <View>
        <Header />
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', height: 220}}>
        <Image style={styles.imageDetail}
              source={{
              uri: 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-%EB%82%A8%EC%84%B1%EC%9D%84%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6'}} />
      </View>

      <View>
        <Text style={{marginLeft: 20, marginTop: 20, fontSize: 18, }}>이름(변경불가)</Text>
        <Text style={{fontSize: 17, textAlign: 'center'}}>홍길동</Text>
        <Text style={{marginLeft: 20, marginTop: 20, fontSize: 18}}>닉네임</Text>
        <TextInput 
          placeholder="닉네임을 입력해주세요"
          style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 18, backgroundColor: '#ffffff', width: 328}} />
        <Text style={{marginLeft: 20, marginTop: 10, fontSize: 18, }}>선호 운동 종류</Text>
        <Text style={{marginLeft: 60, marginTop: 10, fontSize: 18, }}>1. 스쿼트</Text>
        <Text style={{marginLeft: 60, marginTop: 10, fontSize: 18, }}>2. 런지</Text>
      </View>
    </View>

  )
}

export default EditProfile