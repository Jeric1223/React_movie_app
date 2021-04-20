import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigaton from './components/Navigation';
import Detail from './routes/Detail';

function App() {
    return (
        <BrowserRouter>
            <Navigaton />
            <Route path="/about" component={About} />
            <Route path="/" exact={true} component={Home} />
            <Route path="/movie/:id" component={Detail} />
        </BrowserRouter>
    );
}

export default App;
