import React from 'react';

function Input({ placeholder, secure, padding, width }){
  return(
    <View>
      <TextInput 
        placeholder={placeholder}
        secureTextEntry={secure}
        style={{
          width: width ? width : '100%',
          padding: padding ? padding : 10,
          backgroundColor: '#ffffff',
          borderRadius: 10,
        }} />    
    </View>
  )
}

export default Input