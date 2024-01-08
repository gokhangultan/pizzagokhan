import { useState } from 'react';
import './App.css';
import Header3 from './layouts/Header'; //default import
import Main from './layouts/Main';
import './layouts/Layout.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [id, setId] = useState(null);

  

  return (
    <>
      
      <div className="content-section">
        

        <Main id={id} />
      </div>
      
    </>
  );
}

export default App;
