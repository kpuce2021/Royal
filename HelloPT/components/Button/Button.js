import React from 'react';
import { TouchableOpacity } from 'react-native';

function Button({ back, padding, border, color, text, onClick }) {
  return(
    <View>
      <TouchableOpacity 
        style={{ 
          width: '100%',
          backgroundColor: back ? back :'#f00e61', 
          padding: padding ? padding : 10, 
          borderWidth: 1, 
          borderColor: border ? border : '#f00e61',
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 10 }}
          onClick={() => onClick()}
        >
        <Text style={{ fontWeight: 'bold', color: color ? color : 'white' }}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button