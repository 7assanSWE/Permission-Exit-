// Components
import RequestExitPage  from './Components/RequestExitPage';
import ExitApprovals from './Components/ExitApprovals'
import Header from './Components/Header';

// Others
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequestExitPage/>}></Route>
          <Route path="/ExitApprovals" element={<ExitApprovals/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
