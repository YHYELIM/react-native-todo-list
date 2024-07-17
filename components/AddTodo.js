import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

// onInsert 함수 호출
function AddTodo({onInsert}) {
  const [text, setText] = useState('');
  const onPress = () => {
    // onInsert(text) 함수 호출
    onInsert(text);
    console.log('버튼 눌리면 : ', text);
    //입력필드 초기화
    //if> text -> 입력필드가 초기화 되지 않고 현재 text 그대로 남아 있음
    setText('');
    console.log('버튼 눌리면 : ', setText);
    Keyboard.dismiss(); // 버튼을 누르면 (onPress) 키보듣 닫힘
  };
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요."
        style={styles.input}
        // TextInput에서 보여줘야 할 값
        // 현재 입력하고 있는 텍스트를 상태로 관리
        value={text}
        // 시용자가 내용을 수정할 때마다 호출되는 콜백 함수
        // Text를 입력할 때마다 setText 호출
        // 호출될 때는 현재 TextInput 내용을 인자로 넣어서 호출
        onChangeText={setText}
        //Enter를 눌렀을때 호출되는 함수
        onSubmitEditing={onPress}
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
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
