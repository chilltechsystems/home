import "./App.css";
import Map from "./Map";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* content goes here */}
      <div className="flex h-screen justify-center items-center bg-blue-500 p-10">
        <h1 className="text-white font-bold text-5xl">
          Chilltech Cooling Systems
        </h1>
      </div>
      <div className="flex flex-row-reverse h-screen justify-between items-center bg-blue-600 p-10">
        <Map />
      </div>
      <div className="flex h-screen justify-center items-center bg-blue-400 p-10">
        <h1 className="text-white font-bold text-5xl">
          Chilltech Cooling Systems
        </h1>
      </div>
      <div className="flex h-screen justify-center items-center bg-blue-300 p-10">
        <h1 className="text-white font-bold text-5xl">
          Chilltech Cooling Systems
        </h1>
      </div>
      <div className="flex h-screen justify-center items-center bg-blue-200 p-10">
        <h1 className="text-white font-bold text-5xl">
          Chilltech Cooling Systems
        </h1>
      </div>
    </div>
  );
}

export default App;
