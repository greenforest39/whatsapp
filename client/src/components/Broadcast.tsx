import { useState } from "react";
import List from "./List";

const Broadcast = () => {
  const [lists, setList] = useState([
    {name: "List 1", Recipients: {name: "a", description: "b"}}
  ])
  return (
    <div className="flex">
      <div className="flex-col w-full">
        <div className="flex h-20 bg-sky-600 justify-between p-5 items-center">
          <div className="flex items-center">
            <i className="fa-solid fa-arrow-left pt-8 pr-6 text-slate-100"></i>
            <div className="text-lg pt-8 text-slate-50">Broadcast lists</div>
          </div>
        </div>
        
        {/* {<div className="flex flex-col h-screen">
          {lists.map(list => (
              <List name={list.name} count={Object.keys(list.Recipients).length} />
          ))}
        </div>} */}
        
        
          <div className="flex flex-col h-screen items-center justify-center">
            <i className="fa-solid fa-tower-broadcast text-center pt-16 text-slate-500 bg-stone-200 w-32 h-32 rounded-full fa-2xl"></i>
            <p className="w-72 pt-10 text-center text-slate-500"> You can make a broadcast lists to communicate with several contacts at the same time</p>
            <button className="btn bg-sky-600 rounded-3xl h-4 w-32 text-slate-100 mt-24">New list</button>
          </div>
        
      </div>
    </div>
  )
}

export default Broadcast;