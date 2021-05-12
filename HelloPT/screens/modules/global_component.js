import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  Platform,
  ToastAndroid
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