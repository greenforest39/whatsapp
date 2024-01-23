
const PersonList = (props: {name: string, description: string}) => {
	return (
		<div className="flex p-3 gap-4">
			<div className="flex items-center">
                <i className="fa-solid fa-circle-user text-5xl text-slate-300"></i>
            </div>
            <div className="flex w-full py-3 border-t-2 items-center">
                <div className="flex flex-col w-full justify-between">
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                </div>               
            </div>
		</div>
	)
}

export default PersonList;