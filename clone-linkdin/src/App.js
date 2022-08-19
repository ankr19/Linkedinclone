import React from 'react';
import Feed from './components/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <div className="container app_body my-1">
        <Sidebar/>
        <Feed />
      </div>
    </div>
  );
}

export default App;
