import React from 'react';
import LoginComponent from './components/LoginComponent';
import UpperComponent from './components/UpperComponent';
import Navbar from './components/Navbar';
import DrawerComponent from './components/DrawerComponent';
import ProductsComponent from './components/ProductsComponent';
import Footer from './components/Footer';
import DataGridComponent from './components/DataGridComponent';
import ReduxForm from './components/ReduxForm/ReduxForm';
import dataStore from './components/data/dataStore'
import {Provider} from 'react-redux'
import {createTheme,colors,ThemeProvider} from '@mui/material'
import { ToastContainer } from 'react-toastify';
import './App.css';

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
    <ThemeProvider theme={setTheme}>
      <Provider store={dataStore}>
        <div className="App">
          <ToastContainer
                position="top-right"
                autoClose={3000}
                style={{ width: "45px", backgroundColor: 'green' }}
          />
          <Navbar/>
          <UpperComponent />
          <LoginComponent /> 
          <DrawerComponent />
          <ProductsComponent />
          <DataGridComponent />
          <ReduxForm />
          <Footer/>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
