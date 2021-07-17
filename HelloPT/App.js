import React, { useState } from 'react';
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
import SignUp from './screens/SignUp'
import Splash from './screens/Splash.js'
import Home from './screens/Home.js'
import Detect from './screens/Detect/Detect'
import DetectDetail from './screens/Detect/DetectDetail'
import Profile from './screens/Profile'
import EditProfile from './screens/EditProfile.js';
import Posts from './screens/Post/Posts'
import Post from './screens/Post/Post'


// function SignUp(){
//   return(
//     <View>
//       <Text>회원가입</Text>
//     </View>
//   )
// }
function calendar() {
  return(
    <View>
      <Header mode="plain" title="회원가입"/>
      <Text>캘린더</Text>
    </View>
  )
}

// function Post() {
//   return(
//     <View>
//       <Text>포스트</Text>
//     </View>
//   )
// }

function PostStack() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Posts' component={Posts} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
    </Stack.Navigator>
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
      <Stack.Screen name="Login" component={Login} />
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
    <Tab.Navigator tabBarOptions={{ activeTintColor: "#2e64b0"}}>
      <Tab.Screen name="Main" component={HomeStack} 
        options={{ title: '홈', 
          tabBarIcon: ({ focused, color, size}) => {
            return focused ? <Icon name="home" size={25} color="#2e64b0"/> : <Icon name="home-outline" size={25} />
      }}}/>
      <Tab.Screen name="Detect" component={DetectStack} 
        options={{ title: '측정', 
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? <Icon name="body" size={25} color="#2e64b0"/> : <Icon name="body-outline" size={25} />
        }}}/>
      <Tab.Screen name="Calendar" component={calendar} 
        options={{ title: '캘린더',
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? <Icon name="calendar" size={25} color="#2e64b0"/> : <Icon name="calendar-outline" size={25} />
        }}}/>
      <Tab.Screen name="Post" component={PostStack}
        initialRouteName={Posts}
        options={{ title: '게시판',
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? <Icon name="clipboard" size={25} color="#2e64b0" /> : <Icon name="clipboard-outline" size={25} />
        }}}/>
      <Tab.Screen name="Profile" component={ProfileStack} 
        options={{ title: '프로필',
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? <Icon name="person-circle-sharp" size={25} color="#2e64b0" /> : <Icon name="person-circle-outline" size={25} />
        }}}/>
    </Tab.Navigator>
  )
}
export default function App() {
  const [isTocken, setTocken] = useState(true)
  const Stack = createStackNavigator();
  const onLogin = () => {
    setTocken(true)
  }
  return(
    <NavigationContainer>
      {/* {
        isTocken ? <LoginStack onLogin={onLogin}/> : <BottomTab />
      } */}
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={LoginStack} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}