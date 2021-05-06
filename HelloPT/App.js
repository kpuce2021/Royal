import React, { useState } from 'react';
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// ---- screens
import Login from './screens/Login.js'
import Splash from './screens/Splash.js'
import Main from './screens/Main.js'
import Icon from 'react-native-vector-icons/Ionicons';

function SignUp(){
  return(
    <View>
      <Text>회원가입</Text>
    </View>
  )
}
function Home() {
  return(
    <View>
      <Text>home</Text>
    </View>
  )
}
function test() {
  return(
    <View>
      <Text>측정</Text>
    </View>
  )
}

function calendar() {
  return(
    <View>
      <Text>캘린더</Text>
    </View>
  )
}

function Post() {
  return(
    <View>
      <Text>포스트</Text>
    </View>
  )
}

function Profile() {
  return(
    <View>
      <Text>프로필</Text>
    </View>
  )
}
function LoginStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ tabBarVisible: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
function BottomTab() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name="홈" component={Home}/>
      <Tab.Screen name="측정" component={test} />
      <Tab.Screen name="캘린더" component={calendar}/>
      <Tab.Screen name="게시판" component={Post}/>
      <Tab.Screen name="프로필" component={Profile}/>
    </Tab.Navigator>
  )
}
export default function App() {
  const [isTocken, setTocken] = useState(true)
  return(
    <NavigationContainer>
      {
        isTocken ? <LoginStack /> : <BottomTab />
      }
    </NavigationContainer>
  )
}
