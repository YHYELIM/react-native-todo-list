import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function TodoItem({id, text, done, onToggle, onRemove}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>

      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {/* done 값이 true 일 때는 아이콘 보여주고, 그렇지 않을때는 view 반환 */}
      {/* removePlaceholder 이유 ? 아이콘이 보이지 않을 때도 삭제 아이콘이 보일 영역 미리 차지하기 위해서  */}
      {done ? (
        <TouchableOpacity onPress={() => onRemove(id)}>
          <Icon name="delete" size={32} color={'red'} />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});
export default TodoItem;
