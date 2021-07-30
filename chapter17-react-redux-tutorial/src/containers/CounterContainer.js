import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    // <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },

//   //   (dispatch) =>
//   //     bindActionCreators(
//   //       {
//   //         increase,
//   //         decrease,
//   //       },
//   //       dispatch,
//   //     ),

//   //   (dispatch) => ({
//   //     increase: () => dispatch(increase()),
//   //     decrease: () => dispatch(decrease()),
//   //     //   decrease: () => {
//   //     //     return dispatch(decrease());
//   //     //   },
//   //   }),
// )(CounterContainer);
export default CounterContainer;
