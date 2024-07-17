import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function DateHead({date}) {
  // 받은 데이터값 추출
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate(); // getDate : 날짜 반환 , getDay : 요일 반환
  const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formatted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});
export default DateHead;
