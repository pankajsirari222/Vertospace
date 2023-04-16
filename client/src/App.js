import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
import Alert from './components/Alert'

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <div className="App">

      <BrowserRouter>
      <NoteState>
      <NavBar/>
      <Alert alert={ alert }/>
      <Routes>
      <Route exact path="/" element = { <Home/> } />
      <Route path="/about" element = { <About/> } />
      <Route path="/notes" element = { <Notes showAlert={showAlert}/> } />
      <Route path="/login" element = { <Login showAlert={showAlert}/> } />
      <Route path="/register" element = { <Register showAlert={showAlert}/> } />
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
