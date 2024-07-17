import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        // TextInput에서 보여줘야 할 값
        value={text}
        // 시용자가 내용을 수정할 때마다 호출되는 콜백 함수
        // Text를 입력할 때마다 setText 호출
        // 호출될 때는 현재 TextInput 내용을 인자로 넣어서 호출
        onChangeText={setText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    height: 64,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
});
export default AddTodo;
