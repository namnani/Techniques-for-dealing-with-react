import React, { useReducer, useEffect, useState } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  //   const [state, dispatch] = useReducer(reducer, {
  //     name: '',
  //     nickname: '',
  //   });
  //   const { name, nickname } = state;
  //   const onChange = (e) => {
  //     dispatch(e.target);
  //   };

  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');

  //   useEffect(() => {
  //     console.log('effect');
  //     console.log(name);
  //     return () => {
  //       console.log('cleanup');
  //       console.log(name);
  //     };
  //   }, [nickname]);

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickName = (e) => {
  //     setNickname(e.target.value);
  //   };

  return (
    <div>
      <div>
        {/* <input name="name" value={name} onChange={onChangeName} />
        <input name="nickname" value={nickname} onChange={onChangeNickName} /> */}
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
