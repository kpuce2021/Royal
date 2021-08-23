import React from 'react'
import {useNavigationState} from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native';

function CreatePost(props) {
  const state = useNavigationState(state => state);
  return(
    <View>
      <View backgroudColor='#ffffff'>
        <Header mode='stack' title="게시글 작성하기"/>
      </View>
     <View style={{ paddingHorizontal: 20 }}>
       <TextInput
        placeholder='제목' placeholderTextColor='#898c8c' autoFocus underlineColorAndroid='#c5c9c9'/>
       <TextInput 
        style={{flexShrink:1}}
        placeholder='내용을 입력하세요' numberOfLines={12} underlineColorAndroid='#c5c9c9' multiline={true}/>
     </View>
    </View>
  )
}

export default CreatePost