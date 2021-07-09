import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  // this로 재정의하는게 번거롭게 느껴진다면? => 화살표 함수를 이용.
  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  //   handleChange(e) {
  //     this.setState({
  //       message: e.target.value,
  //     });
  //   }

  //   handleClick() {
  //     alert(this.state.message);
  //     this.setState({
  //       message: '',
  //     });
  //   }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      //   message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
    // alert(this.state.message);
    // this.setState({
    //   message: '',
    // });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
