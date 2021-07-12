import React from 'react'
import { ScrollView, Touchable } from 'react-native'
import Header from '../../components/Header/Header'

function Post({navigation}) {
  return(
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header />
      <ScrollView>
        <ExerciseList navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default Post

function ExerciseList({navigation}){
  const Exlists = [{id:1, title:'자유게시판'}, 
  {id:2, title:'챌린지 게시판'}, 
  {id:3, title:'자랑 게시판'}]
  return(
    <View>
      {
        Exlists.map(exlist => {
          return(
            <View  style={{ padding: 50, borderBottomWidth: 1, borderBottomColor: '#000000' }}>
              <TouchableWithoutFeedback onPress={()=> navigation.navigate('postDetail', { title: `${exlist.title}`})}>
                <Text key={exlist.id} style={{ fontSize: 30, fontWeight: 'bold'}}>{exlist.title}</Text>
              </TouchableWithoutFeedback>
            </View>
          )
        })
      }
    </View>
  )
}