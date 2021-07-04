import "./App.css";
import Map from "./Map";
import Nav from "./Nav";
import About from "./About";
import Services from "./Services";

function App() {
  return (
    <div className="bg-blue-500">
      <Nav />
      {/* content goes here */}
      <div className="flex h-screen justify-center items-center py-10">
        <About />
      </div>
      <div className="flex flex-col md:flex-row-reverse h-screen justify-between items-center p-10">
        <Map />
      </div>
      <div className="flex h-screen justify-center items-center p-10">
        <Services />
      </div>
      <div className="flex h-screen justify-center items-center p-10">
        <h1 className="text-white font-bold text-5xl">Coming Soon...</h1>
      </div>
      <div className="flex h-screen justify-center items-center p-10">
        <h1 className="text-white font-bold text-5xl">Coming Soon...</h1>
      </div>
    </div>
  );
}

export default App;
