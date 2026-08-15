
import { useState  , useEffect } from 'react';
import Header from './components/Header';
import ConvertCurrancy from './components/ConvertCurrancy';
import Footer from './components/Footer';
function App()
{     
  return(
        <>     
         <Header />     
                  
        <ConvertCurrancy />
        <Footer />
        </>
  );

}
export default App;