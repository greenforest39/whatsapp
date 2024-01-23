import Icon from "./Icon";
import InfoBox from "./InfoBox";

const MainBox = () => {
    return (
        <div className="mainbox-container bg-blue-100 w-9/12 h-full flex">
            <div className="message-box w-full h-full bg-slate-400 relative">
                <div className="tool bg-slate-200 border-l-[1px] border-slate-300 w-full h-16 flex items-center justify-between px-2">
                    <div className="flex gap-2">
                    <img src="../../../avatar.png" className="w-14 h-14 rounded-full"></img>
                        <p className="name flex items-center">Pitchange 2021</p>
                    </div>
                    <div className='tool-box flex gap-5 mr-3'>
                        <Icon />
                        <Icon />
                    </div>
                </div>
                <div className="sidemember-option absolute w-full h-14 bottom-0 bg-slate-100 flex justify-between px-4 gap-4 items-center">
                    <Icon />
                    <Icon />
                    <input className='w-full rounded-lg h-8 pl-4' placeholder="Write message"></input>
                    <Icon />
                </div>
            </div>
            <InfoBox />
        </div>
    );
}

export default MainBox;