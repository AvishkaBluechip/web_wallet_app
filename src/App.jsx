import Chart from "./Components/Chart";
import Money from "./Components/Money";
import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";

export default function App() {
  return (
    <div className='h-screen p-2 bg-black '>
      <div className="h-[10%] flex p-2">
        <Navbar />
      </div>
      <div className="h-[90%]  flex ">
        <Slidebar />
        <Chart />
        <Money />
      </div>
    </div>
  )
}