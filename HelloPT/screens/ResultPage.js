import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'

// ch_no : 챌린지 번호
// user_no : 유저 번호
// ex_no : 운동 번호
// ch_rank : 챌린지 랭킹
// ch_count : 챌린지 횟수



function ResultPage(props) {
  let resultJSON;

  // const [data, setData] = useState(null)
  // const onClick = () => {
  //   axios.get('http://10.0.2.2:8080/challenge/result').then(res => {
  //     setData(res.data)
  //   })
  // }

  const onClick = () => {
    axios.post('http://10.0.2.2:8080/challenge/result', {
      user_no: 3,
      ex_no: props.route.params.ex_no
    }).then( res => {
      resultJSON = JSON.parse(res.request._response).result[0]
      console.log(resultJSON)
    }).catch(err => 
      console.log("backend 에러",err)
    );
  }

  return(
    <View>
      <Header navigation={props.navigation} mode="stack" title="결과" />
      <View>
        <View justifyContent="center">
          <TouchableOpacity
            onPress={onClick}>
            <Text style={{backgroundColor: '#dee0dc', fontSize:18, width: 215, fontWeight: 'bold', marginLeft: 20, marginTop:20, textAlign: 'center'}}>
              결과 값 가져오기</Text>
          </TouchableOpacity>
        </View>

        <View flexDirection="row">
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
              데이터 값1
          </Text>
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
              데이터 값1
          </Text>
        </View>

        <View flexDirection="row">
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
              데이터 값2
          </Text>
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
              데이터 값2
          </Text>
        </View>

        <View flexDirection="row">
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
              데이터 값3
          </Text>
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
              데이터 값3
          </Text>
        </View>

        <View flexDirection="row">
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
              데이터 값4
          </Text>
          <Text 
            style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
              데이터 값4
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{ 
              backgroundColor: '#f00e61', 
              padding: 10, 
              borderWidth: 1, 
              borderColor: '#f00e61',
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: 10,
              margin: 20,
              marginTop: 10}}
              onPress={() => props.navigation.navigate('Detect')}
              // onPress={onClick}
              >
            <Text style={{ color: 'white', fontSize: 20}} >돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ResultPage