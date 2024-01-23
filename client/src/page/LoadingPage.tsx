import Loading from "../components/Loading"

const LoadingPage = () => {
	return (
		<div className="flex flex-col justify-center items-center bg-slate-100 px-3 h-screen relative">
			<div className="h-[43%] w-full bg-primary absolute top-0"></div>
			<div className="card sm:w-[450px] text-primary-foreground shadow-xl relative items-center">
				<div className="text-white z-10 flex items-center gap-2 text-3xl absolute -top-96">
					<img src="/logo.png" width="50" height="50" />
					<p>ChatApp</p>
				</div>
			</div>
      <div className="flex items-center justify-center w-4/5 h-4/5 absolute bottom-5 bg-white shadow-[-10px_-10px_10px_10px_rgba(0,0,0,0.2)]">
			  	{/* <Loading description="Logging user, please wait..." /> */}
			  	<Loading description="Registering user, please wait..." />
      </div>
		</div>
	)
}

export default LoadingPage;