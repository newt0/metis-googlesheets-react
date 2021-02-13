import React from "react";
import SingleSheet from "./SingleSheet";
import "./App.css";
import MultipleSheets from "./MultipleSheets";
import GoogleSheetsProvider from "react-db-google-sheets";

const App = () => (
  <GoogleSheetsProvider>
    <div className="container">
      <h1>Metis Examples</h1>
      <div className="section">
        <h2>Single Sheet Example</h2>
        <SingleSheet />
      </div>
      <div className="section">
        <h2>Multiple Sheets Example</h2>
        <MultipleSheets />
      </div>
    </div>
  </GoogleSheetsProvider>
);

export default App;
