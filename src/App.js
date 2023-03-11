import React from 'react';
import './App.css';
import FrontPage from './MyComponents/FrontPage'
import News1 from './MyComponents/News1'
import News2 from './MyComponents/News2'
import News3 from './MyComponents/News3'
import News4 from './MyComponents/News4'
import News5 from './MyComponents/News5'
import Home from './MyComponents/Home'
import About from './MyComponents/About';
import Contacts from './MyComponents/Contacts'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
     
     <Routes>
     <Route path='/' element={<FrontPage />}  />
     <Route path='/worldwide' element={<Home />}  />
     <Route path='/about' element={<About />}  />
     <Route path='/contacts' element={<Contacts />}  />
     <Route path='/news1' element={<News1 />}  />
     <Route path='/news2' element={<News2 />}  />
     <Route path='/news3' element={<News3 />}  />
     <Route path='/news4' element={<News4 />}  />
     <Route path='/news5' element={<News5 />}  />
     </Routes>

  );
}

export default App;
