import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import DateHead from './components/DateHeader';
import AddTodo from './components/AddTodo';
import Empty from './components/\bEmpty';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TodoList from './components/\bTodoList';

function App() {
  const today = new Date();
  // todos 항목 선언
  // id : 각 항목 고유 id 값
  // text : 화면에서 보여줄 text 값
  // done : 할일의 완료 여부 값
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <View style={styles.container}>
          <DateHead date={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todoing={todos} />}
          <AddTodo />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
