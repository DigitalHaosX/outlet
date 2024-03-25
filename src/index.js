import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonsList from "./components/PersonsList";
import PersonForm from "./components/PersonForm";
import BaseData from "./components/BaseData";
import Address from "./components/Address";
import Studies from "./components/Studies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="" element={<App />}>
      <Route exact path="/addresses" element={<Addresses />}/>
        <Route exact path="/persons" element={<PersonsMain />}>
          <Route path=":id" element={<PersonForm />}>
            <Route path="base-data" element={<BaseData />} />
            <Route path="address" element={<Address />} />
            <Route path="studies" element={<Studies />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </Router>
);
