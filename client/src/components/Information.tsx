import Contact from "./Contact";

const Information = () => {
  return (
    <div className="flex">
      <div className="flex-col w-full">
        <div className="flex h-20 bg-sky-600 justify-between p-5 items-center">
          <div className="flex items-center">
            <i className="fa-solid fa-arrow-left pt-8 pr-6 text-slate-100"></i>
            <div className="text-lg pt-8 text-slate-50">Recipients</div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-content h-52">
          <div className="flex flex-col h-24 w-full p-2 justify-end items-center bg-white">
            <div className="flex flex-col w-full px-5">
              <label className="text-slate-300 text-sm">List name</label>
              <input placeholder="List 1" className="border-collapse border-b w-full focus:border-collapse focus:outline-none focus:border-b-sky-500" />
            </div>
          </div>
          <div className="flex h-28 bg-white justify-center items-center gap-16">
            <button className="flex"><i className="flex justify-center items-center fa-solid fa-xmark bg-[#ff2e74] rounded-3xl h-10 w-10 text-slate-100 shadow-lg"></i></button>
            <button className="flex"><i className="flex justify-center items-center fa-solid fa-check bg-[#007bfc] rounded-3xl h-10 w-10 text-slate-100 shadow-lg"></i></button>
          </div>
        </div>
        <div className="p-7 bg-zinc-100">
          <label>Recipients List 2 of 256</label>
        </div>
        <div>
          <p className="pl-20 py-6  text-[#009de2]">Edit list...</p>
          <div>
            <Contact name="Adolfo" description="1 common contact" />
            <Contact name="Alejandro" description="Hello I'm using Whatsapp." />
          </div>
          <p className="pl-20 py-2  text-[#009de2]">Edit list...</p>
        </div>
        <div className="bg-zinc-100 h-full"></div>
      </div>
    </div>
  )
}

export default Information;