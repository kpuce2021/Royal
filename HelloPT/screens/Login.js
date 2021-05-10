import React from "react";
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Image from '../Images/imgExercise3.jpg'

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
    //backgroundColor: "#000000a0"
  },
  textRed: {
    color: "#c41f14",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
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

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={Image} style={styles.image}>
      <View style={{ width: '100%', backgroundColor: "#000000a0", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textBlue}>Hello</Text>
        <Text style={styles.textRed}>PT</Text>
      </View>
      
      <View style={{ paddingHorizontal: 20 }}>
        
        <TextInput 
          placeholder='아이디 입력'
          style={styles.textStyles}>
        </TextInput>
        
        <TextInput 
          placeholder='비밀번호 입력'
          secureTextEntry={true}
          style={styles.black, styles.textStyles}>
        </TextInput>

        <TouchableOpacity
          onPress={()=> navigation.navigate('Splash')}
          style={{ 
            backgroundColor: '#f00e61', 
            padding: 10, 
            borderWidth: 1, 
            borderColor: '#f00e61',
            justifyContent: 'center', 
            alignItems: 'center', 
            borderRadius: 10,
            marginTop: 10}}>
          <Text style={{ color: 'white', fontSize: 20}}>로그인</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
          <Text style={{fontSize: 15, color: '#ffffff'}}>아이디&비밀번호 찾기</Text>
          <Text style={{fontSize: 15, color: '#ffffff'}}>회원가입 하기</Text>
        </View>

      </View>
    </ImageBackground>
  </View>
)

export default Login;
