import logo from './logo.svg';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {Box, Button, Checkbox, FormControl, MenuItem, Select, TextField, Typography} from '@mui/material';
import LoginComponent from './components/LoginComponent';
import UpperComponent from './components/UpperComponent';
import './App.css';
import { Stack } from '@mui/system';
import Navbar from './components/Navbar';
import DrawerComponent from './components/DrawerComponent';
import ProductsComponent from './components/ProductsComponent';
import Footer from './components/Footer';
import DataGridComponent from './components/DataGridComponent';
import ReduxForm from './components/ReduxForm/ReduxForm';
import dataStore from './components/data/dataStore'
import {Provider} from 'react-redux'
import {useTheme} from '@mui/material/styles'
import {createTheme,colors,ThemeProvider} from '@mui/material'
import { dark } from '@mui/material/styles/createPalette';
import Pet from './components/Pet';
// import { red } from '@mui/material/colors';

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
          <Navbar/>
          <Pet/>
           {/* <UpperComponent /> */}
          {/* <LoginComponent />  */}
          {/* <DrawerComponent /> */}
          {/* <ProductsComponent />
          <DataGridComponent />
          <ReduxForm /> */}
          {/* <Footer/> */}
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
