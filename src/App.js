import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TicketsList from './TicketsList';
import Cart from './Cart';
import Form from './Form';

function App() {

  const changeNumEvent = (num) => {
    setNum(num);
    console.log(num);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Bus Tickets</h1>
        <Form />
      </div>
      <div className="row">
        <main className="col-7">
          <TicketsList num={num} />
        </main>
        <aside className="col-5">
          <Cart />
        </aside>
      </div>
    </div>
  );
}
export default App;
