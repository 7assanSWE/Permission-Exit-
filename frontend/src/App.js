// Components
import ExitRequestsPage  from './Pages/ExitRequests';
import ExitApprovals from './Pages/ExitApprovals'
import Header from './Components/Header';

// Others
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div>
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<ExitRequestsPage/>}></Route>
          <Route path="/ExitApprovals" element={<ExitApprovals/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
