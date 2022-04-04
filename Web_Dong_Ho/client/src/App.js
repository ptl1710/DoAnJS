import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
          <a>
            Nhóm Thực Hiện: Tịnh Thất Bồng Lai
            <br></br>
            Email:kenbmt44@gmail.com
          </a>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
