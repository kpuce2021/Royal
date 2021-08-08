import React, { useState } from 'react'
import { Switch, TouchableWithoutFeedback, PermissionsAndroid, FlatList } from 'react-native'
import Header from '../../components/Header/Header'
import { styles } from 'ansi-colors'
import FAB from 'react-native-fab'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

function Post(props) {
  posts = [
    {id:1, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:2, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:3, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:4, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:5, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:6, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:7, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:8, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:9, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},
    {id:10, title:"제목입니다.", content:'내용입니다.', time:'26분전', author: '익명'},

  ]
  return(
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header navigation={props.navigation} mode="stack" title={props.route.params.title}/>
      <FlatList 
        data={posts}
        renderItem={(post)=> <PostList post={post} />}
        keyExtractor={(item) => item.id}
      />
      {/* <FAB 
      buttonColor="#0099ff" iconTextColor="#FFFFFF"
      visible={true}
      /> */}

      <ActionButton buttonColor="#c3e0e0">
        <ActionButton.Item
          buttonColor="#affaf9"
          title="게시글 작성"
          onPress={()=> navigation.navigate('CreatePost')}>
          <Icon name="add" type="antdesign" />
        </ActionButton.Item>
      </ActionButton>

    </View>
  )
}

export default Post

function PostList({post}) {
  return(
    <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: 'gray'}}>
      
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>{post.item.title}</Text>
        <Text style={{ color: 'gray', fontSize: 15}}>{post.item.content}</Text>
      </View>
      
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ display: 'flex', flexDirection: 'row'}}>
          <Text style={{ color: 'gray'}}>{post.item.time}</Text>
          <Text style={{ color: 'gray', paddingHorizontal: 5 }}>|</Text>
          <Text style={{ color: 'gray'}}>{post.item.author}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row'}}>
          <Text style={{ color: 'red'}}>좋아요 1</Text>
          <View style={{ paddingHorizontal: 5 }}/>
          <Text style={{ color: 'blue'}}>댓글 1</Text>
        </View>
      </View>
    </View>
  )
}