import React from 'react'
import {useNavigationState} from '@react-navigation/native';

function CreatePost(navigation) {
  const state = useNavigationState(state => state);
  return(
    <View>
      <text>test</text>
    </View>
  )
}

export default CreatePost