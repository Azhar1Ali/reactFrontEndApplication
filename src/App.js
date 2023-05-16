import Data from './component/data'
import Login from './component/loginComponent'
import Post from './services/post'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App=()=> {
  return (
    <>

    <BrowserRouter basename='/'>
      <Routes>
      <Route path='/' element={<Post/>}/>
         <Route path='/login' element={<Login/>}/>
        <Route path='/details' element={<Data/>}/>


      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
