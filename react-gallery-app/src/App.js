import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Components/Home';
import NoPhoto from './Components/NoPhoto';



const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/football" render={ () => <Home />}/> */}
        {/*<Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name" component={Featured}/>
        <Route path="/courses" component={Courses}/>*/}
      <Route component={NoPhoto}/> 
      </Switch>
    </div>
  </BrowserRouter>
  
);

export default App;
