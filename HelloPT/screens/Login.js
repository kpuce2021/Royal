import React, {useState} from "react";
import { StyleSheet } from "react-native";
import Image from '../Images/imgExercise3.jpg'
import Input from '../components/Input/Input'
import axios from 'axios'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    borderWidth: 1,
  },
  textBlue: {
    color: "#2e64b0",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  textRed: {
    color: "#c41f14",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyles: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    marginBottom: 5,
    borderRadius: 10
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
  },
  black: {
    color: 'black',
  }
});

function Login({ navigation }){
  const [inputs, setInputs] = useState({
    userId: '',
    password: ''
  })
  const onChange = (e, name) => {
    // console.log(e.nativeEvent)
    // const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : e.nativeEvent.text
    })
  }

  const onLogin = () => {
    axios.post('http://10.0.2.2:8080/login/login', {
      user_id: inputs.userId,
      user_password: inputs.password
    }).then( res => {
      console.log("backend 응답",res);
      navigation.navigate('Home', { userId: inputs.userId })
    }).catch(err => 
      console.log("backend 에러",err)
    );
  }

  return (
  console.log(inputs),
  <View style={styles.container}>
    <ImageBackground source={Image} style={styles.image}>
      <View style={{ width: '100%', backgroundColor: "#000000a0", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textBlue}>Hello</Text>
        <Text style={styles.textRed}>PT</Text>
      </View>
      
      <View style={{ paddingHorizontal: 20 }}>
        
        <TextInput 
          placeholder='아이디 입력'
          placeholderTextColor="gray"
          onChange={text => onChange(text, "userId")}
          name="userId"
          value={inputs.userId}
          style={styles.textStyles}>
        </TextInput>
        
        <TextInput 
          placeholder='비밀번호 입력'
          secureTextEntry={true}
          placeholderTextColor="gray"
          onChange={text => onChange(text, "password")}
          name="password"
          value={inputs.password}
          style={styles.black, styles.textStyles}>
        </TextInput>

        <TouchableOpacity
          style={{ 
            backgroundColor: '#f00e61', 
            padding: 10, 
            borderWidth: 1, 
            borderColor: '#f00e61',
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 10,
            marginTop: 10}}
            onPress={onLogin}
            //onPress={() => navigation.navigate('Home', { userId: inputs.userId })}
            >
          <Text style={{ color: 'white', fontSize: 20}} >로그인</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
          <Text style={{fontSize: 15, color: '#ffffff'}}>아이디&비밀번호 찾기</Text>
          <Text onPress={() => navigation.navigate('SignUp', { userId: 'user', password: '1234' })} style={{fontSize: 15, color: '#ffffff'}}>회원가입 하기</Text>
        </View>

      </View>
    </ImageBackground>
  </View>
  )
}

export default Login;
