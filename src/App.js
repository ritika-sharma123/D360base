import React from 'react';
import Header from './components/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LoginPage from './pages/Login';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  container:{
    height: '100vh',
  }
})

const App = () =>{
  const classes = useStyles();

  return(
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route default path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App;