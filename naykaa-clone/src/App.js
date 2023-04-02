import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footers from "./footer/Footers";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footers />
    </div>
  );
}

export default App;
