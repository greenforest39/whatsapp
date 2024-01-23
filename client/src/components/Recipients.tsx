import Contact from "./Contact";

const Recipients = () => {
	return (
		<div className="flex z-0">
			<div className="flex-col w-full">
                <div className="flex h-20 bg-sky-600 justify-between p-5 items-center">
                    <div className="flex items-center">
                        <i className="fa-solid fa-arrow-left pt-8 pr-6 text-slate-100"></i>
                        <div className="text-lg pt-8 text-slate-50">Recipients</div>
                    </div>
                </div>
                <div className="p-1">
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
                        </span>
                        <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search contacts" type="text" name="search"/>
                    </label>
                </div>
                <hr />
                <div className="flex px-5 py-3 gap-6">
                    <div className="flex items-center flex-col relative w-16">
                        <i className="fa-solid fa-circle-user text-5xl text-slate-300"></i>
                        <button className="flex absolute top-0 left-10 bg-slate-500 rounded-full h-4 w-4 items-center justify-center"><i className="fa-solid fa-xmark text-sm text-slate-100"></i></button>
                        <p className="text-slate-500 text-center">Adolf</p>
                    </div>
                    <div className="flex flex-col relative items-center w-16">
                        <i className="fa-solid fa-circle-user text-5xl text-slate-300"></i>
                        <button className="flex absolute top-0 left-10 bg-slate-500 rounded-full h-4 w-4 items-center justify-center"><i className="fa-solid fa-xmark text-sm text-slate-100"></i></button>
                        <p className="text-slate-500 text-center">Alejandro</p>
                    </div>
                </div>
                <hr />
                <div>
                    <p className="pt-5 pl-5 pb-10">CONTACTS</p>
                </div>
                <div>
                    <p className="pl-8">A</p>
                    <div>
                        <Contact name="Adolfo" description="1 common contact"/>
                        <Contact name="Alejandro" description="Hello I'm using Whatsapp."/>
                    </div>
                </div>
                <div>
                    <p className="pl-8">B</p>
                    <div>
                        <Contact name="Beatriz" description=""/>
                        <Contact name="Briand" description="💪"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col absolute bottom-0 w-full justify-content z-10 drop-shadow-2xl">
                {/* {<><div className="flex flex-col h-20 w-full p-2 justify-center items-center bg-white">
                    <div className="flex flex-col w-80">
                        <label className="text-slate-300 text-sm">List name</label>
                        <input placeholder="List 1" className="border-collapse border-b w-full focus:border-collapse focus:outline-none focus:border-b-sky-500" />
                    </div>

                </div>
                <div className="flex h-32 bg-sky-600 justify-center items-center">
                    <button className="flex"><i className="flex justify-center items-center fa-solid fa-arrow-right bg-sky-500 rounded-3xl h-10 w-10 text-slate-100 shadow-lg"></i></button>
                </div></>} */}
                {<div className="flex h-20 bg-sky-600 justify-center items-center">
                    <button className="flex"><i className="flex justify-center items-center fa-solid fa-check bg-sky-500 rounded-3xl h-10 w-10 text-slate-100 shadow-lg"></i></button>
                </div>}
            </div>
		</div>
	)
}

export default Recipients;