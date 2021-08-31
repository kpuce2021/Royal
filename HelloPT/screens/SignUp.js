import React, { useState } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import Image from '../Images/imgExercise3.jpg'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import Spacer from "../components/Spacer/Spacer";
import Header from "../components/Header/Header";
import axios from 'axios'
import dayjs from "dayjs";


const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
      },
    textStyles: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%'
      },
      textBlue: {
        color: "#2e64b0",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
      }
})

function SignUp(props) {
  const [inputs, setInputs] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    username: '',
    email: '',
  })
  const showToast = () => {
      ToastAndroid.show("아이디 확인이 완료되었습니다.", ToastAndroid.SHORT);
  };
  const onChange = (e, name) => {
    // console.log(e.nativeEvent)
    // const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : e.nativeEvent.text
    })
  }

  const onSignUp = () => {
    console.log('클릭됨')
    axios.post('http://172.30.1.56:8080/login/signup',{
      user_id: inputs.userId,
      user_password: inputs.password,
      user_name: inputs.username,
      user_joindate: dayjs(new Date()).format('YYYY-MM-DD'),
      user_update: dayjs(new Date()).format('YYYY-MM-DD'),
      user_type: "USER"
    }).then(res => {
      console.log('성공', res)
    }).catch(err => {
      console.log('error', err)
    })
  }
    
  return(
    console.log('test',inputs),     
    <View style={styles.container}>
        {/* <View style={{ width: '100%', backgroundColor: "#a19f9f", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.textBlue}>회원가입</Text>
        </View> */}
        <Header navigation={props.navigation} mode="stack" title="회원가입" />

        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'center' }}>
            <TextInput
              placeholder='아이디 입력'
              placeholderTextColor="gray"
              onChange={text => onChange(text, "userId")}
              name="userId"
              value={inputs.userId}
              style={{backgroundColor: '#ffffff', borderRadius: 10, width: '80%'}}>
            </TextInput>
            <Spacer left={13} />
            <Button text="중복확인" padding={12}/>
          </View>

          <Spacer top={20} />

          <TextInput 
            placeholder='비밀번호 입력'
            secureTextEntry={true}
            placeholderTextColor="gray"
            onChange={text => onChange(text, "password")}
            name="password"
            value={inputs.password}
            style={styles.textStyles}>
          </TextInput>

          <Spacer top={20} />
          
          <TextInput 
            placeholder='비밀번호 다시 입력'
            onChange={text => onChange(text, "passwordConfirm")}
            name="passwordConfirm"
            value={inputs.passwordConfirm}
            secureTextEntry={true}
            placeholderTextColor="gray"
            style={styles.textStyles}>
          </TextInput>

          <Spacer top={20} />

          <TextInput 
            placeholder='이름 입력'
            placeholderTextColor="gray"
            onChange={text => onChange(text, "username")}
            name="username"
            value={inputs.username}
            secureTextEntry={true}
            style={styles.textStyles}>
          </TextInput>

          <Spacer top={20} />

          <TextInput 
            placeholder='이메일 입력'
            secureTextEntry={true}
            placeholderTextColor="gray"
            style={styles.textStyles}>
          </TextInput>

            {/* <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
              <Text onPress={() => showToast()} style={{fontSize: 20, color: '#7989e8'}}>아이디 중복확인</Text>
              <Text
                  onPress={() => props.navigation.navigate('Login', { userId: 'user', password: '1234' })} style={{fontSize: 20, color: '#7989e8'}}>
                  회원가입 완료
              </Text>
            </View> */}

            <Spacer top={20} />
            <View>
              <Button text='회원가입' padding={15} onClick={onSignUp}/>
            </View>
    </View>
  </View>
  )
}

export default SignUp