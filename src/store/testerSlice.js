import { createSlice } from "@reduxjs/toolkit";

const testerSlice = createSlice({
  name: "tester",
  initialState: {
    todos: [],
  },
  reducers: {
    addTest(state, action) {
      state.todos.push(action.payload);
    },
    addSubQuation(state, action) {
      const newFind = state.todos.find(
        (el) => el.id === action.payload.todosId
      );
      newFind.questionTwo.push(action.payload);
    },
    addSaveVariant(state, { payload }) {
      const newTodosId = state.todos.find(
        (todo) => todo.id === payload.todosId
      );
      const newQuationId = newTodosId.questionTwo.find(
        (item) => item.id === payload.quationId
      );

      newQuationId.variants.push(payload);
    },
    clearTodos(state, { payload }) {
      state.todos = state.todos.filter((el) => el.id !== payload);
    },
    deleteVariants(state, action) {
      const newTodosId = state.todos.find(
        (el) => el.id === action.payload.todosId
      );
      const newQuationId = newTodosId.questionTwo.find(
        (el) => el.id === action.payload.quationId
      );
      newQuationId.variants = newQuationId.variants.filter(
        (el) => el.id !== action.payload.elId
      );
    },
    saveVariants(state, action) {
      const { id, todosId, quationId, editValue } = action.payload;
      const test = state.todos.find((todo) => todo.id === todosId);
      const question = test.questionTwo.find(
        (question) => question.id === quationId
      );
      const variant = question.variants.find((variant) => variant.id === id);
      variant.variantValue = editValue;
    },
    deleteQuestion(state, action) {
      const newTodosId = state.todos.find(
        (el) => el.id === action.payload.todosId
      );
      newTodosId.questionTwo = newTodosId.questionTwo.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
});

export const {
  addTest,
  addSubQuation,
  addSaveVariant,
  clearTodos,
  deleteVariants,
  saveVariants,
  deleteQuestion,
} = testerSlice.actions;

export default testerSlice;
