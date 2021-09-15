import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'
import { text } from 'express';

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

  
    axios.post('http://10.0.2.2:8080/challenge/result', {
      user_no: 3,
      ex_no: props.route.params.ex_no
    }).then( res => {
      resultJSON = JSON.parse(res.request._response).result[0]
      console.log(resultJSON)
    }).catch(err => 
      console.log("backend 에러",err)
    );

  resultJSON = {"ch_count": 6, "ch_no": 464, "ch_rank": 1, "ex_no": 3, "user_no": 3}

  if (resultJSON.ex_no == 1) {
    return(
      <View>
        <Header navigation={props.navigation} mode="stack" title="측정 결과" />
        <View>
          <View justifyContent="center">
            <TouchableOpacity
              // onPress={onClick}
              >
              <Text style={{backgroundColor: '#dee0dc', fontSize:25, width: 370, fontWeight: 'bold', marginLeft: 20, marginTop:20, textAlign: 'center', padding: 13}}>
                나의 측정 결과는?</Text>
            </TouchableOpacity>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                EXERCISE
            </Text>
            <Text
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
                SQAUT
            </Text>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                COUNT
            </Text>
            <Text 
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
                {resultJSON.ch_count}
            </Text>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                RANK
            </Text>
            <Text 
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
                {resultJSON.ch_rank}
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
  } else if (resultJSON.ex_no == 2 ) {
    return(
      <View>
        <Header navigation={props.navigation} mode="stack" title="측정 결과" />
        <View>
          <View justifyContent="center">
            <TouchableOpacity
              // onPress={onClick}
              >
              <Text style={{backgroundColor: '#dee0dc', fontSize:25, width: 370, fontWeight: 'bold', marginLeft: 20, marginTop:20, textAlign: 'center', padding: 13}}>
                나의 측정 결과는?</Text>
            </TouchableOpacity>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                EXERCISE
            </Text>
            <Text
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
                SIDE LEG RAISE
            </Text>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                COUNT
            </Text>
            <Text 
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
                {resultJSON.ch_count}
            </Text>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                RANK
            </Text>
            <Text 
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, backgroundColor: '#ffffff', width: 150, marginBottom: 10}}>
                {resultJSON.ch_rank}
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
  } else {
    return(
      <View>
        <Header navigation={props.navigation} mode="stack" title="측정 결과" />
        <View>
          <View justifyContent="center">
            <TouchableOpacity
              // onPress={onClick}
              >
              <Text style={{backgroundColor: '#dee0dc', fontSize:35, width: 370, fontWeight: 'bold', marginLeft: 20, marginTop:20, textAlign: 'center', padding: 13}}>
                나의 측정 결과는?</Text>
            </TouchableOpacity>
          </View>
  
          <View flexDirection="row" justifyContent="center" backgroundColor='#dbc3db'>
            {/* <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 17, backgroundColor: '#ffffff', width: 80, marginBottom: 10}}>
                EXERCISE
            </Text> */}
            <Text
              style={{fontStyle: 'italic', fontWeight: 'bold', marginTop: 25, marginLeft: 40, fontSize: 25, width: 150, marginBottom: 25}}>
                "SQAUT"
            </Text>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 25, width: 130, marginBottom: 10}}>
                내 운동기록
            </Text>
            <Text 
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, width: 150, marginBottom: 10}}>
                {resultJSON.ch_count}회
            </Text>
          </View>
  
          <View flexDirection="row" justifyContent="center">
            <Text 
              style={{borderRadius: 10, marginTop: 10, fontSize: 25, width: 130, marginBottom: 10}}>
                RANK
            </Text>
            <Text 
              style={{borderRadius: 10, marginTop: 10, marginLeft: 40, fontSize: 17, width: 150, marginBottom: 10}}>
                {resultJSON.ch_rank}위
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
}

export default ResultPage