import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import AppBar from './components/AppBar';
import Card from './components/Card';
import Container from '@material-ui/core/Container';
import Registrarse from './components/Registrarse';
import Login from './components/Login';
import {AuthProvider} from './components/Auth';
import Home from './components/Home';
import Contacto from './components/Contacto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
// import Contacto from './components/Contacto';

function App() {
    return (
        <AuthProvider>
            <Router>
                <ThemeProvider theme={theme}>
                <div>
                    <AppBar Link={Link}/>
                    <Switch>
                        <PrivateRoute path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/registrarse" component={Registrarse} />
                        <Route path="/card">
                            <Container maxWidth="sm">
                                <Card/>
                            </Container>
                        </Route>
                        <Route path="/contacto" component={Contacto} />
                    </Switch>
                </div>
                
                </ThemeProvider>
            </Router>
        </AuthProvider>
    )
}

// spa - single page app

export default App;