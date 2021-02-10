import "./App.css";
import GoogleSheetsProvider from "react-db-google-sheets";

const App = () => {
  return (
    <GoogleSheetsProvider>
      <div>test</div>
    </GoogleSheetsProvider>
  );
};

export default App;
