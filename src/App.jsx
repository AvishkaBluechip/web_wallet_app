import Chart from "./Components/Chart";
import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";

export default function App() {
  return (
    <div className='h-screen p-2 bg-black '>
      <div className="h-[10%] flex p-2">
        <Navbar />
      </div>
      <div className="h-[90%]  flex p-2">
        <Slidebar />
        <Chart />
      </div>
    </div>
  )
}