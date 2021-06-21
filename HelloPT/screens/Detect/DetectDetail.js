import React, { useState } from 'react'
import { Switch, TouchableWithoutFeedback, PermissionsAndroid } from 'react-native'
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

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        navigation.navigate('Splash')
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
        
        <TouchableWithoutFeedback onPress={()=> props.navigation.navigate('Splash')}>
          <View style={{ marginTop: 20, backgroundColor: '#9e1111', borderRadius: 5, height: 50 , justifyContent: 'center', alignItems: 'center'}}> 
            <Text style={{ color: '#ffffff'}}>측정하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default DetectDetail