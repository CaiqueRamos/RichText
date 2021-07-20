import React from 'react';
import { useState } from 'react';
import './App.css';
import RichText from "./components/RichText.js"

function App(props) {

    return (
        <div className="app--body">
            <RichText  />
        </div>
    )
}

export default App;
