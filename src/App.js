import React, { Component } from 'react';
/* changed from Switch to Routes for react-router-dom v6, also changed below in code Lines 15, 16, 17 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes> {/*updated for router-dom v6*/}
          <Route exact path='/' element={<Dashboard />}></Route> {/*updated for router-dom v6*/}
          <Route path='/project/:id' element = {<ProjectDetails />}></Route>
          <Route path='/signin' element = {<SignIn />}></Route>
          <Route path='/signup' element = {<SignUp />}></Route>
          <Route path='/create' element = {<CreateProject />}></Route>
        </Routes> {/*updated for router-dom v6*/}
      </div>
      </BrowserRouter>
    );
  } 
}

export default App;
