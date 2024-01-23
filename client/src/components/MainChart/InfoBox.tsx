import Icon from "./Icon";

const InfoBox = () => {
    return (
        <div className="infobox-container w-500 h-full bg-slate-200">
            <div className="tool bg-slate-300 w-full h-16 flex items-center px-10">
                <Icon />
                <p className="ml-10">Info. del grupo</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white h-72 mb-2 gap-2">
                <img src="../../../avatar.png" className="w-40 h-40 rounded-full"></img>
                <div className="flex">
                    <p className="text-xl mr-2">Pichanqa Criolla </p>
                    <Icon />
                </div>
                <p className="text-slate-500">Grupo * 23 participantes</p>
            </div>
            <div className="flex flex-col items-center justify-between py-5 bg-white h-72 mb-2">
                <div className="flex items-center">
                    <p className="mx-2">
                        Link group de chat de politica<br />
                        <a href="https://chat.whatsapp.com/JzSxiw3TTX5" className="text-blue-600 underline">https://chat.whatsapp.com/JzSxiw3TTX5</a>
                    </p>
                    <Icon />
                </div>
                <div className="flex-col w-full ">
                    <div className="flex justify-between mx-2">
                        <p className="text-slate-500">Archivos, enlaces y documentos</p>
                        <div className="flex">
                            <p>29</p><Icon />
                        </div>
                    </div>
                    <div className="flex justify-center h-28 gap-3 mt-2 flex-wrap overflow-hidden">
                        <img src="../../../avatar.png" className="w-24 h-24 border-slate-600"></img>
                        <img src="../../../avatar.png" className="w-24 h-24"></img>
                        <img src="../../../avatar.png" className="w-24 h-24"></img>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white justify-evenly h-56 mb-3">
                <div className="flex justify-between px-5">
                    <div className="flex gap-3">
                        <Icon />
                        <p>Mensajes destacados</p>
                    </div>
                    <Icon />
                </div>
                <div className="flex justify-between px-5">
                    <div className="flex gap-3">
                        <Icon />
                        <div>
                            <p>Silenciado</p>
                            <p>Siempre</p>
                        </div>
                    </div>
                    <Icon />
                </div>
                <div className="flex justify-between px-5 gap-3">
                    <Icon />
                    <div>
                        <p>Cifrado</p>
                        <p>Los mensajes estan cifrados de extremo a extremo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoBox;