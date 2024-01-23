import Icon from './Icon';
import SideMember from './SideBar/SideMember';

const Sidebar = () => {
    return (
        <div className="sidebar-container bg-slate-200 w-3/12 h-full relative">
            <div className="sidebar-container bg-slate-200 w-full h-16 flex items-center justify-between px-10">
                <Icon />
                <div className='tool-box flex gap-5'>
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                </div>
            </div>
            <div className='flex px-2 h-12 bg-white items-center relative'>
                <div className='absolute left-6 w-fit'><Icon /></div>
                <input className='w-full bg-slate-200 rounded-lg pl-14 h-8 mr-2' placeholder='Search for a chat or start a new one.'></input>
                <Icon />
            </div>
            <div className='flex flex-col -mt-1'>
                <SideMember />
                <SideMember />
            </div>
            <div className="sidemember-option absolute w-full h-14 bottom-0 bg-white flex justify-between px-4 items-center">
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
            </div>
        </div>
    );
}

export default Sidebar;