import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 초기 상태 정의.
const initialState = {
  number: 0,
};

// 리듀서 함수 정의.
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
