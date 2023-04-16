import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/login';
import CSE423 from './pages/CSE423';
import PEA from './pages/PEA'
import Upload from './pages/Upload';
import Footer from './components/footer';
import Register from './pages/register';
import FileList from './services/FileList';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/contact';
import NoteState from './context/notes/noteState';
import Notes from './pages/Notes';
import { Alert } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NoteState>
      <NavBar/>
      <Alert message="This is amazing React course" />
      <Routes>
      <Route exact path="/" element = { <Home/> } />
      <Route path="/about" element = { <About/> } />
      <Route path="/notes" element = { <Notes/> } />
      <Route path="/login" element = { <Login/> } />
      <Route path="/register" element = { <Register/> } />
      <Route path="/CSE423" element = { <CSE423/> } />
      <Route path="/PEA" element = { <PEA/> } />
      <Route path="/Upload" element = { <Upload/> } />
      <Route path="/Download" element = { <FileList/> } />
      <Route path="/contact" element = { <Contact/> } />
      </Routes>
      <Footer/>
      </NoteState>  
      </BrowserRouter>
    </div>
  );
}

export default App;
