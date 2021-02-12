import React from "react";
import SingleSheet from "./SingleSheet";
import "./App.css";

import GoogleSheetsProvider from "react-db-google-sheets";

const App = () => (
  <GoogleSheetsProvider>
    <div className="container">
      <h1>Metis Examples</h1>
      <div className="section">
        <h2>Single Sheet Example</h2>
        <SingleSheet />
      </div>
    </div>
  </GoogleSheetsProvider>
);

export default App;
