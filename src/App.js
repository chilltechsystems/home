import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* content goes here */}
      <div className="flex h-screen justify-center items-center bg-blue-600 p-10">
        <h1 className="text-white font-bold text-5xl">
          Chilltech Cooling Systems
        </h1>
      </div>
    </div>
  );
}

export default App;
