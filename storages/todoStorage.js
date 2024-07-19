import AsyncStorage from '@react-native-async-storage/async-storage';
// 추가로 데이터 불러오거나 저장할 때 사용하는 key 값 따로 상단에 상수로 선언
// 추후 손쉽게 바꾸기 가능
const key = 'todos';

// todoStorage 객체 만듬
// 겍체 내부에 get , set 메서드 만듬

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        //저장된 데이터가 없으면 사용하지 않음
        throw new Error('No saved todos');
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to load todos');
    }
  },
};
export default todoStorage;
