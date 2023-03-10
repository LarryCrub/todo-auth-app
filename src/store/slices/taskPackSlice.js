import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = [];
const taskSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    getData(state, action) {
      return action.payload;
    },
    addPack(state, action) {
      const UniqeId = uuid();
      state.push({
        id: UniqeId,
        title: action.payload.title,
        todos: [],
      });
    },
    removePack(state, action) {
      return state.filter((pack) => pack.id !== action.payload.id);
    },
    //TodoActions
    addTodo(state, action) {
      const packIndex = state.findIndex(
        (pack) => pack.id === action.payload.packId,
      );
      if (packIndex > -1) {
        const UniqeId = uuid();
        state[packIndex].todos.unshift({
          id: UniqeId,
          text: action.payload.text,
          isCompleted: false,
        });
      }
    },
    removeTodo(state, action) {
      const packIndex = state.findIndex(
        (pack) => pack.id === action.payload.packId,
      );
      if (packIndex > -1) {
        state[packIndex].todos = state[packIndex].todos.filter(
          (todo) => todo.id !== action.payload.id,
        );
      }
    },
    toggleTodo(state, action) {
      const packIndex = state.findIndex(
        (pack) => pack.id === action.payload.packId,
      );
      if (packIndex > -1) {
        const toggledTodo = state[packIndex].todos.find(
          (todo) => todo.id === action.payload.id,
        );
        toggledTodo.isCompleted = !toggledTodo.isCompleted;
      }
    },
  },
});

export const { getData, addPack, removePack, addTodo, removeTodo, toggleTodo } =
  taskSlice.actions;
export default taskSlice.reducer;
