import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import DateHead from './components/DateHeader';
import AddTodo from './components/AddTodo';
import Empty from './components/\bEmpty';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <View style={styles.container}>
          <DateHead date={today} />
          <Empty />
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
