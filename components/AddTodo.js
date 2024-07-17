import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

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
      {/* 버튼 눌렸을 때 효과 보여줌 */}
      <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.buttonStyle}>
        <Image source={require('../assets/icons/add_white/add_white.png')} />
      </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    height: 64,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
    marginLeft: 16, // TextInput과 버튼 사이에 간격 추가
  },
});
export default AddTodo;
