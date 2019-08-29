import React from 'react';
import './TodoApp.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoHeader from './TodoHeader';
import TodoNavigation from './TodoNavigation';
import TodoPage from './TodoPage';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import EditForm from './EditForm';
function TodoApp() {
    return (
        <BrowserRouter>
            <div className="TodoApp">
                <TodoPage>
                    <TodoHeader/>
                    <TodoNavigation />
                    <Switch>
                        <Route exact path="/" component={TodoList}/>
                        <Route exact path="/work" render={() => <TodoList category="work"/>}/>
                        <Route exact path="/private" render={() => <TodoList category="private"/>}/>
                        <Route exact path="/add" component={TodoForm}/>
                        <Route exact path="/todos/:id" render={({match}) => <EditForm id={match.params.id}/>}/>
                    </Switch>
                </TodoPage>
            </div>
        </BrowserRouter>
    );
}

export default TodoApp;
