import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import goalsReducer from '../features/goals/goalSlicer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    goals: goalsReducer
  },
});
