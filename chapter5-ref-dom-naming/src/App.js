import ScrollBox from './ScrollBox';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox2 = ref)} />;
        <button onClick={() => this.scrollBox2.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

// const App = () => {
//   // return <ValidationSample />;
//   return (
//     <div>
//       <ScrollBox ref={(ref) => (this.scrollBox = ref)} />;
//       <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
//     </div>
//   );
// };

export default App;
