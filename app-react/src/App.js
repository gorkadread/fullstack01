
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TransactionElement from "./TransactionElement";
import TransactionHistory from "./TransactionHistory";


function App() {

  return (
    <div className="bank">
      <header className="bank-header">
        <p>The Don's Bank</p>
      </header>
      <div className="flex-parent">
        <div className="flex-child bank-left-side"><TransactionElement /></div>
        <div className="flex-child bank-right-side"><TransactionHistory /></div>
      </div>
    </div>
  );
}

export default App;
