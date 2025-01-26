import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CashRegister from './components/CashRegister';
import Login from './components/Login';
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import the CSS file for your app

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Switch>
                    <Route path="/login">
                        <Login setLoggedIn={/* your setLoggedIn function */} setUserName={/* your setUserName function */} />
                    </Route>
                    <Route path="/">
                        <CashRegister userName={/* your userName */} />
                    </Route>
                </Switch>
                <Footer /> {/* Include the Footer component */}
            </div>
        </Router>
    );
};

export default App;
