import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";

export default function App() {
  return (
    <div className='h-screen bg-black p-2 '>
      <div className="h-[10%] flex p-2">
        <Navbar />
      </div>
      <div className="h-[90%]  flex p-2">
         <Slidebar/>
      </div>
    </div>
  )
}