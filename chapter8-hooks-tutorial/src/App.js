import React, { useState } from 'react';
import Average from './Average';
import Counter from './Counter';
// import Average from './Average';
import Info from './info';

const App = () => {
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  return <Info />;
  // return <Counter />;
  // return <Average />;
};

export default App;
