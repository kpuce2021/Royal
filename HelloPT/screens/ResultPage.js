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
        <View>
          <Text>test</Text>
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
        <Button onClick={onClick}>불러오기</Button>
      </View>
      </View>
    </View>
  )
}

export default ResultPage