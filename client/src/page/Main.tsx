import MainBox from "../components/MainChart/MainBox";
import Sidebar from "../components/MainChart/Sidebar";

const Main = () => {
    console.log("MAIN");
	return (
        <div className="main-chart-container w-screen h-screen bg-slate-500 flex">
            <Sidebar />
            <MainBox />
        </div>
    );
}

export default Main;