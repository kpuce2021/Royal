import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// ---- screens
import Login from './screens/Login.js'
import Splash from './screens/Splash.js'
import Home from './screens/Home.js'
import Detect from './screens/Detect/Detect'
import DetectDetail from './screens/Detect/DetectDetail'


function SignUp(){
  return(
    <View>
      <Text>회원가입</Text>
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
function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
function LoginStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Login" component={Login} options={{ tabBarVisible: false}}/>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
function DetectStack() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Detect" component={Detect} />
      <Stack.Screen name="Detail" component={DetectDetail} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  )
}
// function ProfileStack() {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name=""
//     </Stack.Navigator>
//   )
// }
function BottomTab() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name="Main" component={HomeStack} options={{ title: '홈'}}/>
      <Tab.Screen name="Detect" component={DetectStack} options={{ title: '측정'}}/>
      <Tab.Screen name="Calendar" component={calendar} options={{ title: '캘린더'}}/>
      <Tab.Screen name="Posts" component={Post} options={{ title: '게시판'}}/>
      <Tab.Screen name="Profile" component={Profile} options={{ title: '프로필'}}/>
    </Tab.Navigator>
  )
}
export default function App() {
  const [isTocken, setTocken] = useState(false)
  return(
    <NavigationContainer>
      {
        isTocken ? <LoginStack /> : <BottomTab />
      }
    </NavigationContainer>
  )
}
