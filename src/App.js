
import './App.css';


import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom';

import HomePage from './component/HomePage';
import Project from './component/Project';
import Work from './component/Work';






function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>

      <Route path='/photo' element={<Project/>}></Route>

      <Route path='/work' element={<Work/>}/>
    </Routes>
    </BrowserRouter>

  
    
  );
}

export default App;
