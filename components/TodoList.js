import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './\bTodoItem';
function TodoList({todoing, onToggle}) {
  //console.log('222', todoing);
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      // FlatList에 렌더링할 todos 배열 전달
      data={todoing}
      // 여기 데이터 가지고
      // 아이템 렌더링 방법 정의
      // item : todos 배열의 각 요소
      // 각 아이템의 text 화면에 표시
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});
export default TodoList;
