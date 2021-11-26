import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/create/Create";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";
import GetAll from "./components/getAll/GetAll";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/create"
          element={
            <Create
              defaultFirstName="Vinit"
              defaultLastName="Pandey"
              defaultEmail="pandeyvinit2018@gmail.com"
              defaultMobileNumber="9721417574"
              defaultDOB="2002-01-20"
              defaultGender="Male"
              defaultDomain="Intern"
              defaultAddress="Ram Mandir Lane"
              defaultState="Uttar Pradesh"
              defaultCity="Lucknow"
            />
          }
        />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/getAll" element={<GetAll />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
