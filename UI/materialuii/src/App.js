import React, { lazy } from 'react';
import LoginComponent from './components/LoginComponent/LoginComponent';
import UpperComponent from './components/UpperComponent/UpperComponent';
import Navbar from './components/Navbar/Navbar';
import DrawerComponent from './components/DataGridComponent/DrawerComponent';
import ProductsComponent from './components/ProductsComponent/ProductsComponent';
import Footer from './components/Footer/Footer';
import DataGridComponent from './components/DataGridComponent/DataGridComponent';
import ReduxForm from './components/ReduxForm/ReduxForm';
import dataStore from './components/data/dataStore'
import {Provider} from 'react-redux'
import {createTheme,colors,ThemeProvider} from '@mui/material'
import { ToastContainer } from 'react-toastify';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyRoutes from './routes';

const darkTheme = createTheme({
  palette:{
    mode : 'dark',
  }
})

const setTheme = createTheme({
  palette: {
    primary:{
      main: colors.blue[500]
    },
    secondary :{
      main: colors.purple[500]
    },
    // error :{

    // },
    // warning:{

    // },
    // info: {

    // },
    // success:{

    // }
  }
})

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={setTheme}>
      <Provider store={dataStore}>
        <div className="App">
          {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                style={{ width: "45px", backgroundColor: 'green' }}
          /> */}
          <Navbar/>
          <MyRoutes />
          <Footer/>
        </div>
      </Provider>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
