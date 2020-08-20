import React, { useState } from 'react';
import Footer from './components/ui/footer'
import Header from './components/ui/Header'
import {ThemeProvider} from '@material-ui/styles'
import theme from './components/ui/theme' 
import {BrowserRouter,Route,Switch} from 'react-router-dom' 
import './App.css';
import LandingPage from './components/services'

function App() {
    const [value ,setValue]=useState(0)
  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}>
     <Header value={value} setValue={setValue}  />
     <Switch>
     <Route exact path="/" component={()=><div style={{height:"350px"}}>Home</div>} /> 
     <Route exact path="/services" component={()=><div>services</div>} /> 
     <Route exact path="/custom-software" component={LandingPage} /> 
     <Route exact path="/mobile-apps" component={()=><div>mobile apps</div>} /> 
     <Route exact path="/websites" component={()=><div>websites</div>} /> 
     <Route exact path="/revolution" component={()=><div>Revolution</div>} /> 
     <Route exact path="/about-us" component={()=><div>about-us</div>} /> 
     <Route exact path="/contact-us" component={()=><div>contact-us</div>} /> 
     <Route exact path="/estimate" component={()=><div>Estimate</div>} /> 
     </Switch> 
    <Footer value={value} setValue={setValue} />

     </ThemeProvider>
     </BrowserRouter>
  );
}

export default App;
