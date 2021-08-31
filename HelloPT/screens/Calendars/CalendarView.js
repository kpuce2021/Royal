import React, { useState, useEffect } from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';

import Header from '../../components/Header/Header'
import Spacer from '../../components/Spacer/Spacer';

LocaleConfig.locales['kr'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  today: 'Aujourd\'hui' 
};
LocaleConfig.defaultLocale = 'kr';

function CalendarView(){
  const calendars = [
    {id: 1, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-11', cal_endDate: '2021-08-01', cal_tag: []},
    {id: 2, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-13', cal_endDate: '2021-08-03', cal_tag: []},
    {id: 3, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-15', cal_endDate: '2021-08-05', cal_tag: []},
    {id: 4, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-17', cal_endDate: '2021-08-07', cal_tag: []},
    {id: 5, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-29', cal_endDate: '2021-08-09', cal_tag: []},
    {id: 6, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-30', cal_endDate: '2021-08-01', cal_tag: []},
  ]
  const [ dateState, setDateState] = useState({
    selectedDate: '',
    markedDates: {
      '2021-07-16': {selected: true, marked: true, selectedColor: 'blue'},
      '2021-07-17': {marked: true},
      '2021-07-18': {marked: true, dotColor: 'red', activeOpacity: 0},
      '2021-07-19': {disabled: true, disableTouchEvent: true}
    },
  })
  const [lists, setLists] = useState([])

  useEffect(()=>{
    const markedDates = {};
    calendars.map(cal => {
      markedDates[cal.cal_startDate] = {marked: true} 
      setDateState({
        markedDates
      })
    })
  },[])

  // useEffect(() => {
  //   calendars.map(cal => {
  //     console.log('test',cal)
  //     console.log('inside seelect',dateState.selectedDate)
  //     console.log('inside cal', cal.cal_startDate)
  //     if(dateState.selectedDate === cal.cal_startDate){
  //       console.log('inside seelect',dateState.selectedDate)
  //       console.log('inside cal', cal.cal_startDate)
  //       setLists(cal)
  //     }
  //   })
  // },[])

  const getSelectDay = date => {
    const markedDates = {};
    markedDates[date] = { ...dateState.markedDates, selected : true }
    setDateState({
      markedDates,
      selectedDate: date
    })
    calendars.map(cal => {
      if(date === cal.cal_startDate){
        setLists([cal])
      }
    })
    // const markedDates = { ...dateState.markedDates };
    // // markedDates[date] = { selected: true }
    // console.log('selected',markedDates[date]?.selected)
    // if(markedDates[date]?.selected === 'undefined'){
    //   markedDates[date] = { ...markedDates[date], selected: false }
    //   setDateState({
    //     //...dateState.markedDates,
    //     markedDates,
    //     selectedDate: '',
    //   })
    // }
    // else{
    //   markedDates[date] = { ...markedDates[date], selected: true }
    //   setDateState({
    //     //...dateState.markedDates,
    //     markedDates,
    //     selectedDate: date,
    //   })
    // }
  }

  return(
    console.log('lists', lists),
    <View style={{ backgroundColor: '#ffffff', flex: 1, }}>
      <Header mode="plain" title="캘린더" />
      <View style={{ flex: 1,}}>
        <Calendar 
          markedDates={dateState.markedDates}
          onDayPress={(day)=> {
            getSelectDay(day.dateString)
          }}
        />
        <View style={{ borderTopWidth: 1, borderColor: 'black', padding: 10, marginBottom: 320 }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>{dateState.selectedDate}</Text>
          <FlatList 
            data={lists}
            renderItem={(cal)=> <ExCard cals={cal} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  )
}

export default CalendarView

function ExCard({cals}){
  return(
    <View style={{ borderWidth: 1, padding: 10, borderRadius: 10, borderColor: 'orange', marginBottom: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{cals.item.cal_title}</Text>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{cals.item.cal_startDate} ~</Text>
          <Spacer left={10} />
          <Text>{cals.item.cal_endDate}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>개수 : 30</Text>
        </View>
      </View>
    </View>
  )
}