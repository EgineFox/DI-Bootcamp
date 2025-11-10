import './App.css';
import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;
  const user = {
     firstName: 'Bob',
     lastName: 'Dylan',
     favAnimals : ['Horse','Turtle','Elephant','Monkey']
               };
  return (
        <div>
        <p id="exercise1.1"> Hello World!</p>
        {myelement}
        <p id="exercise1.2-3">
          React is {sum} times better with JSX.
        </p>
        <h3>First name of useer : {user.firstName} </h3>
        <h3>Last name of useer : {user.lastName} </h3>
        <UserFavoriteAnimals favAnimals = {user.favAnimals}/>
        <Exercise/>
        </div>
  );
}

export default App;
