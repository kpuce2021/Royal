import React from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import Image from '../Images/imgExercise3.jpg'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import Spacer from "../components/Spacer/Spacer";
import Header from "../components/Header/Header";


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
    const showToast = () => {
        ToastAndroid.show("아이디 확인이 완료되었습니다.", ToastAndroid.SHORT);
    };
    
    return(
        <View style={styles.container}>
          <Header title="test" />
            <View style={{ width: '100%', backgroundColor: "#a19f9f", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.textBlue}>회원가입</Text>
            </View>

            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
              
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, justifyContent: 'center' }}>
                <TextInput
                  placeholder='아이디 입력'
                  style={{backgroundColor: '#ffffff', borderRadius: 10, width: '80%'}}>
                </TextInput>
                <Spacer left={13} />
                <Button text="중복확인" padding={12}/>
              </View>

              <Spacer top={20} />

              <TextInput 
                placeholder='비밀번호 입력'
                secureTextEntry={true}
                style={styles.textStyles}>
              </TextInput>

              <Spacer top={20} />
              
              <TextInput 
                placeholder='비밀번호 다시 입력'
                secureTextEntry={true}
                style={styles.textStyles}>
              </TextInput>

              <Spacer top={20} />

              <TextInput 
                placeholder='이름 입력'
                secureTextEntry={true}
                style={styles.textStyles}>
              </TextInput>

              <Spacer top={20} />

              <TextInput 
                placeholder='이메일 입력'
                secureTextEntry={true}
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
                  <Button text='회원가입' padding={15} />
                </View>
        </View>
      </View>
    )
}

export default SignUp