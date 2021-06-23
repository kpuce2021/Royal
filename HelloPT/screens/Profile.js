import React from "react";
import { StyleSheet, Image } from "react-native";
import Header from "../components/Header/Header";

const styles=StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
    },
    imageDetail: {
      width: 100,
      height: 100,
      justifyContent: 'space-around',
      borderRadius: 37.5,
      marginLeft: 10,
      marginRight: 10
    }
})

function Profile(){
  return(

    <View>

      <View>
        <View>
          <Header/>
        </View>


        <View style={{ flexDirection:'row'}}>
          <View>
            <Image style={styles.imageDetail}
              source={{
              uri: 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-%EB%82%A8%EC%84%B1%EC%9D%84%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6'}}/>
          </View>
            
            <View style={{ width: 312}}>
              <View style={{ flexDirection: 'row', width: 250, marginLeft:10}} >

                {/* <View style={{flexDirection:'row'}}>
                  <View style={{alignItems:'center', marginTop: 10}}>
                    <Text>180</Text>
                    <Text style={{fontSize: 10, color: 'gray'}}>posts</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row'}}>
                  <View style={{alignItems:'center', marginTop: 10}}>
                    <Text>259</Text>
                    <Text style={{fontSize: 10, color: 'gray'}}>follower</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row'}}>
                  <View style={{alignItems:'center', marginTop: 10}}>
                    <Text>192</Text>
                    <Text style={{fontSize: 10, color: 'gray'}}>following</Text>
                  </View>
                </View> */}

                <View style={{marginLeft: 10, marginTop: 10}}>
                  <Text style={{fontSize: 25}}>홍길동</Text>
                  <Text>Royal#51534</Text>
                </View>

              </View>

              <View style={{flexDirection:'row'}}>
                <Text style={{backgroundColor: '#dee0dc', fontSize:18, width: 215, fontWeight: 'bold', marginLeft: 20, marginTop:5, textAlign: 'center'}}>
                  Edit Profile
                </Text>
              </View>
            </View>

        </View>
      </View>

      <View style={{marginTop: 10, backgroundColor: '#e0ffff', height: 450}}>

        <View>
          <View style={{justifyContent: 'space-between', flexDirection:'row', marginLeft: 10, marginRight: 10}}>
            <Text style={{fontSize: 18}}>챌린지 내역</Text>
            <Text style={{}}>더보기</Text>
          </View>

          <View>
            <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
            <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
            <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
          </View>
          
        </View>

        <View>
            <View style={{justifyContent: 'space-between', flexDirection:'row', marginLeft: 10, marginRight: 10}}>
              <Text style={{fontSize: 18}}>챌린지 내역</Text>
              <Text style={{}}>더보기</Text>
            </View>

            <View>
              <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
              <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
              <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
            </View>
            
          </View>

          <View>
            <View style={{justifyContent: 'space-between', flexDirection:'row', marginLeft: 10, marginRight: 10}}>
              <Text style={{fontSize: 18}}>챌린지 내역</Text>
              <Text style={{}}>더보기</Text>
            </View>

            <View>
              <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
              <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
              <Text style={{marginLeft: 20}}> ● 챌린지 </Text>
            </View>
            
          </View>
      </View>
    </View>
  
  )
}

export default Profile 