import './App.css';
import React from 'react';
import ContentContainer from './components/Content/ContentContainer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContentContainer/>
    </div>
  );
}

export default App;
