import React, { useState } from 'react'
import { Switch, TouchableWithoutFeedback } from 'react-native'
import Header from '../../components/Header/Header'

function DetectDetail(props) {
  const [isChallenge, setIsChallenge] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const toggleChallenge = () => {
    setIsChallenge(!isChallenge)
  }
  const toggleRecord = () => {
    setIsRecord(!isRecord)
  }
  return(
    console.log(props),
    <View style={{ flex: 1, backgroundColor: '#ffffff',}}>
      <Header navigation={props.navigation} mode='stack' title={props.route.params.title}/>
      <View style={{ padding: 10 }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold'}}>
            {props.route.params.title}
          </Text>
        </View>

        <View style={{ borderWidth: 1, borderColor: '#000000', height: 150}}>
          <Text>동영상</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 15}}>푸시업 갯수 조정 (최대 1000개)</Text>
            <TextInput 
              style={{ borderWidth: 1, borderColor: '#000000', borderRadius: 10, padding: 5}}
              placeholder='푸시업 갯수'/>
          </View>
          
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>챌린지 등록</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isChallenge ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleChallenge}
                value={isChallenge}
              />
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
              <Text>프로필에 기록하기</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isRecord ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleRecord}
                value={isRecord}
              />
            </View>
          </View>
        </View>
        
        <View style={{ marginTop: 20, backgroundColor: '#9e1111', borderRadius: 5, height: 50 , justifyContent: 'center', alignItems: 'center'}}> 
          <TouchableWithoutFeedback onPress={()=> props.navigation.navigate('Splash')}>
            <Text style={{ color: '#ffffff'}}>측정하기</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default DetectDetail