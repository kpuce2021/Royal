import React from 'react'
import { ScrollView, Touchable } from 'react-native'
import Header from '../../components/Header/Header'
import squart from '../../Images/squart_image.jpg'
import pushup from '../../Images/pushup_image.jpg'
import plank from '../../Images/plank_image.png'
import lunge from '../../Images/lunge_image.jpg'
import legraise from '../../Images/side_legraise_image.jpg'

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
  const Exlists = [
    {id:1, title:'푸시업', image: pushup, video: 'fh4y5dGZX9c', uri: 'https://ecstatic-bassi-1bb59a.netlify.app/'}, 
    {id:2, title:'사이드 레그레이즈', image: legraise, video: 'WX_4GXf5wW0', uri: 'https://jovial-nobel-25248a.netlify.app/'}, 
    {id:3, title:'스쿼트', image: squart, video: '3ErJUc3umfI', uri: 'https://unruffled-elion-f5c341.netlify.app/'}, 
  ]
  return(
    <View>
      {
        Exlists.map(exlist => {
          return(
            <View key={exlist.id} style={{ borderBottomWidth: 1, borderBottomColor: '#ffffff' }}>
              <TouchableWithoutFeedback key={exlist.id} onPress={()=> navigation.navigate('Detail', {id: `${exlist.id}`, title: `${exlist.title}`, video: `${exlist.video}`, uri: `${exlist.uri}`})}>
                <View>
                  <ImageBackground source={exlist.image} style={{ width: '100%', height: 200 }}/>
                  <View  style={{ padding: 50, position: 'absolute' }}>
                      <Text key={exlist.id} style={{ fontSize: 30, fontWeight: 'bold', zindex: 100, color: 'white'}}>{exlist.title}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )
        })
      }
    </View>
  )
}