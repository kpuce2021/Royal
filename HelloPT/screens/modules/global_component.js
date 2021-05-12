import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
  Image,
  Touchable,
  ScrollView,
  SafeAreaView,
  FlatList,
  Platform,
  ToastAndroid,
  ImageBackground
} from 'react-native'

global.React = React
global.primary = '#5dc1c3'
global.StyleSheet = StyleSheet
global.Text = Text
global.View = View
global.Button = Button
global.TextInput = TextInput
global.Image = Image
global.TouchableOpacity = TouchableOpacity
global.isAndroid = Platform.OS === 'android'
global.isIos = Platform.OS === 'ios'
global.ScrollView = ScrollView
global.FlatList = FlatList
global.SafeAreaView = SafeAreaView
global.ToastAndroid = ToastAndroid
global.ImageBackground = ImageBackground
global.TouchableWithoutFeedback = TouchableWithoutFeedback
global.Switch = Switch