import React from 'react';
import Feed from './components/feeder/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Widget from './components/wedget/Widget';

function App() {
  return (
    <div>
      <Header/>
      <div className="container app_body my-1">
        <Sidebar/>
        <Feed />
        <Widget/>
      </div>
    </div>
  );
}

export default App;
