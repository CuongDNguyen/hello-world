import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Version 2
const myName = "Cuong";
const div = 
<div>
  <p style={ {color: "#f00" }  } >This is paragraph 1</p>
  <p>Welcome {myName} </p>
  <p>2 plus 2 = {2 + 2} </p>
  <ul className="smallList">
    <li>First item</li>
    <li>Second item</li>
  </ul>
  <br />
  <label htmlFor="name">Enter your name </label>
  <input id="name" />
</div>

ReactDOM.render(<App />, document.getElementById('root'));

//Version 1
// const p1 = React.createElement("p", {id : "firstPara"}, "This is paragraph 1.")

// const li1 = React.createElement("li", null, "first item ");
// const li2 = React.createElement('li', null, "second item ");
// const myList = React.createElement('ul', null, [li1, li2])

// const div = React.createElement('div', null, [p1, myList])
// ReactDOM.render(
//     div , document.getElementById("root")
// );

//Spread & Destructuring
// const names = ["Simon", "David", "Sally", "Emma"];

// const moreNames = [...names, "Diane"];

// type CustomerType = { name: string, age: number, email : string};

// const customer1 : CustomerType = { name: "Simon", age: 23, email: "simon@nowhere.com"}

// const { name, age, email } = customer1;

//const myPara = React.createElement("p", null, "Hello World")

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
