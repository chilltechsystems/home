import "./App.css";
import Map from "./Map";
import Nav from "./Nav";
import chilltech_video from "./assets/chilltech_video.mp4";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* content goes here */}
      <div className="flex h-screen justify-center items-center bg-blue-500 py-10">
        {/* <h1 className="text-white font-bold text-5xl">
          Chilltech Cooling Systems
        </h1> */}
        <video className="h-full w-full" autoPlay muted loop>
          <source src={chilltech_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col md:flex-row-reverse h-screen justify-between items-center bg-blue-600 p-10">
        <Map />
      </div>
      <div className="flex h-screen justify-center items-center bg-blue-400 p-10">
        <h1 className="text-white font-bold text-5xl">Coming Soon...</h1>
      </div>
      <div className="flex h-screen justify-center items-center bg-blue-300 p-10">
        <h1 className="text-white font-bold text-5xl">Coming Soon...</h1>
      </div>
      <div className="flex h-screen justify-center items-center bg-blue-200 p-10">
        <h1 className="text-white font-bold text-5xl">Coming Soon...</h1>
      </div>
    </div>
  );
}

export default App;
