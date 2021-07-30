import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서 정의.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
