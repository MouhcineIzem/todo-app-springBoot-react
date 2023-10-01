import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppTodoDetail from "./components/AppTodoDetail.jsx";
import './App.css'
import AppTodo from "./components/AppTodo.jsx";
import {todos} from './db.js';


function App() {

  return (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={AppTodo} />
                <Route path="/todos/:id" component={() => <AppTodoDetail todos={todos}/>} />
            </Switch>
        </div>
    </Router>
  )
}

export default App
