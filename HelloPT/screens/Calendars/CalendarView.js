import React, { useState, useEffect } from 'react'
import {Calendar, Agenda, LocaleConfig} from 'react-native-calendars';

import Header from '../../components/Header/Header'

LocaleConfig.locales['kr'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  today: 'Aujourd\'hui' 
};
LocaleConfig.defaultLocale = 'kr';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

function CalendarView(){
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    console.log(item)
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const calendars = [
    {id: 1, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2020-07-01', cal_endDate: '2020-07-01', cal_tag: []},
    {id: 2, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2020-07-03', cal_endDate: '2020-07-03', cal_tag: []},
    {id: 3, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2020-07-05', cal_endDate: '2020-07-05', cal_tag: []},
    {id: 4, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2020-07-07', cal_endDate: '2020-07-07', cal_tag: []},
    {id: 5, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2020-07-09', cal_endDate: '2020-07-09', cal_tag: []},
    {id: 6, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2020-07-01', cal_endDate: '2020-07-01', cal_tag: []},
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

  // useEffect(()=>{
  //   const markedDates = {};
  //   calendars.map(cal => {
  //     markedDates[cal.cal_startDate] = {marked: true, dotColor: 'red'} 
  //     setDateState({
  //       ...dateState.markedDates,
  //       markedDates
  //     })
      
  //   })
  //   console.log(dateState.markedDates)
  // },[])

  const getSelectDay = date => {
    const markedDates = {};
    markedDates[date] = {selected: true }
    setDateState({
      ...dateState.markedDates,
      markedDates: markedDates,
      selectedDate: date
    })
  }

  return(
    console.log('ttt', items),
    <View style={{ backgroundColor: '#ffffff', flex: 1, }}>
      <Header mode="plain" title="test" />
      <View style={{ flex: 1,}}>
        {/* <Calendar 
          markedDates={dateState.markedDates}
          onDayPress={(day)=> {
            getSelectDay(day.dateString)
          }}
        /> */}
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2021-07-25'}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default CalendarView