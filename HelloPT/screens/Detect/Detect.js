import React from 'react'
import { ScrollView, Touchable } from 'react-native'
import Header from '../../components/Header/Header'

function Detect({ navigation }) {
  return(
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header />
      <ScrollView>
        <ExerciseList navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default Detect

function ExerciseList({navigation}){
  const Exlists = [{id:1, title:'푸시업'}, 
  {id:2, title:'런지'}, 
  {id:3, title:'스쿼트'}, 
  {id:4, title:'플랭크'}]
  return(
    <View>
      {
        Exlists.map(exlist => {
          return(
            <View  style={{ padding: 50, borderBottomWidth: 1, borderBottomColor: '#000000' }}>
              <TouchableWithoutFeedback onPress={()=> navigation.navigate('Detail', { title: `${exlist.title}`})}>
                <Text key={exlist.id} style={{ fontSize: 30, fontWeight: 'bold'}}>{exlist.title}</Text>
              </TouchableWithoutFeedback>
            </View>
          )
        })
      }
    </View>
  )
}