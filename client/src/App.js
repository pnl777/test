import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/nav/Navigation'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

const App = () => {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/register' component={RegisterPage}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        </Router>
    )
}

export default App
