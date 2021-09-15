import React, { useCallback, useState } from 'react'
import { Switch, TouchableWithoutFeedback, PermissionsAndroid, Alert, InputAccessoryView } from 'react-native'
import Header from '../../components/Header/Header'
import YoutubePlayer from 'react-native-youtube-iframe'

function DetectDetail(props) {
  const [inputs, setInputs] = useState({
    number: ''
  });
  const [isChallenge, setIsChallenge] = useState(false);
  const [isRecord, setIsRecord] = useState(false);
  const [playing, setPlaying] = useState(false);
  const onChangeNumber = (e, name) => {
    setInputs({
      ...inputs,
      [name] : e.nativeEvent.text
    })

  }
  const toggleChallenge = () => {
    setIsChallenge(!isChallenge)
  }
  const toggleRecord = () => {
    setIsRecord(!isRecord)
  }

  const onStateChange = useCallback((state) => {
    if(state === "ended"){
      setPlaying(false);
      Alert.alert("Video has finished playing");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  },[])

  const checkPermissions = async () => {    
    await PermissionsAndroid.requestMultiple([
     PermissionsAndroid.PERMISSIONS.CAMERA,
    ]).then(result => {
     console.log('checkPermissions result', result);        
    });
   }
  const requestCameraPermission = async (number, isChallenge, isRecord) => {
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
        props.navigation.navigate('Splash',{'number': number, 'isChallenge': isChallenge, 'isRecord': isRecord, 'uri': props.route.params.uri})
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
      <ScrollView style={{ padding: 10 }}>
        <View>
          <Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold'}}>
            {props.route.params.title}
          </Text>
        </View>

        {/* <View style={{ borderWidth: 1, borderColor: '#000000', height: 150}}>
          <Text>동영상</Text>
        </View> */}
        <View>
          <YoutubePlayer
            height={250}
            play={playing}
            videoId={props.route.params.video}
            onChangeState={onStateChange}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: 15}}>{props.route.params.title} 갯수 조정 (최대 1000개)</Text>
            <TextInput 
              style={{ borderWidth: 1, borderColor: '#000000', borderRadius: 10, padding: 5}}
              value= {inputs.number}
              name="number"
              onChange = {text => onChangeNumber(text,'number')}
              placeholder={props.route.params.title}/>
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
        
        <TouchableWithoutFeedback onPress={() => requestCameraPermission(inputs.number, isChallenge, isRecord)}>
          <View style={{ marginTop: 20, marginBottom: 30, backgroundColor: '#9e1111', borderRadius: 5, height: 50 , justifyContent: 'center', alignItems: 'center'}}> 
            <Text style={{ color: '#ffffff'}}>측정하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  )
}

export default DetectDetail