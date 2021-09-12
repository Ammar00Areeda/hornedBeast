import React from 'react';

import Main from './component/main';
import Footer from './component/footer';
import Header from './component/Header';




class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
       <Footer/>
      </div>
    )


  }
}


export default App;

