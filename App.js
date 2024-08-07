import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import DateHead from './components/DateHeader';
import AddTodo from './components/AddTodo';
import Empty from './components/\bEmpty';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TodoList from './components/\bTodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todoStorage from './storages/todoStorage';

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

  // useEffect 이용한 todos 불러오기
  // 처음 렌더링 될 때 실행

  // saveStorage 추상화 시킴
  // 데이터를 불러오고 나서 그 결과물을 setTodos의 함수 인자로 넣어 호출
  useEffect(() => {
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);

  // useEffect
  // 특정 상태가 바뀔 때마다 특정 함수 호출
  // [todos] : 의존성 배열, todos라는 상태 구독하는 중임을 알수있음
  // 첫 번째 인자(함수): 구독하고 있는 값이 바뀌었을 때 호출하고 싶은 함수 넣기
  // 두 번째 인자(의존성 배열) : 구독하고 있는 값을 배열 안에 넣음
  // [todos] : todos 변경될 때마다 useEffect 첫번째 인자로 전달한 함수 실행
  // useEffect 등록 함수 : 두 번째 인자의 배열 안에 넣은 값이 호출 , 컴포넌트 최초 렌더링 될 때 호출

  //useEffect 이용한 저장
  // useEffect함수 내부에서 AsyncStorage - setItem메서드 사용
  // async 내부에 선언 : useEffect

  // saveStorage 추상화 시킴
  useEffect(() => {
    todoStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      // 새로 등록할 항목의 id 구함
      // 등록된 항목 중에서 가장 큰 id를 구하, 그 값에 1을 더함
      // 만약 리스트가 비어있으면 1을 id로 사용
      // todos 배열이 비어 있지 않으면, todos 배열에서 id의 최대값을 찾아 +1을 한다.
      todos.length > 0 ? Math.max(...todos.map(todos => todos.id)) + 1 : 1;
    const todo = {
      id: nextId,
      //text: text 같은 코드
      // 파라미터로 받은 text를 그대로 쓰겠다는 의미
      text,
      done: false,
    };
    //todos에 todo 배열 집어넣음
    setTodos(todos.concat(todo));
  };

  // todo.id 값이 함수의 파라미터로 받아온 id 값과 일치하면 done 값 반전
  // 그렇지 않으면 기존 객체 그대로 유지
  const onToggle = id => {
    const nextTodo = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodo);
  };

  //항목 삭제 함수
  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <View style={styles.container}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todoing={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
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
