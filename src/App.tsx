import React from 'react';
import Header from 'components/Header/Header.component';
import Pages from 'pages/Pages';
import Footer from 'components/Footer/Footer.component';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {




  return (
    <div >

      <Router>

        <Header />

        <Pages />

        <Footer />

      </Router>



    </div>
  );
}

export default App;
