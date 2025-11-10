import React, { Component } from 'react';
import './Exercise.css'

class Exercise extends Component {
  render() {
  const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={style_header}>This is H1</h1>
        <p className='para'>This is paragraph</p>
        <a href="#">This is link</a>
        <form>
          <p className='para'>This is form</p>
          <label htmlFor="input">Enter your name</label> <br/>
          <input type="text" id="input" />
          <button>Submit</button>
        </form>
        <img src="/logo192.png" alt="Logo" />
        <p className='para'>This is list:</p>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;