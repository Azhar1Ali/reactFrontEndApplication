import Data from './component/data'
import Login from './component/loginComponent'
import Post from './services/post'
import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom';

const USER_TYPES = {
  PUBLIC: "Public Uer",
  NORMAL_UER: "Normal user",
  ADMIN_USER: "Admin User"
};

const CURRENT_USER_TYPE = USER_TYPES.NORMAL_UER;

const App=()=> {
  return (
    <>
      <Routes>
      <Route path='/' element={<Post/>}/>
         <Route path='/login' element={<PublicElement><Login/></PublicElement>}/>
        <Route path='/details' element={<Data/>}/>
      </Routes>
    </>
  );
}



function PublicElement ({children}){

  if (CURRENT_USER_TYPE===USER_TYPES.NORMAL_UER){
    return<>
    
  {children}
  </>;
}else{
  return<>
     <Navigate to={"/"}/>;
  </>

}
  
}

export default App;

