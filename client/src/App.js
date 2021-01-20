import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './style.css';

// Import Components
import Footer from './components/Footer';

// Import Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

class App extends Component {

    render() {
        return (
            <div>
                {/* Routing */}
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/' component={Landing} />
                </Switch>
                {/* Footer */}
                <Footer></Footer>
            </div>
        )
    }
}

export default App;