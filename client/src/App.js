import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/login';
import CSE427 from './pages/CSE427';
import PEA from './pages/PEA'
import Upload from './pages/Upload';
import Footer from './components/footer';
import Register from './pages/register';
import FileList from './services/FileList';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <CSE427/> */}
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/login" element = { <Login/> } />
      <Route path="/CSE427" element = { <CSE427/> } />
      <Route path="/PEA" element = { <PEA/> } />
      <Route path="/Upload" element = { <Upload/> } />
      <Route path="/Download" element = { <FileList/> } />
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
