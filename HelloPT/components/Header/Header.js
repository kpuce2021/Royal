import React from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

function Header({ navigation, mode, title}) {
  if(mode === 'stack'){
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
      }}>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Icon name="arrowleft" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>{title}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'flex-end'}}>
          <View style={{ width: 30 }}/>
        </View>
      </View>
    )
  }
  else{
    return(
      <View style={{ 
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000000'
      }}>
        {/* 로고 부분 */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: "#2e64b0", fontSize: 15, fontWeight: "bold", textAlign: "center",}}>Hello</Text>
            <Text style={{ color: "#c41f14", fontSize: 15, fontWeight: "bold", textAlign: "center",}}>PT</Text>
          </View>
        </View>
  
        <Text>Profile</Text>
      </View>
    )
  }
}

export default Header 