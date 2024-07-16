import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import DateHead from './components/DateHeader';

function App() {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaView>
      <View>
        <DateHead date={today} />
        <Text>TodoApp</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
