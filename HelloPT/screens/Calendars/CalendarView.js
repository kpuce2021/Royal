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

  useEffect(() => {
    const newItems = {};
    calendars.map(cal =>{
      newItems[cal.cal_startDate] = [{ name: 'item', height: 50 }]
    })
    setItems(newItems)
  },[])

  const loadItems = (day) => {
    const newItems = {};
    calendars.map(cal =>{
      newItems[cal.cal_startDate] = [{ name: 'item' }]
    })
    setItems(newItems)
    // setTimeout(() => {
    //   for (let i = -15; i < 85; i++) {
    //     const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //     const strTime = timeToString(time);
    //     if (!items[strTime]) {
    //       items[strTime] = [];
    //       const numItems = Math.floor(Math.random() * 3 + 1);
    //       for (let j = 0; j < numItems; j++) {
    //         items[strTime].push({
    //           name: 'Item for ' + strTime + ' #' + j,
    //           height: Math.max(50, Math.floor(Math.random() * 150)),
    //         });
    //       }
    //     }
    //   }
    //   const newItems = {};
    //   Object.keys(items).forEach((key) => {
    //     newItems[key] = items[key];
    //   });
    //   console.log('test',newItems)
    //   setItems(newItems);
    // }, 100);
  };

  const renderItem = (item) => {
    console.log('render',item)
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const calendars = [
    {id: 1, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-01', cal_endDate: '2021-08-01', cal_tag: []},
    {id: 2, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-03', cal_endDate: '2021-08-03', cal_tag: []},
    {id: 3, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-05', cal_endDate: '2021-08-05', cal_tag: []},
    {id: 4, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-07', cal_endDate: '2021-08-07', cal_tag: []},
    {id: 5, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-09', cal_endDate: '2021-08-09', cal_tag: []},
    {id: 6, cal_title: '스쿼트', cal_description: '스쿼트 하는날', cal_startDate:'2021-08-01', cal_endDate: '2021-08-01', cal_tag: []},
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

  useEffect(()=>{
    const markedDates = {};
    calendars.map(cal => {
      markedDates[cal.cal_startDate] = {marked: true} 
      setDateState({
        markedDates
      })
    })
  },[])

  const getSelectDay = date => {
    const markedDates = { ...dateState.markedDates };
    // markedDates[date] = { selected: true }
    console.log('selected',markedDates[date]?.selected)
    if(markedDates[date]?.selected === 'undefined'){
      markedDates[date] = { ...markedDates[date], selected: false }
      setDateState({
        // ...dateState.markedDates,
        markedDates,
        selectedDate: date,
      })
    }
    else{
      markedDates[date] = { ...markedDates[date], selected: true }
      setDateState({
        // ...dateState.markedDates,
        markedDates,
        selectedDate: date,
      })
    }
    // setDateState({
    //   ...dateState.markedDates,
    //   markedDates,
    //   selectedDate: date,
    // })
  }

  return(
    console.log('ttt', dateState.markedDates),
    <View style={{ backgroundColor: '#ffffff', flex: 1, }}>
      <Header mode="plain" title="test" />
      <View style={{ flex: 1,}}>
        <Calendar 
          markedDates={dateState.markedDates}
          onDayPress={(day)=> {
            getSelectDay(day.dateString)
          }}
        />
        {/* <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2021-07-25'}
          renderItem={renderItem}
        /> */}
      </View>
    </View>
  )
}

export default CalendarView