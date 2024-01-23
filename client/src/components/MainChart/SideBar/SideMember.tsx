// import Icon from "../Icon";

import Icon from "../Icon";

const SideMember = () => {
    return (
        <div className="sidemember-container bg-slate-100 w-ful h-20 flex hover:bg-slate-400 items-center px-1">
            <img src="../../../avatar.png" className="w-14 h-14 rounded-full"></img>
            <div className="content w-full h-full border-t-2 border-slate-400 flex flex-col justify-center ml-2">
                <div className="name flex justify-between w-full">
                    <p className="text-md">Grupo</p>
                    <p className="text-sm">08:21</p>
                </div>
                <div className="name flex justify-between">
                    <p className="text-sm text-slate-500">Grupo</p>
                    <div className="flex items-center gap-1">
                        <Icon />
                        <p className="text-sm bg-blue-500 w-4 h-4 text-center align-middle text-white rounded-full">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideMember;