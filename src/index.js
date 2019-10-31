import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const books=[
{ name:"ABC", author:"Vova Petrov", year:"2018"},
{ name:"Cool Book", author:"Stepan Ivanov", year:"2000"},
{ name:"First Book", author:"Ivan Ivanov", year:"2010"},
{ name:"Black Book", author:"Petro Petrov", year:"1986"},
]



ReactDOM.render(<App books={books} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

