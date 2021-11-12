import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MangeOrders from './Pages/Dashboard/MangeOrders/MangeOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
               <Login></Login>
            </Route> 
            <Route exact path="/register">
                <Register></Register>
            </Route>
            <PrivateRoute path='/product/:Id'>
                <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
                <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
       </Router>
      </AuthProvider>
       
    </div>
  );
}

export default App;
