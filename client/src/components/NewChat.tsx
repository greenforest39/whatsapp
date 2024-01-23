import PersonList from "./PersonList";

const NewChat = () => {
	return (
		<div className="flex z-0">
			<div className="flex-col w-full">
                <div className="flex h-20 bg-emerald-600 justify-between p-5 items-center">
                    <div className="flex items-center">
                        <i className="fa-solid fa-arrow-left pt-8 pr-6 text-slate-100"></i>
                        <div className="text-lg pt-8 text-slate-50">Nuevo chat</div>
                    </div>
                </div>
                <div className="p-1">
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <i className="fa-solid fa-arrow-left text-slate-400"></i>
                        </span>
                        <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Busca un nombre o numero" type="text" name="search"/>
                    </label>
                </div>
                <hr />
                <div className="flex px-5 py-3 gap-6">
                  <div>                      
                      <div>
                          <PersonList name="Nuevo grupo" description=""/>                          
                      </div>
                  </div>
                </div>
                <hr />
                <div>
                    <p className="pt-5 pl-5 pb-10 text-emerald-700">CONTACTOS EN WHATSAPP</p>
                </div>
                <div>
                      <div>
                          <PersonList name="Johnny Tarmeno(Tu)" description="Envia mensajes a este mismo numero"/>                          
                      </div>
                      <div>

                      </div>
                      <div>
                        <p className="pl-8">A</p>
                      </div>                    
                    <div>
                        <PersonList name="Abel CHavesta" description=" "/>
                        <PersonList name="Abraham Campo De Marte" description="Deporplaza Campo de Marte"/>
                        <PersonList name="Abraham Campo De Marte" description="https://natacionromero.com/acuaerobicos"/>
                        <PersonList name="Ada" description=" "/>
                        <PersonList name="Adan Ccoyllo Aguilar" description=" "/>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default NewChat;