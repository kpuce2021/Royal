import React from 'react';

function Input(props){
  return(
    <View>
      <TextInput 
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        style={props.style} />    
    </View>
  )
}

export default Input