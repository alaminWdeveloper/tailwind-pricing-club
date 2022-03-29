import "./App.css";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Pricing from "./Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-5xl mt-3">Welcome Tailwind React website</h1>
      <Header></Header>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
