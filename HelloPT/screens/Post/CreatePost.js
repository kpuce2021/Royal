import React, { useState } from 'react'
import {useNavigationState} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { Input } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';
// import { Input } from 'react-native-elements';

function CreatePost(props) {
  const state = useNavigationState(state => state);

  const [inputs, setInputs] = useState({
    boardTitle:'',
    boardContent:'',
    boardDescription:'',
    boardDate:'',
    boardUpdate:'',
    boardLike: 0
  })

  const onChange = (e, name) => {
    setInputs({
      ...inputs,
      [name] : e.nativeEvent.text
    })
  }

  const onComplete = () => {
    // console.log('게시판 버튼')
    axios.post('http://13.125.28.252:8080/boards/write', {
      board_title : inputs.boardTitle,
      board_contents : inputs.boardContent,
      board_description: '',
      board_date : dayjs(new Date()).format('YYYY-DD-MM').boardDate,
      board_update :dayjs(new Date()).format('YYYY-DD-MM').boardUpdate
    }).then(res => {
      console.log('성공', res)
      navigation.navigate('Posts')
    }).catch(err => {
      console.log('error', err)
    })
  }

  return(
    console.log(inputs),
    <View>
      <View backgroudColor='#ffffff'>
        <Header navigation={props.navigation} mode='stack' title="게시글 작성하기"/>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          onChange={text => onChange(text, 'boardTitle')}
          name='boardTitle'
          value={inputs.boardTitle}
          placeholder='제목' placeholderTextColor='#898c8c' autoFocus underlineColorAndroid='#c5c9c9'/>
        <TextInput 
          onChange={text => onChange(text, 'boardContent')}
          name='boardContent'

        value={inputs.boardContent}
        style={{flexShrink:1}}
        placeholder='내용을 입력하세요' numberOfLines={9} underlineColorAndroid='#c5c9c9' multiline={true}/>
      </View>
      <View>
        <TouchableOpacity
          onPress={onComplete}
          style={{ 
            backgroundColor: '#f00e61', 
            padding: 10, 
            borderWidth: 1, 
            borderColor: '#f00e61',
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 10,
            marginTop: 10}}>
          <Text style={{ color: 'white', fontSize: 15}}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreatePost